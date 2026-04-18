import { typeset, waitMath, numericLimit, evalAt, fmt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';
import { load, save } from '../utils/storage.js';

// Laboratorio: introduce TU función y obtienes un análisis completo.
// Guarda tus funciones favoritas en localStorage para volver a ellas.

export async function renderLaboratorio(root) {
  await waitMath();
  root.innerHTML = `
    <section class="panel">
      <h2>🧪 Laboratorio de funciones</h2>
      <p>Introduce una función $f(x)$ y obtendrás <strong>análisis completo</strong>: dominio aproximado, límites en puntos clave, asíntotas y gráfica. Puedes guardarla en tu colección.</p>
      <div class="row">
        <div style="flex:1; min-width:280px">
          <label>f(x) =</label>
          <input id="lab-expr" type="text" value="(x^2+x-2)/(x^2+2x-3)" style="width:100%" />
        </div>
        <div>
          <label>Nombre (opcional)</label>
          <input id="lab-name" type="text" placeholder="mi función 1" />
        </div>
        <button class="btn" id="lab-run">Analizar</button>
        <button class="btn ghost" id="lab-save">💾 Guardar</button>
      </div>
      <p class="hint">Usa sintaxis math.js: <code class="kbd">x^2</code>, <code class="kbd">sqrt(x)</code>, <code class="kbd">abs(x)</code>, <code class="kbd">sin(x)</code>, <code class="kbd">log(x)</code>, <code class="kbd">exp(x)</code>, <code class="kbd">(x-1)/(x+2)</code>, etc.</p>

      <div id="lab-out"></div>
    </section>

    <section class="panel">
      <h2>⭐ Mis funciones guardadas</h2>
      <div id="lab-saved"></div>
    </section>

    <section class="panel">
      <h2>🧠 Estudio personalizado por puntos</h2>
      <p>Añade los puntos en los que quieres estudiar el comportamiento (laterales + valor).</p>
      <div class="row">
        <input id="lab-points" type="text" placeholder="ej: -3, 0, 1, inf, -inf" style="min-width:260px" value="-3, 1, inf, -inf" />
        <button class="btn" id="lab-study">Estudiar</button>
      </div>
      <div id="lab-study-out"></div>
    </section>
  `;

  const $ = id => document.getElementById(id);

  const run = async () => {
    const expr = $('lab-expr').value.trim();
    if (!expr) return;
    const out = $('lab-out');
    let html = '';

    // Renderizado TeX
    html += `<h3>Expresión</h3><div class="result info">$\\displaystyle f(x) = ${toTexSafe(expr)}$</div>`;

    // Dominio aproximado
    const { vertCandidates } = analizarDominio(expr);
    html += `<h3>Dominio (aprox.)</h3><div class="result info">${vertCandidates.length
      ? 'ℝ − { ' + vertCandidates.join(', ') + ' }'
      : 'ℝ'}</div>`;

    // Asíntotas verticales
    html += `<h3>Asíntotas verticales</h3>`;
    if (!vertCandidates.length) html += '<p class="hint">No se detectan.</p>';
    else html += vertCandidates.map(a => {
      const r = numericLimit(expr, a, { h: 1e-5 });
      const vert = !isFinite(r.left) || !isFinite(r.right);
      return `<div class="result ${vert ? 'ok' : 'err'}">
        $x = ${a}$: $\\lim^- = ${fmt(r.left)}$, $\\lim^+ = ${fmt(r.right)}$
        ${vert ? '→ <strong>A.V.</strong>' : '→ discontinuidad evitable'}
      </div>`;
    }).join('');

    // Horizontales / oblicuas en ±∞
    html += `<h3>Comportamiento en ±∞</h3>`;
    for (const dir of [+1, -1]) {
      const L = numericLimit(expr, 0, { infinity: true, fromNeg: dir < 0 }).value;
      let info = `En ${dir > 0 ? '+∞' : '−∞'}: $\\lim f(x) = ${fmt(L)}$`;
      if (isFinite(L)) info += ` → <strong>A.H. y = ${fmt(L)}</strong>`;
      else {
        const m = numericLimit(`(${expr})/x`, 0, { infinity: true, fromNeg: dir < 0 }).value;
        if (isFinite(m) && Math.abs(m) > 1e-9) {
          const n = numericLimit(`(${expr}) - (${m})*x`, 0, { infinity: true, fromNeg: dir < 0 }).value;
          if (isFinite(n)) info += ` · $m=${fmt(m)}, n=${fmt(n)}$ → <strong>A.O. y = ${fmt(m)}x ${n >= 0 ? '+' : '−'} ${fmt(Math.abs(n))}</strong>`;
          else info += ' · no hay oblicua (n no finito)';
        } else {
          info += ' · no hay oblicua';
        }
      }
      html += `<div class="result info">${info}</div>`;
    }

    // Simetría (rápida)
    html += `<h3>Simetría</h3>`;
    const sym = detectSymmetry(expr);
    html += `<div class="result info">${sym}</div>`;

    // Ceros (aproximados)
    html += `<h3>Ceros aproximados</h3>`;
    const zeros = findZeros(expr);
    html += zeros.length
      ? `<div class="result info">${zeros.map(z => 'x ≈ ' + z).join(' · ')}</div>`
      : '<p class="hint">No se detectan ceros en [-10, 10].</p>';

    // Gráfica
    html += `<h3>Gráfica</h3><div id="lab-plot" class="plot"></div>`;

    out.innerHTML = html;
    await typeset(out);
    plot(document.getElementById('lab-plot'), {
      xAxis: { domain: [-10, 10] },
      yAxis: { domain: [-10, 10] },
      data: [{ fn: expr.replace(/\s+/g, ''), graphType: 'polyline', nSamples: 600, color: '#22d3ee' }],
    });
  };

  $('lab-run').addEventListener('click', run);
  $('lab-expr').addEventListener('keydown', e => { if (e.key === 'Enter') run(); });

  // Guardadas
  const refreshSaved = async () => {
    const list = load('lab-saved', []);
    const box = $('lab-saved');
    if (!list.length) { box.innerHTML = '<p class="hint">Aún no tienes funciones guardadas.</p>'; return; }
    box.innerHTML = list.map((f, i) => `
      <div class="exercise" data-i="${i}">
        <header>
          <div><span class="chip">${f.name || 'sin nombre'}</span><strong>$f(x) = ${toTexSafe(f.expr)}$</strong></div>
          <div>
            <button class="btn sm load-fn">Cargar</button>
            <button class="btn ghost sm del-fn">🗑</button>
          </div>
        </header>
      </div>
    `).join('');
    await typeset(box);
    box.querySelectorAll('[data-i]').forEach(row => {
      const i = Number(row.dataset.i);
      row.querySelector('.load-fn').addEventListener('click', () => {
        $('lab-expr').value = list[i].expr;
        $('lab-name').value = list[i].name || '';
        run();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      row.querySelector('.del-fn').addEventListener('click', () => {
        list.splice(i, 1); save('lab-saved', list); refreshSaved();
      });
    });
  };
  $('lab-save').addEventListener('click', () => {
    const expr = $('lab-expr').value.trim();
    const name = $('lab-name').value.trim();
    if (!expr) return;
    const list = load('lab-saved', []);
    list.push({ expr, name, when: Date.now() });
    save('lab-saved', list);
    refreshSaved();
  });
  refreshSaved();

  // Estudio personalizado
  $('lab-study').addEventListener('click', async () => {
    const expr = $('lab-expr').value.trim();
    const pts = $('lab-points').value.split(',').map(s => s.trim()).filter(Boolean);
    const out = $('lab-study-out');
    let html = '';
    for (const p of pts) {
      let r, value = null;
      if (p === 'inf' || p === '+inf') {
        r = numericLimit(expr, 0, { infinity: true });
        html += `<div class="result info">En $x \\to +\\infty$: $\\lim = ${fmt(r.value)}$</div>`;
      } else if (p === '-inf') {
        r = numericLimit(expr, 0, { infinity: true, fromNeg: true });
        html += `<div class="result info">En $x \\to -\\infty$: $\\lim = ${fmt(r.value)}$</div>`;
      } else {
        const x0 = Number(p);
        if (!isFinite(x0)) continue;
        r = numericLimit(expr, x0, { h: 1e-5 });
        value = evalAt(expr, x0);
        const exists = approx(r.left, r.right);
        const cont = exists && value !== null && approx(r.left, value);
        html += `<div class="result ${cont ? 'ok' : 'err'}">
          <strong>x = ${x0}</strong> · $\\lim^- = ${fmt(r.left)}$ · $\\lim^+ = ${fmt(r.right)}$ · $f(${x0}) = ${value === null ? 'n.d.' : fmt(value)}$
          · ${cont ? '✅ continua' : (exists ? '⚠️ evitable' : (isFinite(r.left) && isFinite(r.right) ? '⚠️ salto finito' : '🔴 salto infinito'))}
        </div>`;
      }
    }
    out.innerHTML = html;
    await typeset(out);
  });

  run();
}

function toTexSafe(expr) {
  try { return window.math.parse(expr).toTex({ parenthesis: 'auto' }); } catch { return expr; }
}
function approx(a, b) {
  if (!isFinite(a) || !isFinite(b)) return false;
  return Math.abs(a - b) < 1e-3;
}

function analizarDominio(expr) {
  try {
    const code = window.math.parse(expr).compile();
    const cand = new Set();
    for (let x = -20; x <= 20; x += 0.01) {
      let y;
      try { y = code.evaluate({ x }); } catch { y = NaN; }
      const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
      if (!isFinite(yn) || Math.abs(yn) > 1e8) cand.add(Math.round(x * 10) / 10);
    }
    const sorted = [...cand].sort((a, b) => a - b);
    const refined = [];
    for (const c of sorted) {
      if (!refined.length || Math.abs(c - refined[refined.length - 1]) > 0.5) refined.push(c);
    }
    const uniq = refined.map(x0 => {
      let best = x0, bestScore = 0;
      for (let d = -0.5; d <= 0.5; d += 0.01) {
        const x = +(x0 + d).toFixed(3);
        try {
          const y = code.evaluate({ x });
          const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
          if (!isFinite(yn)) return x;
          if (Math.abs(yn) > bestScore) { bestScore = Math.abs(yn); best = x; }
        } catch { return +(x0).toFixed(3); }
      }
      return bestScore > 1e4 ? +best.toFixed(3) : null;
    }).filter(x => x !== null);
    return { vertCandidates: [...new Set(uniq)] };
  } catch { return { vertCandidates: [] }; }
}

function detectSymmetry(expr) {
  try {
    const code = window.math.parse(expr).compile();
    let par = true, impar = true;
    for (let x = 0.5; x <= 5; x += 0.37) {
      const fp = code.evaluate({ x });
      const fn = code.evaluate({ x: -x });
      const vp = typeof fp === 'number' ? fp : NaN;
      const vn = typeof fn === 'number' ? fn : NaN;
      if (!isFinite(vp) || !isFinite(vn)) continue;
      if (Math.abs(vp - vn) > 1e-3) par = false;
      if (Math.abs(vp + vn) > 1e-3) impar = false;
    }
    if (par) return 'Función <strong>par</strong> (simétrica respecto al eje $Y$).';
    if (impar) return 'Función <strong>impar</strong> (simétrica respecto al origen).';
    return 'No tiene simetría par/impar detectable.';
  } catch { return 'No se pudo analizar la simetría.'; }
}

function findZeros(expr) {
  try {
    const code = window.math.parse(expr).compile();
    const ev = (x) => {
      try { const y = code.evaluate({ x }); return typeof y === 'number' ? y : NaN; } catch { return NaN; }
    };
    const zeros = [];
    let prev = ev(-10);
    for (let x = -10 + 0.05; x <= 10; x += 0.05) {
      const y = ev(x);
      if (isFinite(prev) && isFinite(y) && Math.sign(prev) !== Math.sign(y) && prev !== 0) {
        // bisección rápida
        let a = x - 0.05, b = x;
        for (let k = 0; k < 30; k++) {
          const m = (a + b) / 2;
          const fm = ev(m);
          if (Math.sign(fm) === Math.sign(ev(a))) a = m; else b = m;
        }
        zeros.push(+(((a + b) / 2).toFixed(3)));
      }
      prev = y;
    }
    return [...new Set(zeros)];
  } catch { return []; }
}
