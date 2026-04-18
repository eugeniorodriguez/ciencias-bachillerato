import { typeset, waitMath, numericLimit, fmt } from '../utils/mathRender.js';
import { plot } from '../utils/plotter.js';
import { load, save } from '../utils/storage.js';

// Generadores aleatorios de ejercicios por tipo.
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function nonZero(min, max) { let v = rand(min, max); return v === 0 ? 1 : v; }

const GENERADORES = {
  'lim-inf-inf': () => {
    // grados iguales → cociente coeficientes. Grado distinto → 0 o ±inf.
    const a = nonZero(1, 5), b = nonZero(1, 5);
    const variante = Math.random();
    if (variante < 0.5) {
      return {
        tipo: 'Límite',
        expr: `(${a}*x^2 + ${rand(-5,5)}*x) / (${b}*x^2 - ${rand(1,5)}*x)`,
        punto: 'inf',
        solNum: a / b,
        pista: `Grado num = grado den = 2. Resultado = ${a}/${b}.`
      };
    } else {
      const gNum = rand(1, 2), gDen = rand(gNum + 1, gNum + 2);
      return {
        tipo: 'Límite',
        expr: `(${a}*x^${gNum}) / (${b}*x^${gDen})`,
        punto: 'inf',
        solNum: 0,
        pista: 'Grado del denominador mayor → 0.'
      };
    }
  },
  'lim-0-0': () => {
    // (x^2 - r^2)/(x - r) → 2r  |  (x - r)/(x^2 - r^2) → 1/(2r)
    const r = nonZero(-4, 4);
    const v = Math.random();
    if (v < 0.5) {
      return {
        tipo: 'Límite',
        expr: `(x^2 - ${r*r}) / (x - ${r})`,
        punto: r,
        solNum: 2 * r,
        pista: `Factoriza x²−${r*r} = (x−${r})(x+${r}).`,
      };
    } else {
      return {
        tipo: 'Límite',
        expr: `(x - ${r}) / (x^2 - ${r*r})`,
        punto: r,
        solNum: 1 / (2 * r),
        pista: `Factoriza el denominador.`,
      };
    }
  },
  'lim-vert': () => {
    const a = rand(-3, 3);
    const k = nonZero(-5, 5);
    return {
      tipo: 'Límite',
      expr: `(${k}) / (x - ${a})^2`,
      punto: a,
      solNum: k > 0 ? Infinity : -Infinity,
      pista: `(x−${a})² es siempre positivo, así que el signo lo da ${k}.`,
    };
  },
  'asint-racional': () => {
    // p/q racional sencillo
    const r = nonZero(-3, 3);
    return {
      tipo: 'Asíntotas',
      expr: `(x^2 + ${rand(-3,3)}) / (x - ${r})`,
      punto: null,
      solNum: null,
      pista: `Grado num − grado den = 1 → posible oblicua. Vertical en x=${r}.`,
    };
  },
};

