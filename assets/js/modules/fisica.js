import { renderAsignaturaPlaceholder } from './placeholder.js';

export async function renderFisica(root) {
  root.innerHTML = renderAsignaturaPlaceholder({
    nombre: 'Física',
    mark: '⚛︎',
    descripcion: 'Estudio del mundo físico: desde el movimiento y las fuerzas hasta los fenómenos electromagnéticos y cuánticos. 1.º y 2.º de Bachillerato.',
    bloques: [
      { title: 'Cinemática',           desc: 'Posición, velocidad y aceleración. MRU, MRUA, movimiento circular y parabólico.' },
      { title: 'Dinámica',             desc: 'Leyes de Newton, fuerzas, rozamiento, plano inclinado, fuerzas centrales.' },
      { title: 'Energía y trabajo',    desc: 'Trabajo, potencia, energía cinética y potencial, conservación.' },
      { title: 'Ondas',                desc: 'Ondas armónicas, sonido, luz, interferencias, Doppler.' },
      { title: 'Campos',               desc: 'Gravitatorio, eléctrico y magnético. Ley de Coulomb, campos creados.' },
      { title: 'Electromagnetismo',    desc: 'Inducción, leyes de Maxwell (introducción), aplicaciones.' },
      { title: 'Física moderna',       desc: 'Relatividad especial, cuántica, física nuclear.' },
    ],
  });
}
