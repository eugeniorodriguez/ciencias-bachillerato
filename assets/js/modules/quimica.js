import { renderAsignaturaPlaceholder } from './placeholder.js';

export async function renderQuimica(root) {
  root.innerHTML = renderAsignaturaPlaceholder({
    nombre: 'Química',
    mark: '⚗︎',
    descripcion: 'La química de Bachillerato: estructura de la materia, enlaces, reacciones, energía y termoquímica, equilibrio y química orgánica.',
    bloques: [
      { title: 'Estructura atómica',        desc: 'Modelos atómicos, configuración electrónica, tabla periódica.' },
      { title: 'Enlace químico',            desc: 'Iónico, covalente, metálico. Geometría molecular y fuerzas intermoleculares.' },
      { title: 'Reacciones químicas',       desc: 'Estequiometría, disoluciones, cálculos con gases.' },
      { title: 'Termoquímica',              desc: 'Entalpía, entropía, energía libre de Gibbs. Ley de Hess.' },
      { title: 'Cinética y equilibrio',     desc: 'Velocidad de reacción, Le Chatelier, constantes de equilibrio.' },
      { title: 'Reacciones ácido-base',     desc: 'pH, indicadores, valoraciones, hidrólisis.' },
      { title: 'Reacciones redox',          desc: 'Oxidación-reducción, electrólisis, pilas.' },
      { title: 'Química orgánica',          desc: 'Nomenclatura, isomería, reactividad, polímeros.' },
    ],
  });
}
