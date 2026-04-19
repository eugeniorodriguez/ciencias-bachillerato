// UD 3 · Ecuaciones e inecuaciones.
export async function renderUd3Ecuaciones(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 3</div>
      <h1>Ecuaciones e inecuaciones</h1>
      <p class="hero-lead">
        Ecuaciones polinómicas, racionales, con radicales; sistemas lineales y no lineales; inecuaciones de primer y segundo grado, racionales y con valor absoluto.
      </p>
    </section>

    <section class="panel">
      <h2>1. Ecuaciones de primer y segundo grado</h2>
      <div class="theory">
        <h4>Primer grado</h4>
        <p>$ax + b = 0 \\Rightarrow x = -b/a$ (con $a\\ne 0$).</p>

        <h4>Segundo grado completa</h4>
        <p>$ax^2 + bx + c = 0 \\Rightarrow x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.</p>
        <p><strong>Discriminante</strong> $\\Delta = b^2 - 4ac$:</p>
        <ul class="clean">
          <li>$\\Delta &gt; 0$: dos soluciones reales distintas.</li>
          <li>$\\Delta = 0$: una solución doble.</li>
          <li>$\\Delta &lt; 0$: sin soluciones reales (complejas conjugadas).</li>
        </ul>

        <h4>🎯 Suma y producto de raíces (Vieta)</h4>
        <p>$x_1 + x_2 = -b/a$;  $x_1 \\cdot x_2 = c/a$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Ecuaciones especiales</h2>

      <div class="theory">
        <h4>🔁 Bicuadradas</h4>
        <p>$ax^4 + bx^2 + c = 0$ con el cambio $t = x^2$.</p>

        <h4>📏 Con radicales</h4>
        <ol>
          <li>Aísla la raíz en un miembro.</li>
          <li>Eleva al cuadrado (o a la potencia que toque).</li>
          <li>Si hay otra raíz, repite.</li>
          <li><strong>Comprueba siempre</strong> en la ecuación original (pueden aparecer soluciones espurias).</li>
        </ol>

        <h4>🔠 Racionales</h4>
        <p>$P(x)/Q(x) = 0 \\Rightarrow P(x) = 0$ con $Q(x)\\ne 0$. Excluir las $x$ que anulan $Q$.</p>

        <h4>📊 Grado &gt; 2</h4>
        <p>Se factorizan con Ruffini o factor común.</p>
      </div>
    </section>

    <section class="panel">
      <h2>3. Sistemas de ecuaciones</h2>
      <div class="theory">
        <h4>Lineales 2×2: discusión</h4>
        <table class="table">
          <thead><tr><th>Caso</th><th>Tipo</th></tr></thead>
          <tbody>
            <tr><td>$\\tfrac{a}{a'} \\ne \\tfrac{b}{b'}$</td><td>Compatible determinado (solución única)</td></tr>
            <tr><td>$\\tfrac{a}{a'} = \\tfrac{b}{b'} \\ne \\tfrac{c}{c'}$</td><td>Incompatible</td></tr>
            <tr><td>$\\tfrac{a}{a'} = \\tfrac{b}{b'} = \\tfrac{c}{c'}$</td><td>Compatible indeterminado (infinitas)</td></tr>
          </tbody>
        </table>

        <h4>Métodos</h4>
        <ul class="clean">
          <li>Sustitución, igualación, reducción.</li>
          <li>Gauss (escalonamiento).</li>
        </ul>

        <h4>No lineales</h4>
        <p>Sustitución: despejar una variable y llevarla a la otra ecuación. Habitualmente aparece una cuadrática o bicuadrada.</p>
      </div>
    </section>

    <section class="panel">
      <h2>4. Inecuaciones</h2>
      <div class="theory">
        <h4>Regla básica</h4>
        <p>Al multiplicar/dividir por un número <strong>negativo</strong>, se invierte el sentido de la desigualdad.</p>

        <h4>🎯 Segundo grado: estudio del signo del trinomio</h4>
        <ol>
          <li>Resuelve $ax^2+bx+c = 0$.</li>
          <li>Con el signo de $a$ y las raíces, determina en qué intervalos es positivo/negativo.</li>
          <li>Sin raíces reales y $a&gt;0$: siempre positivo. Si $a&lt;0$: siempre negativo.</li>
        </ol>

        <h4>Racionales e inecuaciones con valor absoluto</h4>
        <ul class="clean">
          <li>$P(x)/Q(x) \\ge 0$: estudiar el signo por tramos; $Q\\ne 0$ siempre.</li>
          <li>$|f(x)| &lt; k \\Leftrightarrow -k &lt; f(x) &lt; k$.</li>
          <li>$|f(x)| &gt; k \\Leftrightarrow f(x) &lt; -k$ o $f(x) &gt; k$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>⚡ Radicales: check obligatorio</h4>
        <p>Elevar al cuadrado introduce a veces soluciones que <em>no valen</em>. Sustituye cada solución en la original para aceptarla.</p>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ "Cancelar" un factor en una inecuación multiplicando por él sin comprobar su signo.</li>
          <li>❌ Olvidar que $x^2 = a$ tiene dos soluciones $\\pm\\sqrt{a}$.</li>
          <li>❌ En sistemas no lineales, descartar la solución negativa por costumbre: verifica el contexto.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Resuelve $x^4 - 10x^2 + 9 \\le 0$.</summary><div class="theory">
        <p>Bicuadrada: $t = x^2$; $t^2 - 10t + 9 \\le 0$ → $1 \\le t \\le 9$ → $1 \\le x^2 \\le 9$.</p>
        <p>$x \\in [-3, -1] \\cup [1, 3]$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Resuelve $\\sqrt{x+6} = x$.</summary><div class="theory">
        <p>Elevando: $x + 6 = x^2 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow x = 3$ o $x = -2$.</p>
        <p>Compruebo: $x=3 \\to \\sqrt{9}=3$ ✅. $x=-2 \\to \\sqrt{4}=2\\ne -2$ ❌. Sólo $x = 3$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Sistema: $x + y = 5$, $xy = 6$.</summary><div class="theory">
        <p>$y = 5 - x$. Sustituyo: $x(5-x) = 6 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow x = 2, 3$.</p>
        <p>Soluciones $(2, 3)$ y $(3, 2)$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Discute según $k$: $kx + y = 1$, $x + ky = 1$.</summary><div class="theory">
        <p>$\\tfrac{k}{1} = \\tfrac{1}{k} \\Rightarrow k^2 = 1 \\Rightarrow k = \\pm 1$.</p>
        <ul class="clean">
          <li>$k \\ne \\pm 1$: compatible determinado.</li>
          <li>$k = 1$: compatible indeterminado.</li>
          <li>$k = -1$: incompatible (las ecuaciones son $-x+y=1$ y $x-y=1$).</li>
        </ul>
      </div></details>
      <details><summary><strong>5.</strong> Resuelve $x^2 - 5x + 6 &gt; 0$.</summary><div class="theory">
        <p>Raíces $2, 3$. Parábola abre hacia arriba → positiva fuera de las raíces. Solución: $(-\\infty, 2) \\cup (3, +\\infty)$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Halla el dominio de $f(x) = \\sqrt{x^2 - 4}/(x - 3)$.</summary><div class="theory">
        <p>$x^2 - 4 \\ge 0 \\Rightarrow x\\le -2$ o $x\\ge 2$. Además $x\\ne 3$. Dom: $(-\\infty, -2] \\cup [2, 3)\\cup (3, +\\infty)$.</p>
      </div></details>
    </section>
  `;
}