export async function renderPractica(root) {
  await waitMath();
  root.innerHTML = `
    <section class="panel">
      <h2>🎯 Modo práctica</h2>
      <p>Genera ejercicios aleatorios por tipo. Introduce tu respuesta y se compara con la solución.</p>
      <div class="row">
        <label>Tipo:</label>
        <select id="gen-type">
          <option value="lim-inf-inf">Límite ∞/∞ (racional)</option>
          <option value="lim-0-0">Límite 0/0 (factorización)</option>
          <option value="lim-vert">Asíntota vertical $k/(x-a)^2$</option>
          <option value="asint-racional">Asíntotas de una racional</option>
        </select>
        <button class="btn" id="gen-new">Nuevo ejercicio</button>
      </div>
      <div id="gen-area"></div>
    </section>

    <section class="panel">
      <h2>➕ Añadir tu propio ejercicio</h2>
      <p class="hint">Se guardan en tu navegador. Útiles para repasar los que te pone tu profesor.</p>
      <div class="row">
        <input id="mine-title" type="text" placeholder="Título (ej: 'Examen junio')" style="min-width:200px" />
        <input id="mine-expr" type="text" placeholder="f(x) = (x^2-1)/(x-1)" style="min-width:240px" />
        <input id="mine-point" type="text" placeholder="x → 1 o 'inf'" style="width:120px" />
        <input id="mine-sol" type="text" placeholder="Solución (opcional)" style="width:140px" />
        <button class="btn" id="mine-add">Guardar</button>
      </div>
      <div id="mine-list"></div>
    </section>
  `;

  const gen = async () => {
    const type = document.getElementById('gen-type').value;
    const ex = GENERADORES[type]();
    const area = document.getElementById('gen-area');
    area.innerHTML = renderExerciseCard(ex);
    await typeset(area);
    wireExerciseCard(area, ex);
  };
  document.getElementById('gen-new').addEventListener('click', gen);
  gen();

  // Ejercicios propios
  const refreshMine = async () => {
    const list = load('practica-mine', []);
    const box = document.getElementById('mine-list');
    if (list.length === 0) { box.innerHTML = '<p class="hint">No tienes ejercicios guardados todavía.</p>'; return; }
    box.innerHTML = list.map((e, i) => `
      <div class="exercise" data-i="${i}">
        <header>
          <div><span class="chip">${e.title || 'Ejercicio ' + (i+1)}</span></div>
          <button class="btn ghost sm del-mine">🗑 Eliminar</button>
        </header>
        <div class="statement">$\\displaystyle \\lim_{x\\to ${pointTex(e.point)}} ${toTexSafe(e.expr)}$</div>
        ${e.sol ? `<p><strong>Tu solución:</strong> ${e.sol}</p>` : ''}
        <div class="row">
          <input type="text" class="mine-answer" placeholder="Tu respuesta…" />
          <button class="btn sm check-mine">Comprobar</button>
          <span class="mine-feedback"></span>
        </div>
        <div class="plot"></div>
      </div>
    `).join('');
    await typeset(box);
    box.querySelectorAll('[data-i]').forEach(card => {
      const i = Number(card.dataset.i);
      const e = list[i];
      card.querySelector('.del-mine').addEventListener('click', () => {
        list.splice(i, 1); save('practica-mine', list); refreshMine();
      });
      card.querySelector('.check-mine').addEventListener('click', () => {
        const ans = card.querySelector('.mine-answer').value.trim();
        const fb = card.querySelector('.mine-feedback');
        const exp = numericExpected(e.expr, e.point);
        if (!isFinite(exp) && exp !== Infinity && exp !== -Infinity) {
          fb.textContent = '🤖 No se pudo evaluar numéricamente. Compara tú.';
          fb.style.color = 'var(--warn)';
          return;
        }
        const ansNum = parseAnswer(ans);
        const ok = approxOrInfinity(ansNum, exp);
        fb.textContent = ok ? `✅ Correcto (${fmt(exp)})` : `❌ Incorrecto. Resultado ≈ ${fmt(exp)}`;
        fb.style.color = ok ? 'var(--ok)' : 'var(--err)';
      });
      const plotEl = card.querySelector('.plot');
      if (plotEl && e.expr) {
        plot(plotEl, {
          xAxis: { domain: [-10, 10] },
          yAxis: { domain: [-10, 10] },
          data: [{ fn: e.expr.replace(/\s+/g, ''), graphType: 'polyline', color: '#22d3ee' }],
        });
      }
    });
  };
  document.getElementById('mine-add').addEventListener('click', () => {
    const title = document.getElementById('mine-title').value.trim();
    const expr = document.getElementById('mine-expr').value.trim();
    const point = document.getElementById('mine-point').value.trim();
    const sol = document.getElementById('mine-sol').value.trim();
    if (!expr || !point) { alert('Hace falta al menos expresión y punto.'); return; }
    const list = load('practica-mine', []);
    list.push({ title, expr, point, sol });
    save('practica-mine', list);
    document.getElementById('mine-title').value = '';
    document.getElementById('mine-expr').value = '';
    document.getElementById('mine-point').value = '';
    document.getElementById('mine-sol').value = '';
    refreshMine();
  });
  refreshMine();
}

