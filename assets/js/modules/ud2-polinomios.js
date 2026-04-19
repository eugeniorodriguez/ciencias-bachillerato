// UD 2 · Polinomios y fracciones algebraicas.
export async function renderUd2Polinomios(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 2</div>
      <h1>Polinomios y fracciones algebraicas</h1>
      <p class="hero-lead">
        Operaciones, Ruffini, teoremas del resto y del factor, raíces racionales, productos notables, binomio de Newton y fracciones algebraicas.
      </p>
    </section>

    <section class="panel">
      <h2>1. Polinomios: definiciones</h2>
      <div class="theory">
        <p>$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$, $a_n\\ne 0$.</p>
        <ul class="clean">
          <li><strong>Grado</strong>: $n$.</li>
          <li><strong>Coeficiente líder</strong>: $a_n$; <strong>término independiente</strong>: $a_0$.</li>
          <li><strong>Polinomio mónico</strong>: $a_n = 1$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>2. Operaciones</h2>
      <div class="theory">
        <h4>Suma, resta, producto</h4>
        <p>Se agrupa por grado. $\\deg(P\\cdot Q) = \\deg P + \\deg Q$.</p>

        <h4>División polinómica</h4>
        <p>$P(x) = D(x)\\cdot C(x) + R(x)$, con $\\deg R &lt; \\deg D$ (o $R=0$).</p>

        <h4>🎯 Regla de Ruffini</h4>
        <p>Para dividir $P(x)$ entre $(x - a)$: se ponen los coeficientes, se baja el primero, se multiplica por $a$ y se suma al siguiente.</p>
        <p><strong>Ejemplo</strong>: $2x^3 - 3x^2 + 4x - 5$ entre $(x-2)$. Cociente $2x^2 + x + 6$, resto $7$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>3. Teoremas clave</h2>
      <div class="theory">
        <h4>Teorema del resto</h4>
        <p>El resto de dividir $P(x)$ entre $(x - a)$ es $P(a)$.</p>

        <h4>Teorema del factor</h4>
        <p>$a$ es raíz de $P(x)$ $\\Leftrightarrow$ $(x - a) \\mid P(x)$.</p>

        <h4>🎯 Raíces racionales (regla del candidato)</h4>
        <p>Si $P$ tiene coeficientes enteros y $p/q$ es raíz racional irreducible:</p>
        <ul class="clean">
          <li>$p$ divide al <em>término independiente</em> $a_0$.</li>
          <li>$q$ divide al <em>coeficiente líder</em> $a_n$.</li>
        </ul>
        <p class="hint">💡 Si $P$ es mónico con coeficientes enteros, las raíces racionales son divisores de $a_0$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>4. Productos notables</h2>
      <table class="table">
        <thead><tr><th>Identidad</th><th>Desarrollo</th></tr></thead>
        <tbody>
          <tr><td>$(a+b)^2$</td><td>$a^2 + 2ab + b^2$</td></tr>
          <tr><td>$(a-b)^2$</td><td>$a^2 - 2ab + b^2$</td></tr>
          <tr><td>$(a+b)(a-b)$</td><td>$a^2 - b^2$</td></tr>
          <tr><td>$(a+b)^3$</td><td>$a^3 + 3a^2 b + 3ab^2 + b^3$</td></tr>
          <tr><td>$a^3 + b^3$</td><td>$(a+b)(a^2 - ab + b^2)$</td></tr>
          <tr><td>$a^3 - b^3$</td><td>$(a-b)(a^2 + ab + b^2)$</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2>5. Binomio de Newton</h2>
      <div class="theory">
        <p>$\\displaystyle (a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^{k}$.</p>
        <p>Término general: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$.</p>
        <p>Los coeficientes $\\binom{n}{k}$ son los del <strong>triángulo de Pascal</strong> (cada número es suma de los dos superiores).</p>
        <p><strong>Ejemplo</strong>: $(2x - 3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>6. Fracciones algebraicas</h2>
      <div class="theory">
        <p>Cociente de polinomios $P(x)/Q(x)$. Operan como fracciones numéricas.</p>
        <ul class="clean">
          <li>Simplificar: factorizar y cancelar factores comunes.</li>
          <li>Suma/resta: común denominador (mcm).</li>
          <li>Producto: multiplicar numeradores y denominadores.</li>
          <li>División: multiplicar por la inversa del divisor.</li>
        </ul>
        <p><strong>Ejemplo</strong>: $\\dfrac{x^2 - 1}{x^2 - 2x + 1} = \\dfrac{(x-1)(x+1)}{(x-1)^2} = \\dfrac{x+1}{x-1}$ con $x\\ne 1$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Factorizar en 3 pasos</h4>
        <ol>
          <li>Factor común: sacar la mayor potencia/coef. que divida todos los términos.</li>
          <li>Identidades notables: suma/diferencia de cuadrados/cubos, trinomio cuadrado.</li>
          <li>Ruffini: probar divisores del término independiente para encontrar raíces.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ $(a+b)^2 = a^2 + b^2$. Falta $2ab$.</li>
          <li>❌ Simplificar $\\dfrac{x^2 + 1}{x + 1}$ a $x + 1$. <strong>No se puede</strong>: no hay factor común.</li>
          <li>❌ Olvidar las condiciones $x\\ne$ valores que anulan denominadores.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Factoriza $P(x) = x^3 - 6x^2 + 11x - 6$.</summary><div class="theory">
        <p>Candidatos: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Pruebo $P(1) = 0$, $P(2) = 0$, $P(3) = 0$.</p>
        <p>$P(x) = (x-1)(x-2)(x-3)$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Descompón $P(x) = 2x^3 + 3x^2 - 11x - 6$.</summary><div class="theory">
        <p>Candidatos: $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm 1/2, \\pm 3/2$. Probando con Ruffini, $x=2$ es raíz → $(x-2)(2x^2 + 7x + 3) = (x-2)(2x+1)(x+3)$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Halla el término independiente de $\\left(x - \\dfrac{2}{x}\\right)^6$.</summary><div class="theory">
        <p>$T_{k+1} = \\binom{6}{k} x^{6-k} (-2/x)^k = \\binom{6}{k} (-2)^k x^{6-2k}$. Independiente: $6-2k = 0 \\Rightarrow k=3$.</p>
        <p>$\\binom{6}{3}(-2)^3 = 20\\cdot(-8) = -160$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Divide $x^4 - 2x^3 + x - 1$ entre $x - 1$ por Ruffini.</summary><div class="theory">
        <p>Coefs $1, -2, 0, 1, -1$. Ruffini con $1$: $1, -1, -1, 0, -1$. Cociente $x^3 - x^2 - x$, resto $-1$.</p>
      </div></details>
      <details><summary><strong>5.</strong> Simplifica $\\dfrac{x^3 - 8}{x^2 - 4}$.</summary><div class="theory">
        <p>$\\dfrac{(x-2)(x^2+2x+4)}{(x-2)(x+2)} = \\dfrac{x^2+2x+4}{x+2}$, con $x\\ne \\pm 2$.</p>
      </div></details>
    </section>
  `;
}
