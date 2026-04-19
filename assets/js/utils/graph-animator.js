// Animador SVG para la gráfica de una función y sus asíntotas.
// Usa los patrones de timing de Remotion (interpolate + Easing) vía remotion-lite.
import { interpolate, Easing, CRISP_ENTRANCE, playComposition } from './remotion-lite.js';

const W = 720, H = 420, PAD = 36;
const XMIN = -10, XMAX = 10, YMIN = -10, YMAX = 10;
const FPS = 30;

// Muestrea la función en el intervalo, partiendo en ramas cuando "explota".
function sampleBranches(expr) {
  const code = window.math.parse(expr).compile();
  const step = 0.04;
  const branches = [];
  let current = [];
  let prev = null;
  for (let x = XMIN; x <= XMAX; x += step) {
    let y;
    try { y = code.evaluate({ x }); } catch { y = NaN; }
    const yn = typeof y === 'number' ? y : (y && y.re) || NaN;
    const bigJump = prev != null && isFinite(yn) && isFinite(prev) && Math.abs(yn - prev) > 12;
    if (!isFinite(yn) || Math.abs(yn) > 60 || bigJump) {
      if (current.length > 1) branches.push(current);
      current = [];
      prev = NaN;
      continue;
    }
    current.push([x, yn]);
    prev = yn;
  }
  if (current.length > 1) branches.push(current);
  return branches;
}

// Convierte coord matemática a píxel SVG.
function toPx(x, y) {
  const px = PAD + (x - XMIN) / (XMAX - XMIN) * (W - 2 * PAD);
  const py = H - PAD - (y - YMIN) / (YMAX - YMIN) * (H - 2 * PAD);
  return [px, py];
}

function branchToPath(branch) {
  return branch
    .map(([x, y], i) => {
      const [px, py] = toPx(x, y);
      return `${i === 0 ? 'M' : 'L'}${px.toFixed(2)},${py.toFixed(2)}`;
    })
    .join(' ');
}

// Longitud aproximada de una rama en píxeles (para el stroke-dashoffset progresivo).
function branchLength(branch) {
  let L = 0;
  for (let i = 1; i < branch.length; i++) {
    const [x1, y1] = toPx(...branch[i - 1]);
    const [x2, y2] = toPx(...branch[i]);
    L += Math.hypot(x2 - x1, y2 - y1);
  }
  return L;
}

function gridSvg() {
  const lines = [];
  for (let v = XMIN; v <= XMAX; v++) {
    const [px] = toPx(v, 0);
    lines.push(`<line x1="${px}" y1="${PAD}" x2="${px}" y2="${H - PAD}" stroke="#cbd5e1" stroke-width="${v === 0 ? 1.2 : 0.4}"/>`);
  }
  for (let v = YMIN; v <= YMAX; v++) {
    const [, py] = toPx(0, v);
    lines.push(`<line x1="${PAD}" y1="${py}" x2="${W - PAD}" y2="${py}" stroke="#cbd5e1" stroke-width="${v === 0 ? 1.2 : 0.4}"/>`);
  }
  // Marcas numéricas.
  for (let v = XMIN; v <= XMAX; v += 2) {
    if (v === 0) continue;
    const [px, py0] = toPx(v, 0);
    lines.push(`<text x="${px}" y="${py0 + 12}" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`);
  }
  for (let v = YMIN; v <= YMAX; v += 2) {
    if (v === 0) continue;
    const [px0, py] = toPx(0, v);
    lines.push(`<text x="${px0 - 6}" y="${py + 3}" font-size="10" fill="#64748b" text-anchor="end">${v}</text>`);
  }
  return lines.join('\n');
}

