// UD 7 · Funciones elementales (página única, sin subnav).
// Teoría + explorador gráfico + cónicas + chuleta + ejercicios con pasos.
import { typeset, waitMath, evalAt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

const FUNCIONES_TIPO = [
  { id: 'afin',  label: 'Afín: y = mx + n',         expr: '2x - 1',         dom: '\\mathbb{R}' },
  { id: 'cuad',  label: 'Cuadrática: y = ax² + bx + c', expr: 'x^2 - 4x + 3', dom: '\\mathbb{R}' },
  { id: 'raiz',  label: 'Raíz: y = √x',             expr: 'sqrt(x)',        dom: '[0, +\\infty)' },
  { id: 'abs',   label: 'Valor absoluto: y = |x|',  expr: 'abs(x)',         dom: '\\mathbb{R}' },
  { id: 'rac',   label: 'Racional: y = 1/x',        expr: '1/x',            dom: '\\mathbb{R}\\setminus\\{0\\}' },
  { id: 'exp',   label: 'Exponencial: y = eˣ',      expr: 'exp(x)',         dom: '\\mathbb{R}' },
  { id: 'log',   label: 'Logarítmica: y = ln x',    expr: 'log(x)',         dom: '(0, +\\infty)' },
  { id: 'sen',   label: 'Seno: y = sen x',          expr: 'sin(x)',         dom: '\\mathbb{R}' },
  { id: 'cos',   label: 'Coseno: y = cos x',        expr: 'cos(x)',         dom: '\\mathbb{R}' },
];

export async function renderUd7Funciones(root) {
  await waitMath();

  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 7</div>
      <h1>Funciones elementales</h1>
      <p class="hero-lead">
        Dominio y recorrido, simetrías, periodicidad, asíntotas, transformaciones, composición e inversa, y las cónicas. Con un explorador gráfico para probar cualquier función.
      </p>
    </section>

    <section class="panel">
      <h2>1. Concepto de función</h2>
      <div class="theory">
        <h4>Definición</h4>
        <p>Una <strong>función</strong> $f: A \\to B$ asigna a cada $x \\in A$ un <em>único</em> $y \\in B$, denotado $y = f(x)$.</p>
        <ul class="clean">
          <li>📘 <strong>Dominio</strong> $\\operatorname{Dom}(f)$: valores de $x$ en los que está definida.</li>
          <li>📗 <strong>Imagen</strong> $\\operatorname{Im}(f)$: valores $y$ que realmente alcanza $f$.</li>
          <li>🔎 <strong>Criterio gráfico de función</strong>: toda recta vertical corta la gráfica a lo sumo en un punto.</li>
        </ul>
      </div>

      <div class="theory">
        <h4>🎯 Cálculo de dominios — la tabla que hay que saberse</h4>
        <table class="table">
          <thead><tr><th>Tipo de función</th><th>Restricción</th></tr></thead>
          <tbody>
            <tr><td>Polinómica</td><td>$\\operatorname{Dom} = \\mathbb{R}$</td></tr>
            <tr><td>Racional $P/Q$</td><td>$Q(x) \\ne 0$</td></tr>
            <tr><td>Raíz par $\\sqrt[2n]{P}$</td><td>$P(x) \\ge 0$</td></tr>
            <tr><td>Raíz impar $\\sqrt[2n+1]{P}$</td><td>$\\operatorname{Dom}(P)$</td></tr>
            <tr><td>Logarítmica $\\log P$</td><td>$P(x) &gt; 0$</td></tr>
            <tr><td>Exponencial $a^{P}$</td><td>$\\operatorname{Dom}(P)$</td></tr>
            <tr><td>$\\tan x$</td><td>$x \\ne \\tfrac{\\pi}{2} + k\\pi$</td></tr>
            <tr><td>Combinadas</td><td>intersección de los dominios</td></tr>
          </tbody>
        </table>
        <p class="hint">💡 En funciones con varias piezas se calcula el dominio de cada una y se <em>intersecan</em>.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Propiedades gráficas</h2>

      <div class="theory">
        <h4>Simetrías</h4>
        <ul class="clean">
          <li>🟰 <strong>Par</strong> (respecto a OY): $f(-x) = f(x)$. Ej.: $x^2$, $\\cos x$.</li>
          <li>🔁 <strong>Impar</strong> (respecto al origen): $f(-x) = -f(x)$. Ej.: $x^3$, $\\sin x$.</li>
        </ul>
        <h4>Periodicidad</h4>
        <p>$f$ es <strong>periódica</strong> de periodo $T$ si $f(x + T) = f(x)$ para todo $x$. Ejemplos: $\\sin x$ ($T = 2\\pi$), $\\tan x$ ($T = \\pi$).</p>
        <h4>Monotonía y extremos</h4>
        <ul class="clean">
          <li>📈 <strong>Creciente</strong>: $x_1 &lt; x_2 \\Rightarrow f(x_1) \\le f(x_2)$.</li>
          <li>📉 <strong>Decreciente</strong>: análogo al revés.</li>
          <li>🔺 <strong>Máximo/mínimo absoluto</strong>: el más alto/bajo en todo el dominio.</li>
          <li>🔹 <strong>Relativo</strong>: el más alto/bajo en un entorno del punto.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>3. Transformaciones de funciones</h2>
      <p class="hint">Memoriza esta tabla: casi todos los ejercicios de "a partir de $y=f(x)$ representa $y=\\dots$" salen de aquí.</p>
      <table class="table">
        <thead><tr><th>Transformación</th><th>Efecto sobre la gráfica</th></tr></thead>
        <tbody>
          <tr><td>$f(x) + k$</td><td>Traslación vertical de $+k$ (arriba si $k&gt;0$).</td></tr>
          <tr><td>$f(x + k)$</td><td>Traslación horizontal de $-k$ (¡al revés del signo!).</td></tr>
          <tr><td>$-f(x)$</td><td>Simetría respecto al eje OX.</td></tr>
          <tr><td>$f(-x)$</td><td>Simetría respecto al eje OY.</td></tr>
          <tr><td>$k\\cdot f(x)$ con $k&gt;1$</td><td>Estiramiento vertical.</td></tr>
          <tr><td>$k\\cdot f(x)$ con $0&lt;k&lt;1$</td><td>Aplastamiento vertical.</td></tr>
          <tr><td>$f(kx)$ con $k&gt;1$</td><td>Compresión horizontal.</td></tr>
          <tr><td>$|f(x)|$</td><td>La parte por debajo del eje OX se refleja hacia arriba.</td></tr>
          <tr><td>$f(|x|)$</td><td>Se dibuja $f$ para $x\\ge 0$ y se refleja respecto a OY.</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2>4. Operaciones con funciones</h2>
      <div class="theory">
        <h4>Suma, producto y cociente</h4>
        <p>$(f+g)(x) = f(x)+g(x)$;  $(f\\cdot g)(x)=f(x)\\cdot g(x)$;  $(f/g)(x)=f(x)/g(x)$ con $g(x)\\ne 0$.</p>

        <h4>Composición</h4>
        <p>$(f\\circ g)(x) = f(g(x))$. El dominio es $\\{x\\in\\operatorname{Dom}(g): g(x)\\in\\operatorname{Dom}(f)\\}$.</p>
        <p><strong>Ejemplo</strong>: $f(x)=\\sqrt{x}$, $g(x)=x-1$. Entonces $(f\\circ g)(x)=\\sqrt{x-1}$, con $x\\ge 1$.</p>

        <h4>🪞 Función inversa</h4>
        <p>Si $f$ es inyectiva, existe $f^{-1}$ con $f(f^{-1}(x))=x$ y $f^{-1}(f(x))=x$.</p>
        <ol>
          <li>Escribes $y = f(x)$.</li>
          <li>Intercambias $x$ e $y$.</li>
          <li>Despejas $y$ → esa es $f^{-1}(x)$.</li>
        </ol>
        <p class="hint">💡 Las gráficas de $f$ y $f^{-1}$ son <strong>simétricas respecto a $y=x$</strong>.</p>
      </div>
    </section>

    <section class="panel">
      <h2>5. Cónicas</h2>
      <p>Curvas obtenidas al cortar un cono por un plano. Según la inclinación salen circunferencia, elipse, parábola o hipérbola.</p>

      <table class="table">
        <thead><tr><th>Cónica</th><th>Ecuación canónica</th><th>Elementos clave</th></tr></thead>
        <tbody>
          <tr>
            <td>Circunferencia</td>
            <td>$(x-a)^2 + (y-b)^2 = r^2$</td>
            <td>Centro $(a,b)$, radio $r$.</td>
          </tr>
          <tr>
            <td>Elipse (eje OX)</td>
            <td>$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$, $a&gt;b$</td>
            <td>Focos $(\\pm c, 0)$ con $c^2 = a^2 - b^2$. Excentricidad $e = c/a &lt; 1$.</td>
          </tr>
          <tr>
            <td>Hipérbola (eje OX)</td>
            <td>$\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$</td>
            <td>Focos $(\\pm c, 0)$, $c^2 = a^2 + b^2$. Asíntotas $y = \\pm\\tfrac{b}{a}x$. $e &gt; 1$.</td>
          </tr>
          <tr>
            <td>Parábola (eje OX)</td>
            <td>$y^2 = 4px$</td>
            <td>Foco $(p, 0)$, directriz $x = -p$.</td>
          </tr>
        </tbody>
      </table>

      <div class="theory">
        <h4>🎯 Truco para identificar</h4>
        <ul class="clean">
          <li>Si $x^2$ e $y^2$ tienen el <strong>mismo coeficiente</strong> → circunferencia.</li>
          <li>Si tienen <strong>distinto coeficiente pero mismo signo</strong> → elipse.</li>
          <li>Si tienen <strong>signos contrarios</strong> → hipérbola.</li>
          <li>Si sólo aparece uno de los dos al cuadrado → parábola.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>🧪 Explorador gráfico</h2>
      <p class="hint">Escribe una función $f(x)$ y dibújala, o elige una de las funciones tipo.</p>
      <div class="row">
        <div>
          <label>f(x) =</label>
          <input id="f-expr" type="text" value="x^2 - 4x + 3" style="min-width:260px" />
        </div>
        <button class="btn" id="f-draw">Dibujar</button>
      </div>
      <div id="f-info" style="margin-top:10px"></div>
      <div id="f-plot" class="plot"></div>

      <h3 style="margin-top:18px">Funciones tipo</h3>
      <div class="grid" id="f-tipos"></div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta rápida</h2>

      <div class="theory">
        <h4>🎯 Dominio en 4 pasos</h4>
        <ol>
          <li>Mira el <em>tipo</em> de función (raíz, log, racional…).</li>
          <li>Aplica la restricción: denominador $\\ne 0$, radicando $\\ge 0$, argumento del log $&gt; 0$.</li>
          <li>Si hay varias piezas, <strong>interseca</strong> las restricciones.</li>
          <li>Escríbelo como unión de intervalos.</li>
        </ol>
      </div>

      <div class="theory">
        <h4>🪞 Inversa en 3 pasos</h4>
        <ol>
          <li>$y = f(x)$.</li>
          <li>Intercambia $x$ y $y$.</li>
          <li>Despeja $y$.</li>
        </ol>
        <p class="hint">Comprueba: $f(f^{-1}(x))$ debe dar $x$.</p>
      </div>

      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Olvidar que $f(x+k)$ se traslada <em>hacia la izquierda</em> si $k&gt;0$ (signo opuesto).</li>
          <li>❌ Confundir $|f(x)|$ con $f(|x|)$: no son lo mismo.</li>
          <li>❌ En $f(x)=\\sqrt{x^2-9}$ escribir $\\operatorname{Dom}=\\mathbb{R}$. Son $x\\le -3$ o $x\\ge 3$.</li>
          <li>✅ Verifica siempre gráficamente si puedes.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>

      <details>
        <summary><strong>1.</strong> Halla el dominio de $f(x) = \\dfrac{\\sqrt{x-1}}{x^2-4}$.</summary>
        <div class="theory">
          <p>Raíz: $x-1\\ge 0 \\Rightarrow x\\ge 1$. Denominador: $x^2-4\\ne 0 \\Rightarrow x\\ne \\pm 2$.</p>
          <p>Interseco: $[1,2) \\cup (2, +\\infty)$.</p>
        </div>
      </details>

      <details>
        <summary><strong>2.</strong> ¿Es $f(x)=x^2\\cos x$ par, impar o ninguna?</summary>
        <div class="theory">
          <p>$f(-x) = (-x)^2 \\cos(-x) = x^2\\cos x = f(x)$. Es <strong>par</strong>.</p>
        </div>
      </details>

      <details>
        <summary><strong>3.</strong> Halla la inversa de $f(x) = \\dfrac{3x-2}{x+1}$.</summary>
        <div class="theory">
          <p>$y(x+1) = 3x - 2 \\Rightarrow yx - 3x = -2 - y \\Rightarrow x(y-3) = -(2+y)$.</p>
          <p>$x = \\dfrac{-(2+y)}{y-3} = \\dfrac{y+2}{3-y}$. Luego $f^{-1}(x) = \\dfrac{x+2}{3-x}$.</p>
        </div>
      </details>

      <details>
        <summary><strong>4.</strong> Compón $f(x)=\\sqrt{x}$, $g(x)=3x-1$, $h(x)=1/x$. Calcula $f\\circ g\\circ h$.</summary>
        <div class="theory">
          <p>$(g\\circ h)(x) = 3\\cdot\\tfrac{1}{x} - 1 = \\tfrac{3-x}{x}$.</p>
          <p>$(f\\circ g\\circ h)(x) = \\sqrt{\\tfrac{3-x}{x}}$, con $\\tfrac{3-x}{x}\\ge 0$ y $x\\ne 0$.</p>
        </div>
      </details>

      <details>
        <summary><strong>5.</strong> Identifica la cónica $9x^2 + 4y^2 - 36 = 0$.</summary>
        <div class="theory">
          <p>Divido por $36$: $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} = 1$. Los coeficientes son positivos y distintos → <strong>elipse</strong>. $a=3$ (eje OY, ya que $9&gt;4$), $b=2$. $c = \\sqrt{9-4} = \\sqrt{5}$.</p>
        </div>
      </details>

      <details>
        <summary><strong>6.</strong> Centro y radio de $x^2 + y^2 - 4x + 6y - 12 = 0$.</summary>
        <div class="theory">
          <p>Completando cuadrados: $(x-2)^2 - 4 + (y+3)^2 - 9 - 12 = 0 \\Rightarrow (x-2)^2 + (y+3)^2 = 25$.</p>
          <p>Centro $C(2,-3)$, radio $5$.</p>
        </div>
      </details>
    </section>
  `;

  // Explorador gráfico
  const $ = id => document.getElementById(id);
  const draw = async () => {
    const expr = $('f-expr').value.trim();
    const plotBox = $('f-plot');
    const info = $('f-info');
    if (!expr) { plotBox.innerHTML = ''; info.innerHTML = ''; return; }
    try {
      const y0 = evalAt(expr, 0);
      const y1 = evalAt(expr, 1);
      info.innerHTML = `<div class="result info">$f(0) = ${y0 == null ? '\\text{indef.}' : y0}$, $f(1) = ${y1 == null ? '\\text{indef.}' : y1}$</div>`;
      await typeset(info);
      await plot(plotBox, {
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: [-10, 10] },
        data: [{ fn: expr.replace(/\s+/g, ''), graphType: 'polyline', color: '#22d3ee' }],
      });
    } catch (e) {
      info.innerHTML = `<div class="result err">Error: ${e.message}</div>`;
    }
  };
  $('f-draw').addEventListener('click', draw);
  $('f-expr').addEventListener('keydown', e => { if (e.key === 'Enter') draw(); });

  const tipos = $('f-tipos');
  tipos.innerHTML = FUNCIONES_TIPO.map(f => `
    <div class="card" data-expr="${f.expr}" style="cursor:pointer">
      <h3>${f.label}</h3>
      <p>Dom: $${f.dom}$</p>
    </div>
  `).join('');
  tipos.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => {
      $('f-expr').value = c.dataset.expr;
      draw();
      window.scrollTo({ top: document.getElementById('f-plot').offsetTop - 80, behavior: 'smooth' });
    });
  });

  draw();
}
