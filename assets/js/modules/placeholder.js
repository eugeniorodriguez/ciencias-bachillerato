// Helper común para las asignaturas sin contenido aún.
export function renderAsignaturaPlaceholder({ nombre, mark, descripcion, bloques }) {
  return `
    <section class="hero">
      <div class="hero-eyebrow">Asignatura</div>
      <h1><span style="color: var(--accent)">${mark}</span> ${nombre}</h1>
      <p class="hero-lead">${descripcion}</p>
    </section>

    <section class="panel">
      <h2>Estado del contenido</h2>
      <div class="theory">
        <h4>Próximamente</h4>
        <p>
          La asignatura de <strong>${nombre}</strong> aún no tiene contenido cargado. La estructura está preparada con los bloques típicos de Bachillerato.
          Cuando se añadan los temas aparecerán aquí listados con teoría, ejercicios y laboratorio, igual que en Matemáticas UD 10.
        </p>
      </div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloques previstos</div>
        <div>
          <h2 class="course-title">Contenidos de ${nombre}</h2>
          <p class="course-desc">Esquema orientativo según currículo de Bachillerato. Se irá llenando.</p>
        </div>
      </header>
      <div class="grid">
        ${bloques.map(b => `
          <div class="card" style="opacity:0.75; cursor:default">
            <h3>${b.title}</h3>
            <p>${b.desc}</p>
            <span class="chip" style="margin-top:10px">Próximamente</span>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="panel">
      <h2>¿Quieres colaborar?</h2>
      <p>El proyecto es abierto. Puedes proponer temas, enviarnos ejercicios tipo o pedir funcionalidades para ${nombre} directamente en el <a href="https://github.com/eugeniorodriguez/limites_continuidad_asintotas/issues" target="_blank" rel="noopener">repositorio de GitHub</a>.</p>
    </section>
  `;
}
