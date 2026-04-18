// Matemáticas: vista de los dos cursos.
export async function renderMatematicas(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Asignatura</div>
      <h1>Matemáticas</h1>
      <p class="hero-lead">
        Elige curso para ver las unidades disponibles. Ambas opciones (Aplicadas a las CCSS y Científico-Tecnológicas) comparten la mayoría de unidades; la diferencia está en los ejemplos y en el enfoque.
      </p>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Cursos</div>
        <div>
          <h2 class="course-title">1.º y 2.º de Bachillerato</h2>
          <p class="course-desc">Selecciona un curso para ver sus unidades didácticas.</p>
        </div>
      </header>

      <div class="grid">
        <a class="card" href="#/mates-1bach">
          <h3>1.º Bachillerato</h3>
          <p>Números reales, álgebra, funciones, <strong>límites y continuidad</strong>, derivadas, probabilidad, estadística.</p>
          <span class="chip ok" style="margin-top:10px">UD 10 disponible</span>
        </a>
        <div class="card" style="opacity:0.7; cursor:default">
          <h3>2.º Bachillerato</h3>
          <p>Matrices, determinantes, programación lineal, límites, derivadas avanzadas, integrales, probabilidad, inferencia.</p>
          <span class="chip" style="margin-top:10px">Próximamente</span>
        </div>
      </div>
    </section>
  `;
}
