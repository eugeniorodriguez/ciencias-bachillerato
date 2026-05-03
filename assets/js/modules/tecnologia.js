// Tecnología e Ingeniería: vista de los cursos.
export async function renderTecnologia(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Asignatura</div>
      <h1><span style="color: var(--accent)">⚙︎</span> Tecnología e Ingeniería</h1>
      <p class="hero-lead">
        Materiales, máquinas, energía, circuitos eléctricos y electrónica, sistemas de control y programación. Elige curso para ver las unidades disponibles.
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
        <a class="card" href="#/tecno-1bach">
          <h3>1.º Bachillerato</h3>
          <p>Materiales, mecánica, energía, circuitos eléctricos y máquinas, electrónica, control y programación.</p>
          <span class="chip ok" style="margin-top:10px">UD 5 disponible</span>
        </a>
        <div class="card" style="opacity:0.7; cursor:default">
          <h3>2.º Bachillerato</h3>
          <p>Sistemas automáticos, electrónica avanzada, neumática e hidráulica, redes, IoT y diseño industrial.</p>
          <span class="chip" style="margin-top:10px">Próximamente</span>
        </div>
      </div>
    </section>
  `;
}
