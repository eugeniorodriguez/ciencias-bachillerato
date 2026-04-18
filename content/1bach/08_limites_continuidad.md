# TEMA 8. LÍMITES Y CONTINUIDAD

## 8.1. Idea intuitiva de límite

Decir que lim_{x→a} f(x) = L significa que los valores f(x) se aproximan cuanto queramos a L cuando x se aproxima a a (por cualquiera de los dos lados), sin necesidad de que x alcance a ni de que a pertenezca al dominio.

**Definición formal** (ε – δ):
lim_{x→a} f(x) = L  ⇔  ∀ε > 0  ∃δ > 0 : 0 < |x − a| < δ ⇒ |f(x) − L| < ε.

### 8.1.1. Límites laterales

- lim_{x→a⁻} f(x): aproximación por la izquierda.
- lim_{x→a⁺} f(x): aproximación por la derecha.

**Teorema**: lim_{x→a} f(x) = L  ⇔  lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = L.

Si los laterales existen pero son distintos, el límite no existe.

### 8.1.2. Unicidad

Si el límite existe, es único.

## 8.2. Límites infinitos. Asíntotas

### 8.2.1. Asíntota vertical

lim_{x→a} f(x) = ±∞. La recta x = a es asíntota vertical.
Suelen aparecer donde se anula un denominador o argumento de logaritmo.

### 8.2.2. Límites en el infinito

- lim_{x→+∞} f(x) = L: asíntota horizontal y = L por la derecha.
- lim_{x→−∞} f(x) = L: análogo por la izquierda.

### 8.2.3. Ramas infinitas y asíntotas oblicuas

Si lim_{x→±∞} f(x) = ±∞, hay rama infinita.
La recta y = mx + n es asíntota oblicua si:
- m = lim_{x→±∞} f(x)/x (finito, no nulo).
- n = lim_{x→±∞} [f(x) − mx].

Si m = 0, la asíntota es horizontal; si m = ±∞, hay rama parabólica.

**Nota**: una función no puede tener a la vez asíntota horizontal y oblicua por el mismo lado (±∞).

## 8.3. Propiedades algebraicas de los límites

Si existen lim_{x→a} f(x) = L y lim_{x→a} g(x) = M:

- lim (f ± g) = L ± M.
- lim (f · g) = L · M.
- lim (k·f) = k·L.
- lim (f/g) = L/M si M ≠ 0.
- lim (fᵍ) = Lᴹ si tiene sentido.
- lim (ⁿ√f) = ⁿ√L (con restricciones usuales).
- lim [log_a f(x)] = log_a L si L > 0.
- Composición: si f es continua en L y lim g = L, entonces lim f(g(x)) = f(L).

## 8.4. Indeterminaciones

Siete tipos habituales:
**0/0,  ∞/∞,  ∞ − ∞,  0·∞,  1^∞,  0⁰,  ∞⁰**.

### 8.4.1. Indeterminación ∞/∞ (polinomios y funciones racionales)

Se comparan los grados del numerador y denominador:
- Si grado(P) > grado(Q): ±∞.
- Si grado(P) < grado(Q): 0.
- Si iguales: cociente de coeficientes líderes.

**Ejemplo**: lim_{x→∞} (3x² + 1)/(5x² − x) = 3/5.

### 8.4.2. Indeterminación ∞ − ∞

Dos técnicas:
- Si hay raíces cuadradas: multiplicar y dividir por el conjugado.
- Si hay fracciones: reducir a común denominador.

**Ejemplo**:
lim_{x→∞} [√(x² + x) − x] = lim (x² + x − x²)/(√(x² + x) + x) = lim x/(√(x² + x) + x) = 1/2.

### 8.4.3. Indeterminación 0/0 en funciones racionales

Se factorizan numerador y denominador y se simplifica el factor común.

**Ejemplo**:
lim_{x→2} (x² − 4)/(x² − 5x + 6) = lim (x + 2)(x − 2)/[(x − 2)(x − 3)] = lim (x + 2)/(x − 3) = 4/(−1) = −4.

### 8.4.4. Indeterminación 0/0 con raíces