// Construye el SVG inicial (rejilla + paths ocultos) y devuelve un objeto con
// referencias a los elementos para animarlos por frame.
function buildSvg(container, { branches, verticals, horizontals, obliques }) {
  const paths = branches.map((br, i) => {
    const d = branchToPath(br);
    const len = branchLength(br);
    return `<path id="br-${i}" d="${d}" fill="none" stroke="#0ea5e9" stroke-width="2.2"
            stroke-dasharray="${len}" stroke-dashoffset="${len}" />`;
  }).join('');

  const verts = verticals.map((a, i) => {
    const [px] = toPx(a, 0);
    return `
      <line id="av-${i}" x1="${px}" y1="${PAD}" x2="${px}" y2="${H - PAD}"
            stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 5" opacity="0"/>
      <text id="av-lab-${i}" x="${px + 6}" y="${PAD + 14}" font-size="12"
            fill="#6d28d9" opacity="0">x = ${a}</text>`;
  }).join('');

  const horiz = horizontals.map((L, i) => {
    const [, py] = toPx(0, L);
    return `
      <line id="ah-${i}" x1="${PAD}" y1="${py}" x2="${W - PAD}" y2="${py}"
            stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 5" opacity="0"/>
      <text id="ah-lab-${i}" x="${W - PAD - 6}" y="${py - 6}" font-size="12"
            fill="#b45309" text-anchor="end" opacity="0">y = ${L}</text>`;
  }).join('');

  const obliq = obliques.map((ob, i) => {
    const y0 = ob.m * XMIN + ob.n, y1 = ob.m * XMAX + ob.n;
    const [px0, py0] = toPx(XMIN, y0);
    const [px1, py1] = toPx(XMAX, y1);
    return `
      <line id="ao-${i}" x1="${px0}" y1="${py0}" x2="${px1}" y2="${py1}"
            stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 5" opacity="0"/>
      <text id="ao-lab-${i}" x="${px1 - 8}" y="${py1 - 6}" font-size="12"
            fill="#047857" text-anchor="end" opacity="0">y = ${ob.m}x ${ob.n >= 0 ? '+' : '−'} ${Math.abs(ob.n)}</text>`;
  }).join('');

  container.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet"
         style="background: var(--panel-bg, #fff); border: 1px solid var(--border, #e2e8f0); border-radius: 10px;">
      <g>${gridSvg()}</g>
      <g>${verts}${horiz}${obliq}</g>
      <g>${paths}</g>
      <text id="frame-hud" x="${W - 10}" y="${H - 8}" font-size="10" fill="#94a3b8" text-anchor="end"></text>
    </svg>
  `;
  return container.querySelector('svg');
}

// Animación principal.
export async function animateAsintotas(container, expr, { verticals = [], horizontals = [], obliques = [] } = {}) {
  const branches = sampleBranches(expr);
  const svg = buildSvg(container, { branches, verticals, horizontals, obliques });

  const curveEnd = 50;
  const verticalsStart = 40, verticalsEnd = 70;
  const horizStart = 70, horizEnd = 95;
  const obliqStart = 85, obliqEnd = 110;
  const totalFrames = 120; // 4 segundos a 30 fps.

  const branchLengths = branches.map(branchLength);

  const pathEls = branches.map((_, i) => svg.getElementById(`br-${i}`));
  const vertLineEls = verticals.map((_, i) => svg.getElementById(`av-${i}`));
  const vertLabEls = verticals.map((_, i) => svg.getElementById(`av-lab-${i}`));
  const horizLineEls = horizontals.map((_, i) => svg.getElementById(`ah-${i}`));
  const horizLabEls = horizontals.map((_, i) => svg.getElementById(`ah-lab-${i}`));
  const obliqLineEls = obliques.map((_, i) => svg.getElementById(`ao-${i}`));
  const obliqLabEls = obliques.map((_, i) => svg.getElementById(`ao-lab-${i}`));
  const hud = svg.getElementById('frame-hud');

  await playComposition({
    durationInFrames: totalFrames,
    fps: FPS,
    render(frame) {
      // Curva: "Crisp UI entrance" para cada rama (stroke-dashoffset de len → 0).
      pathEls.forEach((el, i) => {
        if (!el) return;
        const len = branchLengths[i];
        const progress = interpolate(frame, [0, curveEnd], [0, 1], {
          easing: CRISP_ENTRANCE,
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        el.setAttribute('stroke-dashoffset', (len * (1 - progress)).toFixed(2));
      });

      // Asíntotas verticales: fade-in con ligero "pop" (editorial).
      vertLineEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [verticalsStart, verticalsEnd], [0, 1], {
          easing: Easing.bezier(0.45, 0, 0.55, 1),
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });
      vertLabEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [verticalsStart + 5, verticalsEnd + 5], [0, 1], {
          easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });

      // AH
      horizLineEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [horizStart, horizEnd], [0, 1], {
          easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });
      horizLabEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [horizStart + 5, horizEnd + 5], [0, 1], {
          easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });

      // AO
      obliqLineEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [obliqStart, obliqEnd], [0, 1], {
          easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });
      obliqLabEls.forEach((el) => {
        if (!el) return;
        const op = interpolate(frame, [obliqStart + 5, obliqEnd + 5], [0, 1], {
          easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        el.setAttribute('opacity', op.toFixed(3));
      });

      if (hud) hud.textContent = `frame ${frame} / ${totalFrames} (${FPS} fps)`;
    },
  });
}
