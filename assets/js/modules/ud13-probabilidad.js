// UD 13 · Probabilidad.
export async function renderUd13Probabilidad(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 13</div>
      <h1>Probabilidad</h1>
      <p class="hero-lead">
        Experimentos aleatorios, sucesos, regla de Laplace, combinatoria, probabilidad condicionada, independencia, probabilidad total y teorema de Bayes.
      </p>
    </section>

    <section class="panel">
      <h2>1. Experimentos aleatorios y sucesos</h2>
      <div class="theory">
        <ul class="clean">
          <li>🎲 <strong>Espacio muestral</strong> $E$ (o $\\Omega$): todos los resultados posibles.</li>
          <li>📦 <strong>Suceso</strong>: subconjunto de $E$. Elemental si sólo tiene un resultado.</li>
          <li>✅ <strong>Seguro</strong>: $E$. <strong>Imposible</strong>: $\\emptyset$.</li>
          <li>❌ <strong>Incompatibles</strong>: $A\\cap B = \\emptyset$.</li>
          <li>➕ <strong>Partición</strong> de $E$: sucesos $A_i$ disjuntos con $\\bigcup A_i = E$.</li>
        </ul>

        <h4>Operaciones</h4>
        <p>$A\\cup B$ ("o"), $A\\cap B$ ("y"), $\\overline{A}$ (complementario), $A - B = A\\cap \\overline{B}$.</p>

        <h4>Leyes de De Morgan</h4>
        <p>$\\overline{A\\cup B} = \\overline{A}\\cap \\overline{B}$;  $\\overline{A\\cap B} = \\overline{A}\\cup \\overline{B}$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Probabilidad (Kolmogórov) y propiedades</h2>
      <div class="theory">
        <h4>Axiomas</h4>
        <ol>
          <li>$P(A) \\ge 0$.</li>
          <li>$P(E) = 1$.</li>
          <li>$A\\cap B = \\emptyset \\Rightarrow P(A\\cup B) = P(A) + P(B)$.</li>
        </ol>

        <h4>Propiedades</h4>
        <ul class="clean">
          <li>$P(\\overline{A}) = 1 - P(A)$.</li>
          <li>$A\\subset B \\Rightarrow P(A) \\le P(B)$.</li>
          <li>Unión general: $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$.</li>
          <li>$P(A - B) = P(A) - P(A\\cap B)$.</li>
        </ul>

        <h4>🎯 Regla de Laplace (espacio finito equiprobable)</h4>
        <p>$P(A) = \\dfrac{\\text{casos favorables}}{\\text{casos posibles}}$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>3. Combinatoria</h2>
      <table class="table">
        <thead><tr><th>Situación</th><th>Fórmula</th></tr></thead>
        <tbody>
          <tr><td>Variaciones sin repetición</td><td>$V_{n,k} = \\dfrac{n!}{(n-k)!}$</td></tr>
          <tr><td>Variaciones con repetición</td><td>$VR_{n,k} = n^k$</td></tr>
          <tr><td>Permutaciones</td><td>$P_n = n!$</td></tr>
          <tr><td>Permutaciones con repetición</td><td>$PR_n^{a_1, a_2, \\ldots} = \\dfrac{n!}{a_1! a_2! \\cdots}$</td></tr>
          <tr><td>Combinaciones</td><td>$C(n,k) = \\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2>4. Probabilidad condicionada e independencia</h2>
      <div class="theory">
        <p>$P(A \\mid B) = \\dfrac{P(A\\cap B)}{P(B)}$ (con $P(B) &gt; 0$).</p>
        <p>Regla del producto: $P(A\\cap B) = P(A)\\cdot P(B\\mid A) = P(B)\\cdot P(A\\mid B)$.</p>

        <h4>Independencia</h4>
        <p>$A$ y $B$ son independientes $\\Leftrightarrow P(A\\cap B) = P(A)\\cdot P(B)$.</p>
        <p class="hint">💡 Independencia <em>no es</em> incompatibilidad. Si son incompatibles con probabilidades no nulas, <strong>no</strong> son independientes.</p>
      </div>
    </section>

    <section class="panel">
      <h2>5. Probabilidad total y Bayes</h2>
      <div class="theory">
        <p>Sea $\\{A_1, \\ldots, A_n\\}$ una partición con $P(A_i) &gt; 0$.</p>

        <h4>Probabilidad total</h4>
        <p>$P(B) = \\displaystyle\\sum_{i} P(A_i)\\cdot P(B \\mid A_i)$.</p>

        <h4>Teorema de Bayes</h4>
        <p>$P(A_i \\mid B) = \\dfrac{P(A_i)\\cdot P(B \\mid A_i)}{\\displaystyle\\sum_j P(A_j)\\cdot P(B \\mid A_j)}$.</p>

        <p class="hint">🌳 Dibuja siempre un <strong>diagrama en árbol</strong>: primera ramificación = partición; segunda = suceso $B$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Cómo decidir qué usar</h4>
        <ul class="clean">
          <li>"Sacar sin reemplazar" → probabilidad condicionada.</li>
          <li>"Lanzar dos veces una moneda" → independiente, $P\\cdot P$.</li>
          <li>"Probabilidad de que suene la alarma": probabilidad total.</li>
          <li>"Si ha sonado la alarma, probabilidad de que de verdad hubo atraco": Bayes.</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Confundir $P(A\\cap B)$ con $P(A\\mid B)$.</li>
          <li>❌ Tratar como independientes dos sucesos claramente dependientes (extracciones sin reemplazo).</li>
          <li>❌ Olvidar las condiciones de partición al aplicar Bayes (los $A_i$ han de ser disjuntos y cubrir $E$).</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Dado: $A$=par, $B$=primo. Halla $P(A\\cup B)$ y $P(A\\cap B)$.</summary><div class="theory">
        <p>$A=\\{2,4,6\\}$; $B=\\{2,3,5\\}$; $A\\cap B = \\{2\\}$; $A\\cup B = \\{2,3,4,5,6\\}$.</p>
        <p>$P(A\\cup B) = 5/6$; $P(A\\cap B) = 1/6$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Bolsa con 3 rojas, 2 blancas, 4 verdes. $P(\\text{blanca o verde})$.</summary><div class="theory">
        <p>Incompatibles: $P(B) + P(V) = 2/9 + 4/9 = 6/9 = 2/3$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Moneda trucada con $P(C) = 2P(X)$. Halla ambas.</summary><div class="theory">
        <p>Sea $p = P(X)$. $2p + p = 1 \\Rightarrow p = 1/3$. $P(C) = 2/3$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Aula I tiene 10 % de ordenadores no funcionantes; aula II, 3 %. Se elige aula y ordenador al azar. ¿P(funcione)?</summary><div class="theory">
        <p>Probabilidad total: $P(F) = 0{,}5\\cdot 0{,}9 + 0{,}5\\cdot 0{,}97 = 0{,}935$.</p>
      </div></details>
      <details><summary><strong>5.</strong> DVDs revisados por A (30 %, deja 3 % con fallo), B (50 %, 1 %), C (20 %, 2 %). DVD defectuoso: ¿P(lo revisó A)?</summary><div class="theory">
        <p>$P(E) = 0{,}03\\cdot 0{,}3 + 0{,}01\\cdot 0{,}5 + 0{,}02\\cdot 0{,}2 = 0{,}018$.</p>
        <p>Bayes: $P(A\\mid E) = 0{,}009/0{,}018 = 0{,}5$. $P(B\\mid E) = 0{,}28$; $P(C\\mid E) = 0{,}22$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Familia de 5 hijos (P(niño) = 1/2). $P(\\text{al menos un niño})$.</summary><div class="theory">
        <p>$P(\\overline{A}) = (1/2)^5 = 1/32 \\Rightarrow P(A) = 31/32$.</p>
      </div></details>
      <details><summary><strong>7.</strong> Lotería de 100 números, Juan lleva 8. Se sortean 2 premios. $P(\\text{gana al menos uno})$.</summary><div class="theory">
        <p>$P(\\text{uno solo}) = \\binom{8}{1}\\binom{92}{1}/\\binom{100}{2} = 736/4950$.</p>
        <p>$P(\\text{los dos}) = \\binom{8}{2}/\\binom{100}{2} = 28/4950$.</p>
        <p>$P(\\text{al menos uno}) = 764/4950 \\approx 0{,}154$.</p>
      </div></details>
    </section>
  `;
}
