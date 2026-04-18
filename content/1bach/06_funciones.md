# TEMA 6. FUNCIONES. CÓNICAS

## 6.1. Concepto de función

### 6.1.1. Definición

Una **función** f de un conjunto A en otro B es una regla que a cada x ∈ A le asocia un único y ∈ B, denotado y = f(x).
- A: **dominio** (Dom(f)).
- B: **conjunto final**.
- **Imagen** o **recorrido** (Im(f) o Rang(f)): {f(x) : x ∈ Dom(f)}.

### 6.1.2. Variable independiente y dependiente

x es la variable independiente, y = f(x) es la dependiente.

### 6.1.3. Gráfica

Graf(f) = {(x, f(x)) : x ∈ Dom(f)} ⊂ ℝ².
Una curva es gráfica de una función si y sólo si toda recta vertical la corta, como mucho, en un punto.

## 6.2. Cálculo del dominio

**Reglas habituales**:

| Tipo | Restricción |
|------|-------------|
| Polinómica | Dom = ℝ |
| Racional P(x)/Q(x) | Q(x) ≠ 0 |
| Raíz par ⁿ√P(x) | P(x) ≥ 0 |
| Raíz impar | Dom = Dom(P) |
| Logarítmica log P(x) | P(x) > 0 |
| Exponencial aᴾ⁽ˣ⁾ | Dom = Dom(P) |
| Trigonométrica tan x | x ≠ π/2 + kπ |
| Combinadas | intersección de dominios |

**Ejemplo**: f(x) = √(x − 1)/(x² − 4).
- x − 1 ≥ 0 ⇒ x ≥ 1.
- x² − 4 ≠ 0 ⇒ x ≠ ±2.
- Combinado: [1, 2) ∪ (2, +∞).

## 6.3. Propiedades deducibles de la gráfica

### 6.3.1. Puntos de corte con los ejes

- Con OY: f(0).
- Con OX: resolver f(x) = 0.

### 6.3.2. Signo de la función

Se estudia con las raíces de f y los puntos donde no está definida, partiendo la recta real en intervalos.

### 6.3.3. Simetrías

- **Par** (simétrica respecto OY): f(−x) = f(x). Ejemplo: f(x) = x².
- **Impar** (simétrica respecto al origen): f(−x) = −f(x). Ejemplo: f(x) = x³.

### 6.3.4. Periodicidad

f es periódica de periodo T si f(x + T) = f(x) para todo x del dominio. Ej: sen x (T = 2π).

### 6.3.5. Monotonía

- **Creciente** en I: ∀x₁, x₂ ∈ I, x₁ < x₂ ⇒ f(x₁) ≤ f(x₂).
- **Estrictamente creciente**: con "<".
- **Decreciente**: análogo con ≥ o >.

### 6.3.6. Extremos

- **Máximo absoluto** en x₀: f(x₀) ≥ f(x) para todo x.
- **Mínimo absoluto**: f(x₀) ≤ f(x) para todo x.
- **Extremos relativos** (o locales): desigualdades se cumplen en un entorno.

### 6.3.7. Concavidad/convexidad

- **Cóncava hacia arriba** (convexa): la gráfica queda por encima de sus tangentes. f''(x) > 0 (si derivable dos veces).
- **Cóncava hacia abajo**: gráfica bajo sus tangentes. f''(x) < 0.
- **Punto de inflexión**: cambia la concavidad.

### 6.3.8. Asíntotas

- **Vertical** x = a:  lim_{x→a} f(x) = ±∞.
- **Horizontal** y = L:  lim_{x→±∞} f(x) = L.
- **Oblicua** y = mx + n:
  m = lim_{x→±∞} f(x)/x (finito no nulo),
  n = lim_{x→±∞} [f(x) − mx].

### 6.3.9. Acotación

- Acotada superiormente: existe K tal que f(x) ≤ K ∀x.
- Acotada inferiormente: f(x) ≥ K.
- Acotada: ambas a la vez.

## 6.4. Operaciones con funciones

- (f + g)(x) = f(x) + g(x).
- (f − g)(x) = f(x) − g(x).
- (f · g)(x) = f(x) · g(x).
- (f/g)(x) = f(x)/g(x),  g(x) ≠ 0.

### 6.4.1. Composición

(f ∘ g)(x) = f(g(x)).  Dominio: {x ∈ Dom(g) : g(x) ∈ Dom(f)}.

**Propiedades**:
- No es conmutativa: f ∘ g ≠ g ∘ f en general.
- Asociativa: (f ∘ g) ∘ h = f ∘ (g ∘ h).

### 6.4.2. Función inversa

