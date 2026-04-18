// Chuleta resumen de los 3 conceptos: límites, continuidad, asíntotas.
// Es una vista "todo en una página" con los truquillos más importantes.

export async function renderChuleta(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>📋 Chuleta UD 10 — resumen con trucos</h2>
      <p>Vista rápida de los tres conceptos. Si te atascas en un ejercicio, abre esta sección y repasa.</p>
      <p class="hint">Imprímela o guárdala como PDF desde el navegador (<span class="kbd">⌘ / Ctrl + P</span>) si la quieres en papel.</p>
    </section>

    <section class="panel">
      <h2>1️⃣ Límites</h2>

      <h3>🎯 Truco de los grados (en $\\pm\\infty$)</h3>
      <p>Para $\\dfrac{P(x)}{Q(x)}$ con grados $p$ y $q$:</p>
      <table class="table">
        <thead><tr><th>Relación</th><th>Límite en $\\pm\\infty$</th></tr></thead>
        <tbody>
          <tr><td>$p &lt; q$</td><td>$0$</td></tr>
          <tr><td>$p = q$</td><td>cociente de coeficientes líderes</td></tr>
          <tr><td>$p &gt; q$</td><td>$\\pm\\infty$ (mira el signo)</td></tr>
        </tbody>
      </table>

      <h3>🧩 Las 4 indeterminaciones clásicas</h3>
      <table class="table">
        <thead><tr><th>Forma</th><th>Técnica</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>$\\tfrac{0}{0}$</td><td>Factorizar y simplificar</td><td>$\\lim_{x\\to 1}\\tfrac{x^2-1}{x-1} = 2$</td></tr>
          <tr><td>$\\tfrac{\\infty}{\\infty}$</td><td>Truco de grados</td><td>$\\lim_{x\\to\\infty}\\tfrac{x^2+3x}{2x^2-5x}=\\tfrac12$</td></tr>
          <tr><td>$\\infty - \\infty$</td><td>Conjugado (si hay raíces) o factor común</td><td>$\\sqrt{x^2+4x}-x\\to 2$</td></tr>
          <tr><td>$\\tfrac{k}{0}$ ($k\\ne 0$)</td><td><strong>No</strong> es indeterminación: $\\pm\\infty$</td><td>$\\lim_{x\\to 2}\\tfrac{x-5}{(x-2)^2}=-\\infty$</td></tr>
        </tbody>
      </table>

      <h3>⚠️ Avisos importantes</h3>
      <ul class="clean">
        <li>📌 <strong>Sustituye primero</strong>: muchas veces no hay indeterminación.</li>
        <li>📌 <strong>$\\tfrac{k}{0^2}$</strong> → el signo lo da $k$, porque $(\\text{algo})^2\\ge 0$ siempre.</li>
        <li>📌 En $\\sqrt{x^2}$ con $x\\to-\\infty$, vale $|x|=-x$ (no $x$).</li>
      </ul>
    </section>

    <section class="panel">
      <h2>2️⃣ Continuidad</h2>

      <h3>✅ Las 3 condiciones (todas deben cumplirse)</h3>
      <ol>
        <li>Existe $f(a)$.</li>
        <li>Existe $\\lim_{x\\to a} f(x)$ (los laterales coinciden).</li>
        <li>$\\lim_{x\\to a} f(x) = f(a)$.</li>
      </ol>

      <h3>🎯 El truco del ≤ vs &lt; en funciones a trozos</h3>
      <p>Los <strong>límites</strong> laterales se calculan <em>siempre</em>. El símbolo (≤ o &lt;) sólo decide <strong>con qué trozo evalúas $f(a)$</strong>:</p>
      <ul class="clean">
        <li>➡️ El trozo con el $\\le$ tocando ese punto te da el valor $f(a)$.</li>
        <li>➡️ El trozo con el $&lt;$ estricto <em>no</em> lo usas para $f(a)$, pero sí para el límite lateral si te toca por ese lado.</li>
      </ul>

      <h3>🏷️ Clasificación de discontinuidad</h3>
      <table class="table">
        <thead><tr><th>Qué pasa</th><th>Tipo</th></tr></thead>
        <tbody>
          <tr><td>Laterales coinciden finitos pero $\\ne f(a)$ (o no existe $f(a)$)</td><td>🟢 Evitable</td></tr>
          <tr><td>Laterales distintos, ambos finitos</td><td>🟡 Salto finito</td></tr>
          <tr><td>Algún lateral $=\\pm\\infty$</td><td>🔴 Salto infinito / esencial (AV)</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2>3️⃣ Asíntotas</h2>

      <h3>📐 Esquema rápido</h3>
      <table class="table">
        <thead><tr><th>Paso</th><th>Qué hago</th></tr></thead>
        <tbody>
          <tr><td>Dominio</td><td>$Q(x)=0$ → esos valores fuera del dominio</td></tr>
          <tr><td>AV</td><td>Donde $Q(x)=0$ <em>y no se simplifica</em> con el numerador</td></tr>
          <tr><td>AH</td><td>$\\lim_{x\\to\\pm\\infty} f(x)$ → si es finito</td></tr>
          <tr><td>AO</td><td>Sólo si $\\deg P = \\deg Q + 1$. Dividir la fracción o usar $m,n$</td></tr>
        </tbody>
      </table>

      <h3>🕳️ AV vs agujero</h3>
      <ul class="clean">
        <li>$\\tfrac{k}{0}$ con $k\\ne 0$ → <strong>AV</strong>.</li>
        <li>$\\tfrac{0}{0}$ → factor común → simplificar → <strong>agujero</strong> en $(a, \\text{límite})$.</li>
      </ul>

      <h3>📏 Fórmulas de la oblicua</h3>
      <p>$y = mx + n$ donde:</p>
      <ul class="clean">
        <li>$m = \\displaystyle\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x}$</li>
        <li>$n = \\displaystyle\\lim_{x\\to\\pm\\infty} \\big[f(x) - mx\\big]$</li>
      </ul>
      <p class="hint">💡 <strong>Atajo:</strong> si puedes separar la fracción en <em>recta + resto que tiende a 0</em>, la recta es la oblicua directamente. Ej: $\\dfrac{4x^2-2}{x} = 4x - \\dfrac{2}{x}$ → AO $y=4x$.</p>

      <h3>🎯 Regla de oro de los grados</h3>
      <ul class="clean">
        <li>$\\deg P &lt; \\deg Q$ → AH $y = 0$. Sin oblicua.</li>
        <li>$\\deg P = \\deg Q$ → AH $y = $ (cociente de líderes). Sin oblicua.</li>
        <li>$\\deg P = \\deg Q + 1$ → <strong>sin AH, con AO</strong>.</li>
        <li>$\\deg P &gt; \\deg Q + 1$ → ni AH ni AO.</li>
      </ul>
    </section>

    <section class="panel">
      <h2>🧠 Checklist de examen</h2>
      <div class="theory">
        <h4>Para un límite</h4>
        <ol>
          <li>Sustituyo. ¿Sale número? → fin.</li>
          <li>¿$\\tfrac{k}{0}$? → $\\pm\\infty$, estudio laterales.</li>
          <li>¿Indeterminación? → identifico el tipo y aplico la técnica.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>Para estudiar continuidad</h4>
        <ol>
          <li>Puntos críticos = cambios de trozo + denominadores que se anulan + raíces con argumento negativo.</li>
          <li>En cada uno: las 3 condiciones.</li>
          <li>Clasifico si falla algo.</li>
        </ol>
      </div>
      <div class="theory">
        <h4>Para asíntotas</h4>
        <ol>
          <li>Factorizo y simplifico (identifico agujeros).</li>
          <li>AV en las raíces del denominador que queden.</li>
          <li>Truco de grados → decido AH y si miro oblicua.</li>
          <li>Si toca oblicua → atajo o fórmulas $m,n$.</li>
        </ol>
      </div>
    </section>
  `;
}
