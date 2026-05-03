// UD 9 · Movimientos en dos dimensiones (Física 1.º Bach).
// Vectores: combinación lineal, módulo y ángulo, descomposición.
// Principio de Galileo y composición de 2 MRU.
// Incluye descomponedor interactivo de vectores y animación final.
import { typeset } from '../utils/mathRender.js';
import { interpolate, Easing, CRISP_ENTRANCE, playComposition } from '../utils/remotion-lite.js';

const SVG_W = 520, SVG_H = 360, SVG_PAD = 30;

export async function renderFisicaUd9(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Física · 1.º Bachillerato · UD 9</div>
      <h1>Movimientos en dos dimensiones</h1>
      <p class="hero-lead">
        Cualquier vector en 2D se descompone en una parte horizontal y otra vertical. Esta idea, junto con el principio de Galileo, permite analizar todo el movimiento en dos dimensiones <em>eje a eje</em> y luego sumar.
      </p>
    </section>

    <section class="panel toc">
      <h2>Índice</h2>
      <ol class="toc-list">
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#1-combinacion-lineal">1. Combinación lineal</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#2-vector-en-funcion-del-angulo">2. Vector en función del ángulo</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#3-por-que-va-con-coseno-y-con-seno">3. ¿Por qué $r_x$ va con coseno y $r_y$ con seno?</a></li>
        <li class="toc-item toc-item--interactive"><span class="toc-chip">Interactivo</span><a href="#descomponedor-interactivo">🧪 Descomponedor interactivo</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-1-componentes-modulo-y-angulo">📝 Actividad 1 — Componentes → módulo y ángulo</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-2-modulo-y-angulo-componentes">📝 Actividad 2 — Módulo y ángulo → componentes</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-3-barca-cruzando-un-rio">📝 Actividad 3 — Barca cruzando un río</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-4-barca-con-angulo-respecto-a-la-orilla">📝 Actividad 4 — Barca con ángulo respecto a la orilla</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-5-nadador-y-velocidad-del-rio">📝 Actividad 5 — Nadador y velocidad del río</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#4-principio-de-galileo">4. Principio de Galileo</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#5-composicion-de-2-mru">5. Composición de 2 MRU</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#6-composicion-de-un-mru-y-un-mrua">6. Composición de un MRU y un MRUA</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#7-tiro-horizontal">7. Tiro horizontal</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-6-manguera-lanzando-agua">📝 Actividad 6 — Manguera lanzando agua</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-7-flecha-desde-un-acantilado">📝 Actividad 7 — Flecha desde un acantilado</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-8-mono-lanzando-un-platano">📝 Actividad 8 — Mono lanzando un plátano</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#8-tiro-oblicuo">8. Tiro oblicuo</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-9-manguera-con-inclinacion">📝 Actividad 9 — Manguera con inclinación</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-10-saque-de-portero">📝 Actividad 10 — Saque de portero</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-11-nina-lanzando-un-avion-de-papel">📝 Actividad 11 — Niña lanzando un avión de papel</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#9-movimiento-circular-magnitudes-angulares">9. Movimiento circular: magnitudes angulares</a></li>
        <li class="toc-item toc-item--interactive"><span class="toc-chip">Interactivo</span><a href="#explorador-de-radianes">🧪 Explorador de radianes ($\varphi = s/R$)</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-12-disco-rotando">📝 Actividad 12 — Disco rotando</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-13-velocista-vs-indycar">📝 Actividad 13 — Velocista vs Indycar</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-14-ventilador-acelerando">📝 Actividad 14 — Ventilador acelerando</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#10-movimiento-circular-uniforme-mcu">10. Movimiento Circular Uniforme (MCU)</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-15-cd-rom-girando">📝 Actividad 15 — CD-ROM girando</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-16-estacion-espacial-internacional">📝 Actividad 16 — Estación Espacial Internacional</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#11-movimiento-circular-uniformemente-acelerado-mcua">11. Movimiento Circular Uniformemente Acelerado (MCUA)</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-19-centrifugadora-arrancando">📝 Actividad 19 — Centrifugadora arrancando</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-20-rueda-frenando">📝 Actividad 20 — Rueda frenando</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#12-movimiento-armonico-simple-mas">12. Movimiento Armónico Simple (MAS)</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-17-mas-dado-por-su-ecuacion">📝 Actividad 17 — MAS dado por su ecuación</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-18-construir-la-ecuacion-del-mas">📝 Actividad 18 — Construir la ecuación del MAS</a></li>
        <li class="toc-item toc-item--exam"><span class="toc-chip">Examen</span><a href="#examenes-corregidos">🧾 Exámenes corregidos</a></li>
        <li class="toc-item toc-item--reference"><span class="toc-chip">Referencia</span><a href="#chuleta-de-la-unidad">📋 Chuleta de la unidad</a></li>
      </ol>
    </section>

    <section class="panel panel--theory">
      <h2 id="1-combinacion-lineal">1. Combinación lineal</h2>
      <p>La <strong>posición</strong>, la <strong>velocidad</strong> y la <strong>aceleración</strong> son magnitudes vectoriales. En 2D, cualquier vector se expresa como suma de dos vectores unitarios:</p>
      <p style="text-align:center; font-size: 1.2em">$$\\vec{r} = x\\,\\vec{i} + y\\,\\vec{j}$$</p>
      <p>donde $\\vec{i} = (1, 0)$ es el unitario del eje X y $\\vec{j} = (0, 1)$ el del eje Y. Esa expresión se llama <strong>combinación lineal</strong>: sumar múltiplos escalares de los vectores de la base.</p>

      <div class="theory">
        <h4>🎯 ¿Por qué es importante?</h4>
        <p>Porque a partir de ahora cada movimiento en 2D se va a tratar <strong>como dos movimientos independientes</strong>: uno en X y otro en Y. La combinación lineal es la "etiqueta" que nos permite separar lo que pasa en cada eje y luego volver a juntarlo.</p>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — qué es un vector y cómo se opera</summary>
        <div class="theory">
          <h4>Vector vs. escalar</h4>
          <p>Un <strong>escalar</strong> es un número (por ejemplo, una temperatura: 23 °C). Un <strong>vector</strong> es un ente con tres rasgos:</p>
          <ul class="clean">
            <li>📏 <strong>Módulo</strong>: la longitud de la flecha (el "cuánto").</li>
            <li>🧭 <strong>Dirección</strong>: la recta sobre la que vive (la "línea").</li>
            <li>➡️ <strong>Sentido</strong>: hacia qué lado de esa recta apunta.</li>
          </ul>

          <h4>Vectores unitarios</h4>
          <p>Vectores con módulo 1. Los más usados son la <strong>base canónica</strong> del plano:</p>
          <p style="text-align:center">$\\vec{i} = (1, 0) \\quad\\quad \\vec{j} = (0, 1)$</p>
          <p>Apuntan, respectivamente, al eje $X$ y al eje $Y$.</p>

          <h4>Operaciones básicas (componente a componente)</h4>
          <ul class="clean">
            <li>➕ <strong>Suma</strong>: $(a_1, a_2) + (b_1, b_2) = (a_1+b_1,\\; a_2+b_2)$. Gráficamente: regla del paralelogramo o "punta con cola".</li>
            <li>✖️ <strong>Producto por un escalar</strong>: $k\\cdot(a,b) = (ka, kb)$. Cambia la longitud (y el sentido si $k&lt;0$).</li>
          </ul>

          <h4>Combinación lineal</h4>
          <p>Sumar varios vectores, cada uno multiplicado por un escalar. La expresión $\\vec{r} = x\\vec{i} + y\\vec{j}$ es <em>la</em> combinación lineal de la base canónica que reconstruye cualquier vector del plano.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="2-vector-en-funcion-del-angulo">2. Vector en función del ángulo</h2>
      <p>Un mismo vector se puede describir de dos maneras equivalentes:</p>
      <ul class="clean">
        <li>📐 <strong>En cartesianas</strong>: $\\vec{r} = x\\,\\vec{i} + y\\,\\vec{j}$ (componentes).</li>
        <li>🎯 <strong>En polares</strong>: módulo $|\\vec{r}|$ y ángulo $\\alpha$ que forma con la horizontal.</li>
      </ul>
      <p>Si descomponemos el vector $\\vec{r}$ en sus componentes $\\vec{r}_x$ y $\\vec{r}_y$, los tres forman un <strong>triángulo rectángulo</strong>: $\\vec{r}$ es la hipotenusa y las componentes los catetos.</p>

      <div class="theory">
        <h4>📏 Las dos fórmulas clave</h4>
        <p style="text-align:center; font-size: 1.15em">$$|\\vec{r}_x| = |\\vec{r}|\\cdot \\cos\\alpha \\qquad |\\vec{r}_y| = |\\vec{r}|\\cdot \\sin\\alpha$$</p>
        <p>El <strong>módulo</strong> sale por Pitágoras (es la hipotenusa):</p>
        <p style="text-align:center; font-size: 1.15em">$$|\\vec{r}| = \\sqrt{x^2 + y^2}$$</p>
        <p>El <strong>ángulo</strong>, despejando de las anteriores:</p>
        <p style="text-align:center">$$\\cos\\alpha = \\frac{x}{|\\vec{r}|}\\qquad \\sin\\alpha = \\frac{y}{|\\vec{r}|}\\qquad \\tan\\alpha = \\frac{y}{x}$$</p>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — razones trigonométricas y triángulo rectángulo</summary>
        <div class="theory">
          <h4>Triángulo rectángulo</h4>
          <p>Un triángulo con un ángulo de exactamente $90°$. El lado <strong>opuesto al ángulo recto</strong> es la <strong>hipotenusa</strong> ($h$): el más largo. Los otros dos son los <strong>catetos</strong>. Respecto a un ángulo agudo $\\alpha$:</p>
          <ul class="clean">
            <li>🟦 <strong>Cateto opuesto</strong> ($\\text{co}$): el que no toca a $\\alpha$.</li>
            <li>🟧 <strong>Cateto contiguo</strong> ($\\text{cc}$): el que sí toca a $\\alpha$ (sin ser la hipotenusa).</li>
          </ul>

          <h4>Las 6 razones trigonométricas</h4>
          <table class="table">
            <thead><tr><th>Razón</th><th>Definición</th><th>Recíproco</th></tr></thead>
            <tbody>
              <tr><td>$\\sin\\alpha$ (seno)</td><td>$\\dfrac{\\text{co}}{h}$</td><td>$\\csc\\alpha = \\dfrac{h}{\\text{co}}$ (cosecante)</td></tr>
              <tr><td>$\\cos\\alpha$ (coseno)</td><td>$\\dfrac{\\text{cc}}{h}$</td><td>$\\sec\\alpha = \\dfrac{h}{\\text{cc}}$ (secante)</td></tr>
              <tr><td>$\\tan\\alpha$ (tangente)</td><td>$\\dfrac{\\text{co}}{\\text{cc}} = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$</td><td>$\\cot\\alpha = \\dfrac{\\text{cc}}{\\text{co}}$ (cotangente)</td></tr>
            </tbody>
          </table>

          <h4>Identidad fundamental</h4>
          <p>$\\sin^2\\alpha + \\cos^2\\alpha = 1$, válida para todo $\\alpha$. Sale directa de Pitágoras: si dividimos $\\text{co}^2 + \\text{cc}^2 = h^2$ entre $h^2$, queda $(\\text{co}/h)^2 + (\\text{cc}/h)^2 = 1$.</p>

          <h4>Teorema de Pitágoras</h4>
          <p>$h^2 = \\text{co}^2 + \\text{cc}^2$. De aquí sale el módulo de un vector: si $r_x$ y $r_y$ son los catetos, $|\\vec{r}|$ es la hipotenusa.</p>

          <h4>Cómo se conecta con un vector $\\vec{r}$</h4>
          <p>Al descomponer $\\vec{r}$ en sus componentes, $r_x$ es el cateto contiguo a $\\alpha$ y $r_y$ el opuesto. Aplicando las definiciones:</p>
          <p>$\\cos\\alpha = \\dfrac{\\text{cc}}{h} = \\dfrac{r_x}{|\\vec{r}|} \\;\\Rightarrow\\; r_x = |\\vec{r}|\\cos\\alpha$</p>
          <p>$\\sin\\alpha = \\dfrac{\\text{co}}{h} = \\dfrac{r_y}{|\\vec{r}|} \\;\\Rightarrow\\; r_y = |\\vec{r}|\\sin\\alpha$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="3-por-que-va-con-coseno-y-con-seno">3. ¿Por qué $r_x$ va con coseno y $r_y$ con seno?</h2>
      <div class="theory">
        <h4>En una frase</h4>
        <p><strong>El coseno es el cateto que toca el ángulo. El seno es el cateto de enfrente.</strong></p>
        <p>Como el ángulo $\\alpha$ se mide siempre desde el eje horizontal, el lado que <em>toca</em> $\\alpha$ es el horizontal $r_x$ → <strong>coseno</strong>. El lado de <em>enfrente</em> es el vertical $r_y$ → <strong>seno</strong>. No es una regla inventada para vectores: viene directamente de la definición de seno y coseno en cualquier triángulo rectángulo.</p>
      </div>

      <details>
        <summary><strong>Curiosidad: etimología de "seno" y "coseno"</strong></summary>
        <div class="theory">
          <p>Los matemáticos indios llamaban <em>jyā</em> a la <em>semicuerda</em> de un arco. Los árabes lo transcribieron como <em>jiba</em>, palabra sin significado en árabe. Cuando los europeos tradujeron del árabe al latín, leyeron <em>jaib</em> (que sí significa algo: <em>seno</em>, <em>pliegue</em>, como el de una túnica) y lo tradujeron por <strong>sinus</strong> → "seno" en español.</p>
          <p>Geométricamente, el seno de un ángulo es <strong>cuánto sube</strong> el extremo del radio en una circunferencia unitaria. El "seno" es la altura proyectada.</p>
          <p><em>Co</em>seno significa "seno del ángulo complementario": $\\cos\\alpha = \\sin(90° - \\alpha)$. El prefijo <em>co-</em> tiene el mismo origen en cotangente y cosecante.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--interactive">
      <h2 id="descomponedor-interactivo">🧪 Descomponedor interactivo</h2>
      <p class="hint">Mueve los <em>sliders</em>: ves el vector $\\vec{r}$ (azul), sus componentes $r_x$ (naranja) y $r_y$ (verde), su módulo y el ángulo $\\alpha$.</p>
      <div class="row" style="gap: 18px; flex-wrap: wrap; align-items: flex-start">
        <div style="flex: 1; min-width: 260px">
          <div class="row">
            <div>
              <label>Componente x</label>
              <input id="vd-x" type="range" min="-10" max="10" step="0.1" value="8" style="width: 200px"/>
              <div style="margin-top:4px">x = <strong id="vd-x-val">8</strong></div>
            </div>
          </div>
          <div class="row" style="margin-top:8px">
            <div>
              <label>Componente y</label>
              <input id="vd-y" type="range" min="-10" max="10" step="0.1" value="-6" style="width: 200px"/>
              <div style="margin-top:4px">y = <strong id="vd-y-val">-6</strong></div>
            </div>
          </div>
          <div id="vd-info" class="result info" style="margin-top:14px"></div>
          <div class="row" style="margin-top:10px">
            <button class="btn" data-preset="8,-6">Ej. 1: 8î − 6ĵ</button>
            <button class="btn" data-preset="5,8.66">Ej. 2: |r|=10, 60°</button>
            <button class="btn" data-preset="3,4">3î + 4ĵ</button>
          </div>
        </div>
        <div style="flex: 1; min-width: 280px">
          <div id="vd-svg"></div>
        </div>
      </div>

      <div class="row" style="margin-top:14px; align-items:center">
        <button class="btn" id="vd-anim">🎬 Animar descomposición</button>
        <span class="hint">Reproduce 3 s a 30 fps con la curva <em>Crisp Entrance</em> de Remotion.</span>
      </div>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-1-componentes-modulo-y-angulo">📝 Actividad 1 — Componentes → módulo y ángulo</h2>
      <p>Un vector tiene coordenadas $\\vec{r} = 8\\,\\vec{i} - 6\\,\\vec{j}$. Halla:</p>
      <ol>
        <li>Su <strong>módulo</strong>.</li>
        <li>El <strong>ángulo</strong> que forma con la horizontal.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>a) Módulo (Pitágoras)</h4>
          <p>$|\\vec{r}| = \\sqrt{x^2 + y^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = \\boxed{10}$</p>
          <p class="hint">El signo negativo de $y$ desaparece al elevar al cuadrado. No afecta al módulo.</p>

          <h4>b) Ángulo (a partir de las fórmulas del tema)</h4>
          <p>Usando $|r_x| = |\\vec{r}|\\cdot\\cos\\alpha$:</p>
          <p>$\\cos\\alpha = \\dfrac{x}{|\\vec{r}|} = \\dfrac{8}{10} = 0{,}8 \\;\\Rightarrow\\; \\alpha = \\arccos(0{,}8) \\approx 36{,}87°$</p>
          <p>Usando $|r_y| = |\\vec{r}|\\cdot\\sin\\alpha$:</p>
          <p>$\\sin\\alpha = \\dfrac{y}{|\\vec{r}|} = \\dfrac{-6}{10} = -0{,}6 \\;\\Rightarrow\\; \\alpha = \\arcsin(-0{,}6) \\approx -36{,}87°$</p>
          <p>El ángulo es <strong>$\\alpha \\approx -36{,}87°$</strong>: el vector apunta al 4.º cuadrante (a la derecha y hacia abajo).</p>
          <p class="hint">💡 También vale $\\tan\\alpha = y/x = -6/8 = -0{,}75 \\Rightarrow \\alpha = \\arctan(-0{,}75)$, llegando al mismo resultado.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-2-modulo-y-angulo-componentes">📝 Actividad 2 — Módulo y ángulo → componentes</h2>
      <p>Un vector de módulo $10$ forma un ángulo de $60°$ con la horizontal. Escríbelo en función de sus vectores unitarios $\\vec{i}$ y $\\vec{j}$.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <p>Aplicamos directamente las fórmulas del tema:</p>
          <p>$|r_x| = |\\vec{r}|\\cos\\alpha = 10\\cdot\\cos 60° = 10\\cdot\\dfrac{1}{2} = 5$</p>
          <p>$|r_y| = |\\vec{r}|\\sin\\alpha = 10\\cdot\\sin 60° = 10\\cdot\\dfrac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8{,}66$</p>
          <p style="text-align:center; font-size: 1.15em">$$\\boxed{\\vec{r} = 5\\,\\vec{i} + 5\\sqrt{3}\\,\\vec{j}}$$</p>
          <p class="hint">📚 Memoriza los valores exactos de $\\cos$ y $\\sin$ para 30°, 45° y 60°: aparecen en casi todos los ejercicios del curso.</p>

          <table class="table" style="margin-top:10px">
            <thead><tr><th>$\\alpha$</th><th>$\\sin\\alpha$</th><th>$\\cos\\alpha$</th></tr></thead>
            <tbody>
              <tr><td>0°</td><td>0</td><td>1</td></tr>
              <tr><td>30°</td><td>1/2</td><td>√3/2</td></tr>
              <tr><td>45°</td><td>√2/2</td><td>√2/2</td></tr>
              <tr><td>60°</td><td>√3/2</td><td>1/2</td></tr>
              <tr><td>90°</td><td>1</td><td>0</td></tr>
            </tbody>
          </table>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-3-barca-cruzando-un-rio">📝 Actividad 3 — Barca cruzando un río</h2>
      <p>Una barca a motor sale de un muelle y cruza un río a $v_b = 15$ m/s. La corriente del río es de $v_c = 2$ m/s. El río tiene un ancho de $300$ m. Calcula el <strong>punto de llegada de la barca respecto del muelle</strong>.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Paso 1 — Elegimos los ejes</h4>
          <ul class="clean">
            <li>📐 Eje $y$ = dirección perpendicular a la orilla (ancho del río).</li>
            <li>📐 Eje $x$ = dirección de la corriente (paralela a la orilla).</li>
          </ul>
          <p>El barco apunta perpendicular a la orilla, así que $\\vec{v}_b = 15\\,\\vec{j}$ m/s. La corriente arrastra paralela a la orilla: $\\vec{v}_c = 2\\,\\vec{i}$ m/s.</p>

          <h4>Paso 2 — Galileo: dos MRU independientes</h4>
          <p>En cada eje hay un MRU:</p>
          <ul class="clean">
            <li>🟦 En $y$ (atravesando): $y(t) = 15\\,t$. El barco solo se mueve aquí por su propio motor.</li>
            <li>🟧 En $x$ (arrastre): $x(t) = 2\\,t$. La corriente solo arrastra en este eje.</li>
          </ul>

          <h4>Paso 3 — ¿Cuándo llega a la otra orilla?</h4>
          <p>Llega cuando $y = 300$ m: $\\;\\;300 = 15\\,t \\;\\Rightarrow\\; t = 20$ s.</p>

          <h4>Paso 4 — ¿Cuánto le ha arrastrado la corriente en ese tiempo?</h4>
          <p>$x = 2 \\cdot 20 = 40$ m aguas abajo.</p>

          <h4>Resultado</h4>
          <p style="font-size: 1.1em; text-align:center">$$\\boxed{\\vec{r} = 40\\,\\vec{i} + 300\\,\\vec{j} \\;\\;\\text{m}}$$</p>
          <p>La barca llega a un punto situado a $300$ m al otro lado del río y $40$ m aguas abajo del muelle. La distancia recorrida es $|\\vec{r}| = \\sqrt{40^2 + 300^2} \\approx 302{,}66$ m, formando con la corriente un ángulo $\\alpha = \\arctan(300/40) \\approx 82{,}4°$ (casi perpendicular, porque el motor es mucho más rápido que la corriente).</p>
          <p class="hint">💡 Observa que el resultado <em>no depende</em> de cómo combines los movimientos: cada eje vive su propio MRU. Eso es el principio de Galileo en estado puro.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-4-barca-con-angulo-respecto-a-la-orilla">📝 Actividad 4 — Barca con ángulo respecto a la orilla</h2>
      <p>Una barca cruza un río con velocidad $v_b = 5$ m/s formando un <strong>ángulo de $135°$ con la orilla</strong>. La corriente del río tiene una velocidad $v_c = 3$ m/s y el río tiene $100$ m de ancho. Calcula el punto de llegada.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Paso 1 — Geometría: ¿qué significa "135° con la orilla"?</h4>
          <p>Tomamos el eje $x$ paralelo a la orilla (sentido de la corriente) y el eje $y$ perpendicular a ella (cruzando el río). Un ángulo de $135°$ medido desde la orilla significa que la barca apunta hacia el otro lado <em>pero ligeramente aguas arriba</em> (en el 2.º cuadrante).</p>

          <h4>Paso 2 — Componentes de la velocidad de la barca</h4>
          <p>$v_{bx} = v_b \\cos 135° = 5 \\cdot \\left(-\\dfrac{\\sqrt{2}}{2}\\right) \\approx -3{,}54$ m/s &nbsp; (aguas arriba)</p>
          <p>$v_{by} = v_b \\sin 135° = 5 \\cdot \\dfrac{\\sqrt{2}}{2} \\approx 3{,}54$ m/s &nbsp; (cruzando el río)</p>

          <h4>Paso 3 — Velocidad real (suma vectorial)</h4>
          <p>La corriente solo aporta en $x$: $\\vec{v}_c = 3\\,\\vec{i}$ m/s.</p>
          <p>$v_x = v_{bx} + v_{cx} = -3{,}54 + 3 = -0{,}54$ m/s &nbsp; (aún algo aguas arriba)</p>
          <p>$v_y = v_{by} = 3{,}54$ m/s</p>

          <h4>Paso 4 — Tiempo de cruce</h4>
          <p>$t = \\dfrac{100}{v_y} = \\dfrac{100}{3{,}54} \\approx 28{,}28$ s</p>

          <h4>Paso 5 — Posición de llegada</h4>
          <p>$x = v_x \\cdot t = -0{,}54 \\cdot 28{,}28 \\approx -15{,}15$ m</p>
          <p>$y = 100$ m</p>
          <p style="font-size: 1.1em; text-align:center">$$\\boxed{\\vec{r} \\approx -15{,}15\\,\\vec{i} + 100\\,\\vec{j} \\;\\;\\text{m}}$$</p>
          <p>La barca llega al otro lado del río, a $\\approx 15{,}15$ m <em>aguas arriba</em> del muelle. La distancia total recorrida es $|\\vec{r}| \\approx 101{,}14$ m.</p>
          <p class="hint">💡 Aunque la corriente empuja aguas abajo, la barca apuntaba lo suficientemente "contra-corriente" (135° = 45° hacia atrás) como para terminar 15 m río arriba. Si quisieras llegar justo enfrente, tendrías que ajustar el ángulo para que $v_{bx}$ cancelase exactamente $v_c$: $5\\cos\\theta = -3 \\Rightarrow \\theta \\approx 126{,}87°$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-5-nadador-y-velocidad-del-rio">📝 Actividad 5 — Nadador y velocidad del río</h2>
      <p>Un río tiene una anchura de $100$ m. Un nadador quiere cruzarlo <strong>perpendicularmente</strong> a la corriente, pero acaba pasando $20$ m aguas abajo. Si la velocidad del nadador es de $2$ m/s, ¿qué velocidad lleva el río?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Paso 1 — Identificamos los ejes y los datos</h4>
          <ul class="clean">
            <li>🏊 $v_n = 2$ m/s, perpendicular a la corriente: $\\vec{v}_n = 2\\,\\vec{j}$.</li>
            <li>🌊 $\\vec{v}_r = v_r\\,\\vec{i}$ (incógnita).</li>
            <li>📏 Anchura $y = 100$ m, deriva $x = 20$ m.</li>
          </ul>

          <h4>Paso 2 — Tiempo en cruzar el río</h4>
          <p>El movimiento en $y$ depende solo del nadador (Galileo). Por tanto:</p>
          <p>$t = \\dfrac{y}{v_n} = \\dfrac{100}{2} = 50$ s</p>

          <h4>Paso 3 — Velocidad del río</h4>
          <p>El arrastre lateral lo provoca solo el río. En $50$ s el nadador se desplaza $20$ m en $x$:</p>
          <p>$v_r = \\dfrac{x}{t} = \\dfrac{20}{50} = \\boxed{0{,}4 \\;\\text{m/s}}$</p>

          <h4>Bonus — ¿A qué velocidad llega realmente el nadador?</h4>
          <p>$|\\vec{v}| = \\sqrt{v_n^2 + v_r^2} = \\sqrt{2^2 + 0{,}4^2} \\approx 2{,}04$ m/s</p>
          <p>Y el ángulo respecto a la dirección perpendicular a la orilla: $\\alpha = \\arctan(0{,}4/2) \\approx 11{,}3°$.</p>
          <p class="hint">💡 La clave del problema es darse cuenta de que el tiempo de cruce <strong>no depende de la corriente</strong>, solo del nadador (eje $y$ aislado). Una vez tienes $t$, despejas $v_r$ del eje $x$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="4-principio-de-galileo">4. Principio de Galileo</h2>
      <div class="theory">
        <h4>Enunciado</h4>
        <p>"Cuando un cuerpo sigue un <strong>movimiento compuesto</strong> por dos movimientos simples y simultáneos, su posición en un tiempo dado es <strong>independiente</strong> de cómo actúen los movimientos simples."</p>

        <h4>🎯 Lo que significa en la práctica</h4>
        <p>Los ejes X e Y <strong>no se molestan entre sí</strong>. Puedes resolver lo que pasa en X por un lado, lo que pasa en Y por otro, y al final sumar vectorialmente:</p>
        <p style="text-align:center; font-size: 1.15em">$$\\vec{r} = \\vec{r}_1 + \\vec{r}_2 \\qquad \\vec{v} = \\vec{v}_1 + \\vec{v}_2$$</p>

        <h4>🪜 El salto desde el MRU lineal</h4>
        <ul class="clean">
          <li>📘 <strong>Lo que ya sabías</strong>: $x = x_0 + v\\cdot t$ → una sola ecuación, una dirección.</li>
          <li>🆕 <strong>Lo nuevo</strong>: ahora hay <em>dos</em> ecuaciones a la vez, una por eje. Galileo dice: trátalas por separado y suma.</li>
        </ul>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — Movimiento Rectilíneo Uniforme (MRU) en 1D</summary>
        <div class="theory">
          <h4>Definición</h4>
          <p>Un cuerpo describe un MRU cuando recorre <strong>distancias iguales en tiempos iguales</strong> moviéndose en línea recta. La velocidad es constante y la aceleración es cero.</p>

          <h4>Ecuación del movimiento</h4>
          <p style="text-align:center; font-size: 1.1em">$$x(t) = x_0 + v\\cdot t$$</p>
          <ul class="clean">
            <li>$x_0$ — posición inicial (en $t = 0$).</li>
            <li>$v$ — velocidad (constante, con signo según el sentido).</li>
            <li>$t$ — tiempo.</li>
          </ul>

          <h4>Magnitudes derivadas</h4>
          <ul class="clean">
            <li>📍 <strong>Desplazamiento</strong>: $\\Delta x = x - x_0 = v\\cdot t$.</li>
            <li>⏱️ <strong>Tiempo de recorrido</strong>: $t = \\dfrac{\\Delta x}{v}$.</li>
            <li>🚀 <strong>Velocidad</strong>: $v = \\dfrac{\\Delta x}{t}$.</li>
          </ul>

          <h4>Por qué se usa aquí</h4>
          <p>El principio de Galileo dice que cada eje vive su propio MRU independientemente del otro. Para resolver problemas en 2D usaremos $x = v_x \\cdot t$ y $y = v_y \\cdot t$ por separado, y al final sumaremos los resultados como vectores.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="5-composicion-de-2-mru">5. Composición de 2 MRU</h2>
      <p>Si en un eje hay un MRU $\\vec{r}_1 = x_1\\,\\vec{i} + y_1\\,\\vec{j}$ y en otro otro MRU $\\vec{r}_2 = x_2\\,\\vec{i} + y_2\\,\\vec{j}$:</p>
      <p style="text-align:center; font-size: 1.15em">$$\\vec{r} = (x_1 + x_2)\\,\\vec{i} + (y_1 + y_2)\\,\\vec{j}$$</p>
      <p>Tanto el vector posición como el vector velocidad del movimiento resultante son la <strong>suma vectorial</strong> de los dos movimientos.</p>

      <div class="theory">
        <h4>🚣 El ejemplo del barco en una corriente</h4>
        <p>Un barco rema a $\\vec{v}_b = v_{bx}\\,\\vec{i}$ (perpendicular a la orilla). El río arrastra a $\\vec{v}_c = v_{cx}\\,\\vec{i}$ o, si el río baja paralelo a la orilla, $\\vec{v}_c = v_{cy}\\,\\vec{j}$.</p>
        <p>La <strong>velocidad real</strong> del barco respecto a tierra es la suma vectorial:</p>
        <p style="text-align:center; font-size: 1.1em">$$\\vec{v} = \\vec{v}_b + \\vec{v}_c$$</p>
        <p>El módulo lo da Pitágoras y la dirección la da el coseno o el seno. Cada eje vive su propio MRU.</p>
        <p class="hint">📐 Si el barco rema a 3 m/s perpendicular a una corriente de 4 m/s, su velocidad real es $\\sqrt{3^2 + 4^2} = 5$ m/s, formando un ángulo $\\alpha = \\arctan(4/3) \\approx 53°$ con la dirección de remado.</p>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — suma vectorial componente a componente</summary>
        <div class="theory">
          <h4>Suma de dos vectores</h4>
          <p>Dados dos vectores en el plano $\\vec{A} = (a_1, a_2)$ y $\\vec{B} = (b_1, b_2)$, su suma es:</p>
          <p style="text-align:center; font-size: 1.1em">$$\\vec{A} + \\vec{B} = (a_1 + b_1,\\; a_2 + b_2)$$</p>
          <p>Es decir, <strong>cada componente se suma con la del otro vector</strong>, eje a eje. No se mezclan.</p>

          <h4>Interpretación gráfica</h4>
          <ul class="clean">
            <li>🔺 <strong>Regla del paralelogramo</strong>: dibujas los dos vectores con el mismo origen; la diagonal del paralelogramo que forman es $\\vec{A} + \\vec{B}$.</li>
            <li>🪄 <strong>Punta con cola</strong>: pones $\\vec{B}$ partiendo de la punta de $\\vec{A}$; la flecha desde el origen de $\\vec{A}$ hasta la punta final de $\\vec{B}$ es la suma.</li>
          </ul>

          <h4>¡Ojo! Módulos no se suman como números</h4>
          <p>En general $|\\vec{A} + \\vec{B}| \\ne |\\vec{A}| + |\\vec{B}|$. La igualdad solo se da si los vectores son <em>paralelos y del mismo sentido</em>. Si son perpendiculares, hay que aplicar Pitágoras: $|\\vec{A} + \\vec{B}| = \\sqrt{|\\vec{A}|^2 + |\\vec{B}|^2}$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="6-composicion-de-un-mru-y-un-mrua">6. Composición de un MRU y un MRUA</h2>
      <p>Si en lugar de combinar dos MRU combinamos un <strong>MRU</strong> (eje horizontal, velocidad constante) con un <strong>MRUA</strong> (eje vertical, aceleración $g$), aparecen los <strong>tiros</strong>. Distinguimos dos casos según haya o no velocidad inicial vertical:</p>
      <ul class="clean">
        <li>🎯 <strong>Tiro horizontal</strong>: la velocidad inicial es <em>solo</em> horizontal. La velocidad vertical empieza en 0 y va creciendo (negativa) por gravedad.</li>
        <li>🚀 <strong>Tiro oblicuo</strong>: la velocidad inicial forma un ángulo con la horizontal. La componente vertical empieza positiva (sube), llega a 0 en el punto más alto y luego se vuelve negativa (cae).</li>
      </ul>

      <details>
        <summary><strong>📚 Teoría base</strong> — Movimiento Rectilíneo Uniformemente Acelerado (MRUA) y caída libre</summary>
        <div class="theory">
          <h4>MRUA</h4>
          <p>Un cuerpo describe un MRUA cuando su <strong>aceleración es constante</strong>. Las ecuaciones son:</p>
          <ul class="clean">
            <li>📍 Posición: $x = x_0 + v_0\\,t + \\dfrac{1}{2}\\,a\\,t^2$</li>
            <li>🚀 Velocidad: $v = v_0 + a\\,t$</li>
            <li>🔁 Sin tiempo: $v^2 - v_0^2 = 2a\\,\\Delta x$</li>
          </ul>

          <h4>Caída libre</h4>
          <p>Caso particular de MRUA en el que la única aceleración es la <strong>gravedad</strong>: $a = -g$ (con $g \\approx 9{,}8$ m/s², a veces se usa $10$ m/s² para redondear). El signo negativo refleja que apunta hacia abajo si tomamos $y$ positivo hacia arriba.</p>
          <ul class="clean">
            <li>$y(t) = y_0 + v_{y0}\\,t - \\dfrac{1}{2}\\,g\\,t^2$</li>
            <li>$v_y(t) = v_{y0} - g\\,t$</li>
          </ul>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="7-tiro-horizontal">7. Tiro horizontal</h2>
      <p>Un <strong>tiro horizontal</strong> es la composición de dos movimientos:</p>
      <ul class="clean">
        <li>📐 Un <strong>MRU en el eje X</strong> (velocidad constante $v$).</li>
        <li>🌧️ Una <strong>caída libre (MRUA) en el eje Y</strong> sin velocidad inicial vertical (toda la velocidad inicial es horizontal).</li>
      </ul>
      <p class="hint">📌 <strong>Convenio de origen</strong>: se recomienda tomar como $(0, 0)$ el suelo donde caerá el objeto. Esto simplifica los cálculos y da sentido físico: $y = 0$ cuando toca el suelo.</p>

      <h3>Ecuaciones del movimiento</h3>
      <p>Ecuación vectorial:</p>
      <p style="text-align:center; font-size: 1.1em">$$\\vec{r} = (vt)\\,\\vec{i} + \\left(h - \\tfrac{1}{2}gt^2\\right)\\vec{j}$$</p>
      <p>Que se separa en las ecuaciones paramétricas:</p>
      <p style="text-align:center; font-size: 1.1em">$$\\begin{cases} x = v\\,t \\\\ y = h - \\tfrac{1}{2}\\,g\\,t^2 \\end{cases}$$</p>
      <p>Derivando, las velocidades:</p>
      <p style="text-align:center; font-size: 1.1em">$$\\vec{v} \\equiv \\begin{cases} v_x = v_0 \\\\ v_y = -g\\,t \\end{cases}$$</p>
      <p>Es decir, la componente horizontal es constante; la vertical va creciendo en módulo hacia abajo.</p>

      <h3>Magnitudes derivadas</h3>
      <div class="theory">
        <h4>⏱️ Tiempo de vuelo</h4>
        <p>Es el que tarda en llegar al suelo ($y = 0$). De $0 = h - \\tfrac{1}{2}gt_v^2$:</p>
        <p style="text-align:center; font-size: 1.1em">$$t_v = \\sqrt{\\dfrac{2h}{g}}$$</p>

        <h4>📏 Alcance</h4>
        <p>Es la máxima distancia horizontal recorrida. Cuando llega al suelo ($t = t_v$):</p>
        <p style="text-align:center; font-size: 1.1em">$$x_{\\max} = v\\cdot t_v = v\\sqrt{\\dfrac{2h}{g}}$$</p>

        <h4>📈 Ecuación de la trayectoria</h4>
        <p>Es la curva $y(x)$, sin tiempo. Despejamos $t = x/v$ de la ecuación en $x$ y lo sustituimos en la de $y$:</p>
        <p style="text-align:center; font-size: 1.1em">$$y = h - \\dfrac{g}{2v^2}\\,x^2$$</p>
        <p>Es una <strong>parábola invertida</strong> con vértice en $(0, h)$.</p>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — independencia de los ejes (Galileo) aplicada al tiro</summary>
        <div class="theory">
          <p>El motivo por el que se puede tratar X e Y por separado en un tiro es exactamente el <strong>principio de Galileo</strong>: el eje horizontal "no sabe" lo que hace el vertical. La gravedad sólo aporta a $y$; la velocidad inicial sólo aporta a $x$.</p>
          <p>Por eso un objeto que se deja caer y otro lanzado horizontalmente desde la misma altura <strong>tocan el suelo en el mismo instante</strong>, aunque el segundo recorra más distancia horizontal.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-6-manguera-lanzando-agua">📝 Actividad 6 — Manguera lanzando agua</h2>
      <p>Una manguera lanza agua horizontalmente a $10$ m/s desde una ventana situada a $15$ m de altura. ¿A qué distancia de la pared de la casa llegará el chorro al suelo?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <p>Es un <strong>tiro horizontal</strong> con $v = 10$ m/s, $h = 15$ m y $g = 9{,}8$ m/s² (uso $g = 10$ para simplificar al final también).</p>

          <h4>Tiempo de vuelo</h4>
          <p>$t_v = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{30}{9{,}8}} \\approx 1{,}75$ s</p>

          <h4>Alcance</h4>
          <p>$x_{\\max} = v\\cdot t_v = 10 \\cdot 1{,}75 \\approx \\boxed{17{,}5\\;\\text{m}}$</p>
          <p class="hint">Con $g = 10$ m/s² el resultado se simplifica a $t_v = \\sqrt{3} \\approx 1{,}73$ s y $x_{\\max} \\approx 17{,}3$ m.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-7-flecha-desde-un-acantilado">📝 Actividad 7 — Flecha desde un acantilado</h2>
      <p>Se lanza una flecha desde un acantilado a una velocidad inicial de $108$ km/h. Su tiempo de vuelo es de $5$ s. Calcula la altura del acantilado.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Conversión de unidades</h4>
          <p>$v = 108$ km/h $= \\dfrac{108}{3{,}6} = 30$ m/s. (Recuerda: dividir entre 3,6 pasa de km/h a m/s.)</p>

          <h4>Despejar $h$ del tiempo de vuelo</h4>
          <p>De $t_v = \\sqrt{2h/g}$ se sigue que $h = \\dfrac{1}{2}\\,g\\,t_v^2$.</p>
          <p>$h = \\dfrac{1}{2}\\cdot 9{,}8 \\cdot 5^2 = \\boxed{122{,}5\\;\\text{m}}$</p>
          <p class="hint">Con $g = 10$ m/s²: $h = 125$ m. La velocidad horizontal $v = 30$ m/s no entra en este apartado: el tiempo de caída solo depende de la altura y la gravedad.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-8-mono-lanzando-un-platano">📝 Actividad 8 — Mono lanzando un plátano</h2>
      <p>Un mono lanza un plátano horizontalmente a un explorador desde un árbol de $7$ m de altura. ¿Qué velocidad inicial tiene que darle para que caiga sobre el explorador, que está a $10$ m horizontalmente del árbol?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Tiempo que tarda en caer</h4>
          <p>$t_v = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{14}{9{,}8}} \\approx 1{,}195$ s</p>

          <h4>Velocidad horizontal necesaria</h4>
          <p>El plátano debe recorrer $10$ m en ese tiempo (MRU horizontal):</p>
          <p>$v = \\dfrac{x_{\\max}}{t_v} = \\dfrac{10}{1{,}195} \\approx \\boxed{8{,}37\\;\\text{m/s}}$</p>
          <p class="hint">Con $g = 10$ m/s²: $t_v = \\sqrt{1{,}4} \\approx 1{,}183$ s y $v \\approx 8{,}45$ m/s.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="8-tiro-oblicuo">8. Tiro oblicuo</h2>
      <p>Un <strong>tiro oblicuo</strong> es la composición de:</p>
      <ul class="clean">
        <li>📐 Un <strong>MRU en el eje X</strong> (velocidad constante).</li>
        <li>🚀 Un <strong>MRUA en el eje Y</strong> con velocidad inicial: el cuerpo sube, frena, llega a 0 vertical y luego cae.</li>
      </ul>

      <h3>Componentes de la velocidad inicial</h3>
      <p>Si la velocidad inicial $v$ forma un ángulo $\\alpha$ con la horizontal, sus componentes son:</p>
      <p style="text-align:center; font-size: 1.15em">$$v_x = v\\cos\\alpha \\qquad v_y = v\\sin\\alpha$$</p>

      <h3>Ecuaciones paramétricas</h3>
      <p>Si el lanzamiento parte de altura $h$ (puede ser 0):</p>
      <p style="text-align:center; font-size: 1.1em">$$\\begin{cases} x = v_x\\,t = v\\,t\\,\\cos\\alpha \\\\ y = h + v_y\\,t - \\tfrac{1}{2}\\,g\\,t^2 \\end{cases}$$</p>

      <h3>Tiempo de vuelo</h3>
      <p>Cuando $y = 0$: $h + v_y\\,t_v - \\tfrac{1}{2}\\,g\\,t_v^2 = 0$. Es una ecuación de segundo grado en $t_v$:</p>
      <p style="text-align:center">$$t_v = \\dfrac{v_y + \\sqrt{v_y^{\\,2} + 2g\\,h}}{g}$$</p>
      <p>Si $h = 0$ (lanzamiento desde el suelo y vuelta al mismo plano):</p>
      <p style="text-align:center; font-size: 1.1em">$$t_v = \\dfrac{2v_y}{g}$$</p>

      <h3>Alcance y altura máxima</h3>
      <ul class="clean">
        <li>📏 <strong>Alcance</strong>: $x_{\\max} = v_x\\cdot t_v$</li>
        <li>🏔️ <strong>Altura máxima</strong>: cuando $v_y = 0$, en $t_{\\text{sub}} = v_y/g$. La altura es $y_{\\max} = h + \\dfrac{v_y^{\\,2}}{2g}$.</li>
      </ul>

      <h3>Ecuación de la trayectoria</h3>
      <p>Despejando $t = x/v_x$ y sustituyendo en $y$, se obtiene una <strong>parábola</strong>:</p>
      <p style="text-align:center; font-size: 1.05em">$$y = h + x\\tan\\alpha - \\dfrac{g}{2v^2\\cos^2\\alpha}\\,x^2$$</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — relación con el tiro horizontal y razones trigonométricas</summary>
        <div class="theory">
          <h4>Caso particular: $\\alpha = 0$</h4>
          <p>Si $\\alpha = 0$, $\\cos\\alpha = 1$ y $\\sin\\alpha = 0$, así que $v_x = v$, $v_y = 0$. Las ecuaciones se reducen al tiro horizontal. El tiro oblicuo lo "contiene" como caso particular.</p>

          <h4>Caso particular: $\\alpha = 90°$</h4>
          <p>Si lanzamos verticalmente, $v_x = 0$ y $v_y = v$: queda solo un MRUA vertical (lanzamiento vertical hacia arriba).</p>

          <h4>Razones trigonométricas (recordatorio)</h4>
          <p>Para descomponer la velocidad usamos las definiciones del triángulo rectángulo: $\\cos\\alpha = \\text{cc}/h$ (cateto contiguo entre hipotenusa) y $\\sin\\alpha = \\text{co}/h$ (cateto opuesto entre hipotenusa).</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-9-manguera-con-inclinacion">📝 Actividad 9 — Manguera con inclinación</h2>
      <p>Desde una ventana a $10$ m del suelo, apuntamos con una manguera que expulsa agua a $12$ m/s con una inclinación de $30°$. Calcula la altura máxima y el alcance del agua.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Componentes de la velocidad</h4>
          <p>$v_x = 12\\cos 30° = 12\\cdot\\dfrac{\\sqrt{3}}{2} \\approx 10{,}39$ m/s</p>
          <p>$v_y = 12\\sin 30° = 12\\cdot\\dfrac{1}{2} = 6$ m/s</p>

          <h4>Altura máxima (sobre el suelo)</h4>
          <p>Sobre la posición de salida: $\\Delta h = \\dfrac{v_y^{\\,2}}{2g} = \\dfrac{36}{19{,}6} \\approx 1{,}84$ m. Sumando la altura inicial:</p>
          <p>$y_{\\max} = 10 + 1{,}84 \\approx \\boxed{11{,}84\\;\\text{m}}$</p>

          <h4>Tiempo de vuelo</h4>
          <p>De $0 = 10 + 6t - 4{,}9 t^2 \\Rightarrow 4{,}9t^2 - 6t - 10 = 0$. Resolviendo:</p>
          <p>$t_v = \\dfrac{6 + \\sqrt{36 + 196}}{9{,}8} = \\dfrac{6 + 15{,}23}{9{,}8} \\approx 2{,}17$ s</p>

          <h4>Alcance</h4>
          <p>$x_{\\max} = v_x\\cdot t_v = 10{,}39 \\cdot 2{,}17 \\approx \\boxed{22{,}5\\;\\text{m}}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-10-saque-de-portero">📝 Actividad 10 — Saque de portero</h2>
      <p>Un portero de fútbol efectúa un saque de puerta. La pelota cae en el césped $60$ m más adelante y $4$ s después de haber salido. Halla la velocidad inicial, la altura máxima y la velocidad con que llega al suelo.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <p>Como sale y cae al mismo plano del suelo, $h = 0$. Datos: $x_{\\max} = 60$ m, $t_v = 4$ s.</p>

          <h4>Componente horizontal de la velocidad</h4>
          <p>$v_x = \\dfrac{x_{\\max}}{t_v} = \\dfrac{60}{4} = 15$ m/s</p>

          <h4>Componente vertical (de $t_v = 2v_y/g$)</h4>
          <p>$v_y = \\dfrac{g\\,t_v}{2} = \\dfrac{9{,}8 \\cdot 4}{2} = 19{,}6$ m/s</p>

          <h4>Velocidad inicial y ángulo</h4>
          <p>$v = \\sqrt{v_x^{\\,2} + v_y^{\\,2}} = \\sqrt{225 + 384{,}16} \\approx \\boxed{24{,}68\\;\\text{m/s}}$</p>
          <p>$\\alpha = \\arctan(v_y/v_x) = \\arctan(19{,}6/15) \\approx 52{,}6°$</p>

          <h4>Altura máxima</h4>
          <p>$y_{\\max} = \\dfrac{v_y^{\\,2}}{2g} = \\dfrac{384{,}16}{19{,}6} \\approx \\boxed{19{,}6\\;\\text{m}}$</p>

          <h4>Velocidad de llegada</h4>
          <p>Por simetría (sale y cae a la misma altura), el módulo de la velocidad al tocar el suelo es <em>igual</em> al de la velocidad inicial: $|\\vec{v}_{\\text{final}}| \\approx \\boxed{24{,}68\\;\\text{m/s}}$, formando un ángulo de $-52{,}6°$ con la horizontal (apunta hacia abajo).</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-11-nina-lanzando-un-avion-de-papel">📝 Actividad 11 — Niña lanzando un avión de papel</h2>
      <p>Una niña de $1{,}5$ m de altura prueba a lanzar un avión de papel a una velocidad de $5$ m/s. ¿Dónde está la papelera donde quiere encestar si acierta con un ángulo de $55°$?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <p>Datos: altura inicial $h = 1{,}5$ m (la altura de la niña), $v = 5$ m/s, $\\alpha = 55°$. Asumimos que la papelera está en el suelo.</p>

          <h4>Componentes</h4>
          <p>$v_x = 5\\cos 55° \\approx 2{,}87$ m/s, &nbsp; $v_y = 5\\sin 55° \\approx 4{,}10$ m/s</p>

          <h4>Tiempo de vuelo</h4>
          <p>$0 = 1{,}5 + 4{,}10\\,t - 4{,}9\\,t^2 \\Rightarrow 4{,}9 t^2 - 4{,}10\\,t - 1{,}5 = 0$</p>
          <p>$t_v = \\dfrac{4{,}10 + \\sqrt{16{,}81 + 29{,}4}}{9{,}8} \\approx \\dfrac{4{,}10 + 6{,}80}{9{,}8} \\approx 1{,}11$ s</p>

          <h4>Alcance (distancia hasta la papelera)</h4>
          <p>$x_{\\max} = v_x\\cdot t_v = 2{,}87 \\cdot 1{,}11 \\approx \\boxed{3{,}19\\;\\text{m}}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="9-movimiento-circular-magnitudes-angulares">9. Movimiento circular: magnitudes angulares</h2>
      <p>Cuando el movimiento sigue una <strong>curva cerrada</strong>, el sistema de referencias cambia: situamos el origen en el centro de la circunferencia, de modo que <em>el módulo del vector posición es constante e igual al radio $R$</em>. Para describir el movimiento usamos <strong>magnitudes angulares</strong>.</p>

      <h3>Posición angular ($\\varphi$)</h3>
      <p>Cuando un móvil viaja por una circunferencia, su posición ya no la damos con coordenadas $(x, y)$, sino con un único número: el <strong>ángulo $\\varphi$</strong> que forma su vector de posición con un eje de referencia (normalmente el eje $X$ positivo, igual que en trigonometría).</p>

      <div class="theory">
        <h4>📐 Definición</h4>
        <p>La <strong>posición angular</strong> $\\varphi$ es <em>una coordenada</em> (no un desplazamiento): le asigna a cada punto de la circunferencia un ángulo, medido desde una referencia fija.</p>
        <p style="text-align:center; font-size: 1.2em">$$\\varphi = \\dfrac{s}{R}$$</p>
        <p>donde $s$ es la longitud del arco que va desde la referencia hasta el móvil (siguiendo la circunferencia) y $R$ es el radio.</p>
      </div>

      <h4>¿Por qué $\\varphi = s/R$ y no $s$ a secas?</h4>
      <p>Porque $s$ depende de lo grande que sea la circunferencia. En una rueda pequeña $s$ es corto y en una grande es largo, aunque ambas hayan girado <em>lo mismo</em>. Al dividir entre $R$, eliminamos el tamaño y nos queda <strong>cuánto ha girado</strong>: una magnitud que solo describe el ángulo, sin importar el radio.</p>

      <h4>Unidad: el radián (rad)</h4>
      <p>Como $\\varphi = s/R$ es un cociente de dos longitudes (m / m), la posición angular es <strong>adimensional</strong>. Para subrayar que estamos hablando de un ángulo, le ponemos la "etiqueta" <strong>rad</strong>.</p>
      <p>👉 <strong>Definición práctica</strong>: un radián es el ángulo cuyo arco mide exactamente lo mismo que el radio ($s = R \\Rightarrow \\varphi = 1$ rad).</p>

      <h4>Convenios de signo y de origen</h4>
      <ul class="clean">
        <li>📍 <strong>Origen ($\\varphi = 0$)</strong>: por convenio, el eje $X$ positivo. Aunque puede elegirse cualquier dirección si lo dice el enunciado.</li>
        <li>↺ <strong>Sentido positivo</strong>: el <em>antihorario</em> (igual que en trigonometría). Si el móvil gira en sentido horario, $\\varphi$ disminuye (o se le pone signo negativo).</li>
        <li>🔄 <strong>Múltiples vueltas</strong>: $\\varphi$ no se "reinicia" al pasar por $2\\pi$. Tras dos vueltas completas, $\\varphi = 4\\pi$ rad. Esto permite distinguir "ha pasado por aquí una vez" de "ha pasado por aquí tres veces".</li>
      </ul>

      <h4>Posición angular vs. desplazamiento angular</h4>
      <ul class="clean">
        <li>🅰️ <strong>Posición angular $\\varphi$</strong>: dónde <em>está</em> el móvil ahora (es una coordenada, como $x$ en el MRU).</li>
        <li>🅱️ <strong>Desplazamiento angular $\\Delta\\varphi = \\varphi - \\varphi_0$</strong>: cuánto <em>ha girado</em> entre dos instantes (es una variación, como $\\Delta x$).</li>
      </ul>
      <p>El desplazamiento angular es el análogo del desplazamiento lineal: con él se construyen velocidad y aceleración angulares, igual que con $\\Delta x$ se construyen $v$ y $a$.</p>

      <div class="theory">
        <h4>🧭 Tabla de equivalencias lineal ↔ angular</h4>
        <table class="table">
          <thead><tr><th>Lineal (recta)</th><th>Angular (circunferencia)</th><th>Conexión</th></tr></thead>
          <tbody>
            <tr><td>Posición $x$ (m)</td><td>Posición angular $\\varphi$ (rad)</td><td>$x \\leftrightarrow s = R\\varphi$</td></tr>
            <tr><td>Desplazamiento $\\Delta x$</td><td>Desplazamiento angular $\\Delta\\varphi$</td><td>$\\Delta s = R\\,\\Delta\\varphi$</td></tr>
            <tr><td>Velocidad $v$ (m/s)</td><td>Velocidad angular $\\omega$ (rad/s)</td><td>$v = \\omega R$</td></tr>
            <tr><td>Aceleración $a$ (m/s²)</td><td>Aceleración angular $\\alpha$ (rad/s²)</td><td>$a_t = \\alpha R$</td></tr>
          </tbody>
        </table>
        <p class="hint">La columna de la derecha solo es válida si los ángulos están en <strong>radianes</strong>. En grados habría que añadir factores $\\pi/180$.</p>
      </div>

      <h3>Velocidad angular ($\\omega$)</h3>
      <p>Es el cociente entre el desplazamiento angular y el tiempo en recorrerlo:</p>
      <p style="text-align:center; font-size: 1.15em">$$\\omega = \\dfrac{\\varphi - \\varphi_0}{t}$$</p>
      <p>Unidad SI: rad/s. Unidad muy usada en la práctica: <strong>revoluciones por minuto (rpm)</strong>.</p>
      <p style="text-align:center; font-size: 1.05em">$$1\\;\\text{rpm} = \\dfrac{1\\;\\text{rev}}{1\\;\\text{min}} = \\dfrac{2\\pi\\;\\text{rad}}{60\\;\\text{s}}$$</p>

      <h3>Relación entre velocidad lineal y angular</h3>
      <p>Como $s = R\\varphi$, dividiendo entre $t$:</p>
      <p style="text-align:center; font-size: 1.15em">$$v = \\omega\\cdot R$$</p>
      <p>Esta relación es básica para conectar magnitudes lineales (m, m/s) con angulares (rad, rad/s).</p>

      <h3>Aceleración angular ($\\alpha$)</h3>
      <p>La variación de la velocidad angular en el tiempo:</p>
      <p style="text-align:center; font-size: 1.15em">$$\\alpha = \\dfrac{\\omega - \\omega_0}{t}$$</p>
      <p>Unidad: rad/s². Su signo indica si el móvil acelera (mismo sentido que $\\omega$) o frena (sentido contrario).</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — el radián y la longitud de un arco</summary>
        <div class="theory">
          <h4>¿Por qué el radián?</h4>
          <p>Un grado es una división arbitraria (los babilonios partieron la circunferencia en 360 partes). El radián, en cambio, sale directamente de la geometría: es el ángulo que abarca un arco igual al radio. Una vuelta completa son $2\\pi$ radianes porque la longitud de la circunferencia es $2\\pi R$.</p>

          <h4>Longitud de arco</h4>
          <p>Si un ángulo $\\varphi$ está expresado en radianes, la longitud del arco que abarca a radio $R$ es simplemente $s = R\\varphi$. Esa relación lineal solo funciona en radianes (en grados habría que multiplicar por $\\pi/180$).</p>

          <h4>Conversiones útiles</h4>
          <ul class="clean">
            <li>$360° = 2\\pi$ rad &nbsp;·&nbsp; $180° = \\pi$ rad &nbsp;·&nbsp; $90° = \\pi/2$ rad</li>
            <li>$1\\;\\text{rev} = 2\\pi\\;\\text{rad}$</li>
            <li>$\\omega(\\text{rad/s}) = \\omega(\\text{rpm})\\cdot\\dfrac{2\\pi}{60}$</li>
          </ul>
        </div>
      </details>
    </section>

    <section class="panel panel--interactive">
      <h2 id="explorador-de-radianes">🧪 Explorador de radianes ($\\varphi = s/R$)</h2>
      <p class="hint">Mueve los <em>sliders</em> y observa cómo el <strong>arco $s$</strong> (verde) crece con el <strong>ángulo $\\varphi$</strong> y el <strong>radio $R$</strong> (rojo).</p>
      <div class="row" style="gap: 18px; flex-wrap: wrap; align-items: flex-start">
        <div style="flex: 1; min-width: 260px">
          <div class="row">
            <div>
              <label>Radio $R$ (m)</label>
              <input id="mc-r" type="range" min="0.5" max="3" step="0.1" value="2" style="width: 220px"/>
              <div style="margin-top:4px">$R$ = <strong id="mc-r-val">2.0</strong> m</div>
            </div>
          </div>
          <div class="row" style="margin-top:8px">
            <div>
              <label>Ángulo $\\varphi$ (rad)</label>
              <input id="mc-phi" type="range" min="0" max="6.2832" step="0.01" value="1" style="width: 220px"/>
              <div style="margin-top:4px">$\\varphi$ = <strong id="mc-phi-val">1.00</strong> rad</div>
            </div>
          </div>
          <div id="mc-info" class="result info" style="margin-top:14px"></div>
          <div class="row" style="margin-top:10px; flex-wrap:wrap; gap:6px">
            <button class="btn" data-mc-preset="2,1">$\\varphi = 1$ rad ($s = R$)</button>
            <button class="btn" data-mc-preset="2,3.14159">$\\pi$ rad (½ vuelta)</button>
            <button class="btn" data-mc-preset="2,6.2832">$2\\pi$ rad (vuelta)</button>
            <button class="btn" data-mc-preset="2,1.5708">$\\pi/2$ rad (¼)</button>
          </div>
        </div>
        <div style="flex: 1; min-width: 300px">
          <div id="mc-svg"></div>
        </div>
      </div>
      <div class="theory" style="margin-top: 14px">
        <h4>🎯 Lectura visual</h4>
        <ul class="clean">
          <li>📏 <strong>$R$</strong> (rojo): la distancia del centro al móvil. Es el <em>radio</em> de la trayectoria.</li>
          <li>🟢 <strong>$s$</strong> (verde): la distancia recorrida <em>siguiendo la circunferencia</em>. Es la longitud del arco.</li>
          <li>📐 <strong>$\\varphi$</strong> (azul): cuántos "radios" caben en ese arco. Por eso $\\varphi = s/R$ es <em>adimensional</em>.</li>
          <li>👀 Cuando $\\varphi = 1$ rad, el arco $s$ mide exactamente $R$. <em>Esa</em> es la definición del radián.</li>
        </ul>
      </div>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-12-disco-rotando">📝 Actividad 12 — Disco rotando</h2>
      <p>Un disco de $12$ cm de radio da $3$ vueltas y media en $15$ segundos. Calcula:</p>
      <ol>
        <li>Su <strong>posición angular</strong> después de esos 15 s.</li>
        <li>Su <strong>velocidad angular</strong>.</li>
        <li>Su <strong>velocidad lineal</strong> y el espacio recorrido.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>a) Posición angular</h4>
          <p>$3{,}5$ vueltas $= 3{,}5\\cdot 2\\pi = 7\\pi$ rad $\\approx \\boxed{21{,}99\\;\\text{rad}}$</p>

          <h4>b) Velocidad angular</h4>
          <p>$\\omega = \\dfrac{\\varphi}{t} = \\dfrac{7\\pi}{15} \\approx \\boxed{1{,}466\\;\\text{rad/s}}$</p>

          <h4>c) Velocidad lineal</h4>
          <p>$v = \\omega\\cdot R = 1{,}466\\cdot 0{,}12 \\approx \\boxed{0{,}176\\;\\text{m/s}}$</p>
          <p>Espacio recorrido: $s = R\\,\\varphi = 0{,}12\\cdot 7\\pi \\approx \\boxed{2{,}64\\;\\text{m}}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-13-velocista-vs-indycar">📝 Actividad 13 — Velocista vs Indycar</h2>
      <p>¿Quién tiene más velocidad angular: una velocista que va a $45$ km/h en un óvalo de $50$ m de radio, o un monoplaza de la Indycar a $378$ km/h en un óvalo de $640$ m de radio?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Velocidades en SI</h4>
          <p>Velocista: $v_1 = 45/3{,}6 = 12{,}5$ m/s. Indycar: $v_2 = 378/3{,}6 = 105$ m/s.</p>

          <h4>Velocidades angulares</h4>
          <p>$\\omega_1 = \\dfrac{v_1}{R_1} = \\dfrac{12{,}5}{50} = 0{,}25$ rad/s</p>
          <p>$\\omega_2 = \\dfrac{v_2}{R_2} = \\dfrac{105}{640} \\approx 0{,}164$ rad/s</p>

          <h4>Conclusión</h4>
          <p>$\\omega_1 > \\omega_2$ → <strong>la velocista tiene más velocidad angular</strong>, aunque el monoplaza vaya muchísimo más rápido linealmente. Tiene sentido: el óvalo de la velocista es mucho más cerrado.</p>
          <p class="hint">💡 Velocidad angular ≠ velocidad lineal. Una niña en un tiovivo cerca del centro y otra en el borde tienen la misma $\\omega$ pero distintas $v$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-14-ventilador-acelerando">📝 Actividad 14 — Ventilador acelerando</h2>
      <p>Un ventilador pasa de $1$ rpm a $15$ rpm en tan solo $10$ s. Calcula su aceleración angular media.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Pasar las velocidades a rad/s</h4>
          <p>$\\omega_0 = 1\\;\\text{rpm} = \\dfrac{2\\pi}{60} \\approx 0{,}1047$ rad/s</p>
          <p>$\\omega = 15\\;\\text{rpm} = \\dfrac{15\\cdot 2\\pi}{60} = \\dfrac{\\pi}{2} \\approx 1{,}5708$ rad/s</p>

          <h4>Aceleración angular</h4>
          <p>$\\alpha = \\dfrac{\\omega - \\omega_0}{t} = \\dfrac{1{,}5708 - 0{,}1047}{10} \\approx \\boxed{0{,}147\\;\\text{rad/s}^2}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="10-movimiento-circular-uniforme-mcu">10. Movimiento Circular Uniforme (MCU)</h2>
      <p>El MCU es un movimiento en el que el móvil describe una circunferencia con <strong>celeridad constante</strong> (módulo de la velocidad).</p>
      <p>El vector velocidad cambia de <em>dirección</em> en todo momento aunque su módulo sea constante. Por tanto sí hay aceleración:</p>
      <ul class="clean">
        <li>🚫 <strong>No hay aceleración tangencial</strong> ($a_t = 0$): el módulo de $v$ no cambia.</li>
        <li>✅ <strong>Sí hay aceleración normal o centrípeta</strong> ($\\vec{a}_n$): apunta siempre <em>al centro de la circunferencia</em>.</li>
      </ul>

      <h3>Ecuación del movimiento</h3>
      <p>Como $\\omega$ es constante, la posición angular crece linealmente con el tiempo:</p>
      <p style="text-align:center; font-size: 1.15em">$$\\varphi = \\varphi_0 + \\omega\\,t$$</p>

      <h3>Periodo y frecuencia</h3>
      <p>El MCU es <strong>periódico</strong>: la posición se repite cada cierto tiempo.</p>
      <ul class="clean">
        <li>⏱️ <strong>Periodo $T$</strong>: tiempo en dar una vuelta completa. Unidad SI: segundo.</li>
        <li>🔁 <strong>Frecuencia $f$</strong>: vueltas por unidad de tiempo. $f = 1/T$. Unidad SI: $\\text{s}^{-1} = $ Hercio (Hz).</li>
      </ul>
      <p style="text-align:center; font-size: 1.15em">$$\\omega = \\dfrac{2\\pi}{T} = 2\\pi\\,f$$</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — aceleración centrípeta</summary>
        <div class="theory">
          <p>Aunque el módulo de la velocidad no cambie, su <em>dirección</em> sí. Eso obliga a que haya aceleración. Esa aceleración apunta siempre al centro y se llama <strong>centrípeta</strong> o normal:</p>
          <p style="text-align:center; font-size: 1.1em">$$a_n = \\dfrac{v^2}{R} = \\omega^2\\cdot R$$</p>
          <p>En la Tierra dando vueltas alrededor del Sol, en un coche tomando una curva, o en un satélite, esta aceleración la provoca alguna fuerza (gravedad, rozamiento, tensión de una cuerda…). En 2.º de Bachillerato la veremos asociada a la fuerza centrípeta $F_c = m\\,a_n$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-15-cd-rom-girando">📝 Actividad 15 — CD-ROM girando</h2>
      <p>Un CD-ROM de radio $6$ cm gira a $2500$ rpm. Calcula:</p>
      <ol>
        <li>El módulo de la <strong>velocidad angular</strong> en rad/s.</li>
        <li>El módulo de la <strong>velocidad lineal</strong> de su borde.</li>
        <li>Su <strong>frecuencia</strong>.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>a) Velocidad angular</h4>
          <p>$\\omega = 2500\\cdot\\dfrac{2\\pi}{60} \\approx \\boxed{261{,}8\\;\\text{rad/s}}$</p>

          <h4>b) Velocidad lineal del borde</h4>
          <p>$v = \\omega\\cdot R = 261{,}8\\cdot 0{,}06 \\approx \\boxed{15{,}71\\;\\text{m/s}}$</p>

          <h4>c) Frecuencia</h4>
          <p>$f = \\dfrac{\\omega}{2\\pi} = \\dfrac{261{,}8}{2\\pi} \\approx \\boxed{41{,}67\\;\\text{Hz}}$</p>
          <p class="hint">$f = 2500/60$ rev/s $\\approx 41{,}67$ Hz, mismo resultado.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-16-estacion-espacial-internacional">📝 Actividad 16 — Estación Espacial Internacional</h2>
      <p>La ISS gira con velocidad angular constante alrededor de la Tierra cada $90$ minutos en una órbita a $300$ km de altura sobre la superficie terrestre. a) Calcula sus velocidades angular y lineal. b) Justifica si tiene aceleración.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Datos y radio orbital</h4>
          <p>$T = 90$ min $= 5400$ s. Radio terrestre $R_T \\approx 6371$ km. $R = R_T + 300 = 6671$ km $= 6{,}671\\cdot 10^6$ m.</p>

          <h4>a) Velocidad angular</h4>
          <p>$\\omega = \\dfrac{2\\pi}{T} = \\dfrac{2\\pi}{5400} \\approx \\boxed{1{,}164\\cdot 10^{-3}\\;\\text{rad/s}}$</p>

          <h4>a) Velocidad lineal</h4>
          <p>$v = \\omega\\cdot R = 1{,}164\\cdot 10^{-3}\\cdot 6{,}671\\cdot 10^6 \\approx \\boxed{7765\\;\\text{m/s} \\approx 7{,}77\\;\\text{km/s}}$</p>

          <h4>b) ¿Tiene aceleración?</h4>
          <p><strong>Sí</strong>. Aunque el módulo de $\\vec{v}$ es constante, su dirección cambia continuamente. Tiene aceleración centrípeta $a_n = v^2/R = (7765)^2/6{,}671\\cdot 10^6 \\approx \\boxed{9{,}04\\;\\text{m/s}^2}$ apuntando hacia el centro de la Tierra. Esa es justamente la gravedad que sufre la ISS a esa altura: por eso se mantiene en órbita.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="11-movimiento-circular-uniformemente-acelerado-mcua">11. Movimiento Circular Uniformemente Acelerado (MCUA)</h2>
      <p>Es el movimiento circular en el que la <strong>velocidad angular varía a un ritmo constante</strong>: aceleración angular $\\alpha$ constante.</p>

      <h3>Ecuaciones (analogía con el MRUA)</h3>
      <table class="table">
        <thead><tr><th>MRUA (lineal)</th><th>MCUA (angular)</th></tr></thead>
        <tbody>
          <tr><td>$v = v_0 + a\\,t$</td><td>$\\omega = \\omega_0 + \\alpha\\,t$</td></tr>
          <tr><td>$x = x_0 + v_0\\,t + \\tfrac{1}{2}a\\,t^2$</td><td>$\\varphi = \\varphi_0 + \\omega_0\\,t + \\tfrac{1}{2}\\alpha\\,t^2$</td></tr>
          <tr><td>$v^2 - v_0^2 = 2a\\,\\Delta x$</td><td>$\\omega^2 - \\omega_0^2 = 2\\alpha\\,\\Delta\\varphi$</td></tr>
        </tbody>
      </table>
      <p class="hint">📌 Sustituyendo $x \\to \\varphi$, $v \\to \\omega$ y $a \\to \\alpha$ pasas de las del MRUA a las del MCUA. Así que <em>si te sabes el MRUA, te sabes el MCUA</em>.</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — analogía MRUA ↔ MCUA</summary>
        <div class="theory">
          <p>Las magnitudes lineales y angulares se relacionan por el radio (constante en una circunferencia):</p>
          <ul class="clean">
            <li>$s = R\\,\\varphi$</li>
            <li>$v = R\\,\\omega$</li>
            <li>$a_t = R\\,\\alpha$ (aceleración tangencial, distinta de la centrípeta)</li>
          </ul>
          <p>De ahí que las ecuaciones del MCUA tengan la misma <em>forma</em> que las del MRUA: simplemente cambias cada magnitud lineal por la angular correspondiente.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-19-centrifugadora-arrancando">📝 Actividad 19 — Centrifugadora arrancando</h2>
      <p>Una centrifugadora arranca y tarda $15$ s en alcanzar $720$ rpm. Calcula:</p>
      <ol>
        <li>La <strong>aceleración angular</strong>.</li>
        <li>La <strong>velocidad lineal</strong> de su borde a $t = 10$ s, si tiene $30$ cm de radio.</li>
        <li>Las <strong>vueltas</strong> que da en los primeros 15 s.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Datos</h4>
          <p>$\\omega_0 = 0$ (arranca), $\\omega_f = 720\\cdot 2\\pi/60 = 24\\pi \\approx 75{,}40$ rad/s, $t_f = 15$ s, $R = 0{,}30$ m.</p>

          <h4>a) Aceleración angular</h4>
          <p>$\\alpha = \\dfrac{\\omega_f - \\omega_0}{t_f} = \\dfrac{24\\pi}{15} = \\dfrac{8\\pi}{5} \\approx \\boxed{5{,}03\\;\\text{rad/s}^2}$</p>

          <h4>b) Velocidad lineal en $t = 10$ s</h4>
          <p>$\\omega(10) = 0 + 5{,}03\\cdot 10 = 50{,}3$ rad/s</p>
          <p>$v = \\omega\\cdot R = 50{,}3\\cdot 0{,}30 \\approx \\boxed{15{,}1\\;\\text{m/s}}$</p>

          <h4>c) Vueltas en 15 s</h4>
          <p>$\\varphi = \\tfrac{1}{2}\\,\\alpha\\,t^2 = \\tfrac{1}{2}\\cdot 5{,}03\\cdot 225 \\approx 565{,}5$ rad</p>
          <p>Vueltas $= \\dfrac{565{,}5}{2\\pi} \\approx \\boxed{90\\;\\text{vueltas}}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-20-rueda-frenando">📝 Actividad 20 — Rueda frenando</h2>
      <p>La velocidad angular de una rueda disminuye desde $900$ hasta $800$ rpm en $5$ segundos. Calcula la aceleración angular, el número de revoluciones efectuadas en ese tiempo, y cuánto tiempo más hará falta para que la rueda se detenga, suponiendo que se mantiene constante la aceleración de frenado.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Pasar a rad/s</h4>
          <p>$\\omega_0 = 900\\cdot 2\\pi/60 = 30\\pi \\approx 94{,}25$ rad/s</p>
          <p>$\\omega = 800\\cdot 2\\pi/60 = \\dfrac{80\\pi}{3} \\approx 83{,}78$ rad/s</p>

          <h4>Aceleración angular</h4>
          <p>$\\alpha = \\dfrac{\\omega - \\omega_0}{t} = \\dfrac{83{,}78 - 94{,}25}{5} \\approx \\boxed{-2{,}09\\;\\text{rad/s}^2}$</p>
          <p>El signo negativo indica que <em>frena</em>.</p>

          <h4>Revoluciones en esos 5 s</h4>
          <p>$\\varphi = \\omega_0\\,t + \\tfrac{1}{2}\\alpha\\,t^2 = 94{,}25\\cdot 5 + \\tfrac{1}{2}(-2{,}09)\\cdot 25 \\approx 471{,}25 - 26{,}1 \\approx 445{,}1$ rad</p>
          <p>Revoluciones $= 445{,}1/(2\\pi) \\approx \\boxed{70{,}8\\;\\text{rev}}$</p>

          <h4>Tiempo hasta detenerse</h4>
          <p>De $0 = \\omega + \\alpha\\,t' \\Rightarrow t' = -\\omega/\\alpha = -83{,}78 / (-2{,}09) \\approx \\boxed{40{,}1\\;\\text{s}}$ adicionales (a contar desde el final de los primeros 5 s).</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="12-movimiento-armonico-simple-mas">12. Movimiento Armónico Simple (MAS)</h2>
      <p>Una partícula tiene MAS cuando vibra bajo la acción de <strong>fuerzas restauradoras proporcionales a la distancia respecto a la posición de equilibrio</strong>. El cuerpo se llama <em>oscilador armónico</em>.</p>

      <h3>Magnitudes características</h3>
      <table class="table">
        <thead><tr><th>Magnitud</th><th>Definición</th></tr></thead>
        <tbody>
          <tr><td>📏 <strong>Elongación</strong> ($x$)</td><td>Distancia entre la posición y la de equilibrio en cada instante.</td></tr>
          <tr><td>📐 <strong>Amplitud</strong> ($A$)</td><td>Máxima distancia posible entre posición y equilibrio.</td></tr>
          <tr><td>⏱️ <strong>Periodo</strong> ($T$)</td><td>Tiempo que tarda en una oscilación completa.</td></tr>
          <tr><td>🔁 <strong>Frecuencia</strong> ($f$)</td><td>Oscilaciones por unidad de tiempo. $f = 1/T$.</td></tr>
          <tr><td>🌀 <strong>Fase</strong> ($\\varphi$)</td><td>Ángulo que representa el estado de vibración en un instante.</td></tr>
          <tr><td>🌊 <strong>Frecuencia angular</strong> ($\\omega$)</td><td>Velocidad de cambio de la fase. $\\omega = 2\\pi f$. Unidad: rad/s.</td></tr>
        </tbody>
      </table>

      <h3>Ecuación de la posición</h3>
      <p style="text-align:center; font-size: 1.15em">$$x(t) = A\\cdot\\cos(\\omega t + \\varphi_0)$$</p>
      <p>O equivalentemente con seno (sólo cambia la fase inicial):</p>
      <p style="text-align:center; font-size: 1.1em">$$x(t) = A\\cdot\\sin(\\omega t + \\varphi_0)$$</p>

      <h3>Velocidad y aceleración (derivando)</h3>
      <p>Para $x = A\\sin(\\omega t + \\varphi_0)$:</p>
      <p style="text-align:center; font-size: 1.05em">$$v = \\dfrac{dx}{dt} = A\\,\\omega\\cdot\\cos(\\omega t + \\varphi_0)$$</p>
      <p style="text-align:center; font-size: 1.05em">$$a = \\dfrac{dv}{dt} = -A\\,\\omega^2\\cdot\\sin(\\omega t + \\varphi_0) = -\\omega^2\\,x$$</p>
      <p>Para $x = A\\cos(\\omega t + \\varphi_0)$ los signos van invertidos en $v$ ($v = -A\\omega\\sin(\\dots)$) y la relación $a = -\\omega^2\\,x$ se mantiene idéntica.</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — derivadas de seno y coseno + relación con MCU</summary>
        <div class="theory">
          <h4>Derivadas elementales que necesitamos</h4>
          <ul class="clean">
            <li>$\\dfrac{d}{dt}\\sin(\\omega t + \\varphi_0) = \\omega\\,\\cos(\\omega t + \\varphi_0)$</li>
            <li>$\\dfrac{d}{dt}\\cos(\\omega t + \\varphi_0) = -\\omega\\,\\sin(\\omega t + \\varphi_0)$</li>
          </ul>
          <p>Aplica regla de la cadena: la derivada de la función de fuera (sin/cos) por la derivada de la de dentro ($\\omega$).</p>

          <h4>Conexión con el MCU</h4>
          <p>El MAS es la <strong>proyección sobre un eje</strong> de un MCU. Si una partícula gira en círculo con velocidad angular $\\omega$, su sombra sobre cualquier eje (X o Y) describe un MAS de la misma frecuencia.</p>
          <p>Por eso la $\\omega$ del MAS se llama <em>frecuencia angular</em> aunque el cuerpo no gire: heredamos el nombre del MCU equivalente.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-17-mas-dado-por-su-ecuacion">📝 Actividad 17 — MAS dado por su ecuación</h2>
      <p>Una partícula oscila con un MAS de modo que su desplazamiento varía según $x = 5\\cos(2t + \\pi/6)$, con $x$ en cm y $t$ en s.</p>
      <ol>
        <li>En $t = 0$, encuentra el desplazamiento, la velocidad y la aceleración.</li>
        <li>Determina el periodo y la amplitud del movimiento.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Identificamos parámetros</h4>
          <p>Comparando con $x = A\\cos(\\omega t + \\varphi_0)$: $A = 5$ cm, $\\omega = 2$ rad/s, $\\varphi_0 = \\pi/6$.</p>

          <h4>a) Valores en $t = 0$</h4>
          <p>$x(0) = 5\\cos(\\pi/6) = 5\\cdot\\dfrac{\\sqrt{3}}{2} \\approx \\boxed{4{,}33\\;\\text{cm}}$</p>
          <p>$v(t) = -A\\omega\\sin(\\omega t + \\varphi_0) = -5\\cdot 2\\sin(2t + \\pi/6)$</p>
          <p>$v(0) = -10\\sin(\\pi/6) = -10\\cdot\\dfrac{1}{2} = \\boxed{-5\\;\\text{cm/s}}$</p>
          <p>$a(t) = -\\omega^2\\,x(t)$</p>
          <p>$a(0) = -4\\cdot 4{,}33 \\approx \\boxed{-17{,}32\\;\\text{cm/s}^2}$</p>

          <h4>b) Periodo y amplitud</h4>
          <p>$T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{2} = \\pi \\approx \\boxed{3{,}14\\;\\text{s}}$</p>
          <p>Amplitud: $A = \\boxed{5\\;\\text{cm}}$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-18-construir-la-ecuacion-del-mas">📝 Actividad 18 — Construir la ecuación del MAS</h2>
      <p>Escribe la ecuación de un MAS cuya frecuencia es $15$ Hz y su velocidad inicial es $150\\pi$ cm/s, sabiendo que parte desde el reposo (posición de equilibrio).</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Frecuencia angular</h4>
          <p>$\\omega = 2\\pi\\,f = 2\\pi\\cdot 15 = 30\\pi$ rad/s</p>

          <h4>Forma de la ecuación</h4>
          <p>Como "parte desde el reposo" se refiere a partir desde la <em>posición de equilibrio</em> ($x_0 = 0$) con velocidad máxima, conviene usar la forma con seno y $\\varphi_0 = 0$:</p>
          <p style="text-align:center">$x(t) = A\\sin(\\omega t)$</p>
          <p>Entonces $v(t) = A\\,\\omega\\cos(\\omega t)$, y $v(0) = A\\,\\omega$.</p>

          <h4>Despejar la amplitud</h4>
          <p>$A = \\dfrac{v(0)}{\\omega} = \\dfrac{150\\pi}{30\\pi} = \\boxed{5\\;\\text{cm}}$</p>

          <h4>Ecuación final</h4>
          <p style="text-align:center; font-size: 1.1em">$$\\boxed{\\,x(t) = 5\\sin(30\\pi\\,t)\\;\\text{cm}\\,}$$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exam">
      <h2 id="examenes-corregidos">🧾 Exámenes corregidos</h2>
      <p>Examen real del Tema 9 (1.º Bachillerato, curso 2025–2026, IES Jálama, 1 h). Cuatro apartados con dos ejercicios cada uno, eliges uno por apartado. Aquí los resolvemos todos para comparar.</p>
      <p class="hint">📌 <strong>Convenio</strong> de origen de coordenadas: el suelo (o el plano de aterrizaje) en $(0, 0)$, eje $y$ hacia arriba. Tomamos $g = 9{,}8$ m/s² salvo indicación expresa.</p>

      <h3>Apartado 1 · Tiro horizontal</h3>

      <details>
        <summary><strong>Ejercicio 1.1</strong> — Avión de emergencias</summary>
        <div class="theory">
          <p><em>Un avión va a 120 m/s y, cuando está 800 m antes del objetivo en línea recta, lanza una caja de provisiones para que llegue al objetivo. Calcula: a) el tiempo que tarda en llegar; b) la altura desde la que lo lanza.</em></p>

          <h4>Identificación</h4>
          <p>Tiro horizontal: el avión vuela en horizontal, suelta la caja sin velocidad vertical inicial. Datos: $v = 120$ m/s, $x_{\\max} = 800$ m.</p>

          <h4>a) Tiempo de vuelo</h4>
          <p>El movimiento horizontal es MRU: $x = v\\,t \\Rightarrow t_v = \\dfrac{x_{\\max}}{v} = \\dfrac{800}{120} \\approx \\boxed{6{,}67\\;\\text{s}}$</p>

          <h4>b) Altura desde la que lanza</h4>
          <p>Caída libre: $h = \\dfrac{1}{2}\\,g\\,t_v^{\\,2} = \\dfrac{1}{2}\\cdot 9{,}8\\cdot (6{,}67)^2 \\approx \\boxed{217{,}9\\;\\text{m}}$</p>
          <p class="hint">Con $g = 10$ m/s²: $h = 222{,}4$ m. La velocidad horizontal del avión sólo entra en (a); en (b) lo importante es el tiempo de caída.</p>
        </div>
      </details>

      <details>
        <summary><strong>Ejercicio 1.2</strong> — Flecha desde un acantilado</summary>
        <div class="theory">
          <p><em>Se lanza desde un acantilado de 300 m una flecha a 45 m/s (horizontal). Calcula: a) el tiempo que tarda en llegar al mar; b) cuánto recorre horizontalmente en los últimos 10 m de altura.</em></p>

          <h4>a) Tiempo total de vuelo</h4>
          <p>$t_v = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{600}{9{,}8}} \\approx \\boxed{7{,}82\\;\\text{s}}$</p>

          <h4>b) Distancia recorrida en los últimos 10 m</h4>
          <p>Tiempo en estar a $y = 10$ m sobre el mar (es decir, 290 m por debajo del punto de salida):</p>
          <p>$10 = 300 - \\dfrac{1}{2}\\,g\\,t_1^{\\,2} \\Rightarrow t_1 = \\sqrt{\\dfrac{580}{9{,}8}} \\approx 7{,}69$ s</p>
          <p>Tiempo invertido en los últimos 10 m de caída:</p>
          <p>$\\Delta t = t_v - t_1 \\approx 7{,}82 - 7{,}69 = 0{,}131$ s</p>
          <p>Distancia horizontal en ese intervalo (MRU horizontal):</p>
          <p>$\\Delta x = v\\cdot\\Delta t = 45\\cdot 0{,}131 \\approx \\boxed{5{,}9\\;\\text{m}}$</p>
          <p class="hint">💡 La flecha pasa muy rápido por los últimos metros porque ya cae con casi la velocidad máxima vertical. Por eso $\\Delta x$ es pequeño aunque $v_x$ sea alta.</p>
        </div>
      </details>

      <h3>Apartado 2 · Tiro oblicuo</h3>

      <details>
        <summary><strong>Ejercicio 2.1</strong> — Golf en la Luna</summary>
        <div class="theory">
          <p><em>Un astronauta juega al golf en la Luna ($g = 1{,}6$ m/s²) e impulsa una pelota a 25 m/s con un ángulo de 45°. Calcula: a) alcance máximo; b) altura máxima.</em></p>

          <h4>🧭 Esquema de resolución (orden recomendado para cualquier tiro oblicuo)</h4>
          <ol>
            <li><strong>Paso 0</strong>: Descomponer $\\vec{v}_0$ en $v_x$ y $v_y$ con coseno y seno.</li>
            <li><strong>Paso 1</strong>: Tiempo de vuelo $t_v = \\dfrac{2\\,v_y}{g}$ (cuando $y_0 = 0$).</li>
            <li><strong>Paso 2</strong>: Alcance $x_{\\max} = v_x\\cdot t_v$.</li>
            <li><strong>Paso 3</strong>: Altura máxima evaluando $y(t)$ en $t = t_v/2$ (en el vértice $v_y = 0$).</li>
          </ol>

          <h4>📐 Visualización de la trayectoria</h4>
          <svg viewBox="0 0 480 220" width="100%" preserveAspectRatio="xMidYMid meet"
               style="background: var(--panel-bg, #fff); border: 1px solid var(--border, #e2e8f0); border-radius: 10px;">
            <!-- suelo -->
            <line x1="20" y1="190" x2="460" y2="190" stroke="#475569" stroke-width="1.5"/>
            <!-- parábola -->
            <path d="M 30 190 Q 240 -40 450 190" stroke="#0ea5e9" stroke-width="2.5" fill="none"/>
            <!-- v0 -->
            <line x1="30" y1="190" x2="80" y2="140" stroke="#0ea5e9" stroke-width="2"/>
            <polygon points="80,140 75,144 79,148" fill="#0ea5e9"/>
            <text x="56" y="160" font-size="11" fill="#0c4a6e" font-style="italic">v₀</text>
            <!-- ángulo -->
            <path d="M 50 190 A 20 20 0 0 1 60 175" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
            <text x="55" y="186" font-size="10" fill="#b45309">α</text>
            <!-- vértice -->
            <circle cx="240" cy="65" r="3" fill="#10b981"/>
            <line x1="240" y1="65" x2="280" y2="65" stroke="#10b981" stroke-width="2"/>
            <polygon points="280,65 275,62 275,68" fill="#10b981"/>
            <text x="248" y="58" font-size="11" fill="#047857">v_y = 0</text>
            <line x1="240" y1="65" x2="240" y2="190" stroke="#10b981" stroke-width="1" stroke-dasharray="3 3"/>
            <text x="246" y="135" font-size="11" fill="#047857" font-style="italic">y_max</text>
            <!-- aterrizaje -->
            <circle cx="450" cy="190" r="3" fill="#ef4444"/>
            <text x="200" y="208" font-size="11" fill="#475569">x_max</text>
            <line x1="30" y1="200" x2="450" y2="200" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
            <!-- t_v/2 hint -->
            <text x="160" y="50" font-size="11" fill="#475569">t = t_v/2</text>
          </svg>

          <h4>Paso 0 — Componentes de la velocidad inicial</h4>
          <p>Como $\\alpha = 45°$, los dos catetos del triángulo de velocidades son iguales:</p>
          <p>$v_x = v_0\\cos 45° = 25\\cdot\\dfrac{\\sqrt{2}}{2} \\approx 17{,}68$ m/s</p>
          <p>$v_y = v_0\\sin 45° = 25\\cdot\\dfrac{\\sqrt{2}}{2} \\approx 17{,}68$ m/s</p>

          <h4>Paso 1 — Tiempo de vuelo</h4>
          <p>El astronauta golpea desde el suelo y la pelota cae al mismo nivel ($y_0 = 0$). Aplicamos la fórmula del tema:</p>
          <p>$t_v = \\dfrac{2\\,v_y}{g} = \\dfrac{2\\cdot 17{,}68}{1{,}6} \\approx \\boxed{22{,}10\\;\\text{s}}$</p>

          <h4>Paso 2 — Alcance máximo</h4>
          <p>Eje X (MRU con $v_x$ constante):</p>
          <p>$x_{\\max} = v_x\\cdot t_v = 17{,}68\\cdot 22{,}10 \\approx \\boxed{390{,}6\\;\\text{m}}$</p>
          <p class="hint">📐 Comprobación con la fórmula compacta del alcance en suelo plano: $x_{\\max} = \\dfrac{v_0^{\\,2}\\sin(2\\alpha)}{g} = \\dfrac{625\\cdot\\sin 90°}{1{,}6} = 390{,}625$ m. ¡Lo mismo!</p>

          <h4>Paso 3 — Altura máxima (en el vértice, $t = t_v/2$)</h4>
          <p>El detalle clave es que la pelota deja de subir cuando su componente vertical de velocidad se anula. Como $v_y(t) = v_{y0} - g\\,t$, eso ocurre en:</p>
          <p>$t_{\\text{cima}} = \\dfrac{v_y}{g} = \\dfrac{t_v}{2} = \\dfrac{22{,}10}{2} = 11{,}05$ s</p>
          <p>Sustituimos en la ecuación de la posición vertical $y(t) = v_y\\,t - \\tfrac{1}{2}\\,g\\,t^2$:</p>
          <p>$y_{\\max} = 17{,}68\\cdot 11{,}05 - \\dfrac{1}{2}\\cdot 1{,}6\\cdot (11{,}05)^2$</p>
          <p>$y_{\\max} = 195{,}36 - 97{,}70 \\approx \\boxed{97{,}66\\;\\text{m}}$</p>

          <details>
            <summary><strong>📚 Teoría base</strong> — por qué $t_{\\text{cima}} = t_v/2$ (y por qué $y_{\\max} = v_y^{\\,2}/2g$)</summary>
            <div class="theory">
              <h4>Tiempo en la cima</h4>
              <p>En la cima la velocidad vertical se anula: $v_y(t_{\\text{cima}}) = v_{y0} - g\\,t_{\\text{cima}} = 0$, luego $t_{\\text{cima}} = v_{y0}/g$.</p>
              <p>El tiempo de vuelo total (cuando $y$ vuelve a $0$) sale de $0 = v_{y0}\\,t_v - \\tfrac{1}{2}g\\,t_v^{\\,2} \\Rightarrow t_v = 2v_{y0}/g$. Por tanto:</p>
              <p>$$t_{\\text{cima}} = \\dfrac{t_v}{2}$$</p>
              <p>La parábola es <strong>simétrica</strong>: tarda lo mismo en subir que en bajar. Esto solo es exacto cuando $y_0 = 0$ (sale y vuelve al mismo plano).</p>

              <h4>Fórmula compacta de la altura máxima</h4>
              <p>Sustituyendo $t_{\\text{cima}} = v_{y0}/g$ en $y(t) = v_{y0}\\,t - \\tfrac{1}{2}g\\,t^2$:</p>
              <p>$y_{\\max} = v_{y0}\\cdot\\dfrac{v_{y0}}{g} - \\dfrac{1}{2}g\\cdot\\dfrac{v_{y0}^{\\,2}}{g^2} = \\dfrac{v_{y0}^{\\,2}}{g} - \\dfrac{v_{y0}^{\\,2}}{2g} = \\dfrac{v_{y0}^{\\,2}}{2g}$</p>
              <p>Verificación con el ejercicio: $y_{\\max} = (17{,}68)^2/(2\\cdot 1{,}6) = 312{,}5/3{,}2 \\approx 97{,}66$ m. ✅</p>
            </div>
          </details>

          <p class="hint">🌕 <strong>Reflexión final</strong>: comparado con la Tierra ($g = 9{,}8$), en la Luna ($g = 1{,}6$, ≈ 6 veces menor) el mismo golpe llega <em>seis veces</em> más lejos y unas seis veces más alto. Tanto el alcance como la altura máxima son inversamente proporcionales a $g$.</p>
        </div>
      </details>

      <details>
        <summary><strong>Ejercicio 2.2</strong> — Policía y ladrón sobre los tejados</summary>
        <div class="theory">
          <p><em>Un policía persigue a un ladrón por encima de los tejados. Ambos corren a 5 m/s y llegan a un hueco de 4 m de ancho con un desnivel de 3 m (el otro edificio está 3 m más bajo). El ladrón salta a 5 m/s con $\\alpha = 45°$ y pasa fácilmente. El policía no estudió física y, creyendo que con menos ángulo es suficiente, salta a 5 m/s con $\\alpha = 30°$. a) Calcula la posición de caída del policía. ¿Logra atravesar el hueco? b) ¿Qué distancia logró saltar el ladrón al atravesar?</em></p>

          <h4>Planteamiento común</h4>
          <p>Origen de coordenadas en el borde del edificio de salida. El borde del edificio de aterrizaje está en $x = 4$ m e $y = -3$ m (3 m más bajo). El salto termina cuando $y = -3$ m.</p>

          <h4>a) Policía ($\\alpha = 30°$)</h4>
          <p>Componentes: $v_x = 5\\cos 30° \\approx 4{,}33$ m/s; $v_y = 5\\sin 30° = 2{,}5$ m/s.</p>
          <p>Ecuaciones: $x(t) = 4{,}33\\,t$; $y(t) = 2{,}5\\,t - 4{,}9\\,t^2$.</p>
          <p>Tiempo de aterrizaje ($y = -3$):</p>
          <p>$-3 = 2{,}5\\,t - 4{,}9\\,t^2 \\Rightarrow 4{,}9\\,t^2 - 2{,}5\\,t - 3 = 0$</p>
          <p>$t = \\dfrac{2{,}5 + \\sqrt{6{,}25 + 58{,}8}}{9{,}8} = \\dfrac{2{,}5 + 8{,}07}{9{,}8} \\approx 1{,}078$ s</p>
          <p>Posición horizontal de caída: $x = 4{,}33\\cdot 1{,}078 \\approx \\boxed{4{,}67\\;\\text{m}}$</p>
          <p>Como $4{,}67$ m $&gt; 4$ m, <strong>sí atraviesa el hueco</strong> y aterriza unos $0{,}67$ m dentro del edificio destino.</p>
          <p class="hint">💡 Comprobación adicional: cuando $x = 4$ m, $t = 4/4{,}33 \\approx 0{,}924$ s, y $y = 2{,}5\\cdot 0{,}924 - 4{,}9\\cdot 0{,}854 \\approx -1{,}87$ m. Como $-1{,}87 > -3$, en ese momento aún está por encima del techo destino → no se cae al hueco.</p>

          <h4>b) Ladrón ($\\alpha = 45°$)</h4>
          <p>$v_x = v_y = 5\\cdot\\dfrac{\\sqrt{2}}{2} \\approx 3{,}54$ m/s</p>
          <p>$y(t) = 3{,}54\\,t - 4{,}9\\,t^2 = -3$ → $4{,}9\\,t^2 - 3{,}54\\,t - 3 = 0$</p>
          <p>$t = \\dfrac{3{,}54 + \\sqrt{12{,}53 + 58{,}8}}{9{,}8} = \\dfrac{3{,}54 + 8{,}45}{9{,}8} \\approx 1{,}224$ s</p>
          <p>Distancia horizontal saltada: $x = 3{,}54\\cdot 1{,}224 \\approx \\boxed{4{,}33\\;\\text{m}}$</p>
          <p>El ladrón cruza el hueco y aterriza unos $0{,}33$ m dentro del edificio destino.</p>

          <h4>📚 Reflexión física</h4>
          <p>Curioso: el policía, aun saltando con menos ángulo (30°), <em>también logra cruzar</em> en este caso porque <strong>el aterrizaje es a un nivel más bajo</strong>, lo que aumenta el tiempo de vuelo. En suelo plano (mismo nivel), un ángulo de 45° maximiza el alcance, así que el ladrón habría llegado más lejos. Aquí, sin embargo, $30°$ da un alcance ligeramente <em>mayor</em> ($4{,}67$ m vs. $4{,}33$ m): el menor ángulo gana algo de velocidad horizontal, y el desnivel le regala tiempo extra para aprovecharla.</p>
          <p class="hint">⚠️ El razonamiento intuitivo del policía ("con menos ángulo basta") <em>funciona</em> en este escenario por el desnivel, pero <strong>en suelo plano falla</strong>: con $h = 0$ y $5$ m/s a 30°, $x_{\\max} = v_0^2\\sin(2\\alpha)/g = 25\\sin 60°/9{,}8 \\approx 2{,}21$ m, no llega ni de cerca a los 4 m. Conclusión: estudiar física compensa.</p>
        </div>
      </details>

      <h3>📊 Tabla resumen del examen</h3>
      <table class="table">
        <thead><tr><th>Ejercicio</th><th>Tipo</th><th>Resultados clave</th></tr></thead>
        <tbody>
          <tr><td>1.1</td><td>Tiro horizontal</td><td>$t_v \\approx 6{,}67$ s &nbsp;·&nbsp; $h \\approx 217{,}9$ m</td></tr>
          <tr><td>1.2</td><td>Tiro horizontal</td><td>$t_v \\approx 7{,}82$ s &nbsp;·&nbsp; $\\Delta x_{10\\text{m}} \\approx 5{,}9$ m</td></tr>
          <tr><td>2.1</td><td>Tiro oblicuo (Luna)</td><td>$x_{\\max} \\approx 390{,}6$ m &nbsp;·&nbsp; $y_{\\max} \\approx 97{,}66$ m</td></tr>
          <tr><td>2.2 a</td><td>Tiro oblicuo con desnivel</td><td>Policía cae a $x \\approx 4{,}67$ m → ✅ atraviesa</td></tr>
          <tr><td>2.2 b</td><td>Tiro oblicuo con desnivel</td><td>Ladrón salta $x \\approx 4{,}33$ m</td></tr>
        </tbody>
      </table>
    </section>

    <section class="panel panel--reference">
      <h2 id="chuleta-de-la-unidad">📋 Chuleta de la unidad</h2>
      <div class="theory">
        <h4>🧠 Lo imprescindible</h4>
        <ul class="clean">
          <li>📌 $\\vec{r} = x\\,\\vec{i} + y\\,\\vec{j}$ (combinación lineal).</li>
          <li>📌 $|\\vec{r}_x| = |\\vec{r}|\\cos\\alpha$ &nbsp;·&nbsp; $|\\vec{r}_y| = |\\vec{r}|\\sin\\alpha$.</li>
          <li>📌 $|\\vec{r}| = \\sqrt{x^2 + y^2}$ (Pitágoras).</li>
          <li>📌 $\\tan\\alpha = y/x$ → ángulo con la horizontal.</li>
          <li>📌 Galileo: ejes independientes, sumar vectorialmente.</li>
          <li>📌 $\\vec{r} = \\vec{r}_1 + \\vec{r}_2$ &nbsp;·&nbsp; $\\vec{v} = \\vec{v}_1 + \\vec{v}_2$.</li>
        </ul>
      </div>
      <div class="theory">
        <h4>⚠️ Errores típicos</h4>
        <ul class="clean">
          <li>❌ Confundir cuál cateto va con seno y cuál con coseno. Recuerda: <em>el de al lado del ángulo es coseno</em>.</li>
          <li>❌ Olvidar el <em>signo</em> del ángulo: si $y &lt; 0$, $\\alpha$ sale negativo (o entre 270°-360°).</li>
          <li>❌ Sumar módulos en lugar de hacer suma vectorial. $|\\vec{u} + \\vec{v}| \\ne |\\vec{u}| + |\\vec{v}|$ en general.</li>
          <li>✅ Dibuja siempre el triángulo rectángulo antes de calcular.</li>
        </ul>
      </div>
    </section>
  `;

  // -- Descomponedor interactivo --
  const $ = id => document.getElementById(id);
  const xIn = $('vd-x'), yIn = $('vd-y');
  const xLab = $('vd-x-val'), yLab = $('vd-y-val');
  const info = $('vd-info');
  const svgBox = $('vd-svg');

  const update = async () => {
    const x = +xIn.value, y = +yIn.value;
    xLab.textContent = (+x.toFixed(2)).toString();
    yLab.textContent = (+y.toFixed(2)).toString();
    drawVector(svgBox, x, y);
    const mod = Math.hypot(x, y);
    const ang = Math.atan2(y, x) * 180 / Math.PI;
    info.innerHTML = `
      $\\vec{r} = ${x.toFixed(2)}\\,\\vec{i} ${y >= 0 ? '+' : '-'} ${Math.abs(y).toFixed(2)}\\,\\vec{j}$<br>
      $|\\vec{r}| = \\sqrt{${x.toFixed(2)}^2 + ${y.toFixed(2)}^2} = \\boxed{${mod.toFixed(3)}}$<br>
      $\\alpha = \\arctan(\\tfrac{${y.toFixed(2)}}{${x.toFixed(2)}}) \\approx \\boxed{${ang.toFixed(2)}°}$
    `;
    await typeset(info);
  };

  xIn.addEventListener('input', update);
  yIn.addEventListener('input', update);

  // Presets
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [px, py] = btn.dataset.preset.split(',').map(Number);
      xIn.value = px; yIn.value = py;
      update();
    });
  });

  await update();

  // Animación de la descomposición usando remotion-lite.
  $('vd-anim').addEventListener('click', async () => {
    const x = +xIn.value, y = +yIn.value;
    const btn = $('vd-anim');
    btn.disabled = true;
    btn.textContent = '🎬 Animando…';
    try {
      await animateDecomposition(svgBox, x, y);
    } finally {
      btn.disabled = false;
      btn.textContent = '🎬 Reproducir otra vez';
    }
  });

  // -- Explorador de radianes (φ = s/R) --
  const mcR = $('mc-r'), mcPhi = $('mc-phi');
  const mcRLab = $('mc-r-val'), mcPhiLab = $('mc-phi-val');
  const mcInfo = $('mc-info'), mcSvg = $('mc-svg');

  const drawCircle = (R, phi) => {
    const W = 360, H = 360, cx = W / 2, cy = H / 2;
    const Rmin = 30, Rmax = 140;
    const px = Rmin + (R - 0.5) / (3 - 0.5) * (Rmax - Rmin);
    // SVG y-axis is inverted: usamos -phi para que el ángulo gire en sentido matemático (antihorario).
    const ex = cx + px * Math.cos(-phi);
    const ey = cy + px * Math.sin(-phi);
    const large = phi > Math.PI ? 1 : 0;
    const sweep = 0;
    const arcD = phi < 0.001
      ? ''
      : `M ${cx + px} ${cy} A ${px} ${px} 0 ${large} ${sweep} ${ex.toFixed(2)} ${ey.toFixed(2)}`;
    // Etiqueta de φ a media arc
    const midAng = -phi / 2;
    const labelR = Math.max(18, px * 0.35);
    const phiLx = cx + labelR * Math.cos(midAng);
    const phiLy = cy + labelR * Math.sin(midAng);
    // Etiqueta de s desplazada hacia fuera del arco
    const sLx = cx + (px + 18) * Math.cos(midAng);
    const sLy = cy + (px + 18) * Math.sin(midAng);
    mcSvg.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:340px; display:block; margin:0 auto;
        background:#fafaf6; border:1px solid #e4ddd0; border-radius:12px">
        <line x1="20" y1="${cy}" x2="${W - 20}" y2="${cy}" stroke="#d4ccb8" stroke-width="1"/>
        <line x1="${cx}" y1="20" x2="${cx}" y2="${H - 20}" stroke="#d4ccb8" stroke-width="1"/>
        <circle cx="${cx}" cy="${cy}" r="${px}" stroke="#a8a08d" stroke-width="1.2" fill="none" stroke-dasharray="3 3"/>
        <line x1="${cx}" y1="${cy}" x2="${cx + px}" y2="${cy}" stroke="#9ca3af" stroke-width="1.4" stroke-dasharray="4 3"/>
        ${arcD ? `<path d="${arcD}" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.85"/>` : ''}
        <line x1="${cx}" y1="${cy}" x2="${ex.toFixed(2)}" y2="${ey.toFixed(2)}" stroke="#dc2626" stroke-width="3"/>
        <circle cx="${ex.toFixed(2)}" cy="${ey.toFixed(2)}" r="6" fill="#dc2626"/>
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1a1a1d"/>
        <text x="${phiLx.toFixed(1)}" y="${(phiLy + 4).toFixed(1)}" font-size="14" fill="#1f3a8a" text-anchor="middle" font-weight="700">φ</text>
        <text x="${((cx + ex) / 2 + 8).toFixed(1)}" y="${((cy + ey) / 2 - 6).toFixed(1)}" font-size="13" fill="#b91c1c" font-style="italic" font-weight="600">R</text>
        <text x="${sLx.toFixed(1)}" y="${(sLy + 4).toFixed(1)}" font-size="14" fill="#15803d" text-anchor="middle" font-weight="700">s</text>
      </svg>
    `;
  };

  const updateMC = async () => {
    const R = +mcR.value, phi = +mcPhi.value;
    const s = R * phi;
    const deg = phi * 180 / Math.PI;
    mcRLab.textContent = R.toFixed(1);
    mcPhiLab.textContent = phi.toFixed(2);
    drawCircle(R, phi);
    mcInfo.innerHTML = `
      $R = ${R.toFixed(2)}\\,\\text{m}$<br>
      $\\varphi = ${phi.toFixed(2)}\\,\\text{rad} = ${deg.toFixed(1)}°$<br>
      $s = R\\cdot\\varphi = ${R.toFixed(2)}\\cdot ${phi.toFixed(2)} = \\boxed{${s.toFixed(2)}\\,\\text{m}}$<br>
      $\\varphi = \\dfrac{s}{R} = \\dfrac{${s.toFixed(2)}}{${R.toFixed(2)}} = ${phi.toFixed(2)}\\,\\text{rad}$
    `;
    await typeset(mcInfo);
  };

  mcR.addEventListener('input', updateMC);
  mcPhi.addEventListener('input', updateMC);
  document.querySelectorAll('[data-mc-preset]').forEach(b => {
    b.addEventListener('click', () => {
      const [r, p] = b.dataset.mcPreset.split(',').map(Number);
      mcR.value = r;
      mcPhi.value = p;
      updateMC();
    });
  });
  await updateMC();
}

// --- SVG helpers ---

function toPx(x, y) {
  // Mapeo de [-10, 10] a [PAD, W-PAD] y [-10, 10] a [H-PAD, PAD] (eje Y al revés).
  const px = SVG_PAD + (x + 10) / 20 * (SVG_W - 2 * SVG_PAD);
  const py = SVG_H - SVG_PAD - (y + 10) / 20 * (SVG_H - 2 * SVG_PAD);
  return [px, py];
}

function gridSvg() {
  const lines = [];
  for (let v = -10; v <= 10; v++) {
    const [px] = toPx(v, 0);
    lines.push(`<line x1="${px}" y1="${SVG_PAD}" x2="${px}" y2="${SVG_H - SVG_PAD}" stroke="#cbd5e1" stroke-width="${v === 0 ? 1.4 : 0.4}"/>`);
  }
  for (let v = -10; v <= 10; v++) {
    const [, py] = toPx(0, v);
    lines.push(`<line x1="${SVG_PAD}" y1="${py}" x2="${SVG_W - SVG_PAD}" y2="${py}" stroke="#cbd5e1" stroke-width="${v === 0 ? 1.4 : 0.4}"/>`);
  }
  for (let v = -10; v <= 10; v += 2) {
    if (v === 0) continue;
    const [px, py] = toPx(v, 0);
    lines.push(`<text x="${px}" y="${py + 12}" font-size="9" fill="#64748b" text-anchor="middle">${v}</text>`);
    const [px2, py2] = toPx(0, v);
    lines.push(`<text x="${px2 - 6}" y="${py2 + 3}" font-size="9" fill="#64748b" text-anchor="end">${v}</text>`);
  }
  return lines.join('\n');
}

function arrowDef() {
  return `
    <defs>
      <marker id="ar-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/>
      </marker>
      <marker id="ar-x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#f97316"/>
      </marker>
      <marker id="ar-y" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#10b981"/>
      </marker>
    </defs>
  `;
}

function drawVector(container, x, y) {
  const [ox, oy] = toPx(0, 0);
  const [px, py] = toPx(x, y);
  const [pxx, pxy] = toPx(x, 0);
  const mod = Math.hypot(x, y);
  const ang = Math.atan2(y, x) * 180 / Math.PI;

  // Arco para el ángulo: pequeño, en el origen.
  const angRadius = 26;
  const startA = 0;
  const endA = -ang * Math.PI / 180; // negativo porque SVG y va al revés
  const sweep = ang >= 0 ? 0 : 1;
  const ex = ox + angRadius * Math.cos(endA);
  const ey = oy + angRadius * Math.sin(endA);
  const arc = `M ${ox + angRadius} ${oy} A ${angRadius} ${angRadius} 0 0 ${sweep} ${ex} ${ey}`;

  container.innerHTML = `
    <svg viewBox="0 0 ${SVG_W} ${SVG_H}" width="100%" preserveAspectRatio="xMidYMid meet"
         style="background: var(--panel-bg, #fff); border: 1px solid var(--border, #e2e8f0); border-radius: 10px;">
      ${arrowDef()}
      ${gridSvg()}
      <line id="vec-rx" x1="${ox}" y1="${oy}" x2="${pxx}" y2="${pxy}"
            stroke="#f97316" stroke-width="3" marker-end="url(#ar-x)"/>
      <line id="vec-ry" x1="${pxx}" y1="${pxy}" x2="${px}" y2="${py}"
            stroke="#10b981" stroke-width="3" marker-end="url(#ar-y)"/>
      <line id="vec-r" x1="${ox}" y1="${oy}" x2="${px}" y2="${py}"
            stroke="#0ea5e9" stroke-width="3.5" marker-end="url(#ar-r)"/>
      <path d="${arc}" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="${ox + 32}" y="${oy - 6}" font-size="11" fill="#b45309">α = ${ang.toFixed(1)}°</text>
      <text x="${(ox + px) / 2 - 14}" y="${(oy + py) / 2 - 6}" font-size="13" fill="#0c4a6e" font-style="italic">r⃗</text>
      <text x="${(ox + pxx) / 2}" y="${pxy + 14}" font-size="11" fill="#9a3412">rₓ = ${x.toFixed(2)}</text>
      <text x="${pxx + 6}" y="${(pxy + py) / 2}" font-size="11" fill="#065f46">rᵧ = ${y.toFixed(2)}</text>
      <text x="${SVG_W - 8}" y="${SVG_H - 8}" font-size="11" fill="#0369a1" text-anchor="end" font-weight="600">|r⃗| = ${mod.toFixed(2)}</text>
    </svg>
  `;
}

async function animateDecomposition(container, x, y) {
  drawVector(container, x, y);
  const svg = container.querySelector('svg');
  const rx = svg.querySelector('#vec-rx');
  const ry = svg.querySelector('#vec-ry');
  const r = svg.querySelector('#vec-r');

  // Longitudes para el stroke-dashoffset.
  const lenR = Math.hypot(rx.getBBox().width, ry.getBBox().height) * 1.4 || 600;
  for (const el of [rx, ry, r]) {
    el.style.strokeDasharray = '600';
    el.style.strokeDashoffset = '600';
  }

  await playComposition({
    durationInFrames: 90, fps: 30,
    render(frame) {
      const px = interpolate(frame, [0, 30], [600, 0], {
        easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
      });
      const py = interpolate(frame, [25, 55], [600, 0], {
        easing: CRISP_ENTRANCE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
      });
      const pr = interpolate(frame, [50, 85], [600, 0], {
        easing: Easing.bezier(0.34, 1.56, 0.64, 1),
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
      });
      rx.style.strokeDashoffset = px.toFixed(1);
      ry.style.strokeDashoffset = py.toFixed(1);
      r.style.strokeDashoffset = pr.toFixed(1);
    },
  });

  // Limpio dasharray para que quede bien.
  for (const el of [rx, ry, r]) {
    el.style.strokeDasharray = '';
    el.style.strokeDashoffset = '';
  }
}
