// Hub principal: 4 asignaturas de ciencias de Bachillerato.
export async function renderHub(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Bachillerato · modalidad de ciencias</div>
      <h1>Herramienta de estudio</h1>
      <p class="hero-lead">
        Cuatro asignaturas, una misma forma de estudiar: teoría ordenada, trucos, ejercicios interactivos y un laboratorio donde jugar con lo que acabas de aprender.
      </p>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Asignaturas</div>
        <div>
          <h2 class="course-title">Elige una asignatura</h2>
          <p class="course-desc">Selecciona una asignatura para entrar en sus cursos y unidades. Por ahora, Matemáticas de 1.º tiene contenido completo. Las demás están preparadas para ir llenándose.</p>
        </div>
      </header>

      <div class="grid">
        <a class="card asignatura" href="#/matematicas" data-color="mat">
          <span class="asig-mark">∫</span>
          <div>
            <h3>Matemáticas</h3>
            <p>Aplicadas a las CCSS y Científico-Tecnológicas. 1.º y 2.º de Bachillerato.</p>
          </div>
          <span class="chip ok">Con contenido</span>
        </a>

        <a class="card asignatura" href="#/fisica" data-color="fis">
          <span class="asig-mark">⚛︎</span>
          <div>
            <h3>Física</h3>
            <p>Cinemática, dinámica, energía, ondas, electromagnetismo, física moderna.</p>
          </div>
          <span class="chip">Próximamente</span>
        </a>

        <a class="card asignatura" href="#/quimica" data-color="qui">
          <span class="asig-mark">⚗︎</span>
          <div>
            <h3>Química</h3>
            <p>Estructura atómica, enlace, termoquímica, equilibrio, redox, química orgánica.</p>
          </div>
          <span class="chip">Próximamente</span>
        </a>

        <a class="card asignatura" href="#/tecnologia" data-color="tec">
          <span class="asig-mark">⚙︎</span>
          <div>
            <h3>Tecnología</h3>
            <p>Electrónica, sistemas, programación, neumática, materiales, dibujo técnico.</p>
          </div>
          <span class="chip">Próximamente</span>
        </a>
      </div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Cómo se usa</div>
        <div>
          <h2 class="course-title">Estudia, practica, experimenta</h2>
          <p class="course-desc">Cada unidad tiene una estructura clara: teoría concisa con trucos, ejercicios resueltos paso a paso, banco de práctica y un laboratorio donde introduces tus propias funciones o datos.</p>
        </div>
      </header>

      <div class="grid">
        <div class="card">
          <h3>📚 Teoría con trucos</h3>
          <p>No solo definiciones: atajos, errores típicos y checklists de examen.</p>
        </div>
        <div class="card">
          <h3>📝 Ficha de ejercicios</h3>
          <p>Problemas resueltos con pasos desplegables para que compares con tu resolución.</p>
        </div>
        <div class="card">
          <h3>🎯 Práctica</h3>
          <p>Generador aleatorio, comprobador y banco de ejercicios que puedes ampliar.</p>
        </div>
        <div class="card">
          <h3>🧪 Laboratorio</h3>
          <p>Introduce tus funciones o datos y ve análisis y visualización al instante.</p>
        </div>
      </div>
    </section>
  `;
}
