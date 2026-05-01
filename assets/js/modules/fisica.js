// Física: vista de los cursos.
export async function renderFisica(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Asignatura</div>
      <h1><span style="color: var(--accent)">⚛︎</span> Física</h1>
      <p class="hero-lead">
        Estudio del mundo físico: del movimiento y las fuerzas a las ondas y los campos. Elige curso para ver las unidades disponibles.
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
        <a class="card" href="#/fisica-1bach">
          <h3>1.º Bachillerato</h3>
          <p>Cinemática (MRU, MRUA, circular, en 2D), dinámica (Newton), trabajo y energía, fluidos.</p>
          <span class="chip ok" style="margin-top:10px">UD 9 disponible</span>
        </a>
        <div class="card" style="opacity:0.7; cursor:default">
          <h3>2.º Bachillerato</h3>
          <p>Campos gravitatorio, eléctrico y magnético; ondas; óptica; física moderna y nuclear.</p>
          <span class="chip" style="margin-top:10px">Próximamente</span>
        </div>
      </div>
    </section>
  `;
}
