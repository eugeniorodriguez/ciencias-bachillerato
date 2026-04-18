import { FICHA } from '../data/ficha.js';
import { typeset, waitMath } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';

export async function renderFicha(root) {
  await waitMath();
  const secciones = [...new Set(FICHA.map(e => e.seccion))];
  root.innerHTML = `
    <section class="panel">
      <h2>📝 Ficha Repaso UD 10 (PDF)</h2>
      <p>Los ejercicios del PDF con <strong>pasos desplegables</strong>, solución y gráfica. Haz clic en <em>"Ver pasos"</em> para ir descubriendo cada paso.</p>
      <p class="hint">Consejo: intenta resolverlo tú primero, después compara. Recuerda que el profesor pide los pasos escritos, no sólo la solución.</p>
    </section>
    ${secciones.map(s => `
      <section class="panel">
        <h2>${s}</h2>
        ${FICHA.filter(e => e.seccion === s).map(ejercicioHTML).join('')}
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
        <div><span class="chip">${e.id}</span><strong>${e.enunciado}</strong></div>
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
