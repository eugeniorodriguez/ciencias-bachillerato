export async function renderInicio(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Bienvenido 👋</h2>
      <p>Esta web es una herramienta de estudio <strong>interactiva</strong> para la UD 10 de Matemáticas: <em>Límites, Continuidad y Asíntotas</em>. Puedes probar ejemplos, resolver ejercicios, ver sus pasos, jugar con gráficas y <strong>añadir tus propias funciones y ejercicios</strong>.</p>
      <div class="grid" style="margin-top:16px">
        <a class="card" href="#/limites">
          <h3>📐 Límites</h3>
          <p>Teoría + calculadora + resolver indeterminaciones paso a paso.</p>
        </a>
        <a class="card" href="#/continuidad">
          <h3>🔗 Continuidad</h3>
          <p>Analiza funciones a trozos y clasifica discontinuidades.</p>
        </a>
        <a class="card" href="#/asintotas">
          <h3>📈 Asíntotas</h3>
          <p>Detecta asíntotas verticales, horizontales y oblicuas.</p>
        </a>
        <a class="card" href="#/chuleta">
          <h3>📋 Chuleta</h3>
          <p>Resumen rápido con todos los truquillos y esquemas.</p>
        </a>
        <a class="card" href="#/ficha">
          <h3>📝 Ficha PDF</h3>
          <p>Los 6 límites + continuidad + asíntotas del PDF, resueltos con pasos.</p>
        </a>
        <a class="card" href="#/practica">
          <h3>🎯 Práctica</h3>
          <p>Genera ejercicios aleatorios y guarda tus propios problemas.</p>
        </a>
        <a class="card" href="#/laboratorio">
          <h3>🧪 Laboratorio</h3>
          <p>Introduce <em>cualquier función</em> y obtén dominio, límites, asíntotas y gráfica.</p>
        </a>
      </div>
    </section>

    <section class="panel">
      <h2>Cómo usarla</h2>
      <ul class="clean">
        <li>📚 Empieza por la <strong>teoría</strong> de cada sección.</li>
        <li>🧮 Usa la <strong>calculadora</strong> para comprobar cualquier límite/asíntota.</li>
        <li>🧪 En el <strong>Laboratorio</strong> escribes una función (ej. <code class="kbd">(x^2-1)/(x-1)</code>) y te devuelve todo su análisis.</li>
        <li>💾 Los ejercicios y funciones que añadas se guardan en tu navegador (<code class="kbd">localStorage</code>).</li>
      </ul>
      <p class="hint">Sintaxis: usa <code class="kbd">^</code> para potencias, <code class="kbd">sqrt(...)</code>, <code class="kbd">abs(...)</code>, <code class="kbd">sin</code>, <code class="kbd">cos</code>, <code class="kbd">log</code>, <code class="kbd">exp</code>, etc. (math.js).</p>
    </section>
  `;
}
