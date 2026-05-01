// Listado de UDs para Física 1.º Bachillerato.
const UDs = [
  { num: 1, title: 'Magnitudes y unidades',                  desc: 'SI, análisis dimensional, errores e incertidumbres.' },
  { num: 2, title: 'El método científico',                   desc: 'Modelos, leyes, teorías y representación de datos.' },
  { num: 3, title: 'Cinemática del MRU',                     desc: 'Posición, velocidad y aceleración. Movimiento rectilíneo uniforme.' },
  { num: 4, title: 'Cinemática del MRUA',                    desc: 'Caída libre, lanzamientos verticales y problemas de encuentros.' },
  { num: 5, title: 'Movimientos circulares',                 desc: 'MCU y MCUA, magnitudes angulares, aceleración centrípeta.' },
  { num: 6, title: 'Fuerzas y leyes de Newton',              desc: 'Diagrama de cuerpo libre, planos inclinados, rozamiento.' },
  { num: 7, title: 'Trabajo, energía y potencia',            desc: 'Teorema de la energía cinética, conservación, potencia.' },
  { num: 8, title: 'Movimientos en una dimensión',           desc: 'Ecuaciones del movimiento, MRU y MRUA combinados.' },
  { num: 9, title: 'Movimientos en dos dimensiones',          desc: 'Combinación lineal de vectores, principio de Galileo, composición de MRU.', active: true, href: '#/fisica-ud9' },
  { num: 10, title: 'Tiro parabólico',                       desc: 'MRU horizontal + MRUA vertical, alcance y altura máxima.' },
  { num: 11, title: 'Energía mecánica y conservación',       desc: 'Energía cinética y potencial, fuerzas conservativas.' },
  { num: 12, title: 'Fluidos',                               desc: 'Presión, principio de Pascal y de Arquímedes.' },
];

export async function renderFisica1Bach(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Física y Química · 1.º Bachillerato</div>
      <h1>Unidades didácticas</h1>
      <p class="hero-lead">
        Los temas de Física de 1.º de Bachillerato. La unidad activa (UD 9) cubre los movimientos en dos dimensiones a partir de la combinación lineal de vectores.
      </p>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Introducción y método</div>
        <div><h2 class="course-title">UD 1 – 2</h2></div>
      </header>
      <div class="grid">${UDs.slice(0, 2).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Cinemática</div>
        <div><h2 class="course-title">UD 3 – 5, 8 – 10</h2></div>
      </header>
      <div class="grid">${[...UDs.slice(2, 5), ...UDs.slice(7, 10)].map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Dinámica y energía</div>
        <div><h2 class="course-title">UD 6 – 7, 11</h2></div>
      </header>
      <div class="grid">${[UDs[5], UDs[6], UDs[10]].map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Fluidos</div>
        <div><h2 class="course-title">UD 12</h2></div>
      </header>
      <div class="grid">${UDs.slice(11).map(cardUD).join('')}</div>
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