function renderExerciseCard(ex) {
  const ptx = pointTex(ex.punto);
  const tex = toTexSafe(ex.expr);
  return `
    <div class="exercise">
      <header>
        <div><span class="chip">${ex.tipo}</span></div>
      </header>
      <div class="statement">$\\displaystyle \\lim_{x\\to ${ptx}} ${tex}$</div>
      <div class="row">
        <input type="text" id="gen-ans" placeholder="Tu respuesta (número, inf, -inf)" />
        <button class="btn sm" id="gen-check">Comprobar</button>
        <button class="btn ghost sm" id="gen-hint">💡 Pista</button>
        <button class="btn ghost sm" id="gen-sol">Ver solución</button>
      </div>
      <div id="gen-feedback"></div>
      <div id="gen-plot" class="plot"></div>
    </div>
  `;
}

function wireExerciseCard(area, ex) {
  const ansEl = area.querySelector('#gen-ans');
  const fb = area.querySelector('#gen-feedback');
  area.querySelector('#gen-check').addEventListener('click', () => {
    const user = parseAnswer(ansEl.value);
    const expected = ex.solNum ?? numericExpected(ex.expr, ex.punto);
    if (expected === undefined || (typeof expected === 'number' && Number.isNaN(expected))) {
      fb.innerHTML = '<div class="result info">No hay respuesta numérica única (analiza asíntotas).</div>';
      return;
    }
    const ok = approxOrInfinity(user, expected);
    fb.innerHTML = `<div class="result ${ok ? 'ok' : 'err'}">${ok ? '✅ ¡Correcto!' : '❌ No es correcto. Respuesta esperada: <strong>' + fmt(expected) + '</strong>'}</div>`;
  });
  area.querySelector('#gen-hint').addEventListener('click', () => {
    fb.innerHTML = `<div class="result info">💡 ${ex.pista}</div>`;
  });
  area.querySelector('#gen-sol').addEventListener('click', () => {
    const expected = ex.solNum ?? numericExpected(ex.expr, ex.punto);
    fb.innerHTML = `<div class="result ok">Solución: <strong>${fmt(expected)}</strong></div>`;
  });
  plot(area.querySelector('#gen-plot'), {
    xAxis: { domain: [-10, 10] },
    yAxis: { domain: [-10, 10] },
    data: [{ fn: ex.expr.replace(/\s+/g, ''), graphType: 'polyline', color: '#22d3ee', nSamples: 500 }],
  });
}

function numericExpected(expr, point) {
  if (point === 'inf' || point === '+inf') return numericLimit(expr, 0, { infinity: true }).value;
  if (point === '-inf') return numericLimit(expr, 0, { infinity: true, fromNeg: true }).value;
  const x0 = Number(point);
  if (!isFinite(x0)) return undefined;
  const r = numericLimit(expr, x0, { h: 1e-5 });
  if (Math.abs(r.left - r.right) < 1e-3) return r.left;
  if (!isFinite(r.left) && !isFinite(r.right) && Math.sign(r.left) === Math.sign(r.right)) return r.left;
  return NaN;
}

function parseAnswer(s) {
  const v = s.trim().toLowerCase();
  if (v === 'inf' || v === '+inf' || v === '∞' || v === '+∞') return Infinity;
  if (v === '-inf' || v === '−∞' || v === '-∞') return -Infinity;
  // fracciones tipo 1/2
  if (/^-?\d+\/-?\d+$/.test(v)) {
    const [a, b] = v.split('/').map(Number);
    return a / b;
  }
  const n = Number(v.replace(',', '.'));
  return isFinite(n) ? n : NaN;
}
function approxOrInfinity(a, b) {
  if (a === b) return true;
  if (!isFinite(a) && !isFinite(b)) return Math.sign(a) === Math.sign(b);
  if (!isFinite(a) || !isFinite(b)) return false;
  return Math.abs(a - b) < Math.max(1e-3, Math.abs(b) * 1e-3);
}
function pointTex(p) {
  if (p === 'inf' || p === '+inf') return '+\\infty';
  if (p === '-inf') return '-\\infty';
  return String(p);
}
function toTexSafe(expr) {
  try { return window.math.parse(expr).toTex({ parenthesis: 'auto' }); } catch { return expr; }
}
