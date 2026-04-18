// App principal: router muy simple basado en hash + carga de módulos.
import { renderInicio } from './modules/inicio.js';
import { renderLimites } from './modules/limites.js';
import { renderContinuidad } from './modules/continuidad.js';
import { renderAsintotas } from './modules/asintotas.js';
import { renderFicha } from './modules/ficha.js';
import { renderPractica } from './modules/practica.js';
import { renderLaboratorio } from './modules/laboratorio.js';
import { renderChuleta } from './modules/chuleta.js';
import { typeset } from './utils/mathRender.js';

const routes = {
  inicio: renderInicio,
  limites: renderLimites,
  continuidad: renderContinuidad,
  asintotas: renderAsintotas,
  chuleta: renderChuleta,
  ficha: renderFicha,
  practica: renderPractica,
  laboratorio: renderLaboratorio,
};

const app = document.getElementById('app');
const navLinks = document.querySelectorAll('#nav a');

function currentRoute() {
  const h = (location.hash || '#/inicio').replace(/^#\//, '');
  return routes[h] ? h : 'inicio';
}

async function render() {
  const route = currentRoute();
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.route === route));
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
  if (!location.hash) location.hash = '#/inicio';
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
