import { typeset, waitMath, numericLimit, evalAt, fmt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

// Función a trozos del PDF ejercicio 2:
// f(x) = 1/(1+x)      si x<0
//      = x+1          si 0 ≤ x ≤ 2
//      = (x-2)/(x^2-4) si x>2
const DEFAULT_PIECES = [
  { expr: '1/(1+x)', min: -Infinity, max: 0, inclMin: false, inclMax: false },
  { expr: 'x + 1', min: 0, max: 2, inclMin: true, inclMax: true },
  { expr: '(x - 2)/(x^2 - 4)', min: 2, max: Infinity, inclMin: false, inclMax: false },
];

export async function renderContinuidad(root) {
  await waitMath();
  root.innerHTML = `
    <section class="panel">
      <h2>🔗 Continuidad</h2>
      <div class="theory">
        <h4>Definición</h4>
        <p>$f$ es continua en $x=a$ si se cumplen las tres condiciones:</p>
        <ol>
          <li>Existe $f(a)$ (es decir, $a$ está en el dominio).</li>
          <li>Existe $\\lim_{x\\to a} f(x)$ (los laterales coinciden).</li>
          <li>Ambos coinciden: $\\lim_{x\\to a} f(x) = f(a)$.</li>
        </ol>
      </div>
      <details>
        <summary><strong>Tipos de discontinuidad</strong></summary>
        <ul class="clean">
          <li>🟢 <strong>Evitable</strong>: existe el límite pero $\\ne f(a)$ (o $f(a)$ no existe).</li>
          <li>🟡 <strong>De salto (finito)</strong>: $\\lim^- \\ne \\lim^+$, ambos finitos.</li>
          <li>🔴 <strong>De salto infinito / esencial</strong>: alguno de los laterales es $\\pm\\infty$.</li>
        </ul>
      </details>
    </section>

    <section class="panel">
      <h2>🧩 Analizador de funciones a trozos</h2>
      <p class="hint">Edita los trozos. Se analiza automáticamente la continuidad en los puntos de empalme y se detectan huecos.</p>
      <div id="pieces"></div>
      <button class="btn ghost sm" id="add-piece">+ Añadir trozo</button>
      <button class="btn ghost sm" id="reset-pieces">Reset (ejercicio del PDF)</button>

      <h3>Resultado</h3>
      <div id="cont-result"></div>
      <div id="cont-plot" class="plot"></div>
    </section>

    <section class="panel">
      <h2>🧪 Comprobar un punto concreto</h2>
      <div class="row">
        <div>
          <label>f(x) =</label>
          <input id="cont-expr" type="text" value="(x-2)/(x^2-4)" style="min-width:260px" />
        </div>
        <div>
          <label>x =</label>
          <input id="cont-point" type="text" value="2" style="width:90px" />
        </div>
        <button class="btn" id="cont-check">Analizar</button>
      </div>
      <div id="cont-check-result"></div>
    </section>
  `;

  let pieces = JSON.parse(JSON.stringify(DEFAULT_PIECES));

  function renderPieces() {
    const box = document.getElementById('pieces');
    box.innerHTML = pieces.map((p, i) => `
      <div class="row" data-i="${i}" style="align-items:end; background:var(--panel); padding:10px; border-radius:10px; margin-bottom:8px; border:1px solid var(--border)">
        <div>
          <label>f(x) =</label>
          <input class="pc-expr" type="text" value="${p.expr}" style="min-width:220px" />
        </div>
        <div>
          <label>Desde</label>
          <input class="pc-min" type="text" value="${p.min === -Infinity ? '-inf' : p.min}" style="width:80px" />
          <select class="pc-incl-min">
            <option value="false" ${!p.inclMin ? 'selected' : ''}>abierto (</option>
            <option value="true" ${p.inclMin ? 'selected' : ''}>cerrado [</option>
          </select>
        </div>
        <div>
          <label>Hasta</label>
          <input class="pc-max" type="text" value="${p.max === Infinity ? 'inf' : p.max}" style="width:80px" />
          <select class="pc-incl-max">
            <option value="false" ${!p.inclMax ? 'selected' : ''}>abierto )</option>
            <option value="true" ${p.inclMax ? 'selected' : ''}>cerrado ]</option>
          </select>
        </div>
        <button class="btn ghost sm pc-del">✕</button>
      </div>
    `).join('');

    box.querySelectorAll('[data-i]').forEach(row => {
      const i = Number(row.dataset.i);
      row.querySelector('.pc-expr').addEventListener('input', e => { pieces[i].expr = e.target.value; schedule(); });
      row.querySelector('.pc-min').addEventListener('input', e => { pieces[i].min = parseBound(e.target.value, -Infinity); schedule(); });
      row.querySelector('.pc-max').addEventListener('input', e => { pieces[i].max = parseBound(e.target.value, Infinity); schedule(); });
      row.querySelector('.pc-incl-min').addEventListener('change', e => { pieces[i].inclMin = e.target.value === 'true'; schedule(); });
      row.querySelector('.pc-incl-max').addEventListener('change', e => { pieces[i].inclMax = e.target.value === 'true'; schedule(); });
      row.querySelector('.pc-del').addEventListener('click', () => { pieces.splice(i, 1); renderPieces(); analyze(); });
    });
  }

  let t;
  function schedule() { clearTimeout(t); t = setTimeout(analyze, 300); }

  async function analyze() {
    const res = document.getElementById('cont-result');
    const sorted = [...pieces].sort((a, b) => a.min - b.min);
    const boundaries = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      const a = sorted[i], b = sorted[i + 1];
      if (a.max === b.min) boundaries.push(a.max);
    }
    let html = '<h4>Puntos de empalme</h4>';
    if (boundaries.length === 0) html += '<p class="hint">No hay empalmes (o los trozos no se tocan).</p>';

    for (const x0 of boundaries) {
      const left = findPiece(sorted, x0 - 1e-6);
      const right = findPiece(sorted, x0 + 1e-6);
      if (!left || !right) continue;
      const L = numericLimit(left.expr, x0, { h: 1e-5 });
      const R = numericLimit(right.expr, x0, { h: 1e-5 });
      const lval = L.left; // valor por la izquierda del punto
      const rval = R.right;
      const fAt = evalAtPiece(sorted, x0);
      const matches = approx(lval, rval);
      const continuous = matches && approx(fAt, lval);

      const classif = !matches
        ? (isFin(lval) && isFin(rval) ? '🟡 Discontinuidad de salto finito' : '🔴 Discontinuidad de salto infinito')
        : continuous ? '🟢 Continua' : '🟢 Discontinuidad evitable';

      html += `<div class="result ${continuous ? 'ok' : 'err'}">
        <strong>En x = ${x0}</strong><br>
        $\\displaystyle\\lim_{x\\to ${x0}^-} f(x) = ${fmt(lval)}$ · $\\displaystyle\\lim_{x\\to ${x0}^+} f(x) = ${fmt(rval)}$ · $f(${x0}) = ${fAt === null ? '\\text{no definido}' : fmt(fAt)}$<br>
        ${classif}
      </div>`;
    }

    // huecos (puntos no cubiertos)
    html += '<h4>Huecos del dominio</h4>';
    const holes = detectHoles(sorted);
    if (holes.length === 0) html += '<p class="hint">No se detectaron huecos internos.</p>';
    else html += '<ul class="clean">' + holes.map(h => `<li>• x = ${h}</li>`).join('') + '</ul>';

    res.innerHTML = html;
    await typeset(res);

    // gráfica
    await plot(document.getElementById('cont-plot'), {
      xAxis: { domain: [-6, 6] },
      yAxis: { domain: [-6, 6] },
      data: sorted.filter(p => p.expr).map(p => ({
        fn: p.expr.replace(/\s+/g, ''),
        range: [finiteOr(p.min, -10), finiteOr(p.max, 10)],
        graphType: 'polyline',
        nSamples: 500,
      })),
    });
  }

  document.getElementById('add-piece').addEventListener('click', () => {
    pieces.push({ expr: 'x', min: 0, max: 1, inclMin: true, inclMax: true });
    renderPieces(); analyze();
  });
  document.getElementById('reset-pieces').addEventListener('click', () => {
    pieces = JSON.parse(JSON.stringify(DEFAULT_PIECES));
    renderPieces(); analyze();
  });

  // Analizador de punto único
  document.getElementById('cont-check').addEventListener('click', async () => {
    const expr = document.getElementById('cont-expr').value;
    const x0 = Number(document.getElementById('cont-point').value);
    const r = numericLimit(expr, x0, { h: 1e-5 });
    const fx = evalAt(expr, x0);
    const box = document.getElementById('cont-check-result');
    const exists = approx(r.left, r.right);
    const continuous = exists && fx !== null && approx(r.left, fx);
    const tipo = !exists ? (isFin(r.left) && isFin(r.right) ? 'Salto finito' : 'Salto infinito') : (fx === null ? 'Evitable (f no def.)' : (continuous ? 'Continua' : 'Evitable'));
    box.innerHTML = `<div class="result ${continuous ? 'ok' : 'err'}">
      $\\lim^- = ${fmt(r.left)}$ · $\\lim^+ = ${fmt(r.right)}$ · $f(${x0}) = ${fx === null ? '\\text{no definido}' : fmt(fx)}$<br>
      <strong>${continuous ? '✅ Continua' : '⚠️ Discontinua'} — Tipo: ${tipo}</strong>
    </div>`;
    await typeset(box);
  });

  renderPieces();
  analyze();
}

