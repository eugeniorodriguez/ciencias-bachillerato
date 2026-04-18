import { renderAsignaturaPlaceholder } from './placeholder.js';

export async function renderTecnologia(root) {
  root.innerHTML = renderAsignaturaPlaceholder({
    nombre: 'Tecnología',
    mark: '⚙︎',
    descripcion: 'Tecnología Industrial y TIC de Bachillerato: sistemas electrónicos, neumáticos, materiales, programación y diseño.',
    bloques: [
      { title: 'Materiales',                desc: 'Propiedades, metales, polímeros, cerámicos, composites, ensayos.' },
      { title: 'Sistemas mecánicos',        desc: 'Máquinas, transmisiones, engranajes, trenes de palancas.' },
      { title: 'Sistemas eléctricos',       desc: 'Circuitos de CC y CA, ley de Ohm, Kirchhoff, potencia, generadores.' },
      { title: 'Electrónica analógica',     desc: 'Diodos, transistores, amplificadores operacionales.' },
      { title: 'Electrónica digital',       desc: 'Puertas lógicas, álgebra de Boole, combinacionales, secuenciales.' },
      { title: 'Sistemas de control',       desc: 'Lazo abierto/cerrado, PID, automatización.' },
      { title: 'Neumática e hidráulica',    desc: 'Componentes, circuitos, simulación.' },
      { title: 'Programación',              desc: 'Pseudocódigo, algoritmos, Python/Arduino, control de periféricos.' },
    ],
  });
}
