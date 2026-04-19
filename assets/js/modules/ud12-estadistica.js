// UD 12 · Estadística descriptiva (uni + bidimensional).
export async function renderUd12Estadistica(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 12</div>
      <h1>Estadística descriptiva</h1>
      <p class="hero-lead">
        Tablas y gráficas, medidas de tendencia central, dispersión y posición. Distribuciones bidimensionales, covarianza, correlación y rectas de regresión.
      </p>
    </section>

    <section class="panel">
      <h2>1. Conceptos básicos</h2>
      <div class="theory">
        <ul class="clean">
          <li><strong>Población</strong>, <strong>muestra</strong>, <strong>individuo</strong>, <strong>variable estadística</strong>.</li>
          <li>Variables <strong>cualitativas</strong> (nominales/ordinales) y <strong>cuantitativas</strong> (discretas/continuas).</li>
          <li>Frecuencias: absoluta $f_i$, relativa $h_i = f_i/N$, acumuladas $F_i$, $H_i$.</li>
          <li>Datos agrupados: intervalos (clases) con marca de clase $x_i$ = punto medio.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>2. Medidas de centralización</h2>
      <table class="table">
        <thead><tr><th>Medida</th><th>Fórmula / Cómo se calcula</th></tr></thead>
        <tbody>
          <tr><td>Media</td><td>$\\bar{x} = \\dfrac{\\sum x_i f_i}{N}$</td></tr>
          <tr><td>Mediana (Me)</td><td>Valor central tras ordenar. En datos agrupados: $L + \\dfrac{N/2 - F_{i-1}}{f_i}\\cdot a$</td></tr>
          <tr><td>Moda (Mo)</td><td>Valor más frecuente. En agrupados: $L + \\dfrac{d_1}{d_1 + d_2}\\cdot a$</td></tr>
        </tbody>
      </table>
      <p class="hint">💡 Distribución simétrica: $\\bar{x} \\approx \\mathrm{Me} \\approx \\mathrm{Mo}$. Asimetría positiva (cola a la derecha): $\\mathrm{Mo} &lt; \\mathrm{Me} &lt; \\bar{x}$.</p>
    </section>

    <section class="panel">
      <h2>3. Medidas de dispersión y posición</h2>
      <div class="theory">
        <ul class="clean">
          <li><strong>Rango</strong>: $R = x_{\\max} - x_{\\min}$.</li>
          <li><strong>Varianza</strong>: $\\sigma^2 = \\dfrac{\\sum x_i^2 f_i}{N} - \\bar{x}^2$.</li>
          <li><strong>Desviación típica</strong>: $\\sigma = \\sqrt{\\sigma^2}$.</li>
          <li><strong>Coeficiente de variación</strong>: $\\mathrm{CV} = \\sigma/|\\bar{x}|$ (sirve para comparar dispersiones).</li>
          <li><strong>Cuartiles</strong> $Q_1, Q_2=\\mathrm{Me}, Q_3$. <strong>RIC</strong> $= Q_3 - Q_1$.</li>
          <li><strong>Tipificación</strong>: $z = (x - \\bar{x})/\\sigma$.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>4. Distribuciones bidimensionales</h2>
      <div class="theory">
        <p>Sobre cada individuo se miden dos variables $(X, Y)$. La <strong>nube de puntos</strong> sugiere el tipo de relación.</p>

        <h4>Covarianza</h4>
        <p>$\\sigma_{xy} = \\dfrac{\\sum x_i y_j f_{ij}}{N} - \\bar{x}\\bar{y}$.</p>

        <h4>Coeficiente de correlación lineal</h4>
        <p>$r = \\dfrac{\\sigma_{xy}}{\\sigma_x \\sigma_y}$,  $-1 \\le r \\le 1$.</p>
        <ul class="clean">
          <li>$r = 1$: relación lineal directa perfecta.</li>
          <li>$r = -1$: inversa perfecta.</li>
          <li>$r = 0$: no hay relación lineal (puede haberla no lineal).</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>5. Rectas de regresión</h2>
      <div class="theory">
        <p>Ambas pasan por $(\\bar{x}, \\bar{y})$.</p>
        <ul class="clean">
          <li><strong>$Y$ sobre $X$</strong> (predice $y$ dado $x$): $y - \\bar{y} = \\dfrac{\\sigma_{xy}}{\\sigma_x^2}(x - \\bar{x})$.</li>
          <li><strong>$X$ sobre $Y$</strong>: $x - \\bar{x} = \\dfrac{\\sigma_{xy}}{\\sigma_y^2}(y - \\bar{y})$.</li>
        </ul>
        <p>Producto de pendientes $= r^2$.  <strong>Coeficiente de determinación</strong> $R^2 = r^2$: fracción de variabilidad de $Y$ explicada por la regresión.</p>
      </div>
    </section>

    <section class="panel">
      <h2>📋 Chuleta</h2>
      <div class="theory">
        <h4>🎯 Decisión rápida</h4>
        <ul class="clean">
          <li>¿Hay valores atípicos muy altos? → mejor mediana que media.</li>
          <li>¿Comparas dos distribuciones con unidades distintas? → coeficiente de variación.</li>
          <li>¿Quieres localizar un dato en su distribución? → tipificación $z$.</li>
          <li>¿Cuál es más homogénea? → menor CV.</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores frecuentes</h4>
        <ul class="clean">
          <li>❌ Confundir correlación con causalidad.</li>
          <li>❌ Extrapolar la regresión fuera del rango observado.</li>
          <li>❌ Usar media con distribuciones muy asimétricas.</li>
          <li>❌ Usar $\\sigma$ para comparar dispersión de distribuciones con distintas medias.</li>
        </ul>
      </div>
    </section>

    <section class="panel">
      <h2>📝 Ejercicios resueltos</h2>
      <details><summary><strong>1.</strong> Media, mediana, moda y $\\sigma$ de: 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 10, 10.</summary><div class="theory">
        <p>$N = 20$. Media: $147/20 = 7{,}35$. Mediana: $(7+8)/2 = 7{,}5$. Moda: 8 (aparece 5 veces).</p>
        <p>$\\sigma^2 = 1133/20 - 7{,}35^2 \\approx 2{,}63$; $\\sigma \\approx 1{,}62$.</p>
      </div></details>
      <details><summary><strong>2.</strong> Dos grupos: A ($\\bar{x}=6$, $\\sigma=1$), B ($\\bar{x}=7{,}5$, $\\sigma=2$). ¿Cuál es más homogéneo?</summary><div class="theory">
        <p>$\\mathrm{CV}_A = 1/6 \\approx 17\\%$. $\\mathrm{CV}_B = 2/7{,}5 \\approx 26{,}7\\%$.</p>
        <p>Grupo A más homogéneo.</p>
      </div></details>
      <details><summary><strong>3.</strong> Media de 30 datos es 50. Al añadir un nuevo dato, la media pasa a 51. ¿Cuál es el dato añadido?</summary><div class="theory">
        <p>Suma nueva = $51\\cdot 31 = 1581$. Suma antigua = $50\\cdot 30 = 1500$. Dato = $81$.</p>
      </div></details>
      <details><summary><strong>4.</strong> $\\sigma_x^2 = 4$, $\\sigma_y^2 = 9$, $\\sigma_{xy} = 5$. Halla $r$.</summary><div class="theory">
        <p>$|\\sigma_{xy}| \\le \\sigma_x \\sigma_y = 6$ ✅. $r = 5/(2\\cdot 3) = 5/6 \\approx 0{,}833$.</p>
      </div></details>
      <details><summary><strong>5.</strong> En 50 personas, $\\bar{x}=170$ (altura cm), $\\bar{y}=68$ (peso kg), $\\sigma_x=8$, $\\sigma_y=10$, $r=0{,}75$. Estima el peso de alguien de 180 cm.</summary><div class="theory">
        <p>Pendiente $Y/X$: $r\\cdot \\sigma_y/\\sigma_x = 0{,}75\\cdot 10/8 = 0{,}9375$.</p>
        <p>$y - 68 = 0{,}9375(x - 170)$. Para $x = 180$: $y \\approx 77{,}4$ kg.</p>
      </div></details>
      <details><summary><strong>6.</strong> Datos (1,2),(2,3),(3,5),(4,6),(5,8),(6,9): halla $r$.</summary><div class="theory">
        <p>$\\bar{x}=3{,}5$, $\\bar{y}=5{,}5$. $\\sigma_x^2 = 35/12 \\approx 2{,}92$, $\\sigma_y^2\\approx 6{,}25$, $\\sigma_{xy}\\approx 4{,}25$.</p>
        <p>$r = 4{,}25 / \\sqrt{2{,}92\\cdot 6{,}25} \\approx 0{,}995$. Correlación muy fuerte y directa.</p>
      </div></details>
    </section>
  `;
}
