// UD 14 · Distribuciones discretas y continuas.
export async function renderUd14Distribuciones(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 14</div>
      <h1>Distribuciones discretas y continuas</h1>
      <p class="hero-lead">
        Variables aleatorias, esperanza y varianza, distribución binomial y distribución normal, tipificación y aproximación de la binomial por la normal.
      </p>
    </section>

    <section class="panel">
      <h2>1. Variables aleatorias</h2>
      <div class="theory">
        <p>Una <strong>variable aleatoria</strong> $X$ asocia a cada resultado de un experimento aleatorio un número real.</p>
        <ul class="clean">
          <li><strong>Discreta</strong>: toma valores aislados. Ej.: número de caras al lanzar 3 monedas.</li>
          <li><strong>Continua</strong>: puede tomar cualquier valor de un intervalo. Ej.: estatura.</li>
        </ul>

        <h4>Función de probabilidad / densidad</h4>
        <p>Discreta: $p_i = P(X = x_i)$, con $\\sum p_i = 1$.</p>
        <p>Continua: función densidad $f(x) \\ge 0$ con $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$. $P(a\\le X\\le b) = \\int_a^b f(x)\\,dx$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>2. Esperanza y varianza</h2>
      <div class="theory">
        <h4>Discretas</h4>
        <ul class="clean">
          <li>Esperanza (media): $E(X) = \\mu = \\sum x_i p_i$.</li>
          <li>Varianza: $\\mathrm{Var}(X) = \\sigma^2 = \\sum(x_i - \\mu)^2 p_i = \\sum x_i^2 p_i - \\mu^2$.</li>
          <li>Desviación típica: $\\sigma = \\sqrt{\\sigma^2}$.</li>
        </ul>

        <h4>Continuas</h4>
        <ul class="clean">
          <li>$E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$.</li>
          <li>$\\sigma^2 = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x)\\,dx$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>3. Distribución binomial $B(n, p)$</h2>
      <div class="theory">
        <p>Modela el número de éxitos en $n$ ensayos independientes con probabilidad $p$ de éxito.</p>

        <h4>Fórmulas</h4>
        <ul class="clean">
          <li>$P(X = k) = \\dbinom{n}{k} p^k (1-p)^{n-k}$, $k = 0, 1, \\ldots, n$.</li>
          <li>Media: $\\mu = n p$.</li>
          <li>Varianza: $\\sigma^2 = n p (1-p)$.</li>
        </ul>

        <h4>Condiciones de una binomial</h4>
        <ol>
          <li>Número fijo $n$ de ensayos.</li>
          <li>Cada ensayo tiene sólo dos resultados (éxito/fracaso).</li>
          <li>Los ensayos son independientes.</li>
          <li>La probabilidad $p$ es constante.</li>
        </ol>
      </div>
    </section>

    <section class="panel">
      <h2>4. Distribución normal $N(\\mu, \\sigma)$</h2>
      <div class="theory">
        <p>La más importante de las continuas. Curva en forma de <em>campana</em> simétrica respecto a $\\mu$.</p>

        <h4>Regla 68–95–99,7</h4>
        <ul class="clean">
          <li>$\\approx 68\\%$ de los datos en $\\mu \\pm \\sigma$.</li>
          <li>$\\approx 95\\%$ en $\\mu \\pm 2\\sigma$.</li>
          <li>$\\approx 99{,}7\\%$ en $\\mu \\pm 3\\sigma$.</li>
        </ul>

        <h4>🎯 Tipificación</h4>
        <p>$Z = \\dfrac{X - \\mu}{\\sigma}$ sigue una $N(0, 1)$. Cualquier cálculo con $N(\\mu, \\sigma)$ se reduce a la tabla/calculadora de la normal estándar.</p>

        <h4>Cálculo de probabilidades</h4>
        <p>Usando la tabla de $\\Phi(z) = P(Z \\le z)$:</p>
        <ul class="clean">
          <li>$P(Z \\le a) = \\Phi(a)$.</li>
          <li>$P(Z \\ge a) = 1 - \\Phi(a)$.</li>
          <li>$P(Z \\le -a) = 1 - \\Phi(a)$ (simetría).</li>
          <li>$P(a \\le Z \\le b) = \\Phi(b) - \\Phi(a)$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>5. Aproximación binomial → normal</h2>
      <div class="theory">
        <p>Si $n$ es grande y $p$ no está muy cerca de $0$ o $1$ (típicamente $np \\ge 5$ y $n(1-p) \\ge 5$), se puede aproximar $B(n, p) \\approx N(np, \\sqrt{np(1-p)})$.</p>
        <p><strong>Corrección por continuidad</strong>: $P(X = k) \\approx P(k - 0{,}5 \\le Y \\le k + 0{,}5)$.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 ¿Binomial o normal?</h4>
        <ul class="clean">
          <li>¿Contamos éxitos en $n$ ensayos? → binomial.</li>
          <li>¿Variable continua (estatura, peso, tiempo…) y campana? → normal.</li>
          <li>¿Binomial con $n$ grande? Tipifica y aproxima por la normal.</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Usar la binomial cuando $p$ varía (no independientes).</li>
          <li>❌ Olvidar tipificar antes de usar la tabla.</li>
          <li>❌ Olvidar la corrección por continuidad al pasar de binomial a normal.</li>
          <li>❌ Confundir $P(X = k)$ con $P(X \\le k)$ en la normal (en continuas, $P(X = k) = 0$).</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Lanzas 10 monedas. $P(\\text{exactamente 4 caras})$.</summary><div class="theory">
        <p>$X \\sim B(10, 0{,}5)$.  $P(X=4) = \\binom{10}{4} 0{,}5^{10} = 210/1024 \\approx 0{,}205$.</p>
      </div></details>
      <details><summary><strong>2.</strong> En una fábrica el 2 % de piezas es defectuosa. En una caja de 100, $P(\\text{al menos 1 defectuosa})$.</summary><div class="theory">
        <p>$P(X \\ge 1) = 1 - P(X=0) = 1 - 0{,}98^{100} \\approx 1 - 0{,}133 = 0{,}867$.</p>
      </div></details>
      <details><summary><strong>3.</strong> Media y desviación típica de $B(20, 0{,}3)$.</summary><div class="theory">
        <p>$\\mu = 6$. $\\sigma = \\sqrt{20\\cdot 0{,}3\\cdot 0{,}7} = \\sqrt{4{,}2} \\approx 2{,}05$.</p>
      </div></details>
      <details><summary><strong>4.</strong> $X \\sim N(170, 8)$ (estatura, cm). $P(X \\le 180)$.</summary><div class="theory">
        <p>$Z = (180 - 170)/8 = 1{,}25$. $P(Z \\le 1{,}25) \\approx 0{,}8944$.</p>
      </div></details>
      <details><summary><strong>5.</strong> $X \\sim N(50, 10)$. $P(40 \\le X \\le 65)$.</summary><div class="theory">
        <p>$Z_1 = (40-50)/10 = -1$; $Z_2 = (65-50)/10 = 1{,}5$.</p>
        <p>$P(-1 \\le Z \\le 1{,}5) = \\Phi(1{,}5) - \\Phi(-1) = 0{,}9332 - 0{,}1587 = 0{,}7745$.</p>
      </div></details>
      <details><summary><strong>6.</strong> Aproxima $B(200, 0{,}4)$ por la normal y calcula $P(X \\ge 90)$.</summary><div class="theory">
        <p>$\\mu = 80$, $\\sigma = \\sqrt{48} \\approx 6{,}93$.</p>
        <p>Con continuidad: $P(X \\ge 90) \\approx P(Y \\ge 89{,}5) = P(Z \\ge (89{,}5-80)/6{,}93) = P(Z \\ge 1{,}37) \\approx 0{,}085$.</p>
      </div></details>
    </section>
  `;
}
