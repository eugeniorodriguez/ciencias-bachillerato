// App principal: router con breadcrumbs y subnav contextual.
import { renderHub } from './modules/hub.js';
import { renderMatematicas } from './modules/matematicas.js';
import { renderMates1Bach } from './modules/mates-1bach.js';
import { renderFisica } from './modules/fisica.js';
import { renderQuimica } from './modules/quimica.js';
import { renderTecnologia } from './modules/tecnologia.js';
import { renderUd10Home } from './modules/ud10-home.js';
import { renderLimites } from './modules/limites.js';
import { renderContinuidad } from './modules/continuidad.js';
import { renderAsintotas } from './modules/asintotas.js';
import { renderFicha } from './modules/ficha.js';
import { renderPractica } from './modules/practica.js';
import { renderLaboratorio } from './modules/laboratorio.js';
import { renderChuleta } from './modules/chuleta.js';
import { renderUd7Funciones } from './modules/ud7-funciones.js';
import { renderUd11Derivadas } from './modules/ud11-derivadas.js';
import { renderFisica1Bach } from './modules/fisica-1bach.js';
import { renderFisicaUd9 } from './modules/fisica-ud9.js';
import { renderUd1NumerosReales } from './modules/ud1-numeros-reales.js';
import { renderUd2Polinomios } from './modules/ud2-polinomios.js';
import { renderUd3Ecuaciones } from './modules/ud3-ecuaciones.js';
import { renderUd4Trigonometria } from './modules/ud4-trigonometria.js';
import { renderUd5Geometria } from './modules/ud5-geometria-analitica.js';
import { renderUd6Complejos } from './modules/ud6-complejos.js';
import { renderUd8PolRacionales } from './modules/ud8-polinomicas-racionales.js';
import { renderUd9ExpLog } from './modules/ud9-exp-log.js';
import { renderUd12Estadistica } from './modules/ud12-estadistica.js';
import { renderUd13Probabilidad } from './modules/ud13-probabilidad.js';
import { renderUd14Distribuciones } from './modules/ud14-distribuciones.js';
import { typeset } from './utils/mathRender.js';

// Mapa de rutas (clave plana, basada en hash).
const routes = {
  '': renderHub,
  'hub': renderHub,
  'matematicas': renderMatematicas,
  'mates-1bach': renderMates1Bach,
  'fisica': renderFisica,
  'quimica': renderQuimica,
  'tecnologia': renderTecnologia,
  'ud10': renderUd10Home,
  'inicio': renderUd10Home,      // alias heredado
  'limites': renderLimites,
  'continuidad': renderContinuidad,
  'asintotas': renderAsintotas,
  'chuleta': renderChuleta,
  'ficha': renderFicha,
  'practica': renderPractica,
  'laboratorio': renderLaboratorio,
  'ud1': renderUd1NumerosReales,
  'ud2': renderUd2Polinomios,
  'ud3': renderUd3Ecuaciones,
  'ud4': renderUd4Trigonometria,
  'ud5': renderUd5Geometria,
  'ud6': renderUd6Complejos,
  'ud7': renderUd7Funciones,
  'ud8': renderUd8PolRacionales,
  'ud9': renderUd9ExpLog,
  'ud11': renderUd11Derivadas,
  'ud12': renderUd12Estadistica,
  'ud13': renderUd13Probabilidad,
  'ud14': renderUd14Distribuciones,
  'fisica-1bach': renderFisica1Bach,
  'fisica-ud9': renderFisicaUd9,
};

// Breadcrumbs y flag "es sección interna de UD10".
const UD10_SECTIONS = new Set([
  'ud10', 'limites', 'continuidad', 'asintotas', 'chuleta', 'ficha', 'practica', 'laboratorio', 'inicio',
]);

const BREADCRUMBS = {
  '':             [],
  'hub':          [],
  'matematicas':  [{ href: '#/', label: 'Inicio' }, { label: 'Matemáticas' }],
  'mates-1bach':  [{ href: '#/', label: 'Inicio' }, { href: '#/matematicas', label: 'Matemáticas' }, { label: '1.º Bachillerato' }],
  'fisica':       [{ href: '#/', label: 'Inicio' }, { label: 'Física' }],
  'quimica':      [{ href: '#/', label: 'Inicio' }, { label: 'Química' }],
  'tecnologia':   [{ href: '#/', label: 'Inicio' }, { label: 'Tecnología' }],
  'ud1':          udCrumbs('UD 1 · Números reales'),
  'ud2':          udCrumbs('UD 2 · Polinomios y fracciones algebraicas'),
  'ud3':          udCrumbs('UD 3 · Ecuaciones e inecuaciones'),
  'ud4':          udCrumbs('UD 4 · Trigonometría'),
  'ud5':          udCrumbs('UD 5 · Geometría analítica'),
  'ud6':          udCrumbs('UD 6 · Números complejos'),
  'ud7':          udCrumbs('UD 7 · Funciones elementales'),
  'ud8':          udCrumbs('UD 8 · Funciones polinómicas y racionales'),
  'ud9':          udCrumbs('UD 9 · Funciones exponenciales y logarítmicas'),
  'ud11':         udCrumbs('UD 11 · Derivadas'),
  'ud12':         udCrumbs('UD 12 · Estadística descriptiva'),
  'ud13':         udCrumbs('UD 13 · Probabilidad'),
  'ud14':         udCrumbs('UD 14 · Distribuciones'),
  'fisica-1bach': [{ href: '#/', label: 'Inicio' }, { href: '#/fisica', label: 'Física' }, { label: '1.º Bachillerato' }],
  'fisica-ud9':   [{ href: '#/', label: 'Inicio' }, { href: '#/fisica', label: 'Física' }, { href: '#/fisica-1bach', label: '1.º Bachillerato' }, { label: 'UD 9 · Movimientos en dos dimensiones' }],
};

