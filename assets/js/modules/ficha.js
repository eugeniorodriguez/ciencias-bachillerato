import { FICHA } from '../data/ficha.js';
import { typeset, waitMath } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';
import { load } from '../utils/storage.js';

export async function renderFicha(root) {
  await waitMath();
  const custom = load('ficha-custom', []);
  const ALL = [...FICHA, ...custom.map(e => ({ ...e, _custom: true }))];
  const secciones = [...new Set(ALL.map(e => e.seccion))];
  root.innerHTML = `
    <section class="panel">
      <h2>📝 Ficha Repaso UD 10</h2>
      <p>Ejercicios con <strong>pasos desplegables</strong>, solución y gráfica. Haz clic en <em>"Ver pasos"</em> para ir descubriendo cada paso.</p>
      <p class="hint">Consejo: intenta resolverlo tú primero, después compara. Los marcados con 🟣 los has añadido tú desde <a href="#/practica">Práctica → Añadir ejercicio completo</a>.</p>
    </section>
    ${secciones.map(s => `
      <section class="panel">
        <h2>${s}</h2>
        ${ALL.filter(e => e.seccion === s).map(ejercicioHTML).join('')}
      </section>
    `).join('')}
  `;

  // Interactividad: toggle pasos + gráficas
  root.querySelectorAll('.exercise').forEach(ex => {
    const btn = ex.querySelector('.toggle-steps');
    btn?.addEventListener('click', () => {
      ex.classList.toggle('open');
      btn.textContent = ex.classList.contains('open') ? 'Ocultar pasos' : 'Ver pasos';
    });
    const plotEl = ex.querySelector('.plot');
    const expr = ex.dataset.expr;
    if (plotEl && expr) {
      plot(plotEl, {
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: [-10, 10] },
        data: [{ fn: expr.replace(/\s+/g, ''), graphType: 'polyline', nSamples: 500, color: '#22d3ee' }],
      });
    }
  });
}

function ejercicioHTML(e) {
  return `
    <div class="exercise" data-expr="${e.expr || ''}">
      <header>
        <div>${e._custom ? '<span class="chip" style="color:#c084fc;border-color:rgba(192,132,252,0.4)">🟣 tuyo</span>' : ''}<span class="chip">${e.id}</span><strong>${e.enunciado}</strong></div>
        <button class="btn ghost sm toggle-steps">Ver pasos</button>
      </header>
      <div class="steps">
        <ol>
          ${e.pasos.map(p => `<li>${p}</li>`).join('')}
        </ol>
        <p><strong>Solución:</strong> ${e.solucion}</p>
        ${e.expr ? '<div class="plot"></div>' : ''}
      </div>
    </div>
  `;
}
