// UD 5 · Geometría analítica (vectores y rectas en el plano).
export async function renderUd5Geometria(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 5</div>
      <h1>Geometría analítica del plano</h1>
      <p class="hero-lead">
        Vectores y operaciones, producto escalar, rectas y todas sus ecuaciones, posiciones relativas, distancias, ángulos y área de un triángulo con coordenadas.
      </p>
    </section>

    <section class="panel">
      <h2>1. Vectores</h2>
      <div class="theory">
        <h4>Vector libre</h4>
        <p>Determinado por módulo, dirección y sentido. $\\vec{v} = (v_1, v_2) = v_1\\vec{i} + v_2\\vec{j}$.</p>
        <p>Vector entre dos puntos: $\\vec{AB} = B - A = (b_1 - a_1, b_2 - a_2)$.</p>

        <h4>Operaciones</h4>
        <ul class="clean">
          <li>Suma: $(u_1+v_1, u_2+v_2)$.</li>
          <li>Producto por escalar: $k\\vec{v} = (kv_1, kv_2)$.</li>
          <li>Módulo: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}$.</li>
          <li>Vector unitario: $\\vec{u} = \\vec{v}/|\\vec{v}|$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>2. Producto escalar</h2>
      <div class="theory">
        <p>$\\vec{u}\\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\alpha = u_1 v_1 + u_2 v_2$.</p>
        <ul class="clean">
          <li>$\\vec{u}\\cdot\\vec{u} = |\\vec{u}|^2$.</li>
          <li>$\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v} = 0$.</li>
          <li>$\\vec{u}\\parallel\\vec{v} \\Leftrightarrow u_1 v_2 - u_2 v_1 = 0$.</li>
          <li>Ángulo: $\\cos\\alpha = \\dfrac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|}$.</li>
        </ul>
        <p class="hint">💡 Vector perpendicular a $(a, b)$: $(-b, a)$ o $(b, -a)$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>3. Ecuaciones de la recta</h2>
      <table class="table">
        <thead><tr><th>Forma</th><th>Ecuación</th></tr></thead>
        <tbody>
          <tr><td>Vectorial</td><td>$(x, y) = (x_0, y_0) + t\\,(d_1, d_2)$</td></tr>
          <tr><td>Paramétrica</td><td>$x = x_0 + t d_1$; $y = y_0 + t d_2$</td></tr>
          <tr><td>Continua</td><td>$\\dfrac{x - x_0}{d_1} = \\dfrac{y - y_0}{d_2}$</td></tr>
          <tr><td>General</td><td>$Ax + By + C = 0$</td></tr>
          <tr><td>Explícita</td><td>$y = mx + n$</td></tr>
          <tr><td>Punto-pendiente</td><td>$y - y_0 = m(x - x_0)$</td></tr>
          <tr><td>Segmentaria</td><td>$x/a + y/b = 1$</td></tr>
        </tbody>
      </table>
      <p class="hint">💡 En $Ax + By + C = 0$: vector normal $\\vec{n} = (A, B)$; vector director $\\vec{d} = (-B, A)$.</p>
    </section>

    <section class="panel">
      <h2>4. Posición relativa de dos rectas</h2>
      <div class="theory">
        <p>Dadas $r: A_1 x + B_1 y + C_1 = 0$ y $s: A_2 x + B_2 y + C_2 = 0$:</p>
        <table class="table">
          <thead><tr><th>Razones</th><th>Posición</th></tr></thead>
          <tbody>
            <tr><td>$A_1/A_2 \\ne B_1/B_2$</td><td>Secantes</td></tr>
            <tr><td>$A_1/A_2 = B_1/B_2 \\ne C_1/C_2$</td><td>Paralelas</td></tr>
            <tr><td>$A_1/A_2 = B_1/B_2 = C_1/C_2$</td><td>Coincidentes</td></tr>
          </tbody>
        </table>
        <p><strong>Perpendicularidad</strong>: $m_1 m_2 = -1$ (o $A_1 A_2 + B_1 B_2 = 0$).</p>
      </div>
    </section>

    <section class="panel">
      <h2>5. Distancias y áreas</h2>
      <div class="theory">
        <ul class="clean">
          <li><strong>Punto-punto</strong>: $d(P, Q) = \\sqrt{(x_q - x_p)^2 + (y_q - y_p)^2}$.</li>
          <li><strong>Punto-recta</strong>: $d(P, r) = \\dfrac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$.</li>
          <li><strong>Rectas paralelas</strong>: $d(r, s) = \\dfrac{|C - C'|}{\\sqrt{A^2 + B^2}}$ si comparten $A, B$.</li>
          <li><strong>Área triángulo</strong>: $S = \\tfrac{1}{2}|x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)|$.</li>
          <li><strong>Baricentro</strong>: $G = \\left(\\tfrac{x_A + x_B + x_C}{3}, \\tfrac{y_A + y_B + y_C}{3}\\right)$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>6. Ángulo entre rectas</h2>
      <div class="theory">
        <p>$\\cos\\alpha = \\dfrac{|\\vec{d_1}\\cdot \\vec{d_2}|}{|\\vec{d_1}||\\vec{d_2}|}$, o con pendientes: $\\tan\\alpha = \\left|\\dfrac{m_1 - m_2}{1 + m_1 m_2}\\right|$.</p>
        <p>Si $m_1 m_2 = -1$, $\\alpha = 90°$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Receta para "halla la recta que…"</h4>
        <ul class="clean">
          <li>Pasa por $P$ con dirección $\\vec{d}$ → punto-pendiente o vectorial.</li>
          <li>Pasa por $P$ y $Q$ → recta por dos puntos.</li>
          <li>Paralela a $r$ → misma dirección (misma $m$).</li>
          <li>Perpendicular a $r$ → pendiente $-1/m$ (o normal en vez de director).</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Olvidar el valor absoluto en la distancia punto-recta.</li>
          <li>❌ Confundir vector director con vector normal en $Ax + By + C = 0$.</li>
          <li>❌ En la recta $x = k$ (vertical): no tiene pendiente, no uses $y - y_0 = m(x - x_0)$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> $A(1, 2)$, $B(4, 6)$. Halla $\\vec{AB}$, $|\\vec{AB}|$ y el unitario.</summary><div class="theory">
        <p>$\\vec{AB} = (3, 4)$. $|\\vec{AB}| = 5$. Unitario: $(3/5, 4/5)$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Determina $k$ para que $\\vec{u}=(k, 3)$ y $\\vec{v}=(2, -k)$ sean perpendiculares.</summary><div class="theory">
        <p>$\\vec{u}\\cdot\\vec{v} = 2k - 3k = -k = 0 \\Rightarrow k = 0$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Ecuaciones de la recta por $A(2, -1)$ y $B(-3, 4)$.</summary><div class="theory">
        <p>Director $\\vec{AB} = (-5, 5) \\sim (-1, 1)$. Pendiente $m = -1$.</p>
        <p>Explícita: $y = -x + 1$. General: $x + y - 1 = 0$.</p>
      </div></details>
      <details><summary><strong>4.</strong> Distancia de $P(2, 3)$ a $3x - 4y + 5 = 0$.</summary><div class="theory">
        <p>$d = |3\\cdot 2 - 4\\cdot 3 + 5|/\\sqrt{9+16} = |-1|/5 = 1/5$.</p>
      </div></details>
      <details><summary><strong>5.</strong> Circuncentro del triángulo $A(0,0)$, $B(6,0)$, $C(0,4)$.</summary><div class="theory">
        <p>Mediatriz de $AB$: $x = 3$. Mediatriz de $AC$: $y = 2$. Circuncentro $(3, 2)$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Ángulo entre $y = 2x - 1$ e $y = -3x + 2$.</summary><div class="theory">
        <p>$\\tan\\alpha = |2 - (-3)|/|1 + 2\\cdot(-3)| = 5/5 = 1 \\Rightarrow \\alpha = 45°$.</p>
      </div></details>
    </section>
  `;
}
