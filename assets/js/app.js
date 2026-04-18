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
};

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
  if (UD10_SECTIONS.has(route)) sub.textContent = 'Matemáticas · 1.º Bachillerato · UD 10';
  else if (route === 'matematicas' || route === 'mates-1bach') sub.textContent = 'Matemáticas';
  else if (route === 'fisica') sub.textContent = 'Física';
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

window.addEventListener('hashchange', render);
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
