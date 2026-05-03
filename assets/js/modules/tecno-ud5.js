// UD 5 · Teoría de circuitos y máquinas eléctricas (Tecnología 1.º Bach).
// Magnitudes eléctricas, leyes fundamentales (Ohm, Joule, Kirchhoff, Ampere,
// Lorentz, Laplace, Faraday-Lenz), circuitos de c.c., máquinas eléctricas
// rotativas y tipos de excitación. Incluye una calculadora interactiva de
// la ley de Ohm + Joule.
import { typeset } from '../utils/mathRender.js';

export async function renderTecnoUd5(root) {
  root.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Tecnología e Ingeniería · 1.º Bachillerato · UD 5</div>
      <h1>Teoría de circuitos y máquinas eléctricas</h1>
      <p class="hero-lead">
        De la estructura atómica a los motores eléctricos: cómo se mueve la carga, qué leyes la gobiernan en un circuito y cómo se aprovecha esa energía para hacer girar una máquina.
      </p>
    </section>

    <section class="panel toc">
      <h2>Índice</h2>
      <ol class="toc-list">
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#1-introduccion">1. Introducción</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#2-fenomenos-electricos">2. Fenómenos eléctricos</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#3-magnitudes-electricas">3. Magnitudes eléctricas</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#4-leyes-fundamentales">4. Leyes fundamentales</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#5-circuitos-cc">5. Circuitos de corriente continua</a></li>
        <li class="toc-item toc-item--interactive"><span class="toc-chip">Interactivo</span><a href="#calculadora-ohm-joule">🧪 Calculadora Ohm + Joule</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#6-maquinas-cc">6. Máquinas eléctricas rotativas de c.c.</a></li>
        <li class="toc-item toc-item--theory"><span class="toc-chip">Teoría</span><a href="#7-excitacion">7. Excitación de las máquinas eléctricas</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-1-resistencia-cable">📝 Actividad 1 — Resistencia de un cable</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-2-joule-radiador">📝 Actividad 2 — Calor disipado por un radiador</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-3-kirchhoff">📝 Actividad 3 — Aplicar Kirchhoff a un nudo</a></li>
        <li class="toc-item toc-item--exercise"><span class="toc-chip">Ejercicio</span><a href="#actividad-4-motor-cc">📝 Actividad 4 — Motor de c.c.</a></li>
        <li class="toc-item toc-item--reference"><span class="toc-chip">Referencia</span><a href="#chuleta">📋 Chuleta de fórmulas</a></li>
      </ol>
    </section>

    <section class="panel panel--theory">
      <h2 id="1-introduccion">1. Introducción</h2>
      <p>La <strong>electricidad</strong> se explica por la estructura atómica de la materia. Según el modelo de <strong>Rutherford</strong>, los electrones del último orbital de los materiales conductores se mueven con relativa libertad y, cuando lo hacen <em>de forma ordenada</em>, generan una <strong>corriente eléctrica</strong>.</p>

      <div class="theory">
        <h4>🎯 Idea clave</h4>
        <p>El estado natural de los átomos es <strong>neutro</strong> (igual número de protones que de electrones). Si pierde un electrón se convierte en <strong>catión</strong> (carga +); si lo gana, en <strong>anión</strong> (carga −).</p>
        <p>Si conectamos un grupo de cationes con un grupo de aniones mediante un conductor, los electrones fluyen para equilibrar la diferencia: se genera una corriente eléctrica.</p>
      </div>

      <details>
        <summary><strong>📚 Teoría base</strong> — átomos, conductores y aislantes</summary>
        <div class="theory">
          <h4>Conductores vs. aislantes</h4>
          <ul class="clean">
            <li>🟢 <strong>Conductores</strong>: tienen electrones libres en su última capa (ej.: cobre, aluminio, plata). La corriente fluye con poca resistencia.</li>
            <li>🔴 <strong>Aislantes</strong>: sus electrones están firmemente enlazados (ej.: vidrio, plástico, madera seca). Apenas dejan pasar corriente.</li>
            <li>🟡 <strong>Semiconductores</strong>: a medio camino (silicio, germanio). Su conductividad puede modularse, base de la electrónica.</li>
          </ul>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="2-fenomenos-electricos">2. Fenómenos eléctricos</h2>
      <p>El paso de una corriente por un conductor produce varios fenómenos visibles cuando se mantiene la diferencia de potencial cierto tiempo:</p>

      <ol>
        <li><strong>Efectos magnéticos</strong>: toda corriente eléctrica genera un <em>campo magnético</em> a su alrededor (base de los motores y electroimanes).</li>
        <li><strong>Efectos térmicos</strong> — <em>efecto Joule</em>: todo conductor por el que circula corriente <em>desprende calor</em>. Se aprovecha en estufas, planchas, fusibles.</li>
        <li><strong>Efectos químicos</strong> — <em>electrólisis</em>: la corriente puede separar los elementos de un compuesto (galvanizado, refinado del aluminio).</li>
        <li><strong>Efectos luminosos</strong>: al pasar por un gas (neón, xenón) o por un arco eléctrico, se emite luz.</li>
        <li><strong>Efectos biológicos</strong>: en los seres vivos, la corriente puede provocar quemaduras, contracciones musculares y electrocución según la intensidad y duración.</li>
      </ol>
    </section>

    <section class="panel panel--theory">
      <h2 id="3-magnitudes-electricas">3. Magnitudes eléctricas</h2>

      <h3>Intensidad de corriente eléctrica ($I$)</h3>
      <p>Mide el flujo de carga eléctrica que atraviesa la sección de un conductor por unidad de tiempo.</p>
      <p style="text-align:center; font-size:1.15em">$$I = \\dfrac{Q}{t}$$</p>
      <p>Unidad SI: <strong>amperio (A)</strong> = 1 culombio por segundo. Se mide con un <strong>amperímetro</strong> conectado en <em>serie</em>.</p>

      <h3>Diferencia de potencial o tensión ($V$)</h3>
      <p>Es el trabajo necesario para mover una carga de un punto a otro dentro de un campo eléctrico. Unidad: <strong>voltio (V)</strong>. Se mide con un <strong>voltímetro</strong> en <em>paralelo</em>.</p>

      <h3>Fuerza electromotriz ($\\varepsilon$)</h3>
      <p>Energía que el generador (pila, batería, dínamo) entrega a cada unidad de carga para que recorra el circuito completo. También se mide en <strong>voltios</strong>.</p>

      <h3>Resistencia eléctrica ($R$) y resistividad ($\\rho$)</h3>
      <p>La resistencia es la oposición al paso de la corriente. Se mide en <strong>ohmios</strong> ($\\Omega$). Cada material tiene una <strong>resistividad</strong> propia $\\rho$ (en $\\Omega\\cdot\\text{mm}^2/\\text{m}$).</p>
      <p style="text-align:center; font-size:1.15em">$$R = \\rho \\cdot \\dfrac{L}{S}$$</p>
      <p>donde $L$ es la longitud del conductor y $S$ su sección transversal. <em>A más largo, más resistencia. A más grueso, menos resistencia.</em></p>

      <h3>Capacidad de un condensador ($C$)</h3>
      <p>Un <strong>condensador</strong> almacena carga eléctrica entre dos armaduras separadas por un dieléctrico:</p>
      <p style="text-align:center; font-size:1.15em">$$C = \\dfrac{Q}{V}$$</p>
      <p>Unidad: <strong>faradio (F)</strong>. 1 F es la capacidad que almacena 1 C cuando entre sus armaduras hay 1 V.</p>

      <h3>Potencia eléctrica ($P$)</h3>
      <p>Energía consumida por unidad de tiempo:</p>
      <p style="text-align:center; font-size:1.15em">$$P = V \\cdot I$$</p>
      <p>Unidad: <strong>vatio (W)</strong>. Se mide con un <strong>vatímetro</strong> (combina amperímetro y voltímetro). Si $P > 0$ el elemento <em>absorbe</em> energía; si $P < 0$, la <em>cede</em> al sistema.</p>

      <h3>Energía eléctrica ($W$)</h3>
      <p>Trabajo que la corriente puede realizar. Depende de la potencia y del tiempo:</p>
      <p style="text-align:center; font-size:1.15em">$$W = P \\cdot t$$</p>
      <p>Unidad SI: <strong>julio (J)</strong>. En la factura de la luz se usa el <strong>kWh</strong> (1 kWh = 3,6·10⁶ J). Se mide con el <strong>contador eléctrico</strong>.</p>

      <details>
        <summary><strong>📚 Teoría base</strong> — analogía hidráulica</summary>
        <div class="theory">
          <p>Un circuito eléctrico es como un circuito de agua:</p>
          <ul class="clean">
            <li>💧 <strong>Tensión $V$</strong> ↔ presión / altura de la columna de agua.</li>
            <li>🌊 <strong>Intensidad $I$</strong> ↔ caudal (litros por segundo).</li>
            <li>🚧 <strong>Resistencia $R$</strong> ↔ estrechamiento de la tubería.</li>
            <li>🔋 <strong>Generador</strong> ↔ bomba que mantiene la presión.</li>
          </ul>
          <p>Más presión y menos estrechamiento ⇒ más caudal. Esa es, esencialmente, la ley de Ohm.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--theory">
      <h2 id="4-leyes-fundamentales">4. Leyes fundamentales</h2>

      <h3>Ley de Ohm</h3>
      <p>La intensidad que circula por un circuito es <em>directamente proporcional</em> a la tensión aplicada e <em>inversamente proporcional</em> a la resistencia:</p>
      <p style="text-align:center; font-size:1.25em">$$\\boxed{V = I \\cdot R}\\qquad I = \\dfrac{V}{R}\\qquad R = \\dfrac{V}{I}$$</p>

      <h3>Ley de Joule</h3>
      <p>El calor disipado por una resistencia es proporcional a la tensión, a la intensidad y al tiempo:</p>
      <p style="text-align:center; font-size:1.15em">$$Q = 0{,}24 \\cdot I \\cdot V \\cdot t \\quad\\text{(en calorías)}$$</p>
      <p>O bien $Q = I^2 \\cdot R \\cdot t$ en julios (J). El factor 0,24 convierte julios en calorías (1 J ≈ 0,24 cal).</p>

      <h3>Leyes de Kirchhoff</h3>
      <p>Antes de enunciarlas, definimos:</p>
      <ul class="clean">
        <li>🔵 <strong>Nudo</strong>: punto donde se conectan más de dos conductores.</li>
        <li>🟢 <strong>Rama</strong>: porción de circuito comprendida entre dos nudos.</li>
        <li>🟠 <strong>Malla</strong>: conjunto de ramas que forman un camino cerrado, partiendo y volviendo al mismo nudo sin pasar dos veces por el mismo.</li>
      </ul>
      <div class="theory">
        <h4>🥇 Primera ley (de los nudos)</h4>
        <p>En todo nudo, la suma de las corrientes que <em>llegan</em> es igual a la suma de las que <em>salen</em>:</p>
        <p style="text-align:center; font-size:1.1em">$$\\sum I_{\\text{entrantes}} = \\sum I_{\\text{salientes}}$$</p>
        <h4>🥈 Segunda ley (de las mallas)</h4>
        <p>En toda malla cerrada, la suma de las fuerzas electromotrices es igual a la suma de las caídas de tensión:</p>
        <p style="text-align:center; font-size:1.1em">$$\\sum \\varepsilon = \\sum I\\cdot R$$</p>
      </div>

      <h3>Ley de Ampère</h3>
      <p>El campo magnético $B$ creado por una corriente rectilínea es directamente proporcional a la intensidad $I$ e inversamente proporcional a la distancia $r$ al conductor:</p>
      <p style="text-align:center; font-size:1.15em">$$B = \\dfrac{\\mu_0 \\cdot I}{2\\pi r}$$</p>

      <h3>Ley de Lorentz</h3>
      <p>Una carga eléctrica $q$ que se mueve con velocidad $\\vec{v}$ dentro de un campo magnético $\\vec{B}$ experimenta una fuerza perpendicular al plano que ambos forman:</p>
      <p style="text-align:center; font-size:1.15em">$$F = q \\cdot v \\cdot B \\cdot \\sin\\theta$$</p>

      <h3>Ley de Laplace</h3>
      <p>Un conductor rectilíneo de longitud $L$ por el que circula una corriente $I$, situado en un campo magnético $\\vec{B}$, sufre una fuerza:</p>
      <p style="text-align:center; font-size:1.15em">$$F = I \\cdot L \\cdot B \\cdot \\sin\\theta$$</p>
      <p>Es la <strong>base de los motores eléctricos</strong>: la fuerza sobre los conductores del rotor produce un par de giro.</p>

      <h3>Ley de Faraday-Lenz</h3>
      <p>Cuando varía el flujo magnético que atraviesa un circuito se induce una <strong>fuerza electromotriz</strong> (fem) que tiende a oponerse al cambio que la origina:</p>
      <p style="text-align:center; font-size:1.15em">$$\\varepsilon = -\\dfrac{d\\Phi}{dt}$$</p>
      <p>Es la <strong>base de los generadores</strong>: al hacer girar una bobina dentro de un campo magnético se induce corriente.</p>
    </section>

    <section class="panel panel--theory">
      <h2 id="5-circuitos-cc">5. Circuitos de corriente continua</h2>
      <p>En un circuito de corriente continua (c.c.) la tensión y la intensidad mantienen un valor constante en el tiempo y la corriente fluye siempre en el mismo sentido. Es la corriente que entregan las pilas, las baterías y los dínamos.</p>

      <h3>Asociación de resistencias</h3>
      <div class="theory">
        <h4>🔗 En serie (una detrás de otra)</h4>
        <p>La intensidad es la misma por todas; las tensiones se suman.</p>
        <p style="text-align:center; font-size:1.1em">$$R_{\\text{eq}} = R_1 + R_2 + \\cdots + R_n$$</p>
        <h4>🪢 En paralelo (entre los mismos dos nudos)</h4>
        <p>La tensión es la misma; las intensidades se suman.</p>
        <p style="text-align:center; font-size:1.1em">$$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots + \\dfrac{1}{R_n}$$</p>
        <p>👉 En paralelo, $R_{\\text{eq}}$ siempre es <em>menor</em> que la menor de las resistencias.</p>
      </div>

      <h3>Generadores reales</h3>
      <p>Un generador real tiene una <strong>resistencia interna</strong> $r$. La tensión entre sus bornes cuando entrega corriente $I$ es:</p>
      <p style="text-align:center; font-size:1.1em">$$V_{\\text{bornes}} = \\varepsilon - I\\cdot r$$</p>
    </section>

    <section class="panel panel--interactive">
      <h2 id="calculadora-ohm-joule">🧪 Calculadora Ohm + Joule</h2>
      <p class="hint">Mueve los <em>sliders</em> de tensión y resistencia. Verás cómo cambian la intensidad ($V/R$), la potencia ($V\\cdot I$), la energía consumida en un tiempo y el calor desprendido por efecto Joule.</p>

      <div class="row" style="gap:18px; flex-wrap:wrap; align-items:flex-start">
        <div style="flex:1; min-width:260px">
          <div class="row">
            <div>
              <label>Tensión $V$ (V)</label>
              <input id="tu5-v" type="range" min="1" max="48" step="0.5" value="12" style="width:220px"/>
              <div style="margin-top:4px">$V$ = <strong id="tu5-v-val">12.0</strong> V</div>
            </div>
          </div>
          <div class="row" style="margin-top:8px">
            <div>
              <label>Resistencia $R$ ($\\Omega$)</label>
              <input id="tu5-r" type="range" min="1" max="100" step="0.5" value="6" style="width:220px"/>
              <div style="margin-top:4px">$R$ = <strong id="tu5-r-val">6.0</strong> Ω</div>
            </div>
          </div>
          <div class="row" style="margin-top:8px">
            <div>
              <label>Tiempo de funcionamiento $t$ (s)</label>
              <input id="tu5-t" type="range" min="1" max="3600" step="1" value="60" style="width:220px"/>
              <div style="margin-top:4px">$t$ = <strong id="tu5-t-val">60</strong> s</div>
            </div>
          </div>
          <div id="tu5-info" class="result info" style="margin-top:14px"></div>
          <div class="row" style="margin-top:10px; flex-wrap:wrap; gap:6px">
            <button class="btn" data-tu5-preset="12,6,60">Pila 12 V · 6 Ω · 1 min</button>
            <button class="btn" data-tu5-preset="230,100,3600">Bombilla 230 V · 100 Ω · 1 h</button>
            <button class="btn" data-tu5-preset="9,3,30">Pila 9 V · 3 Ω</button>
          </div>
        </div>
        <div style="flex:1; min-width:300px">
          <div id="tu5-svg"></div>
        </div>
      </div>

      <div class="theory" style="margin-top:14px">
        <h4>🎯 Lectura visual</h4>
        <ul class="clean">
          <li>🔋 <strong>Pila</strong>: aporta la tensión $V$.</li>
          <li>🟧 <strong>Resistencia</strong>: el valor $R$ controla cuánta corriente pasa.</li>
          <li>➡️ <strong>Flecha de corriente</strong>: su grosor crece con $I = V/R$.</li>
          <li>🔥 <strong>Calor</strong>: la potencia disipada por Joule es $P = V\\cdot I = V^2/R$.</li>
        </ul>
      </div>
    </section>

    <section class="panel panel--theory">
      <h2 id="6-maquinas-cc">6. Máquinas eléctricas rotativas de corriente continua</h2>
      <p>Son dispositivos diseñados para <strong>transformar energía</strong> entre los dominios eléctrico y mecánico mediante la interacción de circuitos eléctricos y magnéticos. Su funcionamiento es <strong>reversible</strong>:</p>
      <ul class="clean">
        <li>⚡ <strong>Generador (dínamo)</strong>: energía mecánica → eléctrica (aplica la <em>ley de Faraday-Lenz</em>).</li>
        <li>🔧 <strong>Motor</strong>: energía eléctrica → mecánica (aplica la <em>ley de Laplace</em>).</li>
      </ul>
      <p>Ofrecen un <strong>par elevado de arranque</strong> y un <strong>control preciso de la potencia</strong>, lo que las hizo indispensables en tracción eléctrica (tranvías, trenes convencionales, vehículos de obra).</p>

      <h3>Constitución</h3>
      <ul class="clean">
        <li>🟦 <strong>Estator</strong>: parte fija. Soporta el inductor y hace de carcasa.</li>
        <li>🌀 <strong>Rotor</strong>: parte giratoria, rodeada por el estator.</li>
        <li>🌫️ <strong>Entrehierro</strong>: espacio libre entre ambos. Debe ser muy reducido para no perder flujo magnético.</li>
      </ul>
      <p>Los circuitos eléctricos se llaman <strong>devanados</strong>. Pueden ser <strong>inductores</strong> (crean el campo magnético) o <strong>inducidos</strong> (donde se genera la fem si la máquina actúa como generador, o la <em>fuerza contraelectromotriz</em> si actúa como motor).</p>

      <h3>Componentes del inductor (estator)</h3>
      <ul class="clean">
        <li>🛡️ <strong>Culata o carcasa</strong>: hierro fundido o acero dulce; cierra el circuito magnético.</li>
        <li>🧲 <strong>Polos inductores</strong>: bobinas de cobre o aluminio enrolladas sobre núcleos de hierro. Crean el campo magnético con la mínima intensidad de excitación posible.</li>
      </ul>

      <h3>Componentes del inducido (rotor)</h3>
      <ul class="clean">
        <li>🔩 <strong>Núcleo</strong>: chapas metálicas aisladas montadas sobre un eje. Aloja las bobinas del inducido.</li>
        <li>🥁 <strong>Colector</strong>: cilindro de delgas de cobre, aisladas entre sí, una conectada a cada bobina.</li>
        <li>✏️ <strong>Escobillas</strong>: piezas de grafito que rozan el colector y conectan la parte móvil con el circuito exterior.</li>
      </ul>

      <h3>Características funcionales</h3>

      <div class="theory">
        <h4>📈 Fuerza contraelectromotriz (f.c.e.m.)</h4>
        <p>Al girar el rotor, sus conductores cortan las líneas del campo del inductor: por Faraday se induce una fem $E$ que se <em>opone</em> a la causa que la produjo (la corriente y la tensión aplicadas al motor):</p>
        <p style="text-align:center; font-size:1.15em">$$E = \\dfrac{2 \\cdot p \\cdot z \\cdot n \\cdot \\Phi_p}{2a \\cdot 60} = K \\cdot n \\cdot \\Phi_p$$</p>
        <ul class="clean">
          <li>$E$: f.c.e.m. entre escobillas (V).</li>
          <li>$2p$: número de polos de la máquina.</li>
          <li>$z$: número de conductores activos.</li>
          <li>$n$: velocidad de giro en r.p.m.</li>
          <li>$\\Phi_p$: flujo polar, en webers (Wb).</li>
          <li>$2a$: ramas en paralelo (depende del bobinado).</li>
        </ul>
      </div>

      <div class="theory">
        <h4>⚡ Intensidad por el inducido</h4>
        <p style="text-align:center; font-size:1.15em">$$I_i = \\dfrac{V_b - E - 2U_e}{R_i}$$</p>
        <ul class="clean">
          <li>$V_b$: tensión en los bornes del motor.</li>
          <li>$E$: f.c.e.m.</li>
          <li>$2U_e$: caída de tensión en las escobillas.</li>
          <li>$R_i$: resistencia interna del inducido.</li>
        </ul>
        <p>📌 <strong>En vacío</strong>: poca carga ⇒ alta velocidad ⇒ $E$ grande ⇒ $I_i$ pequeña.<br>
        <strong>Con carga</strong>: la velocidad baja ⇒ $E$ disminuye ⇒ $I_i$ y el par aumentan.</p>
      </div>

      <div class="theory">
        <h4>🚀 Intensidad de arranque</h4>
        <p>En el arranque, el rotor está parado: $E = 0$ y la intensidad absorbida es muy elevada:</p>
        <p style="text-align:center; font-size:1.15em">$$I_a = \\dfrac{V_b - 2U_e}{R_i}$$</p>
        <p>Para limitarla se intercala una resistencia adicional en serie con el inducido — el <strong>reostato de arranque</strong> $R_a$ — cuyo valor se va reduciendo a medida que el motor acelera.</p>
      </div>

      <div class="theory">
        <h4>🔧 Par motor (momento de rotación)</h4>
        <p style="text-align:center; font-size:1.15em">$$M = \\dfrac{P_u}{\\omega} = \\dfrac{P_u}{\\dfrac{2\\pi n}{60}}$$</p>
        <p>donde $P_u$ es la potencia útil y $\\omega = 2\\pi n / 60$ la velocidad angular en rad/s. Se mide en N·m.</p>
      </div>

      <div class="theory">
        <h4>📊 Potencia y rendimiento</h4>
        <p>Las máquinas tienen pérdidas, por lo que la potencia útil es menor que la absorbida:</p>
        <p style="text-align:center; font-size:1.05em">$$P_{\\text{útil}} = P_{\\text{ab}} - P_{\\text{Joule}} - (P_{\\text{hierro}} + P_{\\text{mec}})$$</p>
        <ul class="clean">
          <li>🔥 <strong>Pérdidas Joule</strong> ($P_j$): por la resistencia de los devanados y escobillas.</li>
          <li>🧲 <strong>Pérdidas en el hierro</strong> ($P_{\\text{fe}}$): histéresis y corrientes de Foucault.</li>
          <li>⚙️ <strong>Pérdidas mecánicas</strong> ($P_{\\text{mec}}$): rozamientos en cojinetes y ventilación.</li>
        </ul>
        <p>Se llama <strong>potencia electromagnética o interna</strong> a $P_e = E \\cdot I$. El <strong>rendimiento</strong> de la máquina es:</p>
        <p style="text-align:center; font-size:1.15em">$$\\eta = \\dfrac{P_{\\text{útil}}}{P_{\\text{absorbida}}}\\qquad\\eta_{\\text{el}} = \\dfrac{P_e}{P_{\\text{ab}}}$$</p>
      </div>
    </section>

    <section class="panel panel--theory">
      <h2 id="7-excitacion">7. Excitación de las máquinas eléctricas de c.c.</h2>
      <p>Llamamos <strong>excitación</strong> a la intensidad que circula por las bobinas del inductor para crear el campo magnético. Según cómo se conecten el inductor y el inducido, distinguimos cuatro tipos:</p>

      <div class="theory">
        <h4>1️⃣ Excitación independiente</h4>
        <p>Inductor e inducido tienen circuitos eléctricos <em>separados</em>, alimentados por fuentes distintas. Permite <strong>controlar de forma independiente</strong> el campo y la corriente del inducido. <em>La velocidad apenas cambia ante variaciones de carga</em>: ideal para cintas transportadoras y máquinas de control fino.</p>
      </div>

      <div class="theory">
        <h4>2️⃣ Excitación serie</h4>
        <p>El devanado inductor está <em>en serie</em> con el inducido, así que por ambos circula <strong>la misma corriente</strong>. Da un <em>par de arranque muy alto</em>: el motor ideal para tranvías, locomotoras y arranque en carga.</p>
      </div>

      <div class="theory">
        <h4>3️⃣ Excitación shunt (paralelo o derivación)</h4>
        <p>El inductor está <em>en paralelo</em> con el inducido. La intensidad absorbida se reparte entre los dos. La intensidad del inducido se regula con una resistencia variable $R_t$ en el circuito inductor, manteniendo el <strong>par motor casi constante</strong>. Se usa en taladros, ventiladores grandes y máquinas-herramienta.</p>
      </div>

      <div class="theory">
        <h4>4️⃣ Excitación compound</h4>
        <p>Combina las dos anteriores: parte del inductor en serie y parte en paralelo. Reúne lo mejor de ambos: <strong>alto par de arranque</strong> (como el serie) y <strong>marcha estable</strong> (como el shunt). Aplicaciones mixtas: ventiladores potentes, ascensores, prensas.</p>
      </div>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-1-resistencia-cable">📝 Actividad 1 — Resistencia de un cable</h2>
      <p>Calcula la resistencia de un cable de cobre de $L = 50$ m de longitud y $S = 1{,}5\\;\\text{mm}^2$ de sección. Resistividad del cobre: $\\rho = 0{,}017\\;\\Omega\\cdot\\text{mm}^2/\\text{m}$.</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Paso 1 — Aplicar la fórmula</h4>
          <p>$R = \\rho\\cdot \\dfrac{L}{S} = 0{,}017 \\cdot \\dfrac{50}{1{,}5}$</p>
          <h4>Paso 2 — Calcular</h4>
          <p>$R = 0{,}017 \\cdot 33{,}33 = \\boxed{0{,}567\\;\\Omega}$</p>
          <h4>Comentario</h4>
          <p>Una resistencia muy pequeña: de ahí que el cobre sea el material habitual en el cableado eléctrico.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-2-joule-radiador">📝 Actividad 2 — Calor disipado por un radiador</h2>
      <p>Un radiador eléctrico de $R = 50\\;\\Omega$ se conecta a $V = 230$ V durante $t = 30$ minutos. Calcula la intensidad, la potencia y el calor desprendido (en julios y en kcal).</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>Intensidad (Ohm)</h4>
          <p>$I = V/R = 230/50 = 4{,}6$ A</p>
          <h4>Potencia</h4>
          <p>$P = V\\cdot I = 230 \\cdot 4{,}6 = 1\\,058$ W ≈ <strong>1,06 kW</strong></p>
          <h4>Tiempo en segundos</h4>
          <p>$t = 30\\cdot 60 = 1\\,800$ s</p>
          <h4>Calor (Joule)</h4>
          <p>$Q = P\\cdot t = 1\\,058 \\cdot 1\\,800 \\approx \\boxed{1{,}9\\cdot 10^6\\;\\text{J}}$</p>
          <p>En calorías: $Q = 0{,}24 \\cdot V\\cdot I\\cdot t = 0{,}24 \\cdot 230 \\cdot 4{,}6 \\cdot 1\\,800 \\approx 457\\,000$ cal $\\approx \\boxed{457\\;\\text{kcal}}$.</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-3-kirchhoff">📝 Actividad 3 — Aplicar Kirchhoff a un nudo</h2>
      <p>En un nudo de un circuito entran las corrientes $I_1 = 3$ A e $I_2 = 2{,}5$ A, y salen $I_3$ e $I_4$. Si se sabe que $I_4 = 1{,}8$ A, ¿cuánto vale $I_3$?</p>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>1ª ley de Kirchhoff</h4>
          <p>Lo que entra es igual a lo que sale:</p>
          <p>$I_1 + I_2 = I_3 + I_4$</p>
          <h4>Despejar $I_3$</h4>
          <p>$I_3 = (I_1 + I_2) - I_4 = (3 + 2{,}5) - 1{,}8 = \\boxed{3{,}7\\;\\text{A}}$</p>
        </div>
      </details>
    </section>

    <section class="panel panel--exercise">
      <h2 id="actividad-4-motor-cc">📝 Actividad 4 — Motor de c.c.</h2>
      <p>Un motor de c.c. tiene tensión en bornes $V_b = 220$ V, fcem $E = 200$ V, resistencia del inducido $R_i = 0{,}5\\;\\Omega$ y caída en escobillas $2U_e = 2$ V. Calcula:</p>
      <ol>
        <li>La intensidad del inducido en régimen normal.</li>
        <li>La intensidad de arranque (sin reostato).</li>
        <li>La potencia electromagnética interna.</li>
      </ol>

      <details>
        <summary><strong>Solución paso a paso</strong></summary>
        <div class="theory">
          <h4>1) Intensidad del inducido</h4>
          <p>$I_i = \\dfrac{V_b - E - 2U_e}{R_i} = \\dfrac{220 - 200 - 2}{0{,}5} = \\dfrac{18}{0{,}5} = \\boxed{36\\;\\text{A}}$</p>
          <h4>2) Intensidad de arranque ($E=0$)</h4>
          <p>$I_a = \\dfrac{V_b - 2U_e}{R_i} = \\dfrac{220 - 2}{0{,}5} = \\boxed{436\\;\\text{A}}$</p>
          <p>📌 <strong>12 veces mayor</strong> que la intensidad nominal: por eso es imprescindible un reostato de arranque.</p>
          <h4>3) Potencia electromagnética</h4>
          <p>$P_e = E\\cdot I_i = 200 \\cdot 36 = \\boxed{7\\,200\\;\\text{W}} = 7{,}2$ kW</p>
        </div>
      </details>
    </section>

    <section class="panel panel--reference">
      <h2 id="chuleta">📋 Chuleta de fórmulas</h2>
      <div class="theory">
        <h4>Magnitudes</h4>
        <ul class="clean">
          <li>Intensidad: $I = Q/t$ &nbsp;[A]</li>
          <li>Resistencia: $R = \\rho\\cdot L/S$ &nbsp;[Ω]</li>
          <li>Capacidad: $C = Q/V$ &nbsp;[F]</li>
          <li>Potencia: $P = V\\cdot I$ &nbsp;[W]</li>
          <li>Energía: $W = P\\cdot t$ &nbsp;[J]</li>
        </ul>
        <h4>Leyes</h4>
        <ul class="clean">
          <li><strong>Ohm</strong>: $V = I\\cdot R$</li>
          <li><strong>Joule</strong>: $Q = 0{,}24\\cdot I\\cdot V\\cdot t$ (cal); $Q = I^2 R\\,t$ (J)</li>
          <li><strong>Kirchhoff 1</strong>: $\\sum I_{\\text{entran}} = \\sum I_{\\text{salen}}$</li>
          <li><strong>Kirchhoff 2</strong>: $\\sum \\varepsilon = \\sum I\\cdot R$</li>
          <li><strong>Lorentz</strong>: $F = q\\cdot v\\cdot B\\cdot \\sin\\theta$</li>
          <li><strong>Laplace</strong>: $F = I\\cdot L\\cdot B\\cdot \\sin\\theta$</li>
          <li><strong>Faraday-Lenz</strong>: $\\varepsilon = -d\\Phi/dt$</li>
        </ul>
        <h4>Asociación de resistencias</h4>
        <ul class="clean">
          <li>Serie: $R_{\\text{eq}} = \\sum R_i$</li>
          <li>Paralelo: $1/R_{\\text{eq}} = \\sum 1/R_i$</li>
        </ul>
        <h4>Máquinas de c.c.</h4>
        <ul class="clean">
          <li>f.c.e.m.: $E = K\\cdot n \\cdot \\Phi_p$</li>
          <li>Intensidad de inducido: $I_i = (V_b - E - 2U_e)/R_i$</li>
          <li>Intensidad de arranque ($E=0$): $I_a = (V_b - 2U_e)/R_i$</li>
          <li>Par motor: $M = P_u/\\omega = P_u/(2\\pi n/60)$</li>
          <li>Potencia interna: $P_e = E\\cdot I$</li>
          <li>Rendimiento: $\\eta = P_{\\text{útil}}/P_{\\text{absorbida}}$</li>
        </ul>
        <h4>Tipos de excitación</h4>
        <ul class="clean">
          <li><strong>Independiente</strong>: control fino (cintas transportadoras).</li>
          <li><strong>Serie</strong>: par alto (tracción, tranvías).</li>
          <li><strong>Shunt</strong>: par fijo (taladros, ventiladores).</li>
          <li><strong>Compound</strong>: combinación (ascensores, prensas).</li>
        </ul>
      </div>
    </section>
  `;

  // -- Calculadora interactiva Ohm + Joule --
  const $ = id => document.getElementById(id);
  const vIn = $('tu5-v'), rIn = $('tu5-r'), tIn = $('tu5-t');
  const vLab = $('tu5-v-val'), rLab = $('tu5-r-val'), tLab = $('tu5-t-val');
  const info = $('tu5-info'), svgBox = $('tu5-svg');

  const fmt = (x, d = 2) => Number.isFinite(x) ? (+x).toFixed(d) : '∞';

  const drawCircuit = (V, R, I, P) => {
    const W = 360, H = 220;
    // grosor proporcional a I (mapeo log-ish)
    const thick = Math.min(12, 1 + Math.log10(1 + I) * 6);
    const heat = Math.min(1, P / 2500);
    const heatColor = `rgba(255,${Math.round(180 - 120 * heat)},0,${0.4 + 0.5 * heat})`;
    svgBox.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:340px; display:block; margin:0 auto;
        background:#fafaf6; border:1px solid #e4ddd0; border-radius:12px">
        <!-- cables -->
        <path d="M 60 60 L 300 60 L 300 160 L 60 160 Z" fill="none" stroke="#1a1a1d" stroke-width="${thick.toFixed(1)}" stroke-linejoin="round"/>
        <!-- pila izquierda -->
        <line x1="60" y1="80" x2="60" y2="100" stroke="#1a1a1d" stroke-width="3"/>
        <line x1="50" y1="100" x2="70" y2="100" stroke="#1a1a1d" stroke-width="3"/>
        <line x1="55" y1="115" x2="65" y2="115" stroke="#1a1a1d" stroke-width="2"/>
        <line x1="60" y1="115" x2="60" y2="140" stroke="#1a1a1d" stroke-width="3"/>
        <text x="38" y="115" font-size="12" fill="#1f3a8a" text-anchor="end" font-weight="700">+</text>
        <text x="38" y="128" font-size="12" fill="#1f3a8a" text-anchor="end">−</text>
        <text x="40" y="60" font-size="12" fill="#1f3a8a" font-weight="600">${V.toFixed(1)} V</text>
        <!-- resistencia (zigzag) en el lado derecho -->
        <g transform="translate(286,90)">
          <path d="M 0 0 L 6 -8 L 18 8 L 30 -8 L 42 8 L 54 -8 L 60 0" fill="none" stroke="${heatColor}" stroke-width="4"/>
          <rect x="-2" y="-12" width="64" height="24" fill="none"/>
        </g>
        <text x="316" y="76" font-size="12" fill="#b91c1c" font-weight="600">${R.toFixed(1)} Ω</text>
        <!-- flecha de corriente arriba -->
        <line x1="120" y1="50" x2="220" y2="50" stroke="#16a34a" stroke-width="3" marker-end="url(#a-tu5)"/>
        <text x="170" y="42" font-size="13" fill="#15803d" text-anchor="middle" font-weight="700">I = ${fmt(I, 2)} A</text>
        <!-- calor -->
        <text x="316" y="180" font-size="11" fill="#b45309" text-anchor="middle">🔥 ${P.toFixed(1)} W</text>
        <defs>
          <marker id="a-tu5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
          </marker>
        </defs>
      </svg>
    `;
  };

  const update = async () => {
    const V = +vIn.value, R = +rIn.value, t = +tIn.value;
    vLab.textContent = V.toFixed(1);
    rLab.textContent = R.toFixed(1);
    tLab.textContent = t;
    const I = V / R;
    const P = V * I;
    const Wj = P * t;        // julios
    const cal = 0.24 * V * I * t;
    drawCircuit(V, R, I, P);
    info.innerHTML = `
      $I = V/R = ${V.toFixed(1)}/${R.toFixed(1)} = \\boxed{${fmt(I, 3)}\\,\\text{A}}$<br>
      $P = V\\cdot I = ${V.toFixed(1)}\\cdot ${fmt(I, 2)} = \\boxed{${fmt(P, 2)}\\,\\text{W}}$<br>
      $W = P\\cdot t = ${fmt(P, 2)}\\cdot ${t} = \\boxed{${fmt(Wj, 0)}\\,\\text{J}}$<br>
      $Q = 0{,}24\\cdot V\\cdot I\\cdot t = \\boxed{${fmt(cal, 0)}\\,\\text{cal}}$
    `;
    await typeset(info);
  };

  vIn.addEventListener('input', update);
  rIn.addEventListener('input', update);
  tIn.addEventListener('input', update);
  document.querySelectorAll('[data-tu5-preset]').forEach(b => {
    b.addEventListener('click', () => {
      const [V, R, t] = b.dataset.tu5Preset.split(',').map(Number);
      vIn.value = V; rIn.value = R; tIn.value = t;
      update();
    });
  });
  await update();
}
