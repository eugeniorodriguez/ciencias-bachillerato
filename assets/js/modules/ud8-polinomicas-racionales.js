// UD 8 · Funciones polinómicas y racionales.
export async function renderUd8PolRacionales(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 8</div>
      <h1>Funciones polinómicas y racionales</h1>
      <p class="hero-lead">
        Análisis gráfico: dominio, ceros, signo, factorización, comportamiento en los extremos. Casos particulares y atajos para su representación.
      </p>
    </section>

    <section class="panel">
      <h2>1. Funciones polinómicas</h2>
      <div class="theory">
        <p>$f(x) = a_n x^n + \\ldots + a_1 x + a_0$. Dominio $\\mathbb{R}$. Gráfica continua y suave (sin saltos ni asíntotas).</p>

        <h4>Casos básicos</h4>
        <ul class="clean">
          <li><strong>Afín</strong> $y = mx + n$: recta. $m$ = pendiente; $n$ = ordenada en el origen.</li>
          <li><strong>Cuadrática</strong> $y = ax^2 + bx + c$: parábola. Vértice $x_v = -b/(2a)$; abre hacia arriba si $a&gt;0$.</li>
          <li><strong>Cúbica</strong> $y = ax^3 + \\ldots$: tiene al menos una raíz real; puede tener 1 o 3.</li>
        </ul>

        <h4>🎯 Comportamiento en $\\pm\\infty$</h4>
        <p>Dominado por el término líder $a_n x^n$:</p>
        <ul class="clean">
          <li>$n$ par y $a_n &gt; 0$: $f\\to +\\infty$ en ambos extremos.</li>
          <li>$n$ par y $a_n &lt; 0$: $f\\to -\\infty$ en ambos.</li>
          <li>$n$ impar y $a_n &gt; 0$: $f\\to -\\infty$ por la izquierda, $+\\infty$ por la derecha.</li>
          <li>$n$ impar y $a_n &lt; 0$: al revés.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>2. Factorización y signo</h2>
      <div class="theory">
        <p>Factorizar permite conocer las raíces (ceros) y estudiar el signo.</p>
        <ol>
          <li>Busca raíces enteras con la regla del candidato.</li>
          <li>Usa Ruffini para dividir por $(x - a)$ cuando encuentres una raíz.</li>
          <li>Para el factor irreducible de segundo grado, estudia su signo con el discriminante y el signo de $a$.</li>
          <li>Construye una tabla de signos por intervalos.</li>
        </ol>
      </div>
    </section>

    <section class="panel">
      <h2>3. Funciones racionales</h2>
      <div class="theory">
        <p>$f(x) = P(x)/Q(x)$. Dominio: $\\mathbb{R}\\setminus \\{$ raíces de $Q\\}$.</p>

        <h4>🎯 Asíntotas (truco de grados)</h4>
        <ul class="clean">
          <li>$\\deg P &lt; \\deg Q$ → AH $y = 0$.</li>
          <li>$\\deg P = \\deg Q$ → AH $y = $ cociente de líderes.</li>
          <li>$\\deg P = \\deg Q + 1$ → <strong>oblicua</strong> (divide P entre Q: cociente = AO).</li>
          <li>$\\deg P &gt; \\deg Q + 1$ → rama parabólica, ni AH ni AO.</li>
        </ul>

        <h4>Asíntotas verticales vs. agujeros</h4>
        <ul class="clean">
          <li>$Q(a) = 0$ y $P(a) \\ne 0$ → AV en $x = a$.</li>
          <li>$P(a) = Q(a) = 0$ y factor común $(x-a)$ se cancela → agujero (hueco) en $x = a$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>4. Caso especial: $f(x) = \\dfrac{k}{x-a} + b$</h2>
      <div class="theory">
        <p>Es una <strong>hipérbola</strong> con centro en $(a, b)$ y asíntotas $x = a$ e $y = b$.</p>
        <p>Transformación desde $y = 1/x$: trasladar $a$ a la derecha, $b$ hacia arriba y, si $|k| \\ne 1$, dilatar verticalmente.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🧭 Representar una racional en 6 pasos</h4>
        <ol>
          <li>Dominio (raíces del denominador).</li>
          <li>Factoriza y simplifica → posibles agujeros.</li>
          <li>Cortes con los ejes: $f(0)$ y raíces de $P$.</li>
          <li>Asíntotas verticales (en las raíces de $Q$ que queden).</li>
          <li>Truco de grados → AH u OA.</li>
          <li>Signo por tramos y gráfica aproximada.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Poner AV donde se simplifica el factor. Ahí hay <em>agujero</em>, no asíntota.</li>
          <li>❌ Dibujar la curva atravesando una AV.</li>
          <li>❌ No decidir el signo de $\\lim$ en la AV (estudia laterales).</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Vértice y cortes de $y = x^2 - 4x + 3$.</summary><div class="theory">
        <p>$x_v = 4/2 = 2$. $y_v = 4 - 8 + 3 = -1$. Vértice $(2, -1)$.</p>
        <p>Cortes: $x^2 - 4x + 3 = 0 \\Rightarrow x = 1, 3$. OY: $(0, 3)$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Estudia $f(x) = \\dfrac{x-1}{x+2}$.</summary><div class="theory">
        <p>Dominio: $\\mathbb{R}\\setminus\\{-2\\}$. AV $x = -2$. $\\deg P = \\deg Q$ → AH $y = 1$.</p>
        <p>Cortes: $f(0) = -1/2$ (OY); $x-1 = 0 \\Rightarrow x = 1$ (OX). Se acerca a la AV por $\\pm\\infty$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Asíntotas de $f(x) = \\dfrac{x^2 + 1}{x - 1}$.</summary><div class="theory">
        <p>AV: $x = 1$ (y no se simplifica). Grados: $2 = 1 + 1$ → hay AO. Dividiendo, $x^2 + 1 = (x-1)(x+1) + 2$, así $f(x) = x+1 + \\tfrac{2}{x-1}$. AO: $y = x+1$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Factoriza y estudia el signo de $x^3 - 4x$.</summary><div class="theory">
        <p>$x(x^2 - 4) = x(x-2)(x+2)$. Raíces: $-2, 0, 2$.</p>
        <p>Signo: $(-\\infty, -2): -$; $(-2, 0): +$; $(0, 2): -$; $(2, +\\infty): +$.</p>
      </div></details>
      <details><summary><strong>5.</strong> Agujero vs. AV en $f(x) = \\dfrac{x^2 - 4}{x - 2}$.</summary><div class="theory">
        <p>$f(x) = \\dfrac{(x-2)(x+2)}{x-2} = x + 2$ con $x \\ne 2$.</p>
        <p>No hay AV; hay un <strong>agujero</strong> en $(2, 4)$.</p>
      </div></details>
    </section>
  `;
}
