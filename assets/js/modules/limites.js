import { typeset, waitMath, numericLimit, fmt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

const EJEMPLOS = [
  { id: 'inf-inf-pol', expr: '(x^2 + 3x) / (2x^2 - 5x)', point: 'inf', title: 'Cociente de polinomios en ∞/∞' },
  { id: 'zero-zero-fact', expr: '(x^2 - 1) / (x - 1)', point: 1, title: 'Indeterminación 0/0 (factorización)' },
  { id: 'inf-menos-inf', expr: 'sqrt(x^2 + 4x) - x', point: 'inf', title: 'Indeterminación ∞ − ∞ (conjugado)' },
  { id: 'asint-vert', expr: '(x - 5) / (x - 2)^2', point: 2, title: 'Asíntota vertical (x→2)' },
  { id: 'directo', expr: '(x^2 - 1) / (x - 2)', point: 1, title: 'Sustitución directa' },
  { id: 'inf-neg', expr: '(x^2 - 4) / (x - 2)', point: '-inf', title: 'Límite en −∞' },
];

export async function renderLimites(root) {
  await waitMath();
  root.innerHTML = `
    <section class="panel">
      <h2>📐 Límites</h2>
      <div class="theory">
        <h4>Idea intuitiva</h4>
        <p>El límite de $f(x)$ cuando $x \\to a$ es el valor al que se <em>aproxima</em> $f$ cuando $x$ se acerca a $a$ (sin tocarlo). Si el límite por la izquierda ($x\\to a^-$) y por la derecha ($x\\to a^+$) coinciden, el límite existe.</p>
        <p><strong>Estrategia general:</strong></p>
        <ol>
          <li>Sustituye $a$ en $f(x)$.</li>
          <li>Si sale un número: ese es el límite ✅.</li>
          <li>Si sale indeterminación ($\\tfrac{0}{0}$, $\\tfrac{\\infty}{\\infty}$, $\\infty-\\infty$, $0\\cdot\\infty$…) aplica la técnica correspondiente.</li>
        </ol>
      </div>

      <details open>
        <summary><strong>Tabla de indeterminaciones y técnicas</strong></summary>
        <table class="table">
          <thead><tr><th>Forma</th><th>Técnica</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td>$\\tfrac{0}{0}$ (racional)</td><td>Factorizar y simplificar</td><td>$\\lim_{x\\to 1}\\tfrac{x^2-1}{x-1}=2$</td></tr>
            <tr><td>$\\tfrac{\\infty}{\\infty}$ (polinomios)</td><td>Mirar grados / dividir por $x^n$</td><td>$\\lim_{x\\to\\infty}\\tfrac{x^2}{2x^2}=\\tfrac12$</td></tr>
            <tr><td>$\\infty - \\infty$ (con raíces)</td><td>Multiplicar por el conjugado</td><td>$\\sqrt{x^2+4x}-x \\to 2$</td></tr>
            <tr><td>$\\tfrac{k}{0}$ con $k\\neq 0$</td><td>Estudiar signo laterales</td><td>$\\lim_{x\\to 2}\\tfrac{x-5}{(x-2)^2}=-\\infty$</td></tr>
          </tbody>
        </table>
      </details>
    </section>

    <section class="panel">
      <h2>💡 Trucos y recomendaciones</h2>

      <div class="theory">
        <h4>🎯 Truco de los grados (la regla de oro para $\\infty/\\infty$)</h4>
        <p>Cuando tienes una función racional $\\dfrac{P(x)}{Q(x)}$ y $x\\to\\pm\\infty$:</p>
        <ul class="clean">
          <li>📉 <strong>grado num &lt; grado den</strong> → el límite es <strong>$0$</strong>.</li>
          <li>⚖️ <strong>grado num = grado den</strong> → el límite es <strong>el cociente de coeficientes líderes</strong>.</li>
          <li>📈 <strong>grado num &gt; grado den</strong> → el límite es <strong>$\\pm\\infty$</strong> (el signo lo decide el signo de los coeficientes líderes y la paridad del grado).</li>
        </ul>
        <p class="hint">Este truco te ahorra escribir la división entre $x^n$. Es <em>el mismo</em> truco que se usa para detectar asíntotas horizontales.</p>
      </div>

      <div class="theory">
        <h4>🧩 Cómo atacar cada indeterminación</h4>
        <ol>
          <li><strong>$\\tfrac{0}{0}$ racional</strong> → factoriza num. y den., busca <em>el factor común</em> y cancélalo. Después sustituye.</li>
          <li><strong>$\\tfrac{0}{0}$ con raíces</strong> → multiplica y divide por el <em>conjugado</em> de la parte con raíz.</li>
          <li><strong>$\\tfrac{\\infty}{\\infty}$</strong> → usa el truco de los grados (arriba). Si no es racional, divide por la potencia mayor de $x$.</li>
          <li><strong>$\\infty - \\infty$ con raíces</strong> → conjugado, casi siempre. Convierte la resta en un cociente.</li>
          <li><strong>$\\infty - \\infty$ sin raíces</strong> → saca factor común (normalmente la mayor potencia de $x$).</li>
          <li><strong>$\\tfrac{k}{0}$ con $k\\ne 0$</strong> → <strong>no</strong> es indeterminación, es una <strong>asíntota vertical</strong>. Estudia los laterales para decidir signo.</li>
          <li><strong>$\\tfrac{k}{0^2}$</strong> (denominador al cuadrado) → el signo lo manda <strong>$k$</strong>, porque $(algo)^2 \\ge 0$ siempre.</li>
        </ol>
      </div>

      <div class="theory">
        <h4>⚠️ Errores típicos que hay que evitar</h4>
        <ul class="clean">
          <li>❌ Asumir que $\\tfrac{0}{0}$ vale 0. <strong>Es indeterminación</strong>: hay que operar.</li>
          <li>❌ Pensar que $\\tfrac{k}{0}$ es indeterminación. <strong>No lo es</strong>: el resultado es $\\pm\\infty$, basta mirar el signo.</li>
          <li>❌ Cancelar factores sin notar que cambia el dominio (deja un "agujero" en ese punto, no desaparece).</li>
          <li>❌ En $\\sqrt{x^2}$ escribir $x$ sin más. Cuando $x\\to-\\infty$, $\\sqrt{x^2}=|x|=-x$.</li>
          <li>✅ Antes de todo, <strong>sustituye $a$ en $f(x)$</strong>. Muchas veces no hay indeterminación.</li>
        </ul>
      </div>

      <div class="theory">
        <h4>🔁 Checklist rápida (paso a paso)</h4>
        <ol>
          <li>Sustituyo $a$ en $f(x)$.</li>
          <li>¿Sale un número? Ya está.</li>
          <li>¿Sale $\\tfrac{k}{0}$? Es $\\pm\\infty$ → estudio laterales para el signo.</li>
          <li>¿Sale indeterminación? Identifico el tipo y aplico la técnica (tabla de arriba).</li>
          <li>Si hay punto finito, compruebo que <em>los límites laterales coinciden</em>.</li>
        </ol>
      </div>
    </section>

    <section class="panel">
      <h2>🧮 Calculadora de límites</h2>
      <p class="hint">Escribe una función $f(x)$ y un punto $a$ (o <code class="kbd">inf</code> / <code class="kbd">-inf</code>).</p>
      <div class="row">
        <div>
          <label>f(x) =</label>
          <input id="lim-expr" type="text" value="(x^2 - 1)/(x - 1)" style="min-width:260px" />
        </div>
        <div>
          <label>x →</label>
          <input id="lim-point" type="text" value="1" style="width:100px" />
        </div>
        <button class="btn" id="lim-calc">Calcular</button>
      </div>
      <div id="lim-result"></div>
      <div id="lim-plot" class="plot"></div>
    </section>

    <section class="panel">
      <h2>🎲 Ejemplos clásicos</h2>
      <p class="hint">Haz clic en uno para cargarlo en la calculadora.</p>
      <div class="grid" id="ejemplos"></div>
    </section>
  `;

  // Calculadora
  const $ = id => document.getElementById(id);
  const calcular = async () => {
    const expr = $('lim-expr').value.trim();
    const ptRaw = $('lim-point').value.trim().toLowerCase();
    const res = $('lim-result');
    const plotBox = $('lim-plot');
    if (!expr) { res.innerHTML = ''; return; }

    let isInf = false, isNegInf = false, x0 = NaN;
    if (ptRaw === 'inf' || ptRaw === '∞' || ptRaw === '+inf') isInf = true;
    else if (ptRaw === '-inf' || ptRaw === '−∞' || ptRaw === '-∞') { isInf = true; isNegInf = true; }
    else x0 = Number(ptRaw);

    try {
      let html = '';
      if (isInf) {
        const r = numericLimit(expr, 0, { infinity: true, fromNeg: isNegInf });
        html = `<div class="result info">$\\lim_{x\\to ${isNegInf ? '-\\infty' : '+\\infty'}} ${expr.replace(/\*/g,'\\cdot ')}$ ≈ <strong>${fmt(r.value)}</strong></div>`;
      } else if (isFinite(x0)) {
        const r = numericLimit(expr, x0, { h: 1e-4 });
        const leftTxt = fmt(r.left), rightTxt = fmt(r.right);
        const exists = r.matches;
        html = `<div class="result ${exists ? 'ok' : 'err'}">
          Límite por la izquierda: <strong>${leftTxt}</strong>
          &nbsp;·&nbsp; por la derecha: <strong>${rightTxt}</strong><br>
          ${exists ? '✅ El límite existe y vale <strong>' + leftTxt + '</strong>' : '⚠️ Los límites laterales no coinciden: <strong>el límite no existe</strong>'}
        </div>`;
      } else {
        html = `<div class="result err">Punto no válido. Usa un número o <code>inf</code> / <code>-inf</code>.</div>`;
      }
      res.innerHTML = html;
      await typeset(res);

      // Gráfica (centrada en el punto si es finito)
      const xc = isFinite(x0) ? x0 : 0;
      await plot(plotBox, {
        xAxis: { domain: [xc - 5, xc + 5] },
        yAxis: { domain: [-10, 10] },
        data: [{ fn: toFP(expr), graphType: 'polyline', color: '#22d3ee' }],
      });
    } catch (e) {
      res.innerHTML = `<div class="result err">Error: ${e.message}</div>`;
    }
  };

  $('lim-calc').addEventListener('click', calcular);
  $('lim-expr').addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });
  $('lim-point').addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });

  // Render ejemplos
  const ej = document.getElementById('ejemplos');
  ej.innerHTML = EJEMPLOS.map(e => `
    <div class="card" data-id="${e.id}" style="cursor:pointer">
      <h3>${e.title}</h3>
      <p>$\\lim_{x\\to ${e.point === 'inf' ? '+\\infty' : e.point === '-inf' ? '-\\infty' : e.point}} ${toLatex(e.expr)}$</p>
    </div>
  `).join('');
  ej.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => {
      const ex = EJEMPLOS.find(x => x.id === c.dataset.id);
      $('lim-expr').value = ex.expr;
      $('lim-point').value = ex.point;
      calcular();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Primera ejecución
  calcular();
}

function toFP(expr) {
  // function-plot acepta sintaxis casi igual a math.js; normalizamos.
  return expr.replace(/\s+/g, '');
}
function toLatex(expr) {
  try {
    const node = window.math.parse(expr);
    return node.toTex({ parenthesis: 'auto' });
  } catch { return expr; }
}
