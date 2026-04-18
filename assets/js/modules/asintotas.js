import { typeset, waitMath, numericLimit, evalAt, fmt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

export async function renderAsintotas(root) {
  await waitMath();
  root.innerHTML = `
    <section class="panel">
      <h2>📈 Asíntotas</h2>
      <div class="theory">
        <h4>Tipos</h4>
        <ul class="clean">
          <li>🟣 <strong>Vertical</strong> en $x = a$: si $\\lim_{x\\to a} f(x) = \\pm\\infty$ (candidatos: ceros del denominador).</li>
          <li>🔵 <strong>Horizontal</strong>: $y = L$ si $\\lim_{x\\to\\pm\\infty} f(x) = L$.</li>
          <li>🟢 <strong>Oblicua</strong> $y = mx + n$: si $m = \\lim_{x\\to\\pm\\infty}\\tfrac{f(x)}{x}$ es finito y no nulo, y $n = \\lim_{x\\to\\pm\\infty}(f(x)-mx)$.</li>
        </ul>
        <p class="hint">Una función racional $P/Q$ sólo puede tener oblicua si $\\deg P = \\deg Q + 1$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>💡 Trucos y recomendaciones</h2>

      <div class="theory">
        <h4>🕳️ "Anular" el denominador: ¿AV o agujero?</h4>
        <p>Cuando encuentras un valor $x=a$ que hace <strong>denominador = 0</strong>, comprueba <em>qué hace el numerador ahí</em>:</p>
        <ul class="clean">
          <li>🔺 <strong>Numerador $\\ne 0$</strong> → te queda $\\tfrac{k}{0}$ (con $k\\ne 0$) → la función se dispara → <strong>asíntota vertical</strong> en $x=a$.</li>
          <li>🕳️ <strong>Numerador $= 0$</strong> → te queda $\\tfrac{0}{0}$ → hay factor común → al simplificar desaparece el problema → <strong>no hay AV, hay un agujero</strong> en $(a, \\text{límite simplificado})$.</li>
        </ul>
        <p class="hint"><strong>Ejemplo:</strong> en $\\dfrac{(x+2)(x-1)}{(x+3)(x-1)}$, el $x=1$ anula numerador y denominador → se simplifica → agujero en $(1, 3/4)$. El $x=-3$ sólo anula el denominador → asíntota vertical.</p>
      </div>

      <div class="theory">
        <h4>🎯 Truco de los grados (asíntota horizontal)</h4>
        <p>Para una función racional $\\dfrac{P(x)}{Q(x)}$ y $x\\to\\pm\\infty$:</p>
        <ul class="clean">
          <li>📉 <strong>$\\deg P &lt; \\deg Q$</strong> → AH en <strong>$y=0$</strong>.</li>
          <li>⚖️ <strong>$\\deg P = \\deg Q$</strong> → AH en <strong>$y = \\dfrac{\\text{coef. líder } P}{\\text{coef. líder } Q}$</strong>.</li>
          <li>📈 <strong>$\\deg P &gt; \\deg Q$</strong> → <strong>no hay AH</strong>. Si además $\\deg P = \\deg Q + 1$, hay <strong>oblicua</strong>.</li>
        </ul>
      </div>

      <div class="theory">
        <h4>📐 Asíntota oblicua — atajo y fórmulas</h4>
        <p><strong>Método atajo (cuando la división sale limpia):</strong> separa la fracción en <em>recta + resto que tiende a 0</em>.</p>
        <p>Ejemplo: $g(x) = \\dfrac{4x^2-2}{x} = 4x - \\dfrac{2}{x}$. El término $-\\tfrac{2}{x}\\to 0$ cuando $x\\to\\pm\\infty$, así que la recta $y=4x$ es la oblicua.</p>
        <p><strong>Método con fórmulas (siempre funciona):</strong></p>
        <ul class="clean">
          <li>$m = \\displaystyle\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x}$ (pendiente).</li>
          <li>$n = \\displaystyle\\lim_{x\\to\\pm\\infty} \\big[f(x) - mx\\big]$ (ordenada en el origen).</li>
          <li>Si ambos son finitos y $m\\ne 0$ → asíntota oblicua $y = mx + n$.</li>
        </ul>
        <p class="hint">Si $m=0$, el resultado es una asíntota <em>horizontal</em> (no oblicua). Si $m$ no es finito, no hay ni oblicua ni horizontal.</p>
      </div>

      <div class="theory">
        <h4>🔁 Rutina completa para una racional $P/Q$</h4>
        <ol>
          <li><strong>Dominio:</strong> factoriza $P$ y $Q$. Excluye del dominio las raíces de $Q$.</li>
          <li><strong>Simplifica</strong> si hay factores comunes. Los que cancelas son <strong>agujeros</strong> (no AV).</li>
          <li><strong>AV:</strong> raíces de $Q$ que <em>no</em> cancelaron. Comprueba con laterales.</li>
          <li><strong>AH:</strong> truco de grados. Calcula sólo si $\\deg P \\le \\deg Q$.</li>
          <li><strong>AO:</strong> solo si $\\deg P = \\deg Q + 1$. Usa el atajo o las fórmulas.</li>
        </ol>
      </div>

      <div class="theory">
        <h4>⚠️ Errores típicos</h4>
        <ul class="clean">
          <li>❌ Declarar AV en toda raíz del denominador sin mirar el numerador. El $0/0$ no es AV, es agujero.</li>
          <li>❌ Dar horizontal y oblicua a la vez en la misma dirección. <strong>Son excluyentes</strong>.</li>
          <li>❌ Olvidar que una función puede tener <em>AH distinta en $+\\infty$ y en $-\\infty$</em> (típico con raíces: $\\sqrt{x^2+1}$).</li>
          <li>✅ Escribir el dominio <em>antes</em> de simplificar. Así no olvidas el agujero.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>🧮 Analizador de asíntotas</h2>
      <div class="row">
        <div>
          <label>f(x) =</label>
          <input id="as-expr" type="text" value="(x^2 + x - 2)/(x^2 + 2x - 3)" style="min-width:320px" />
        </div>
        <button class="btn" id="as-calc">Analizar</button>
      </div>
      <p class="hint">Prueba con: <code class="kbd">(4x^2-2)/x</code>, <code class="kbd">(x^2+1)/(x-1)</code>, <code class="kbd">1/(x^2-4)</code>…</p>

      <h3>Dominio</h3>
      <div id="as-dom" class="result info"></div>

      <h3>Asíntotas verticales</h3>
      <div id="as-vert"></div>

      <h3>Asíntotas horizontales</h3>
      <div id="as-horiz"></div>

      <h3>Asíntotas oblicuas</h3>
      <div id="as-obliq"></div>

      <h3>Gráfica</h3>
      <div id="as-plot" class="plot"></div>
    </section>
  `;

  const calcular = async () => {
    const expr = document.getElementById('as-expr').value.trim();
    if (!expr) return;

    // 1. Dominio: intento separar en P/Q
    const { dom, vertCandidates } = analizarDominio(expr);
    const domBox = document.getElementById('as-dom');
    domBox.innerHTML = dom;

    // 2. Verticales (evaluar límite en cada candidato)
    const vBox = document.getElementById('as-vert');
    if (!vertCandidates.length) {
      vBox.innerHTML = '<p class="hint">No se detectan candidatos a verticales.</p>';
    } else {
      vBox.innerHTML = vertCandidates.map(a => {
        const r = numericLimit(expr, a, { h: 1e-5 });
        const lim = approx(r.left, r.right) ? fmt(r.left) : `${fmt(r.left)} \\;|\\; ${fmt(r.right)}`;
        const isVert = !isFinite(r.left) || !isFinite(r.right);
        return `<div class="result ${isVert ? 'ok' : 'err'}">
          En $x=${a}$: $\\lim^- = ${fmt(r.left)}$, $\\lim^+ = ${fmt(r.right)}$ →
          <strong>${isVert ? `✅ Asíntota vertical: $x = ${a}$` : '❌ No es asíntota (salto finito o evitable)'}</strong>
        </div>`;
      }).join('');
    }

    // 3. Horizontales
    const hBox = document.getElementById('as-horiz');
    const Lpos = numericLimit(expr, 0, { infinity: true, fromNeg: false }).value;
    const Lneg = numericLimit(expr, 0, { infinity: true, fromNeg: true }).value;
    let hHtml = '';
    if (isFinite(Lpos)) hHtml += `<div class="result ok">En $+\\infty$: $\\lim = ${fmt(Lpos)}$ → <strong>y = ${fmt(Lpos)}</strong></div>`;
    else hHtml += `<div class="result err">En $+\\infty$: $\\lim = ${fmt(Lpos)}$ → no hay horizontal (puede haber oblicua)</div>`;
    if (isFinite(Lneg)) hHtml += `<div class="result ok">En $-\\infty$: $\\lim = ${fmt(Lneg)}$ → <strong>y = ${fmt(Lneg)}</strong></div>`;
    else hHtml += `<div class="result err">En $-\\infty$: $\\lim = ${fmt(Lneg)}$ → no hay horizontal (puede haber oblicua)</div>`;
    hBox.innerHTML = hHtml;

    // 4. Oblicuas: m = lim f(x)/x,  n = lim (f(x) - m x)
    const oBox = document.getElementById('as-obliq');
    let oHtml = '';
    for (const dir of [+1, -1]) {
      if (dir > 0 && isFinite(Lpos)) { oHtml += `<div class="result info">En $+\\infty$ hay horizontal → no hay oblicua.</div>`; continue; }
      if (dir < 0 && isFinite(Lneg)) { oHtml += `<div class="result info">En $-\\infty$ hay horizontal → no hay oblicua.</div>`; continue; }
      const m = numericLimit(`(${expr})/x`, 0, { infinity: true, fromNeg: dir < 0 }).value;
      if (!isFinite(m) || Math.abs(m) < 1e-9) {
        oHtml += `<div class="result err">En ${dir > 0 ? '+∞' : '−∞'}: m = ${fmt(m)} → no hay oblicua.</div>`;
        continue;
      }
      const n = numericLimit(`(${expr}) - (${m})*x`, 0, { infinity: true, fromNeg: dir < 0 }).value;
      if (!isFinite(n)) {
        oHtml += `<div class="result err">En ${dir > 0 ? '+∞' : '−∞'}: m = ${fmt(m)}, pero n diverge.</div>`;
      } else {
        oHtml += `<div class="result ok">En ${dir > 0 ? '+∞' : '−∞'}: m = ${fmt(m)}, n = ${fmt(n)} → <strong>y = ${fmt(m)}x ${n >= 0 ? '+' : '−'} ${fmt(Math.abs(n))}</strong></div>`;
      }
    }
    oBox.innerHTML = oHtml;

    // 5. Gráfica con las asíntotas dibujadas
    const data = [{ fn: expr.replace(/\s+/g, ''), graphType: 'polyline', color: '#22d3ee', nSamples: 500 }];
    for (const a of vertCandidates) {
      const r = numericLimit(expr, a, { h: 1e-5 });
      if (!isFinite(r.left) || !isFinite(r.right)) {
        data.push({ fn: `${a}`, graphType: 'polyline', vector: null, color: '#7c5cff', closed: false, nSamples: 2, range: [0, 0.0001] });
        // línea vertical: hack usando points
        data.push({ points: [[a, -10], [a, 10]], fnType: 'points', graphType: 'polyline', color: '#7c5cff' });
      }
    }
    if (isFinite(Lpos)) data.push({ fn: `${Lpos}`, color: '#f59e0b' });
    if (isFinite(Lneg) && Lneg !== Lpos) data.push({ fn: `${Lneg}`, color: '#f59e0b' });

    await plot(document.getElementById('as-plot'), {
      xAxis: { domain: [-10, 10] },
      yAxis: { domain: [-10, 10] },
      data,
    });

    await typeset(document.querySelector('main'));
  };

  document.getElementById('as-calc').addEventListener('click', calcular);
  document.getElementById('as-expr').addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });
  calcular();
}

