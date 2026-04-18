// App principal: router muy simple basado en hash + carga de módulos.
import { renderInicio } from './modules/inicio.js';
import { renderLimites } from './modules/limites.js';
import { renderContinuidad } from './modules/continuidad.js';
import { renderAsintotas } from './modules/asintotas.js';
import { renderFicha } from './modules/ficha.js';
import { renderPractica } from './modules/practica.js';
import { renderLaboratorio } from './modules/laboratorio.js';
import { typeset } from './utils/mathRender.js';

const routes = {
  inicio: renderInicio,
  limites: renderLimites,
  continuidad: renderContinuidad,
  asintotas: renderAsintotas,
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
  render();
});