Multiplicar por el conjugado.

**Ejemplo**:
lim_{x→0} (√(1 + x) − 1)/x = lim [(1 + x) − 1]/[x(√(1 + x) + 1)] = lim 1/(√(1 + x) + 1) = 1/2.

### 8.4.5. Indeterminación 1^∞

Fórmula del número e:
lim (1 + 1/u)ᵘ = e  (u → ∞).

Regla práctica: si lim f(x) = 1 y lim g(x) = ∞, entonces
  lim f(x)^{g(x)} = e^{lim g(x)·[f(x) − 1]}.

**Ejemplo**:
lim_{x→∞} (1 + 2/x)^{3x} = e^{lim 3x·2/x} = e⁶.

### 8.4.6. Indeterminaciones 0⁰, ∞⁰

Se toma logaritmo:
lim f(x)^{g(x)} = e^{lim g(x)·ln f(x)}.
El nuevo límite suele ser 0·∞ o ∞·0, que se transforma en 0/0 o ∞/∞.

### 8.4.7. Infinitésimos e infinitos equivalentes

Cuando x → 0:
- sen x ~ x
- tan x ~ x
- 1 − cos x ~ x²/2
- eˣ − 1 ~ x
- ln(1 + x) ~ x
- (1 + x)ᵏ − 1 ~ kx

Pueden sustituirse entre sí en productos y cocientes de límites (no en sumas y restas directamente).

**Ejemplo**:
lim_{x→0} sen(3x)/tan(5x) = lim 3x/5x = 3/5.

## 8.5. Límites de funciones concretas

### 8.5.1. Polinomios

lim_{x→±∞} P(x) = signo del coeficiente líder × ∞.
lim_{x→a} P(x) = P(a).

### 8.5.2. Racionales

En a ∉ raíces del denominador: lim = P(a)/Q(a).
En raíces del denominador: estudiar laterales (asíntota).

### 8.5.3. Exponenciales y logarítmicas

- lim_{x→+∞} aˣ = +∞ si a > 1; 0 si 0 < a < 1.
- lim_{x→−∞} aˣ = 0 si a > 1; +∞ si 0 < a < 1.
- lim_{x→0⁺} log_a x = −∞ si a > 1; +∞ si 0 < a < 1.
- lim_{x→+∞} log_a x = +∞ si a > 1; −∞ si 0 < a < 1.

### 8.5.4. Orden de crecimiento en ∞

Para cualquier k > 0, b > 1:
(log x)^k ≪ xⁿ ≪ bˣ ≪ x!.

Por ejemplo: lim_{x→∞} xⁿ/eˣ = 0 para cualquier n fijo.

## 8.6. Continuidad de una función

### 8.6.1. Definición

f es continua en x = a si:
1. f(a) existe.
2. lim_{x→a} f(x) existe.
3. lim_{x→a} f(x) = f(a).

Si falla alguna de las tres, hay **discontinuidad** en a.

### 8.6.2. Tipos de discontinuidad

- **Evitable**: existe el límite pero no coincide con f(a), o f(a) no está definido pero existe lim. Se "arregla" redefiniendo f(a).
- **De salto finito**: laterales existen y son finitos, pero distintos. Salto = |lim⁺ − lim⁻|.
- **De salto infinito (asintótica)**: algún lateral es infinito.
- **Esencial o de 2ª especie**: algún lateral no existe.

### 8.6.3. Continuidad en un intervalo

f es continua en [a, b] si es continua en cada x ∈ (a, b) y los límites laterales en los extremos coinciden con f(a) y f(b).

### 8.6.4. Propiedades

- La suma, producto, cociente (con denominador no nulo) y composición de funciones continuas son continuas.
- Las polinómicas son continuas en ℝ.
- Las racionales son continuas fuera de las raíces del denominador.
- Las trigonométricas básicas, la exponencial y (sobre su dominio) el logaritmo son continuas.
- Las funciones a trozos son continuas en los puntos de cambio si los laterales coinciden y valen lo mismo que f(a).

## 8.7. Teoremas fundamentales de funciones continuas

### 8.7.1. Teorema de Bolzano