function approx(a, b) {
  if (!isFinite(a) || !isFinite(b)) return false;
  return Math.abs(a - b) < 1e-3;
}

// Analiza dominio intentando detectar los ceros del denominador escaneando.
function analizarDominio(expr) {
  try {
    const code = window.math.parse(expr).compile();
    const cand = new Set();
    let prev = null;
    // Muestreamos y detectamos cambios de signo cerca de valores donde hay "explosión".
    for (let x = -20; x <= 20; x += 0.01) {
      let y;
      try { y = code.evaluate({ x }); } catch { y = NaN; }
      const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
      if (!isFinite(yn) || Math.abs(yn) > 1e8) {
        const xr = Math.round(x * 10) / 10;
        cand.add(xr);
      }
      prev = yn;
    }
    // Refinamos: agrupamos candidatos cercanos a su mínimo local.
    const sorted = [...cand].sort((a, b) => a - b);
    const refined = [];
    for (const c of sorted) {
      if (!refined.length || Math.abs(c - refined[refined.length - 1]) > 0.5) refined.push(c);
    }
    // Para cada candidato, refinamos al entero/medio más cercano bisectando.
    const integers = refined.map(x => refineRoot(code, x)).filter(x => x !== null);
    const uniq = [...new Set(integers.map(x => +x.toFixed(4)))];
    const html = uniq.length === 0
      ? '<strong>Dom(f) = ℝ</strong>'
      : `<strong>Dom(f) = ℝ − { ${uniq.join(', ')} }</strong>`;
    return { dom: html, vertCandidates: uniq };
  } catch (e) {
    return { dom: `<em>No se puede analizar el dominio automáticamente.</em>`, vertCandidates: [] };
  }
}

function refineRoot(code, x0) {
  // Intentamos encontrar el punto exacto de indefinición cercano.
  let best = x0, bestScore = score(code, x0);
  for (let d = -0.5; d <= 0.5; d += 0.01) {
    const x = +(x0 + d).toFixed(3);
    const s = score(code, x);
    if (s > bestScore) { bestScore = s; best = x; }
  }
  return bestScore > 1e4 ? Number(best.toFixed(3)) : null;
}
function score(code, x) {
  try {
    const y = code.evaluate({ x });
    const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
    if (!isFinite(yn)) return 1e12;
    return Math.abs(yn);
  } catch { return 1e12; }
}