Si f es inyectiva, existe f⁻¹ tal que f ∘ f⁻¹ = f⁻¹ ∘ f = id.

**Cómo calcularla**:
1. Escribir y = f(x).
2. Intercambiar x e y.
3. Despejar y.

**Propiedad**: Las gráficas de f y f⁻¹ son simétricas respecto a la recta y = x.

**Ejemplo**: f(x) = 2x + 3. y = 2x + 3 → x = 2y + 3 → y = (x − 3)/2. Luego f⁻¹(x) = (x − 3)/2.

## 6.5. Transformaciones de funciones

Sea y = f(x).

| Transformación | Efecto |
|----------------|--------|
| f(x) + k | desplazamiento vertical +k |
| f(x + k) | desplazamiento horizontal −k |
| −f(x) | reflexión respecto al eje OX |
| f(−x) | reflexión respecto al eje OY |
| k·f(x) (k > 1) | dilatación vertical |
| k·f(x) (0 < k < 1) | contracción vertical |
| f(kx) (k > 1) | contracción horizontal |
| f(kx) (0 < k < 1) | dilatación horizontal |
| |f(x)| | la parte negativa se refleja hacia arriba |
| f(|x|) | la gráfica de x ≥ 0 se refleja al lado izquierdo |

## 6.6. Tipos de funciones elementales

### 6.6.1. Función constante

f(x) = k. Gráfica: recta horizontal. Dom ℝ, Im {k}.

### 6.6.2. Función afín

f(x) = mx + n.
- Pendiente m.
- Ordenada en el origen n.
- Gráfica: recta.

### 6.6.3. Función cuadrática

f(x) = ax² + bx + c, a ≠ 0.
- Gráfica: parábola.
- Vértice: x_v = −b/(2a),  y_v = f(x_v).
- Eje: x = x_v.
- Concavidad: abre hacia arriba si a > 0, hacia abajo si a < 0.
- Corta OY en (0, c); corta OX donde ax² + bx + c = 0.

### 6.6.4. Función polinómica

f(x) = aₙxⁿ + … + a₀. Características: Dom = ℝ, su gráfica es una curva suave sin asíntotas verticales.

### 6.6.5. Función racional

f(x) = P(x)/Q(x). Pueden tener asíntotas verticales (en ceros de Q no compartidos con P) y horizontales/oblicuas (según grados).

- Si grado(P) < grado(Q): asíntota horizontal y = 0.
- Si grado(P) = grado(Q): asíntota horizontal y = aₙ/bₙ.
- Si grado(P) = grado(Q) + 1: asíntota oblicua (cociente de la división).
- Si grado(P) > grado(Q) + 1: no hay asíntota horizontal ni oblicua.

### 6.6.6. Función a trozos (definida por partes)

f(x) = { f₁(x) si x ∈ I₁; f₂(x) si x ∈ I₂; … }.

Ejemplo clásico:
- Valor absoluto: |x| = x si x ≥ 0, −x si x < 0.
- Signo: sgn(x) = 1 si x > 0; 0 si x = 0; −1 si x < 0.
- Parte entera ⌊x⌋: mayor entero ≤ x.

### 6.6.7. Funciones irracionales

Involucran raíces. Ejemplo: f(x) = √x, Dom = [0, +∞).

### 6.6.8. Exponencial y logarítmica

Se tratan a fondo en el Tema 7.

### 6.6.9. Trigonométricas

- sen x, cos x: Dom = ℝ, Im = [−1, 1], periodo 2π.
- tan x: Dom = ℝ \ {π/2 + kπ}, Im = ℝ, periodo π.
- Asíntotas verticales de tan x en π/2 + kπ.

## 6.7. Cónicas

Las **cónicas** son las curvas obtenidas al cortar un cono por un plano. Según la inclinación del plano:
- Circunferencia (plano perpendicular al eje).
- Elipse (plano inclinado que no corta la base).
- Parábola (plano paralelo a una generatriz).
- Hipérbola (plano cortando ambos mantos).

### 6.7.1. Circunferencia

**Definición**: lugar geométrico de los puntos del plano equidistantes de un punto fijo (centro).

**Ecuación canónica**: (x − a)² + (y − b)² = r², centro (a, b), radio r.

**Ecuación general**: x² + y² + Dx + Ey + F = 0. El centro es (−D/2, −E/2) y el radio
r = √(D²/4 + E²/4 − F) (real si D²/4 + E²/4 − F > 0).

### 6.7.2. Elipse

**Definición**: lugar geométrico de los puntos cuya suma de distancias a dos puntos fijos (focos F₁, F₂) es constante (2a).