Si f es continua en [a, b] y f(a)·f(b) < 0, entonces existe al menos un c ∈ (a, b) con f(c) = 0.

**Aplicación práctica**: localizar raíces. Permite el método de bisección.

### 8.7.2. Teorema de los valores intermedios (Darboux)

Si f es continua en [a, b], toma todos los valores comprendidos entre f(a) y f(b).

### 8.7.3. Teorema de Weierstrass

Si f es continua en [a, b] (cerrado y acotado), entonces f alcanza su máximo y su mínimo absolutos en [a, b].

## 8.8. Ejemplos resueltos

**Ejemplo 1**. lim_{x→3} (x² − 9)/(x − 3).
0/0. Factorizamos: (x − 3)(x + 3)/(x − 3) = x + 3 → 6.

**Ejemplo 2**. lim_{x→∞} (x³ − 2x + 5)/(4x³ + x²).
Grados iguales; razón de líderes = 1/4.

**Ejemplo 3**. lim_{x→0} (sen 3x)/(sen 5x).
Infinitésimos equivalentes: 3x/5x = 3/5.

**Ejemplo 4**. lim_{x→∞} (1 − 1/x)ˣ.
Forma 1^∞. Sea u = −1/x → 0. (1 + u)^(1/(−u)·(−1)·x·u... ) simplemente usamos la regla:
e^{lim x·(−1/x)} = e⁻¹ = 1/e.

**Ejemplo 5**. Estudia la continuidad de:
  f(x) = { (x² − 1)/(x − 1) si x ≠ 1; 3 si x = 1 }.
Para x ≠ 1 simplifica a x + 1. lim_{x→1} = 2. Pero f(1) = 3 ≠ 2. Hay discontinuidad evitable en x = 1.

**Ejemplo 6**. Determina a y b para que sea continua:
  f(x) = { x² + a si x ≤ 1;  bx − 1 si x > 1 }.
Continua en x = 1: 1 + a = b − 1 ⇒ b = a + 2. Una ecuación, dos incógnitas: infinitos pares (a, a+2) hacen f continua.

**Ejemplo 7**. Demuestra que x³ − 3x + 1 = 0 tiene al menos una raíz en (0, 1).
f(0) = 1 > 0; f(1) = −1 < 0. Bolzano garantiza raíz en (0, 1).

## 8.9. Ejercicios propuestos

1. Calcula los límites:
   a) lim_{x→∞} (√(x² + 3x) − x).
   b) lim_{x→0} (eˣ − 1)/x.
   c) lim_{x→1} (x² − 1)/(x² − 3x + 2).
   d) lim_{x→∞} (3x + 2)/(3x + 1)^{2x}.
2. Halla las asíntotas de f(x) = (x² + 1)/(x − 1).
3. Estudia la continuidad de g(x) = |x|/x.
4. Demuestra con Bolzano que sen x = x − 1 tiene solución en [0, π].
5. Clasifica las discontinuidades de h(x) = 1/(x² − 1) en x = ±1.
6. Determina k para que f(x) = { (sen kx)/x si x ≠ 0; 4 si x = 0 } sea continua.
7. Halla lim_{x→0} (cos x)^{1/x²}.
8. Calcula lim_{x→∞} x·(√(x² + 1) − x).
9. Estudia la continuidad de f(x) = ⌊x⌋ (parte entera).
10. Demuestra que toda ecuación polinómica de grado impar con coeficientes reales tiene al menos una raíz real.

### Pistas

- **1a**: multiplicar por el conjugado → 3/2.
- **1d**: ln f ≈ 2x · (1/(3x+1)) → 2/3. Así lim = e^{2/3}.
- **4**: Bolzano a f(x) = sen x − x + 1 en [0, π].
- **6**: lim (sen kx)/x = k ⇒ k = 4.
- **7**: 1^∞ ⇒ e^{lim (cos x − 1)/x²} = e^{−1/2}.
- **9**: continua en todos los no enteros; discontinua de salto finito (salto 1) en cada entero.
- **10**: un polinomio impar tiende a +∞ y −∞ en los extremos, aplicar Bolzano.
