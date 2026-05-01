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

    <section class="panel">
      <h2>1. Combinación lineal</h2>
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

    <section class="panel">
      <h2>2. Vector en función del ángulo</h2>
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

    <section class="panel">
      <h2>3. ¿Por qué $r_x$ va con coseno y $r_y$ con seno?</h2>
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

    <section class="panel">
      <h2>🧪 Descomponedor interactivo</h2>
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

    <section class="panel">
      <h2>📝 Actividad 1 — Componentes → módulo y ángulo</h2>
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

    <section class="panel">
      <h2>📝 Actividad 2 — Módulo y ángulo → componentes</h2>
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

    <section class="panel">
      <h2>📝 Actividad 3 — Barca cruzando un río</h2>
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

    <section class="panel">
      <h2>📝 Actividad 4 — Barca con ángulo respecto a la orilla</h2>
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

    <section class="panel">
      <h2>📝 Actividad 5 — Nadador y velocidad del río</h2>
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

    <section class="panel">
      <h2>4. Principio de Galileo</h2>
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

    <section class="panel">
      <h2>5. Composición de 2 MRU</h2>
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

    <section class="panel">
      <h2>📋 Chuleta de la unidad</h2>
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