function udCrumbs(label) {
  return [
    { href: '#/', label: 'Inicio' },
    { href: '#/matematicas', label: 'Matemáticas' },
    { href: '#/mates-1bach', label: '1.º Bachillerato' },
    { label },
  ];
}

const UD10_SUBNAV = [
  { key: 'ud10',        label: 'Inicio' },
  { key: 'limites',     label: 'Límites' },
  { key: 'continuidad', label: 'Continuidad' },
  { key: 'asintotas',   label: 'Asíntotas' },
  { key: 'chuleta',     label: 'Chuleta' },
  { key: 'ficha',       label: 'Ficha' },
  { key: 'practica',    label: 'Práctica' },
  { key: 'laboratorio', label: 'Lab' },
];

function currentRoute() {
  const raw = (location.hash || '#/').replace(/^#\/?/, '').trim();
  return routes[raw] ? raw : (raw === '' ? '' : 'hub');
}

function ud10Breadcrumbs(route) {
  return [
    { href: '#/', label: 'Inicio' },
    { href: '#/matematicas', label: 'Matemáticas' },
    { href: '#/mates-1bach', label: '1.º Bachillerato' },
    route === 'ud10' || route === 'inicio'
      ? { label: 'UD 10 · Límites, Continuidad y Asíntotas' }
      : { href: '#/ud10', label: 'UD 10' },
  ].concat(
    route !== 'ud10' && route !== 'inicio'
      ? [{ label: (UD10_SUBNAV.find(s => s.key === route) || { label: route }).label }]
      : []
  );
}

function renderBreadcrumbs(route) {
  const box = document.getElementById('breadcrumbs');
  const crumbs = UD10_SECTIONS.has(route) ? ud10Breadcrumbs(route) : (BREADCRUMBS[route] || []);
  if (!crumbs.length) { box.innerHTML = ''; return; }
  box.innerHTML = crumbs.map((c, i) => {
    const last = i === crumbs.length - 1;
    const inner = c.href && !last ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`;
    return inner + (last ? '' : '<span class="sep">›</span>');
  }).join('');
}

function renderSubnav(route) {
  const wrap = document.getElementById('subnav-wrap');
  const nav = document.getElementById('subnav');
  if (!UD10_SECTIONS.has(route)) { wrap.hidden = true; nav.innerHTML = ''; return; }
  wrap.hidden = false;
  const activeKey = route === 'inicio' ? 'ud10' : route;
  nav.innerHTML = UD10_SUBNAV.map(s => `
    <a href="#/${s.key}" class="${s.key === activeKey ? 'active' : ''}">${s.label}</a>
  `).join('');
}

function updateBrand(route) {
  const sub = document.getElementById('brand-sub');
  if (!sub) return;
  const udMatch = route.match(/^ud(\d+)$/);
  if (UD10_SECTIONS.has(route)) sub.textContent = 'Matemáticas · 1.º Bachillerato · UD 10';
  else if (udMatch) sub.textContent = `Matemáticas · 1.º Bachillerato · UD ${udMatch[1]}`;
  else if (route === 'matematicas' || route === 'mates-1bach') sub.textContent = 'Matemáticas';
  else if (route === 'fisica-ud9') sub.textContent = 'Física · 1.º Bachillerato · UD 9';
  else if (route === 'fisica' || route === 'fisica-1bach') sub.textContent = 'Física';
  else if (route === 'quimica') sub.textContent = 'Química';
  else if (route === 'tecnologia') sub.textContent = 'Tecnología';
  else sub.textContent = 'Matemáticas · Física · Química · Tecnología';
}

const app = document.getElementById('app');

async function render() {
  const route = currentRoute();
  renderBreadcrumbs(route);
  renderSubnav(route);
  updateBrand(route);

  app.innerHTML = '<div class="panel"><p>Cargando…</p></div>';
  try {
    await routes[route](app);
  } catch (err) {
    app.innerHTML = `<div class="panel"><h2>Error</h2><pre>${String(err && err.stack || err)}</pre></div>`;
    console.error(err);
  }
  await typeset(app);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

window.addEventListener('hashchange', () => {
  // Si el hash es un ancla interna a la página actual (no una ruta), hacemos scroll y salimos.
  const raw = (location.hash || '').replace(/^#\/?/, '').trim();
  if (raw && !routes[raw] && document.getElementById(raw)) {
    document.getElementById(raw).scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  render();
});
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/';
  setupTheme();
  render();
});

function setupTheme() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (!btn) return;

  const stored = localStorage.getItem('ud10:theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('ud10:theme', next);
  });

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    if (icon && label) {
      if (t === 'dark') { icon.textContent = '☀'; label.textContent = 'Claro'; }
      else               { icon.textContent = '☾'; label.textContent = 'Oscuro'; }
    }
  }
}
