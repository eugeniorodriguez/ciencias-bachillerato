// Port ligero de la API de timing de Remotion para animaciones en vanilla JS.
// Fiel a la skill remotion-best-practices/rules/timing.md: se trabaja con
// `frame` discreto y se mapea a propiedades vía interpolate() y Easing.

// Interpolación lineal con soporte de extrapolación y easing al estilo Remotion.
export function interpolate(input, inputRange, outputRange, options = {}) {
  const [inMin, inMax] = inputRange;
  const [outMin, outMax] = outputRange;
  const { easing = linear, extrapolateLeft = 'extend', extrapolateRight = 'extend' } = options;
  if (input < inMin) {
    if (extrapolateLeft === 'clamp') return outMin;
    if (extrapolateLeft === 'identity') return input;
  }
  if (input > inMax) {
    if (extrapolateRight === 'clamp') return outMax;
    if (extrapolateRight === 'identity') return input;
  }
  const t = (input - inMin) / (inMax - inMin);
  const eased = easing(t);
  return outMin + eased * (outMax - outMin);
}

function linear(t) { return t; }

// UnitBezier (solve x -> y using Newton-Raphson + bisección). Misma semántica
// que CSS cubic-bezier / Remotion Easing.bezier(x1,y1,x2,y2).
function unitBezier(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleDerivX = (t) => (3 * ax * t + 2 * bx) * t + cx;

  const solveX = (x, eps = 1e-6) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const xt = sampleX(t) - x;
      if (Math.abs(xt) < eps) return t;
      const d = sampleDerivX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= xt / d;
    }
    let lo = 0, hi = 1, t2 = x;
    while (lo < hi) {
      const xt = sampleX(t2);
      if (Math.abs(xt - x) < eps) return t2;
      if (x > xt) lo = t2;
      else hi = t2;
      t2 = (hi - lo) / 2 + lo;
    }
    return t2;
  };

  return (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return sampleY(solveX(t));
  };
}

export const Easing = {
  linear,
  bezier: unitBezier,
  quad: (t) => t * t,
  cubic: (t) => t * t * t,
  sin: (t) => 1 - Math.cos((t * Math.PI) / 2),
  exp: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  circle: (t) => 1 - Math.sqrt(1 - t * t),
  in: (eased) => (t) => eased(t),
  out: (eased) => (t) => 1 - eased(1 - t),
  inOut: (eased) => (t) => (t < 0.5 ? eased(t * 2) / 2 : 1 - eased((1 - t) * 2) / 2),
};

// Curvas pre-hechas tomadas de la skill de Remotion: "Crisp UI entrance".
export const CRISP_ENTRANCE = unitBezier(0.16, 1, 0.3, 1);
export const EDITORIAL_EASE = unitBezier(0.45, 0, 0.55, 1);
export const PLAYFUL_POP = unitBezier(0.34, 1.56, 0.64, 1);

// Runtime de composición: ejecuta un render(frame) a `fps` durante `durationInFrames`.
// Devuelve una promesa que resuelve al terminar. Permite onFinish opcional.
export function playComposition({ durationInFrames, fps = 30, render, onFinish }) {
  return new Promise((resolve) => {
    const frameMs = 1000 / fps;
    let start = null;
    let frame = 0;
    const step = (t) => {
      if (start == null) start = t;
      frame = Math.min(durationInFrames, Math.floor((t - start) / frameMs));
      render(frame);
      if (frame < durationInFrames) requestAnimationFrame(step);
      else { if (onFinish) onFinish(); resolve(); }
    };
    requestAnimationFrame(step);
  });
}
