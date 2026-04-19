// UD 4 · Trigonometría.
export async function renderUd4Trigonometria(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 4</div>
      <h1>Trigonometría</h1>
      <p class="hero-lead">
        Razones trigonométricas, identidades, ángulos notables, fórmulas de suma/doble/mitad, resolución de triángulos y ecuaciones trigonométricas.
      </p>
    </section>

    <section class="panel">
      <h2>1. Medida de ángulos</h2>
      <div class="theory">
        <p>La circunferencia completa mide $360°$ en sexagesimal y $2\\pi$ radianes. $180° = \\pi$ rad.</p>
        <p>Conversión: $\\alpha_{\\text{rad}} = \\alpha_{°}\\cdot \\dfrac{\\pi}{180}$;  $\\alpha_{°} = \\alpha_{\\text{rad}}\\cdot \\dfrac{180}{\\pi}$.</p>
        <p>Arco y sector (radio $r$, ángulo $\\alpha$ en radianes): $L = r\\alpha$;  $A = \\tfrac{1}{2}r^2\\alpha$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Razones trigonométricas</h2>
      <div class="theory">
        <p>En un triángulo rectángulo con cateto opuesto $co$, cateto contiguo $cc$ e hipotenusa $h$:</p>
        <ul class="clean">
          <li>$\\sin\\alpha = co/h$; $\\cos\\alpha = cc/h$; $\\tan\\alpha = co/cc = \\sin\\alpha/\\cos\\alpha$.</li>
          <li>$\\csc\\alpha = 1/\\sin\\alpha$; $\\sec\\alpha = 1/\\cos\\alpha$; $\\cot\\alpha = 1/\\tan\\alpha$.</li>
        </ul>

        <h4>Identidades fundamentales</h4>
        <ul class="clean">
          <li>$\\sin^2\\alpha + \\cos^2\\alpha = 1$.</li>
          <li>$1 + \\tan^2\\alpha = \\sec^2\\alpha$.</li>
          <li>$1 + \\cot^2\\alpha = \\csc^2\\alpha$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>3. Ángulos notables</h2>
      <table class="table">
        <thead><tr><th>$\\alpha$</th><th>$0°$</th><th>$30°$</th><th>$45°$</th><th>$60°$</th><th>$90°$</th></tr></thead>
        <tbody>
          <tr><td>$\\sin$</td><td>$0$</td><td>$1/2$</td><td>$\\sqrt{2}/2$</td><td>$\\sqrt{3}/2$</td><td>$1$</td></tr>
          <tr><td>$\\cos$</td><td>$1$</td><td>$\\sqrt{3}/2$</td><td>$\\sqrt{2}/2$</td><td>$1/2$</td><td>$0$</td></tr>
          <tr><td>$\\tan$</td><td>$0$</td><td>$\\sqrt{3}/3$</td><td>$1$</td><td>$\\sqrt{3}$</td><td>—</td></tr>
        </tbody>
      </table>
      <p class="hint">💡 Mnemotecnia: $\\sin$ en orden $0°, 30°, 45°, 60°, 90°$ vale $\\sqrt{0}/2, \\sqrt{1}/2, \\sqrt{2}/2, \\sqrt{3}/2, \\sqrt{4}/2$.</p>
    </section>

    <section class="panel">
      <h2>4. Signos por cuadrante</h2>
      <table class="table">
        <thead><tr><th>Cuadrante</th><th>$\\sin$</th><th>$\\cos$</th><th>$\\tan$</th></tr></thead>
        <tbody>
          <tr><td>I ($0°-90°$)</td><td>+</td><td>+</td><td>+</td></tr>
          <tr><td>II ($90°-180°$)</td><td>+</td><td>−</td><td>−</td></tr>
          <tr><td>III ($180°-270°$)</td><td>−</td><td>−</td><td>+</td></tr>
          <tr><td>IV ($270°-360°$)</td><td>−</td><td>+</td><td>−</td></tr>
        </tbody>
      </table>
      <p class="hint">Regla mnemotécnica: <strong>T</strong>odos (I) — <strong>S</strong>eno (II) — <strong>T</strong>angente (III) — <strong>C</strong>oseno (IV).</p>
    </section>

    <section class="panel">
      <h2>5. Fórmulas de suma y doble</h2>
      <div class="theory">
        <h4>Suma y diferencia</h4>
        <ul class="clean">
          <li>$\\sin(\\alpha\\pm\\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$.</li>
          <li>$\\cos(\\alpha\\pm\\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$.</li>
          <li>$\\tan(\\alpha\\pm\\beta) = \\dfrac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$.</li>
        </ul>

        <h4>Ángulo doble</h4>
        <ul class="clean">
          <li>$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$.</li>
          <li>$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$.</li>
          <li>$\\tan 2\\alpha = \\dfrac{2\\tan\\alpha}{1 - \\tan^2\\alpha}$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>6. Resolución de triángulos</h2>
      <div class="theory">
        <h4>Teorema de los senos</h4>
        <p>$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$.</p>

        <h4>Teorema del coseno (generaliza Pitágoras)</h4>
        <p>$a^2 = b^2 + c^2 - 2bc\\cos A$. Análogo para $b^2$ y $c^2$.</p>

        <h4>Área</h4>
        <ul class="clean">
          <li>$S = \\tfrac{1}{2}\\,a\\,b\\,\\sin C$.</li>
          <li>Herón: $S = \\sqrt{p(p-a)(p-b)(p-c)}$ con $p = (a+b+c)/2$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Ecuaciones trigonométricas — receta</h4>
        <ol>
          <li>Lleva todo a la <em>misma función</em> (o al mismo ángulo) usando identidades.</li>
          <li>Si aparece doble/mitad, usa fórmulas de doble o mitad para unificar.</li>
          <li>Hacer cambio $t = \\sin x$ (o $\\cos x$, $\\tan x$…) y resolver ecuación algebraica.</li>
          <li>Volver a la variable original y añadir <strong>todas</strong> las soluciones periódicas: $+360°k$, $+180°k$ según la función.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Dar una sola solución cuando hay infinitas por la periodicidad.</li>
          <li>❌ Usar $\\sin^{-1}$ como si fuese $1/\\sin$.</li>
          <li>❌ Confundir grados con radianes en la calculadora.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Si $\\sin\\alpha = 3/5$ y $\\alpha$ está en el II cuadrante, halla $\\cos\\alpha$ y $\\tan\\alpha$.</summary><div class="theory">
        <p>$\\cos^2\\alpha = 1 - 9/25 = 16/25$. En el II cuadrante $\\cos &lt; 0$: $\\cos\\alpha = -4/5$.</p>
        <p>$\\tan\\alpha = (3/5)/(-4/5) = -3/4$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Si $\\tan\\alpha = 2$ con $\\alpha \\in (0, \\pi/2)$, halla $\\sin 2\\alpha$ y $\\cos 2\\alpha$.</summary><div class="theory">
        <p>$\\sec^2\\alpha = 1 + 4 = 5$, $\\cos^2\\alpha = 1/5$, $\\sin^2\\alpha = 4/5$.</p>
        <p>$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\cdot (2/\\sqrt 5)\\cdot(1/\\sqrt 5) = 4/5$.</p>
        <p>$\\cos 2\\alpha = 1/5 - 4/5 = -3/5$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Resuelve $\\sin 2x = \\cos x$ en $[0, 2\\pi)$.</summary><div class="theory">
        <p>$2\\sin x\\cos x = \\cos x \\Rightarrow \\cos x(2\\sin x - 1) = 0$.</p>
        <p>$\\cos x = 0 \\Rightarrow x = \\pi/2, 3\\pi/2$. $\\sin x = 1/2 \\Rightarrow x = \\pi/6, 5\\pi/6$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Triángulo $a=7$, $b=10$, $C=60°$. Resuélvelo.</summary><div class="theory">
        <p>$c^2 = 49 + 100 - 140\\cos 60° = 149 - 70 = 79$ → $c = \\sqrt{79}\\approx 8{,}89$.</p>
        <p>Por senos: $\\sin A = 7\\sin 60°/\\sqrt{79} \\approx 0{,}682$ → $A\\approx 43{,}0°$.</p>
        <p>$B = 180° - 60° - 43° = 77°$.</p>
      </div></details>
      <details><summary><strong>5.</strong> Área del triángulo con lados 13, 14, 15.</summary><div class="theory">
        <p>$p = 21$. Herón: $S = \\sqrt{21\\cdot 8\\cdot 7\\cdot 6} = \\sqrt{7056} = 84$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Altura de una torre vista con ángulos de 30° y 45° desde dos puntos a 50 m uno del otro.</summary><div class="theory">
        <p>Llamemos $h$ y $d$ la distancia del punto más cercano a la base. $\\tan 45° = h/d$, $\\tan 30° = h/(d+50)$.</p>
        <p>$d = h$ y $h/(h+50) = 1/\\sqrt{3} \\Rightarrow \\sqrt{3}h = h + 50 \\Rightarrow h = 50/(\\sqrt{3}-1) \\approx 68{,}3$ m.</p>
      </div></details>
    </section>
  `;
}
