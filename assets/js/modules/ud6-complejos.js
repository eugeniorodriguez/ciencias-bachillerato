// UD 6 · Números complejos.
export async function renderUd6Complejos(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 6</div>
      <h1>Números complejos</h1>
      <p class="hero-lead">
        Forma binómica, polar y exponencial. Operaciones, conjugado, módulo y argumento, De Moivre, raíces n-ésimas, fórmula de Euler.
      </p>
    </section>

    <section class="panel">
      <h2>1. Necesidad de los complejos</h2>
      <div class="theory">
        <p>$x^2 + 1 = 0$ no tiene solución en $\\mathbb{R}$. Definimos la <strong>unidad imaginaria</strong> $i$ con $i^2 = -1$.</p>
        <p>$\\mathbb{C} = \\{a + bi : a, b \\in \\mathbb{R}\\}$. Cada $z = a + bi$ tiene parte real $\\operatorname{Re}(z) = a$ e imaginaria $\\operatorname{Im}(z) = b$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Forma binómica y operaciones</h2>
      <div class="theory">
        <h4>Suma, producto, conjugado</h4>
        <ul class="clean">
          <li>$(a+bi) + (c+di) = (a+c) + (b+d)i$.</li>
          <li>$(a+bi)(c+di) = (ac - bd) + (ad + bc)i$ (se opera como binomios con $i^2 = -1$).</li>
          <li>Conjugado: $\\overline{z} = a - bi$; $z\\cdot \\overline{z} = a^2 + b^2 = |z|^2$.</li>
          <li>Módulo: $|z| = \\sqrt{a^2 + b^2}$.</li>
        </ul>

        <h4>División</h4>
        <p>Multiplicar numerador y denominador por el conjugado del denominador.</p>
        <p>$\\dfrac{2+i}{1-2i} = \\dfrac{(2+i)(1+2i)}{(1-2i)(1+2i)} = \\dfrac{5i}{5} = i$.</p>

        <h4>Potencias de $i$</h4>
        <p>Ciclo: $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1, \\ldots$. Divide el exponente entre 4 y usa el resto.</p>
      </div>
    </section>

    <section class="panel">
      <h2>3. Representación gráfica</h2>
      <div class="theory">
        <p>Cada complejo $z = a + bi$ es un punto $(a, b)$ del plano (o un vector desde el origen). El eje OX es el <em>eje real</em>; el OY, el <em>eje imaginario</em>.</p>
        <ul class="clean">
          <li>Módulo $|z|$: distancia del origen al afijo.</li>
          <li>Argumento $\\arg(z)$: ángulo con el semieje OX positivo (cuidado con el cuadrante).</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>4. Forma polar y fórmula de Euler</h2>
      <div class="theory">
        <h4>Polar</h4>
        <p>$z = r_\\alpha = r(\\cos\\alpha + i\\sin\\alpha)$ con $r = |z|$, $\\alpha = \\arg z$.</p>

        <h4>Producto, cociente, potencia</h4>
        <ul class="clean">
          <li>$r_\\alpha \\cdot s_\\beta = (r s)_{\\alpha + \\beta}$.</li>
          <li>$r_\\alpha / s_\\beta = (r/s)_{\\alpha - \\beta}$.</li>
          <li><strong>De Moivre</strong>: $(r_\\alpha)^n = r^n_{\\,n\\alpha}$.</li>
        </ul>

        <h4>Raíces n-ésimas</h4>
        <p>$z = r_\\alpha$ tiene $n$ raíces distintas:</p>
        <p>$z_k = \\sqrt[n]{r}_{\\,\\tfrac{\\alpha + 360°k}{n}}$, con $k = 0, 1, \\ldots, n-1$.</p>
        <p class="hint">💡 Los afijos se reparten en un <strong>polígono regular</strong> de $n$ lados sobre una circunferencia de radio $\\sqrt[n]{r}$.</p>

        <h4>Euler</h4>
        <p>$e^{i\\alpha} = \\cos\\alpha + i\\sin\\alpha$. Identidad mítica: $e^{i\\pi} + 1 = 0$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>5. Ecuaciones en ℂ</h2>
      <div class="theory">
        <p>Por el <strong>Teorema Fundamental del Álgebra</strong>, toda ecuación polinómica de grado $n$ tiene exactamente $n$ raíces (contando multiplicidades) en $\\mathbb{C}$.</p>
        <p>Si el polinomio tiene coeficientes <em>reales</em>, las raíces complejas vienen en pares conjugados: si $z$ es raíz, también $\\overline{z}$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Paso binómica → polar</h4>
        <ol>
          <li>$r = \\sqrt{a^2 + b^2}$.</li>
          <li>$\\alpha = \\arctan(b/a)$, ajustando al cuadrante según signos de $a, b$.</li>
        </ol>
        <p class="hint">Ojo con $a = 0$: si $b &gt; 0$, $\\alpha = 90°$; si $b &lt; 0$, $\\alpha = 270°$.</p>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Olvidar conjugar al dividir.</li>
          <li>❌ Tomar siempre $\\arctan(b/a)$ sin mirar cuadrante (salen argumentos equivocados en II y III).</li>
          <li>❌ Calcular solo una raíz $n$-ésima: son <strong>$n$</strong> distintas.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Calcula $i^{45}$, $i^{100}$, $i^{753}$.</summary><div class="theory">
        <p>$45 = 4\\cdot 11 + 1 \\Rightarrow i^{45} = i$. $100 = 4\\cdot 25 \\Rightarrow i^{100} = 1$. $753 = 4\\cdot 188 + 1 \\Rightarrow i^{753} = i$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Multiplica $(3 + 2i)(1 - i)$.</summary><div class="theory">
        <p>$= 3 - 3i + 2i - 2i^2 = 3 - i + 2 = 5 - i$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Pasa a polar $z = -1 + i$.</summary><div class="theory">
        <p>$r = \\sqrt{2}$. En el II cuadrante: $\\alpha = 135°$. $z = \\sqrt{2}_{135°}$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Calcula $(1 + i)^{10}$ por De Moivre.</summary><div class="theory">
        <p>$1+i = \\sqrt{2}_{45°}$. $(\\sqrt{2})^{10}{}_{450°} = 32_{90°} = 32i$.</p>
      </div></details>
      <details><summary><strong>5.</strong> Halla las raíces cúbicas de $8$.</summary><div class="theory">
        <p>$8 = 8_{0°}$. Raíces: $2_{0°}, 2_{120°}, 2_{240°}$ = $2, -1+\\sqrt{3}i, -1-\\sqrt{3}i$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Resuelve $x^2 + 2x + 5 = 0$.</summary><div class="theory">
        <p>$\\Delta = 4 - 20 = -16$. $x = \\dfrac{-2 \\pm 4i}{2} = -1 \\pm 2i$.</p>
      </div></details>
      <details><summary><strong>7.</strong> Halla $z$ con $z\\cdot \\overline{z} = 25$ y $\\operatorname{Re}(z) = 3$.</summary><div class="theory">
        <p>$a = 3$ y $a^2 + b^2 = 25 \\Rightarrow b^2 = 16 \\Rightarrow b = \\pm 4$. Dos soluciones: $3 + 4i$ y $3 - 4i$.</p>
      </div></details>
    </section>
  `;
}
