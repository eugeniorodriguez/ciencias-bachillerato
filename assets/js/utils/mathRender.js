// Helpers para renderizar matemáticas con MathJax y evaluar con math.js.
export async function typeset(root) {
  // Esperar a que MathJax esté listo.
  for (let i = 0; i < 50; i++) {
    if (window.MathJax && window.MathJax.typesetPromise) break;
    await new Promise(r => setTimeout(r, 50));
  }
  if (window.MathJax && window.MathJax.typesetPromise) {
    try { await window.MathJax.typesetPromise([root]); } catch (e) { console.warn(e); }
  }
}

export async function waitMath() {
  for (let i = 0; i < 100; i++) {
    if (window.math) return window.math;
    await new Promise(r => setTimeout(r, 50));
  }
  throw new Error('math.js no cargado');
}

export async function waitFunctionPlot() {
  for (let i = 0; i < 100; i++) {
    if (window.functionPlot) return window.functionPlot;
    await new Promise(r => setTimeout(r, 50));
  }
  throw new Error('function-plot no cargado');
}

// Evalúa f(x0) en un punto usando math.js. Devuelve null si error o indefinido.
export function evalAt(exprStr, x0) {
  try {
    const math = window.math;
    const node = math.parse(exprStr);
    const code = node.compile();
    const y = code.evaluate({ x: x0 });
    if (typeof y === 'number' && isFinite(y)) return y;
    if (y && typeof y.re === 'number') return y.re; // complejos
    return null;
  } catch {
    return null;
  }
}

// Límite numérico: evalúa acercándose por izquierda y derecha.
export function numericLimit(exprStr, x0, { h = 1e-4, infinity = false, fromNeg = false } = {}) {
  try {
    const math = window.math;
    const code = math.parse(exprStr).compile();
    const evalN = (x) => {
      try {
        const y = code.evaluate({ x });
        if (typeof y === 'number') return y;
        if (y && typeof y.re === 'number') return y.re;
        return NaN;
      } catch { return NaN; }
    };
    if (infinity) {
      const sign = fromNeg ? -1 : 1;
      const samples = [10, 100, 1e3, 1e4, 1e5, 1e6].map(v => evalN(sign * v));
      const last = samples[samples.length - 1];
      if (!isFinite(last)) {
        // posible infinito
        if (samples.every(s => s > 1e6)) return { value: Infinity, side: 'both' };
        if (samples.every(s => s < -1e6)) return { value: -Infinity, side: 'both' };
        return { value: NaN, side: 'both' };
      }
      if (Math.abs(last) > 1e8) return { value: Math.sign(last) * Infinity, side: 'both' };
      return { value: round(last), side: 'both' };
    }
    const left = evalN(x0 - h);
    const right = evalN(x0 + h);
    const leftFar = evalN(x0 - h * 10);
    const rightFar = evalN(x0 + h * 10);
    const summarize = (near, far) => {
      if (!isFinite(near)) {
        if (far > 1e6) return Infinity;
        if (far < -1e6) return -Infinity;
        return NaN;
      }
      return near;
    };
    const L = summarize(left, leftFar);
    const R = summarize(right, rightFar);
    return { left: L, right: R, matches: approxEqual(L, R) };
  } catch {
    return { left: NaN, right: NaN, matches: false };
  }
}

function approxEqual(a, b) {
  if (a === b) return true;
  if (!isFinite(a) && !isFinite(b)) return Math.sign(a) === Math.sign(b);
  if (!isFinite(a) || !isFinite(b)) return false;
  return Math.abs(a - b) < 1e-3 * Math.max(1, Math.abs(a), Math.abs(b));
}

function round(x) {
  if (!isFinite(x)) return x;
  return Math.abs(x - Math.round(x)) < 1e-6 ? Math.round(x) : Number(x.toPrecision(6));
}

// Formato bonito para número / infinito.
export function fmt(x) {
  if (x === Infinity) return '+∞';
  if (x === -Infinity) return '−∞';
  if (!isFinite(x) || Number.isNaN(x)) return 'indef.';
  return String(round(x));
}

// Detecta discontinuidades aproximadas en un intervalo.
export function scanDomain(exprStr, xmin = -20, xmax = 20, step = 0.05) {
  const math = window.math;
  let code;
  try { code = math.parse(exprStr).compile(); } catch { return { valid: false }; }
  const gaps = [];
  let prev = null;
  for (let x = xmin; x <= xmax; x += step) {
    let y;
    try { y = code.evaluate({ x }); } catch { y = NaN; }
    const yn = (typeof y === 'number') ? y : (y && typeof y.re === 'number') ? y.re : NaN;
    if (!isFinite(yn)) {
      if (!prev || !prev.active) gaps.push({ start: x, end: x, active: true });
      else gaps[gaps.length - 1].end = x;
      prev = { active: true };
    } else {
      prev = { active: false };
    }
  }
  return { valid: true, gaps: gaps.map(g => ({ start: +g.start.toFixed(3), end: +g.end.toFixed(3) })) };
}