**Ecuación canónica** (centrada en el origen, eje mayor OX):
  x²/a² + y²/b² = 1,  con a > b > 0.
- Semieje mayor a (sobre OX), semieje menor b (sobre OY).
- Focos: (±c, 0), con c² = a² − b².
- Excentricidad: e = c/a (0 < e < 1).
- Directrices: x = ±a/e.

Si el eje mayor está sobre OY, se invierten papeles y a > b se asocia al eje OY.

### 6.7.3. Hipérbola

**Definición**: diferencia (en valor absoluto) de distancias a dos focos constante (2a).

**Ecuación canónica** (eje focal OX):
  x²/a² − y²/b² = 1.
- Focos: (±c, 0), con c² = a² + b².
- Vértices: (±a, 0).
- Asíntotas: y = ±(b/a)x.
- Excentricidad: e = c/a > 1.

**Hipérbola equilátera**: a = b. Asíntotas perpendiculares. Caso particular: xy = k (giro 45°).

### 6.7.4. Parábola

**Definición**: lugar geométrico de los puntos equidistantes de un punto fijo (foco F) y una recta fija (directriz).

**Ecuación canónica** con eje OX y vértice en el origen:
  y² = 4px,  con p = distancia foco-vértice = distancia vértice-directriz.
- Foco: (p, 0).
- Directriz: x = −p.

Si el eje es OY: x² = 4py.

**Parábola como función**: y = ax² + bx + c corresponde a una parábola con eje vertical.

## 6.8. Ejemplos resueltos

**Ejemplo 1**. Estudia la función f(x) = x/(x² − 1).
- Dom: ℝ \ {±1}.
- Simetría: f(−x) = −x/(x² − 1) = −f(x). Impar.
- Cortes con ejes: f(0) = 0. Raíz: x = 0.
- Asíntotas verticales: x = 1, x = −1.
- Asíntotas horizontales: lim_{x→±∞} f(x) = 0. Asíntota horizontal y = 0.

**Ejemplo 2**. Halla la ecuación de la circunferencia con centro (3, −1) y radio 4.
(x − 3)² + (y + 1)² = 16.
Expandiendo: x² + y² − 6x + 2y − 6 = 0.

**Ejemplo 3**. Identifica la cónica 9x² + 4y² − 36 = 0.
Dividiendo por 36: x²/4 + y²/9 = 1. Elipse con a = 3 (eje mayor OY) y b = 2.

**Ejemplo 4**. Dada f(x) = 2x − 3 y g(x) = x² + 1, calcula f∘g y g∘f.
(f∘g)(x) = f(x² + 1) = 2(x² + 1) − 3 = 2x² − 1.
(g∘f)(x) = g(2x − 3) = (2x − 3)² + 1 = 4x² − 12x + 10.

**Ejemplo 5**. Halla la inversa de f(x) = (3x − 2)/(x + 1).
y = (3x − 2)/(x + 1) ⇒ y(x + 1) = 3x − 2 ⇒ yx + y = 3x − 2 ⇒ x(y − 3) = −2 − y.
x = (−2 − y)/(y − 3) = (y + 2)/(3 − y).
f⁻¹(x) = (x + 2)/(3 − x).

## 6.9. Ejercicios propuestos

1. Halla el dominio de: a) f(x) = log(x² − 4), b) g(x) = √((x − 1)/(x + 2)), c) h(x) = 1/sen x.
2. Estudia simetría y periodicidad de f(x) = x²·cos x.
3. Halla las asíntotas de f(x) = (x² − 1)/(x − 2).
4. Representa y = |x² − 4| a partir de y = x² − 4.
5. Halla la inversa de f(x) = eˣ⁺¹.
6. Compón: f(x) = √x, g(x) = 3x − 1, h(x) = 1/x. Calcula f∘g∘h.
7. Determina centro y radio: x² + y² − 4x + 6y − 12 = 0.
8. Clasifica 16x² − 25y² − 400 = 0. Halla focos y asíntotas.
9. Encuentra la ecuación de la parábola con foco F(0, 2) y directriz y = −2.
10. Dibuja la región {(x,y): x² + y² ≤ 4, y ≥ x}.

### Pistas

- **1a**: x² − 4 > 0 ⇒ x ∈ (−∞, −2) ∪ (2, +∞).
- **7**: (x − 2)² + (y + 3)² = 25, C(2,−3), r = 5.
- **8**: x²/25 − y²/16 = 1. Hipérbola. c² = 41, focos (±√41, 0). Asíntotas y = ±(4/5)x.
- **9**: Eje OY, vértice (0,0), p = 2. x² = 8y.
