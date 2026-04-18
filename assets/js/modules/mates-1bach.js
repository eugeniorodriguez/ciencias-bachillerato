// Listado de UDs para 1.º Bachillerato. UD10 con contenido, resto placeholders.
const UDs = [
  { num: 1,  title: 'Números reales',                             desc: 'Conjuntos, intervalos, valor absoluto, radicales.' },
  { num: 2,  title: 'Polinomios y fracciones algebraicas',        desc: 'Operaciones, factor común, Ruffini, identidades notables.' },
  { num: 3,  title: 'Ecuaciones e inecuaciones',                  desc: 'Polinómicas, racionales, con radicales, sistemas.' },
  { num: 4,  title: 'Trigonometría',                              desc: 'Razones trigonométricas, identidades, ecuaciones.' },
  { num: 5,  title: 'Geometría analítica',                        desc: 'Vectores, rectas, distancias y ángulos en el plano.' },
  { num: 6,  title: 'Números complejos',                          desc: 'Forma binómica, polar, operaciones, raíces.' },
  { num: 7,  title: 'Funciones elementales',                      desc: 'Dominio, recorrido, operaciones, funciones inversas.', active: true, href: '#/ud7' },
  { num: 8,  title: 'Funciones polinómicas y racionales',         desc: 'Análisis gráfico, factorización, signo.' },
  { num: 9,  title: 'Funciones exponenciales y logarítmicas',     desc: 'Propiedades, ecuaciones, modelos de crecimiento.' },
  { num: 10, title: 'Límites, continuidad y asíntotas',           desc: 'Idea de límite, indeterminaciones, continuidad, asíntotas.', active: true, href: '#/ud10' },
  { num: 11, title: 'Derivadas',                                  desc: 'Tasa de variación, reglas, aplicaciones al estudio de funciones.', active: true, href: '#/ud11' },
  { num: 12, title: 'Estadística descriptiva',                    desc: 'Medidas de centralización y dispersión, regresión.' },
  { num: 13, title: 'Probabilidad',                               desc: 'Sucesos, probabilidad condicionada, Bayes.' },
  { num: 14, title: 'Distribuciones discretas y continuas',       desc: 'Binomial, normal, aproximaciones, intervalos.' },
];

export async function renderMates1Bach(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Matemáticas · 1.º Bachillerato</div>
      <h1>Unidades didácticas</h1>
      <p class="hero-lead">
        14 unidades que cubren el curso. Entra en la unidad activa (UD 10) para estudiar su contenido completo. Las demás están marcadas como <em>próximamente</em> y se irán añadiendo.
      </p>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Aritmética y álgebra</div>
        <div><h2 class="course-title">UD 1 – 3</h2></div>
      </header>
      <div class="grid">${UDs.slice(0, 3).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Geometría</div>
        <div><h2 class="course-title">UD 4 – 6</h2></div>
      </header>
      <div class="grid">${UDs.slice(3, 6).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Análisis</div>
        <div><h2 class="course-title">UD 7 – 11</h2></div>
      </header>
      <div class="grid">${UDs.slice(6, 11).map(cardUD).join('')}</div>
    </section>

    <section class="course-section">
      <header class="course-header">
        <div class="course-label">Bloque · Probabilidad y estadística</div>
        <div><h2 class="course-title">UD 12 – 14</h2></div>
      </header>
      <div class="grid">${UDs.slice(11).map(cardUD).join('')}</div>
    </section>
  `;
}

function cardUD(u) {
  const locked = !u.active;
  const tag = u.active
    ? '<span class="unit-tag active">Disponible</span>'
    : '<span class="unit-tag">Próximamente</span>';
  const open = u.active ? `href="${u.href}"` : 'data-locked="true"';
  const tag2 = u.active ? 'a' : 'div';
  return `
    <${tag2} class="card unit-card" ${open} ${locked ? 'data-locked="true"' : ''}>
      <div class="unit-num">UD ${String(u.num).padStart(2, '0')}</div>
      <div class="unit-title">${u.title}</div>
      <p class="unit-desc">${u.desc}</p>
      ${tag}
    </${tag2}>
  `;
}