function parseBound(str, fallback) {
  const s = String(str).trim().toLowerCase();
  if (s === 'inf' || s === '+inf' || s === '∞') return Infinity;
  if (s === '-inf' || s === '−∞') return -Infinity;
  const n = Number(s);
  return isFinite(n) ? n : fallback;
}
function findPiece(pieces, x) {
  return pieces.find(p => x >= p.min && x <= p.max);
}
function evalAtPiece(pieces, x) {
  for (const p of pieces) {
    const inMin = p.inclMin ? x >= p.min : x > p.min;
    const inMax = p.inclMax ? x <= p.max : x < p.max;
    if (inMin && inMax) return evalAt(p.expr, x);
  }
  return null;
}
function approx(a, b) {
  if (a === b) return true;
  if (!isFinite(a) && !isFinite(b)) return Math.sign(a) === Math.sign(b);
  if (!isFinite(a) || !isFinite(b)) return false;
  return Math.abs(a - b) < 1e-3 * Math.max(1, Math.abs(a), Math.abs(b));
}
function isFin(x) { return isFinite(x) && !Number.isNaN(x); }
function finiteOr(v, fallback) { return isFinite(v) ? v : fallback; }

function detectHoles(pieces) {
  const holes = [];
  for (const p of pieces) {
    if (!p.expr) continue;
    const lo = finiteOr(p.min, -20), hi = finiteOr(p.max, 20);
    try {
      const code = window.math.parse(p.expr).compile();
      const step = (hi - lo) / 300;
      for (let x = lo; x <= hi; x += step) {
        try {
          const y = code.evaluate({ x });
          const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
          if (!isFinite(yn)) holes.push(+x.toFixed(3));
        } catch { holes.push(+x.toFixed(3)); }
      }
    } catch {}
  }
  return [...new Set(holes)].slice(0, 10);
}
