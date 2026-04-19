// UD 1 · Números reales.
export async function renderUd1NumerosReales(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 1</div>
      <h1>Números reales</h1>
      <p class="hero-lead">
        Conjuntos numéricos, intervalos y valor absoluto, potencias y radicales, notación científica y primeras herramientas para manejar expresiones.
      </p>
    </section>

    <section class="panel">
      <h2>1. Conjuntos numéricos</h2>
      <div class="theory">
        <ul class="clean">
          <li>🔢 <strong>Naturales</strong> $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$.</li>
          <li>➖ <strong>Enteros</strong> $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$.</li>
          <li>➗ <strong>Racionales</strong> $\\mathbb{Q}$: fracciones $p/q$ con $q\\ne 0$. Decimal finito o periódico.</li>
          <li>π <strong>Irracionales</strong>: decimal infinito no periódico. Ej.: $\\sqrt{2}, \\pi, e$.</li>
          <li>ℝ <strong>Reales</strong> $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$: cubren toda la recta numérica.</li>
        </ul>
        <p>Inclusiones: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.</p>
      </div>

      <div class="theory">
        <h4>🎯 Fracción generatriz (decimal → fracción)</h4>
        <ul class="clean">
          <li>📗 <strong>Decimal exacto</strong>: $0{,}375 = \\tfrac{375}{1000} = \\tfrac{3}{8}$.</li>
          <li>📘 <strong>Periódico puro</strong>: $0{,}\\overline{7} = \\tfrac{7}{9}$; $0{,}\\overline{23} = \\tfrac{23}{99}$.</li>
          <li>📕 <strong>Periódico mixto</strong>: $0{,}1\\overline{6} = \\tfrac{16-1}{90} = \\tfrac{15}{90} = \\tfrac{1}{6}$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>2. Intervalos, entornos y valor absoluto</h2>
      <table class="table">
        <thead><tr><th>Notación</th><th>Definición</th></tr></thead>
        <tbody>
          <tr><td>$(a, b)$</td><td>$\\{x : a &lt; x &lt; b\\}$ abierto</td></tr>
          <tr><td>$[a, b]$</td><td>$\\{x : a \\le x \\le b\\}$ cerrado</td></tr>
          <tr><td>$[a, b)$</td><td>semiabierto por la derecha</td></tr>
          <tr><td>$(a, +\\infty)$</td><td>$x &gt; a$</td></tr>
          <tr><td>$E(a, r)$</td><td>$(a - r, a + r) = \\{x : |x - a| &lt; r\\}$ entorno</td></tr>
        </tbody>
      </table>

      <div class="theory">
        <h4>Valor absoluto</h4>
        <p>$|x| = x$ si $x \\ge 0$; $|x| = -x$ si $x &lt; 0$.</p>
        <ul class="clean">
          <li>$|x\\cdot y| = |x|\\cdot |y|$.</li>
          <li>Desigualdad triangular: $|x + y| \\le |x| + |y|$.</li>
          <li>$|x| \\le k \\Leftrightarrow -k \\le x \\le k$ (con $k &gt; 0$).</li>
          <li>$|x| \\ge k \\Leftrightarrow x \\le -k$ o $x \\ge k$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>3. Potencias y radicales</h2>
      <div class="theory">
        <h4>Reglas</h4>
        <ul class="clean">
          <li>$a^m \\cdot a^n = a^{m+n}$;  $a^m / a^n = a^{m-n}$.</li>
          <li>$(a^m)^n = a^{mn}$;  $(a\\cdot b)^n = a^n b^n$.</li>
          <li>$a^{-n} = \\dfrac{1}{a^n}$;  $a^{m/n} = \\sqrt[n]{a^m}$.</li>
        </ul>

        <h4>Radicales</h4>
        <ul class="clean">
          <li>$\\sqrt[n]{a}\\sqrt[n]{b} = \\sqrt[n]{ab}$.</li>
          <li>$\\sqrt[n]{\\sqrt[m]{a}} = \\sqrt[nm]{a}$.</li>
          <li>🪄 <strong>Racionalizar</strong>: multiplicar por el conjugado para eliminar raíces del denominador. $\\dfrac{1}{\\sqrt{3}-1} = \\dfrac{\\sqrt{3}+1}{2}$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>4. Notación científica</h2>
      <p>$N = a \\cdot 10^n$, con $1 \\le |a| &lt; 10$ y $n \\in \\mathbb{Z}$.</p>
      <ul class="clean">
        <li>$0{,}0000587 = 5{,}87\\cdot 10^{-5}$.</li>
        <li>$340\\,000\\,000 = 3{,}4\\cdot 10^{8}$.</li>
      </ul>
      <p class="hint">Para multiplicar o dividir en notación científica: se operan mantisas y se suman/restan exponentes.</p>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>✅ Pasos para una expresión racional→fracción</h4>
        <ol>
          <li>Cuenta cifras de la parte no periódica y del periodo.</li>
          <li>Numerador: número completo sin comas menos la parte no periódica.</li>
          <li>Denominador: tantos 9 como cifras del periodo, seguidos de tantos 0 como cifras de la parte no periódica tras la coma.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ $\\sqrt{x^2} = x$. Es $|x|$.</li>
          <li>❌ $|x+y| = |x|+|y|$. Sólo si tienen el mismo signo.</li>
          <li>❌ $a^{m+n} = a^m + a^n$. Es $a^m\\cdot a^n$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Pasa a fracción $2{,}\\overline{3}$.</summary><div class="theory">
        <p>$x = 2{,}333\\ldots$; $10x = 23{,}333\\ldots$; $10x - x = 21$; $x = 21/9 = 7/3$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Resuelve $|2x - 5| &lt; 3$.</summary><div class="theory">
        <p>$-3 &lt; 2x - 5 &lt; 3 \\Rightarrow 2 &lt; 2x &lt; 8 \\Rightarrow 1 &lt; x &lt; 4$. Solución: $(1, 4)$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Racionaliza $\\dfrac{5}{\\sqrt{7}}$ y $\\dfrac{2}{\\sqrt{3} + \\sqrt{2}}$.</summary><div class="theory">
        <p>$\\dfrac{5}{\\sqrt{7}} = \\dfrac{5\\sqrt{7}}{7}$.</p>
        <p>$\\dfrac{2}{\\sqrt{3}+\\sqrt{2}} = \\dfrac{2(\\sqrt{3}-\\sqrt{2})}{3-2} = 2(\\sqrt{3}-\\sqrt{2})$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Demuestra que $\\sqrt{2}$ es irracional.</summary><div class="theory">
        <p>Supón $\\sqrt{2} = p/q$ con la fracción irreducible. Entonces $2q^2 = p^2$, luego $p$ es par: $p=2k$. Sustituyendo: $q^2 = 2k^2$, así $q$ también es par. Contradicción con irreducible.</p>
      </div></details>
      <details><summary><strong>5.</strong> Expresa $0{,}\\overline{41\\,6}$ como fracción.</summary><div class="theory">
        <p>$0{,}4\\overline{16} = \\dfrac{416 - 4}{990} = \\dfrac{412}{990} = \\dfrac{206}{495}$.</p>
      </div></details>
    </section>
  `;
}
