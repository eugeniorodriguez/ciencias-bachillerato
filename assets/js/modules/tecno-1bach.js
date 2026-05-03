// Listado de UDs para Tecnología 1.º Bachillerato.
const UDs = [
  { num: 1, title: 'Materiales',                          desc: 'Propiedades, metales, polímeros, cerámicos, composites y ensayos.' },
  { num: 2, title: 'Sistemas mecánicos',                  desc: 'Máquinas, transmisiones, engranajes, palancas y poleas.' },
  { num: 3, title: 'Cinemática y dinámica de máquinas',   desc: 'Movimiento, fuerzas, par y rendimiento mecánico.' },
  { num: 4, title: 'Energía y su transformación',         desc: 'Tipos de energía, eficiencia, fuentes renovables y no renovables.' },
  { num: 5, title: 'Teoría de circuitos y máquinas eléctricas', desc: 'Magnitudes, leyes (Ohm, Joule, Kirchhoff), motores y generadores de c.c.', active: true, href: '#/tecno-ud5' },
  { num: 6, title: 'Electrónica analógica',               desc: 'Diodos, transistores, amplificadores operacionales.' },
  { num: 7, title: 'Electrónica digital',                 desc: 'Puertas lógicas, álgebra de Boole, combinacionales y secuenciales.' },
  { num: 8, title: 'Sistemas de control',                 desc: 'Lazo abierto y cerrado, PID, automatización industrial.' },
  { num: 9, title: 'Neumática e hidráulica',              desc: 'Componentes, simbología, circuitos básicos y simulación.' },
  { num: 10, title: 'Programación y sistemas embebidos',  desc: 'Pseudocódigo, algoritmos, Python/Arduino, control de periféricos.' },
];

export async function renderTecno1Bach(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Tecnología e Ingeniería · 1.º Bachillerato</div>
      <h1>Unidades didácticas</h1>
      <p class="hero-lead">
        Las unidades de Tecnología e Ingeniería de 1.º de Bachillerato. La unidad activa (UD 5) cubre la teoría de circuitos eléctricos y las máquinas rotativas de corriente continua.
      </p>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Materiales y mecánica</div>
        <div><h2 class="course-title">UD 1 – 3</h2></div>
      </header>
      <div class="grid">${UDs.slice(0, 3).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Energía y electricidad</div>
        <div><h2 class="course-title">UD 4 – 5</h2></div>
      </header>
      <div class="grid">${UDs.slice(3, 5).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Electrónica y control</div>
        <div><h2 class="course-title">UD 6 – 8</h2></div>
      </header>
      <div class="grid">${UDs.slice(5, 8).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Fluidos y programación</div>
        <div><h2 class="course-title">UD 9 – 10</h2></div>
      </header>
      <div class="grid">${UDs.slice(8).map(cardUD).join('')}</div>
    </section>
  `;
}

function cardUD(u) {
  const tag = u.active
    ? '<span class="unit-tag active">Disponible</span>'
    : '<span class="unit-tag">Próximamente</span>';
  const open = u.active ? `href="${u.href}"` : 'data-locked="true"';
  const tag2 = u.active ? 'a' : 'div';
  return `
    <${tag2} class="card unit-card" ${open}>
      <div class="unit-num">UD ${String(u.num).padStart(2, '0')}</div>
      <div class="unit-title">${u.title}</div>
      <p class="unit-desc">${u.desc}</p>
      ${tag}
    </${tag2}>
  `;
}
