// UD 11 · Derivadas (página única, sin subnav).
// Teoría + calculadora de derivadas simbólicas + tangente + chuleta + ejercicios.
import { typeset, waitMath, evalAt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

const EJEMPLOS_DERIVADAS = [
  { expr: 'x^3 - 3x + 1',       label: 'Polinómica' },
  { expr: 'x*sin(x)',           label: 'Producto' },
  { expr: 'sqrt(x^2 + 1)',      label: 'Regla de la cadena (raíz)' },
  { expr: '(2x - 1)/(x + 3)',   label: 'Cociente' },
  { expr: 'exp(x)*cos(x)',      label: 'Producto exponencial × trig.' },
  { expr: 'log(x^2 + 1)',       label: 'Logarítmica' },
];

export async function renderUd11Derivadas(root) {
  const math = await waitMath();

  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 11</div>
      <h1>Derivadas</h1>
      <p class="hero-lead">
        Tasa de variación, derivada en un punto, reglas de derivación, tabla de derivadas elementales y aplicaciones al estudio completo de una función. Con calculadora simbólica y graficador de tangentes.
      </p>
    </section>

    <section class="panel">
      <h2>1. Derivada en un punto</h2>

      <div class="theory">
        <h4>Motivación: tasa de variación</h4>
        <p>La <strong>tasa de variación media</strong> de $f$ en $[a, a+h]$ es $\\dfrac{f(a+h) - f(a)}{h}$, es decir, la pendiente de la recta secante que pasa por $(a, f(a))$ y $(a+h, f(a+h))$.</p>

        <h4>Definición</h4>
        <p>Si existe y es finito, la <strong>derivada de $f$ en $x=a$</strong> es:</p>
        <p>$$f'(a) = \\lim_{h\\to 0} \\dfrac{f(a+h) - f(a)}{h} = \\lim_{x\\to a} \\dfrac{f(x) - f(a)}{x - a}$$</p>
        <p>Geométricamente, $f'(a)$ es la <strong>pendiente de la recta tangente</strong> a la gráfica en $(a, f(a))$.</p>

        <h4>⚠️ Derivabilidad implica continuidad</h4>
        <p>Si $f$ es derivable en $a$, entonces $f$ es continua en $a$. <em>El recíproco no es cierto</em>: $f(x)=|x|$ es continua en $0$ pero no derivable (derivadas laterales $-1$ y $1$ no coinciden).</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Tabla de derivadas elementales</h2>
      <table class="table">
        <thead><tr><th>$f(x)$</th><th>$f'(x)$</th></tr></thead>
        <tbody>
          <tr><td>$k$ (constante)</td><td>$0$</td></tr>
          <tr><td>$x^n$</td><td>$n x^{n-1}$</td></tr>
          <tr><td>$\\sqrt{x}$</td><td>$\\dfrac{1}{2\\sqrt{x}}$</td></tr>
          <tr><td>$\\dfrac{1}{x}$</td><td>$-\\dfrac{1}{x^2}$</td></tr>
          <tr><td>$e^x$</td><td>$e^x$</td></tr>
          <tr><td>$a^x$</td><td>$a^x \\ln a$</td></tr>
          <tr><td>$\\ln x$</td><td>$\\dfrac{1}{x}$</td></tr>
          <tr><td>$\\log_a x$</td><td>$\\dfrac{1}{x \\ln a}$</td></tr>
          <tr><td>$\\sin x$</td><td>$\\cos x$</td></tr>
          <tr><td>$\\cos x$</td><td>$-\\sin x$</td></tr>
          <tr><td>$\\tan x$</td><td>$1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$</td></tr>
          <tr><td>$\\arcsin x$</td><td>$\\dfrac{1}{\\sqrt{1 - x^2}}$</td></tr>
          <tr><td>$\\arctan x$</td><td>$\\dfrac{1}{1 + x^2}$</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2>3. Reglas de derivación</h2>

      <div class="theory">
        <h4>Operaciones básicas</h4>
        <ul class="clean">
          <li>➕ <strong>Suma</strong>: $(f+g)' = f' + g'$.</li>
          <li>✖️ <strong>Constante</strong>: $(k\\cdot f)' = k\\cdot f'$.</li>
          <li>🤝 <strong>Producto</strong>: $(f\\cdot g)' = f'g + fg'$.</li>
          <li>➗ <strong>Cociente</strong>: $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$.</li>
        </ul>

        <h4>🔗 Regla de la cadena (la más usada)</h4>
        <p>$(f\\circ g)'(x) = f'(g(x)) \\cdot g'(x)$.</p>
        <p><strong>Ejemplo</strong>: $\\dfrac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$.</p>

        <h4>🪵 Derivación logarítmica</h4>
        <p>Útil para $y = f(x)^{g(x)}$. Se toma $\\ln$ y se deriva implícitamente.</p>
        <p><strong>Ejemplo</strong>: $y = x^x$ → $\\ln y = x\\ln x$ → $\\dfrac{y'}{y} = \\ln x + 1$ → $y' = x^x(\\ln x + 1)$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>4. Recta tangente y normal</h2>
      <div class="theory">
        <p>Con $f$ derivable en $a$:</p>
        <ul class="clean">
          <li>📏 <strong>Tangente</strong>: $y - f(a) = f'(a)(x - a)$.</li>
          <li>📐 <strong>Normal</strong>: $y - f(a) = -\\dfrac{1}{f'(a)}(x - a)$ si $f'(a)\\ne 0$.</li>
        </ul>
        <p><strong>Ejemplo</strong>: $f(x) = x^2 + 1$ en $x=2$. $f'(x) = 2x$, $f'(2) = 4$, $f(2) = 5$. Tangente $y = 4x - 3$; normal $y = -\\tfrac{x}{4} + \\tfrac{11}{2}$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>5. Aplicaciones al estudio de funciones</h2>

      <div class="theory">
        <h4>📈 Monotonía (signo de $f'$)</h4>
        <ol>
          <li>Calculas $f'(x)$ y buscas sus ceros (<strong>puntos críticos</strong>).</li>
          <li>Partes el dominio en intervalos y ves el signo de $f'$ en cada uno.</li>
          <li>$f' &gt; 0$ → creciente;  $f' &lt; 0$ → decreciente.</li>
        </ol>

        <h4>🔺 Extremos relativos</h4>
        <p><strong>Necesaria</strong>: $f'(a) = 0$. Para clasificar:</p>
        <ul class="clean">
          <li>🔍 <strong>Signo de $f'$</strong>: cambia de $+$ a $-$ → máximo; de $-$ a $+$ → mínimo; no cambia → no es extremo.</li>
          <li>🧮 <strong>2ª derivada</strong>: $f'(a)=0$ y $f''(a) &gt; 0$ → mínimo; $f''(a) &lt; 0$ → máximo.</li>
        </ul>

        <h4>🥣 Concavidad y puntos de inflexión</h4>
        <ul class="clean">
          <li>$f'' &gt; 0$ → cóncava hacia arriba (convexa, "sonrisa").</li>
          <li>$f'' &lt; 0$ → cóncava hacia abajo ("cara triste").</li>
          <li>Cambio de concavidad → <strong>punto de inflexión</strong> (candidato: $f''(a) = 0$).</li>
        </ul>

        <h4>🧭 Guion para representar una función</h4>
        <ol>
          <li>Dominio y discontinuidades.</li>
          <li>Cortes con los ejes.</li>
          <li>Simetrías y periodicidad.</li>
          <li>Asíntotas (verticales, horizontales, oblicuas).</li>
          <li>Monotonía (signo de $f'$) y extremos.</li>
          <li>Concavidad (signo de $f''$) e inflexiones.</li>
          <li>Tabla de valores y dibujo.</li>
        </ol>
      </div>

      <div class="theory">
        <h4>🎯 Problemas de optimización — receta en 5 pasos</h4>
        <ol>
          <li>Identifica la <strong>función objetivo</strong> y las variables.</li>
          <li>Usa la/las restricciones para dejarla con <em>una sola variable</em>.</li>
          <li>Deriva e iguala a $0$.</li>
          <li>Comprueba si es máximo o mínimo (2ª derivada o signo de $f'$).</li>
          <li>Verifica que la solución está en el dominio del problema.</li>
        </ol>
      </div>
    </section>

    <section class="panel">
      <h2>🧮 Calculadora de derivadas</h2>
      <p class="hint">Escribe $f(x)$ y obtendrás $f'(x)$ y $f''(x)$ simplificadas. Opcionalmente, un punto $a$ para la tangente.</p>
      <div class="row">
        <div>
          <label>f(x) =</label>
          <input id="d-expr" type="text" value="x^3 - 3x + 1" style="min-width:260px" />
        </div>
        <div>
          <label>a (opcional) =</label>
          <input id="d-point" type="text" value="1" style="width:100px" />
        </div>
        <button class="btn" id="d-calc">Derivar</button>
      </div>
      <div id="d-result"></div>
      <div id="d-plot" class="plot"></div>

      <h3 style="margin-top:18px">Ejemplos típicos</h3>
      <div class="grid" id="d-ejemplos"></div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta rápida</h2>

      <div class="theory">
        <h4>🎯 Receta de la regla de la cadena</h4>
        <ol>
          <li>Identifica la función de <em>fuera</em> $f$ y la de <em>dentro</em> $g$.</li>
          <li>Deriva $f$ respecto a su argumento y déjala con $g(x)$ dentro.</li>
          <li>Multiplica por $g'(x)$.</li>
        </ol>
        <p class="hint">💡 Mientras estés aprendiendo: <em>primero escribes</em> la derivada de fuera sin tocar dentro, <em>luego</em> multiplicas por la derivada de dentro.</p>
      </div>

      <div class="theory">
        <h4>🔺 ¿Máximo o mínimo? Decisión rápida</h4>
        <table class="table">
          <thead><tr><th>$f'(a)$</th><th>$f''(a)$</th><th>Tipo</th></tr></thead>
          <tbody>
            <tr><td>$0$</td><td>$&lt; 0$</td><td>Máximo relativo</td></tr>
            <tr><td>$0$</td><td>$&gt; 0$</td><td>Mínimo relativo</td></tr>
            <tr><td>$0$</td><td>$0$</td><td>No concluye (mirar signos de $f'$)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="theory">
        <h4>⚠️ Errores típicos</h4>
        <ul class="clean">
          <li>❌ Derivar $\\sin(x^2)$ como $\\cos(x^2)$: falta el factor $2x$ de la cadena.</li>
          <li>❌ Usar la 2ª derivada cuando $f'$ no es cero: la 2ª derivada clasifica sólo si $f'=0$.</li>
          <li>❌ Olvidar que "creciente" se decide con el <strong>signo de $f'$</strong>, no con el valor de $f$.</li>
          <li>✅ En problemas de optimización, siempre comprueba que la solución está <em>dentro</em> del dominio admisible.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>

      <details>
        <summary><strong>1.</strong> Deriva $f(x) = x\\cdot \\sin x$.</summary>
        <div class="theory">
          <p>Producto: $f'(x) = 1\\cdot \\sin x + x\\cdot \\cos x = \\sin x + x\\cos x$.</p>
        </div>
      </details>

      <details>
        <summary><strong>2.</strong> Deriva $g(x) = \\sqrt{x^2 + 1}$.</summary>
        <div class="theory">
          <p>Cadena: $g'(x) = \\dfrac{2x}{2\\sqrt{x^2+1}} = \\dfrac{x}{\\sqrt{x^2+1}}$.</p>
        </div>
      </details>

      <details>
        <summary><strong>3.</strong> Halla la tangente a $y = e^x$ en $x = 0$.</summary>
        <div class="theory">
          <p>$f'(x) = e^x$, $f'(0) = 1$, $f(0) = 1$. Tangente: $y - 1 = 1\\cdot(x - 0)$, es decir, $y = x + 1$.</p>
        </div>
      </details>

      <details>
        <summary><strong>4.</strong> Estudia crecimiento, extremos y concavidad de $f(x) = x^4 - 4x^3$.</summary>
        <div class="theory">
          <p>$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Ceros: $x = 0$ (doble), $x = 3$.</p>
          <p>Signos: $f' &lt; 0$ en $(-\\infty, 3)\\setminus\\{0\\}$; $f' &gt; 0$ en $(3, +\\infty)$. En $x=0$ no hay extremo; en $x=3$ mínimo.</p>
          <p>$f''(x) = 12x^2 - 24x = 12x(x-2)$. Ceros: $x=0$, $x=2$.</p>
          <p>$f''$ cambia de signo en $0$ y en $2$ → puntos de inflexión en $(0, 0)$ y $(2, -16)$.</p>
        </div>
      </details>

      <details>
        <summary><strong>5.</strong> Entre todos los rectángulos de perímetro $40$ cm, halla el de área máxima.</summary>
        <div class="theory">
          <p>Lados $x$ y $20 - x$. Área $A(x) = x(20 - x) = 20x - x^2$.</p>
          <p>$A'(x) = 20 - 2x = 0 \\Rightarrow x = 10$. $A''(x) = -2 &lt; 0$ → máximo.</p>
          <p>Cuadrado $10\\times 10$, área $100$ cm².</p>
        </div>
      </details>

      <details>
        <summary><strong>6.</strong> Halla $a, b$ para que $f(x) = x^3 + ax + b$ tenga un mínimo relativo en $x=2$ con valor $-16$.</summary>
        <div class="theory">
          <p>$f'(2) = 0$: $12 + a = 0 \\Rightarrow a = -12$.</p>
          <p>$f(2) = -16$: $8 + 2(-12) + b = -16 \\Rightarrow b = 0$.</p>
          <p>Comprobamos: $f''(2) = 6\\cdot 2 = 12 &gt; 0$. Es mínimo ✅.</p>
        </div>
      </details>

      <details>
        <summary><strong>7.</strong> ¿Cuántas raíces reales tiene $x^3 + 3x - 5$?</summary>
        <div class="theory">
          <p>$f'(x) = 3x^2 + 3 &gt; 0$ para todo $x$. Luego $f$ es estrictamente creciente → a lo sumo una raíz.</p>
          <p>$f(1) = -1 &lt; 0$, $f(2) = 9 &gt; 0$ → por Bolzano, hay exactamente una raíz en $(1, 2)$.</p>
        </div>
      </details>
    </section>
  `;

  // Calculadora
  const $ = id => document.getElementById(id);
  const calcular = async () => {
    const expr = $('d-expr').value.trim();
    const aRaw = $('d-point').value.trim();
    const res = $('d-result');
    const plotBox = $('d-plot');
    if (!expr) { res.innerHTML = ''; plotBox.innerHTML = ''; return; }

    try {
      const f = math.parse(expr);
      const fp = math.derivative(f, 'x');
      const fpp = math.derivative(fp, 'x');
      const fLatex = f.toTex({ parenthesis: 'auto' });
      const fpLatex = math.simplify(fp).toTex({ parenthesis: 'auto' });
      const fppLatex = math.simplify(fpp).toTex({ parenthesis: 'auto' });

      let tanHtml = '';
      const a = Number(aRaw);
      let plotData = [{ fn: expr.replace(/\s+/g, ''), graphType: 'polyline', color: '#22d3ee' }];
      if (isFinite(a)) {
        const fa = evalAt(expr, a);
        const fpa = evalAt(fp.toString(), a);
        if (fa != null && fpa != null) {
          const n = fa - fpa * a;
          const sign = n >= 0 ? '+' : '';
          tanHtml = `<div class="result info">
            Tangente en $x=${a}$: &nbsp; $y = ${fpa}\\,x ${sign}${n.toFixed(4)}$ &nbsp; (pendiente ${fpa.toFixed(4)})
          </div>`;
          plotData.push({
            fn: `${fpa}*x + (${n})`,
            graphType: 'polyline',
            color: '#f97316',
          });
        }
      }

      res.innerHTML = `
        <div class="result ok">
          $f(x) = ${fLatex}$<br>
          $f'(x) = ${fpLatex}$<br>
          $f''(x) = ${fppLatex}$
        </div>
        ${tanHtml}
      `;
      await typeset(res);
      await plot(plotBox, {
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: [-10, 10] },
        data: plotData,
      });
    } catch (e) {
      res.innerHTML = `<div class="result err">Error: ${e.message}</div>`;
    }
  };

  $('d-calc').addEventListener('click', calcular);
  $('d-expr').addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });
  $('d-point').addEventListener('keydown', e => { if (e.key === 'Enter') calcular(); });

  const ej = $('d-ejemplos');
  ej.innerHTML = EJEMPLOS_DERIVADAS.map(e => `
    <div class="card" data-expr="${e.expr}" style="cursor:pointer">
      <h3>${e.label}</h3>
      <p>$f(x) = ${toLatex(e.expr)}$</p>
    </div>
  `).join('');
  ej.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => {
      $('d-expr').value = c.dataset.expr;
      calcular();
      window.scrollTo({ top: document.getElementById('d-plot').offsetTop - 120, behavior: 'smooth' });
    });
  });

  calcular();
}

function toLatex(expr) {
  try {
    return window.math.parse(expr).toTex({ parenthesis: 'auto' });
  } catch { return expr; }
}
