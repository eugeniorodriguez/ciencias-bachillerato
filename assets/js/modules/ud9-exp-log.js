// UD 9 · Funciones exponenciales y logarítmicas.
export async function renderUd9ExpLog(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 9</div>
      <h1>Exponenciales y logaritmos</h1>
      <p class="hero-lead">
        Función exponencial y logarítmica, propiedades, ecuaciones exponenciales y logarítmicas, modelos de crecimiento y aplicaciones (interés, decaimiento, escalas logarítmicas).
      </p>
    </section>

    <section class="panel">
      <h2>1. Función exponencial $f(x) = a^x$</h2>
      <div class="theory">
        <p>Con $a &gt; 0$, $a \\ne 1$.</p>
        <ul class="clean">
          <li>Dominio $\\mathbb{R}$; imagen $(0, +\\infty)$.</li>
          <li>Pasa por $(0, 1)$ y $(1, a)$.</li>
          <li>Asíntota horizontal $y = 0$.</li>
          <li>Si $a &gt; 1$: creciente.  Si $0 &lt; a &lt; 1$: decreciente.</li>
        </ul>

        <h4>Reglas</h4>
        <ul class="clean">
          <li>$a^x\\cdot a^y = a^{x+y}$; $a^x / a^y = a^{x-y}$; $(a^x)^y = a^{xy}$.</li>
          <li>$a^{-x} = 1/a^x$; $a^0 = 1$.</li>
        </ul>

        <h4>El número $e$</h4>
        <p>$e = \\lim\\limits_{n\\to\\infty}\\left(1 + \\tfrac{1}{n}\\right)^n \\approx 2{,}71828$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Función logarítmica $\\log_a x$</h2>
      <div class="theory">
        <p>Inversa de $a^x$: $\\log_a y = x \\Leftrightarrow a^x = y$.</p>
        <ul class="clean">
          <li>Dominio $(0, +\\infty)$; imagen $\\mathbb{R}$.</li>
          <li>Pasa por $(1, 0)$ y $(a, 1)$.</li>
          <li>Asíntota vertical $x = 0$.</li>
          <li>Base 10: $\\log$.  Base $e$: $\\ln$ (neperiano).</li>
        </ul>

        <h4>Propiedades</h4>
        <ul class="clean">
          <li>$\\log_a(xy) = \\log_a x + \\log_a y$.</li>
          <li>$\\log_a(x/y) = \\log_a x - \\log_a y$.</li>
          <li>$\\log_a(x^n) = n\\log_a x$.</li>
          <li>$\\log_a 1 = 0$; $\\log_a a = 1$; $a^{\\log_a x} = x$.</li>
          <li>Cambio de base: $\\log_a x = \\dfrac{\\log_b x}{\\log_b a}$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>3. Ecuaciones exponenciales</h2>
      <div class="theory">
        <h4>Método 1: igualar bases</h4>
        <p>$a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x)$. Ej.: $2^{x+1} = 32 = 2^5 \\Rightarrow x = 4$.</p>

        <h4>Método 2: tomar logaritmos</h4>
        <p>$3^x = 7 \\Rightarrow x = \\log 7 / \\log 3 \\approx 1{,}771$.</p>

        <h4>Método 3: cambio de variable</h4>
        <p>$4^x - 5\\cdot 2^x + 4 = 0$. Sea $t = 2^x$: $t^2 - 5t + 4 = 0 \\Rightarrow t = 1, 4$. Así $x = 0$ o $x = 2$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>4. Ecuaciones logarítmicas</h2>
      <div class="theory">
        <ol>
          <li>Combina todo en <em>un solo</em> logaritmo a cada lado.</li>
          <li>$\\log_a A = \\log_a B \\Rightarrow A = B$ con $A, B &gt; 0$.</li>
          <li>$\\log_a A = k \\Rightarrow A = a^k$.</li>
          <li><strong>Comprueba siempre</strong>: se pueden colar soluciones con argumento no positivo.</li>
        </ol>
      </div>
    </section>

    <section class="panel">
      <h2>5. Aplicaciones</h2>
      <div class="theory">
        <h4>💰 Interés compuesto</h4>
        <p>Discreto: $C(t) = C_0 (1 + r)^n$. Continuo: $C(t) = C_0 e^{rt}$.</p>

        <h4>☢️ Decaimiento exponencial</h4>
        <p>$P(t) = P_0 e^{-kt}$ con $k &gt; 0$. Vida media: $T = \\ln 2 / k$.</p>

        <h4>📏 Escalas logarítmicas</h4>
        <ul class="clean">
          <li>pH = $-\\log[\\mathrm{H}^+]$ (acidez).</li>
          <li>Escala Richter (magnitud sísmica).</li>
          <li>Decibelios: $\\mathrm{dB} = 10\\log(I/I_0)$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Orientación para resolver una ecuación</h4>
        <ul class="clean">
          <li>🔹 Si puedes <em>igualar bases</em>, hazlo.</li>
          <li>🔹 Si hay $a^x$ y $a^{2x}$, cambio $t = a^x$.</li>
          <li>🔹 Si aparecen logs con la misma base, combínalos antes de "quitar el log".</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ $\\log(x+y) = \\log x + \\log y$. No vale: es $\\log(xy)$ lo que suma.</li>
          <li>❌ Olvidar comprobar en ecuaciones logarítmicas.</li>
          <li>❌ $(a+b)^n = a^n + b^n$. Nope.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Calcula $\\log_2 80 - \\log_2 5$.</summary><div class="theory">
        <p>$= \\log_2(80/5) = \\log_2 16 = 4$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Resuelve $5^{2x+1} = 125$.</summary><div class="theory">
        <p>$125 = 5^3 \\Rightarrow 2x + 1 = 3 \\Rightarrow x = 1$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Resuelve $2^{x+3} - 2^x = 56$.</summary><div class="theory">
        <p>$2^x(2^3 - 1) = 56 \\Rightarrow 2^x\\cdot 7 = 56 \\Rightarrow 2^x = 8 \\Rightarrow x = 3$.</p>
      </div></details>
      <details><summary><strong>4.</strong> $\\log x + \\log(x-3) = 1$.</summary><div class="theory">
        <p>$\\log[x(x-3)] = 1 \\Rightarrow x(x-3) = 10 \\Rightarrow x^2 - 3x - 10 = 0 \\Rightarrow x = 5$ o $-2$.</p>
        <p>Compruebo: $x=-2$ daría $\\log(-2)$. Solución: $x = 5$.</p>
      </div></details>
      <details><summary><strong>5.</strong> $\\log x^2 = (\\log x)^2$.</summary><div class="theory">
        <p>Sea $t = \\log x$: $2t = t^2 \\Rightarrow t(t-2) = 0$. $t = 0 \\Rightarrow x = 1$. $t = 2 \\Rightarrow x = 100$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Capital al 5 % anual compuesto continuo: ¿cuándo se duplica?</summary><div class="theory">
        <p>$2C_0 = C_0 e^{0{,}05 t} \\Rightarrow t = \\ln 2 / 0{,}05 \\approx 13{,}86$ años.</p>
      </div></details>
    </section>
  `;
}
