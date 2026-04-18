// Landing del tema UD 10 (Límites, Continuidad, Asíntotas).
// Muestra objetivos, índice del tema y CTAs a las subsecciones.
export async function renderUd10Home(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato · UD 10</div>
      <h1>Límites, Continuidad y Asíntotas</h1>
      <p class="hero-lead">
        Todo el tema en un mismo sitio: teoría con trucos, ejercicios resueltos paso a paso, banco de práctica y un laboratorio donde introduces tus propias funciones.
      </p>
      <div class="row" style="margin-top:18px">
        <a class="btn primary" href="#/ficha">Ir a la ficha del PDF</a>
        <a class="btn ghost" href="#/chuleta">Ver chuleta</a>
        <a class="btn ghost" href="#/laboratorio">Probar laboratorio</a>
      </div>
    </section>

    <section class="panel">
      <h2>Objetivos del tema</h2>
      <ul>
        <li>Entender qué es un límite y cómo resolverlo, incluyendo las indeterminaciones clásicas.</li>
        <li>Estudiar la continuidad de funciones definidas a trozos y clasificar discontinuidades.</li>
        <li>Detectar asíntotas verticales, horizontales y oblicuas, y relacionarlas con el dominio.</li>
        <li>Aplicar todo lo anterior al análisis completo de una función racional.</li>
      </ul>
    </section>

    <section class="panel">
      <h2>Recorrido del tema</h2>
      <div class="grid">
        <a class="card" href="#/limites">
          <h3>📐 Límites</h3>
          <p>Teoría, calculadora interactiva y todos los trucos para resolver indeterminaciones.</p>
        </a>
        <a class="card" href="#/continuidad">
          <h3>🔗 Continuidad</h3>
          <p>Las 3 condiciones, tipos de discontinuidad y editor de funciones a trozos.</p>
        </a>
        <a class="card" href="#/asintotas">
          <h3>📈 Asíntotas</h3>
          <p>Verticales, horizontales y oblicuas con el truco de los grados y el atajo de la oblicua.</p>
        </a>
        <a class="card" href="#/chuleta">
          <h3>📋 Chuleta</h3>
          <p>Resumen en una sola vista con los tres bloques y todos los truquillos.</p>
        </a>
        <a class="card" href="#/ficha">
          <h3>📝 Ficha PDF</h3>
          <p>Los ejercicios del repaso oficial del profesor, resueltos con pasos desplegables.</p>
        </a>
        <a class="card" href="#/practica">
          <h3>🎯 Práctica</h3>
          <p>Generador aleatorio, corrector y formulario para añadir tus propios problemas.</p>
        </a>
        <a class="card" href="#/laboratorio">
          <h3>🧪 Laboratorio</h3>
          <p>Introduce cualquier función y obtén dominio, ceros, asíntotas y gráfica.</p>
        </a>
      </div>
    </section>

    <section class="panel">
      <h2>Cómo estudiar este tema</h2>
      <div class="theory">
        <h4>Plan sugerido</h4>
        <ol>
          <li>Lee la teoría de <a href="#/limites">Límites</a> y presta especial atención al bloque de <em>💡 Trucos</em>.</li>
          <li>Pasa por <a href="#/continuidad">Continuidad</a> y juega con el editor de funciones a trozos.</li>
          <li>Termina con <a href="#/asintotas">Asíntotas</a>: el analizador te da dominio, AV, AH y AO al instante.</li>
          <li>Resuelve la <a href="#/ficha">Ficha PDF</a> intentándolo tú primero y comparando con los pasos.</li>
          <li>Practica con el <a href="#/practica">generador aleatorio</a> y termina probando tus propias funciones en el <a href="#/laboratorio">Laboratorio</a>.</li>
          <li>Antes del examen, relee la <a href="#/chuleta">Chuleta</a>.</li>
        </ol>
      </div>
    </section>
  `;
}
