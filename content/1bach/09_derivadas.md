# TEMA 9. DERIVADAS

## 9.1. Derivada de una función en un punto

### 9.1.1. Motivación: tasa de variación media

La **tasa de variación media** (TVM) de f en [a, a + h] es
  TVM = [f(a + h) − f(a)] / h.
Geométricamente, es la pendiente de la recta secante que une los puntos (a, f(a)) y (a + h, f(a + h)).

### 9.1.2. Definición de derivada

La **derivada de f en x = a** se define como:
  f'(a) = lim_{h→0} [f(a + h) − f(a)] / h.

Equivalentemente (cambio x = a + h):
  f'(a) = lim_{x→a} [f(x) − f(a)] / (x − a).

Si el límite existe y es finito, f es **derivable en a**. Geométricamente f'(a) es la pendiente de la recta tangente a la gráfica en (a, f(a)).

### 9.1.3. Derivadas laterales

- f'(a⁻) = lim_{h→0⁻} [f(a + h) − f(a)]/h.
- f'(a⁺) = lim_{h→0⁺} [f(a + h) − f(a)]/h.

f es derivable en a ⇔ ambas derivadas laterales existen y coinciden.

### 9.1.4. Derivabilidad ⇒ Continuidad

Si f es derivable en a, entonces f es continua en a. **El recíproco no es cierto**: f(x) = |x| es continua en 0 pero no derivable allí (las derivadas laterales son −1 y 1).

## 9.2. Función derivada

La función derivada f'(x) asigna a cada x de su dominio de derivabilidad el valor f'(x).

### 9.2.1. Notaciones

- f'(x),  y',  dy/dx,  Df(x).
- Derivadas sucesivas: f''(x), f'''(x), …, f⁽ⁿ⁾(x).

## 9.3. Tabla de derivadas elementales

| Función | Derivada |
|---------|----------|
| k (constante) | 0 |
| x | 1 |
| xⁿ | n·xⁿ⁻¹ |
| √x | 1/(2√x) |
| ⁿ√x | 1/(n·ⁿ√(xⁿ⁻¹)) |
| 1/x | −1/x² |
| eˣ | eˣ |
| aˣ | aˣ · ln a |
| ln x | 1/x |
| log_a x | 1/(x·ln a) |
| sen x | cos x |
| cos x | −sen x |
| tan x | 1 + tan²x = 1/cos²x = sec²x |
| cotan x | −1/sen²x = −cosec²x |
| arcsen x | 1/√(1 − x²) |
| arccos x | −1/√(1 − x²) |
| arctan x | 1/(1 + x²) |

## 9.4. Reglas de derivación

Sean f y g derivables y k ∈ ℝ:

1. (f + g)' = f' + g'.
2. (k·f)' = k·f'.
3. **Producto**: (f · g)' = f'·g + f·g'.
4. **Cociente**: (f/g)' = (f'·g − f·g')/g².
5. **Regla de la cadena** (composición): (f ∘ g)'(x) = f'(g(x))·g'(x).
6. **Derivada de la inversa**: (f⁻¹)'(y) = 1/f'(x),  siendo y = f(x).
7. **Derivación logarítmica**: para y = f(x)^{g(x)}, se toma ln y y se deriva implícitamente.

### 9.4.1. Ejemplos clave

**Ejemplo 1**. Derivada de sen(x²):
f(u) = sen u, u = x². (sen(x²))' = cos(x²) · 2x.

**Ejemplo 2**. Derivada de (x² + 1)⁵:
5(x² + 1)⁴·2x = 10x·(x² + 1)⁴.

**Ejemplo 3**. Derivada de ln(x² + 3):
(2x)/(x² + 3).

**Ejemplo 4**. y = xˣ. ln y = x·ln x. Derivando: y'/y = ln x + 1. y' = xˣ·(ln x + 1).

## 9.5. Recta tangente y normal

Dada f derivable en a:

- **Tangente** en (a, f(a)):  y − f(a) = f'(a)·(x − a).
- **Normal** en (a, f(a)):  y − f(a) = −(1/f'(a))·(x − a),  si f'(a) ≠ 0.

Si f'(a) = 0 la tangente es horizontal, y la normal, vertical (x = a).

### 9.5.1. Ejemplo

f(x) = x² + 1 en x = 2. f'(x) = 2x; f'(2) = 4; f(2) = 5.
Tangente: y − 5 = 4(x − 2), es decir y = 4x − 3.
Normal: y − 5 = −(1/4)(x − 2), es decir y = −x/4 + 11/2.

## 9.6. Aplicaciones al estudio de funciones

### 9.6.1. Crecimiento y decrecimiento

En un intervalo I:
- f creciente ⇔ f'(x) ≥ 0 en I.
- f estrictamente creciente ⇐ f'(x) > 0 (condición suficiente).
- Análogo con decreciente.

**Procedimiento**: se calculan los ceros de f', se divide la recta en intervalos y se estudia el signo de f' en cada uno.

### 9.6.2. Extremos relativos

**Condición necesaria**: si f tiene un extremo relativo en x₀ y es derivable allí, f'(x₀) = 0 (puntos críticos).

**Criterios para identificar**:
- **Signo de f'**: si f' cambia de + a − en x₀: máximo. De − a +: mínimo. Si no cambia: no es extremo (punto de inflexión o similar).
- **Criterio de la 2ª derivada**: si f'(x₀) = 0 y f''(x₀) < 0 ⇒ máximo. Si f''(x₀) > 0 ⇒ mínimo. Si f''(x₀) = 0: no concluyente.

### 9.6.3. Concavidad y puntos de inflexión

- f'' > 0 ⇒ gráfica cóncava hacia arriba (convexa).
- f'' < 0 ⇒ cóncava hacia abajo.
- **Punto de inflexión**: cambia la concavidad. Condición necesaria: f''(x₀) = 0 (si existe).

### 9.6.4. Representación gráfica completa

Pasos recomendados:
1. Dominio y tipo de discontinuidades.
2. Cortes con los ejes.
3. Simetrías y periodicidad.
4. Asíntotas verticales, horizontales y oblicuas.
5. Monotonía (signo de f').
6. Extremos relativos.
7. Concavidad y puntos de inflexión (signo de f'').
8. Tabla de valores y dibujo.

### 9.6.5. Problemas de optimización

**Método**:
1. Identificar la magnitud a optimizar (función objetivo) y las variables.
2. Escribirla como función de una variable usando las restricciones.
3. Derivar, igualar a cero y resolver.
4. Comprobar máximo/mínimo con f'' o signo de f'.
5. Verificar que la solución está en el dominio.

**Ejemplo**. Entre todos los rectángulos de perímetro 40 cm, hallar el de área máxima.
Lados x, 20 − x. Área A(x) = x(20 − x) = 20x − x².
A'(x) = 20 − 2x = 0 ⇒ x = 10. A''(x) = −2 < 0 (máximo).
Rectángulo cuadrado 10×10, área 100 cm².

### 9.6.6. Regla de L'Hôpital (introducción)

Para indeterminaciones 0/0 o ∞/∞:
lim f(x)/g(x) = lim f'(x)/g'(x)  (si el segundo existe).

**Ejemplo**: lim_{x→0} (1 − cos x)/x² = lim (sen x)/(2x) = lim (cos x)/2 = 1/2.

## 9.7. Teoremas fundamentales de derivabilidad

### 9.7.1. Teorema de Rolle

Si f es continua en [a, b], derivable en (a, b) y f(a) = f(b), entonces existe c ∈ (a, b) con f'(c) = 0.

### 9.7.2. Teorema del valor medio (de Lagrange)

Si f es continua en [a, b] y derivable en (a, b), existe c ∈ (a, b) tal que
  f'(c) = [f(b) − f(a)]/(b − a).

Geométricamente: hay un punto donde la tangente es paralela a la cuerda que une (a, f(a)) y (b, f(b)).

### 9.7.3. Teorema de Cauchy

Versión generalizada del valor medio con dos funciones. Base de la demostración de L'Hôpital.

## 9.8. Ejemplos resueltos

**Ejemplo 1**. Deriva f(x) = (3x² − 2)·e^{−x}.
f'(x) = 6x·e^{−x} + (3x² − 2)·(−e^{−x}) = e^{−x}(−3x² + 6x + 2).

**Ejemplo 2**. Deriva y = ln[(x + 1)/(x − 1)].
y = ln(x + 1) − ln(x − 1). y' = 1/(x + 1) − 1/(x − 1) = −2/(x² − 1).

**Ejemplo 3**. Estudio de f(x) = x³ − 3x.
- Dom ℝ. Impar.
- f'(x) = 3x² − 3 = 0 ⇒ x = ±1.
- f''(x) = 6x. f''(−1) = −6 < 0: máximo local en (−1, 2). f''(1) = 6 > 0: mínimo local en (1, −2).
- Cero de f'': x = 0 (punto de inflexión). Cambia de cóncava hacia abajo (x<0) a hacia arriba (x>0).

**Ejemplo 4**. De todos los triángulos rectángulos de hipotenusa 10, halla el de área máxima.
Catetos a, b con a² + b² = 100. A = (1/2)·a·b = (1/2)·a·√(100 − a²).
dA/da = (1/2)·[√(100 − a²) + a·(−a)/√(100 − a²)] = (100 − 2a²)/(2√(100 − a²)) = 0.
⇒ a² = 50 ⇒ a = 5√2, b = 5√2. Área máxima = 25.

**Ejemplo 5**. ¿Cuántas raíces tiene x³ + 3x − 5 en ℝ?
f'(x) = 3x² + 3 > 0 ⇒ f es estrictamente creciente. Una única raíz. (f(1) = −1, f(2) = 9, existe en (1, 2).)

## 9.9. Ejercicios propuestos

1. Deriva:
   a) f(x) = x·sen x.
   b) g(x) = √(x² + 1).
   c) h(x) = (ln x)³.
   d) k(x) = e^{2x}·cos(3x).
   e) p(x) = x^{cos x}.
2. Halla la tangente a y = e^x en x = 0.
3. Estudia crecimiento, extremos y concavidad de f(x) = x⁴ − 4x³.
4. Representa gráficamente f(x) = (x − 1)/(x + 2).
5. De todos los cilindros de volumen 1 L, halla el de superficie mínima.
6. Dos lados de un triángulo suman 10 cm y forman un ángulo de 60°. Halla las longitudes que maximizan el área.
7. Demuestra que arcsen x + arccos x = π/2 derivando.
8. Halla a, b para que f(x) = x³ + ax + b tenga un mínimo local en x = 2 con valor −16.
9. Estudia la derivabilidad de f(x) = |x² − 1| en x = ±1.
10. Calcula lim_{x→0} (tan x − x)/x³ usando L'Hôpital.

### Pistas

- **1e**: y' = x^{cos x}·[cos x/x − sen x · ln x].
- **3**: f' = 4x²(x − 3). Ceros x = 0, 3. f'' = 12x² − 24x = 12x(x − 2). Inflexiones x = 0, 2.
- **5**: V = πr²h = 1. S = 2πr² + 2πrh = 2πr² + 2/r. dS/dr = 4πr − 2/r² = 0 ⇒ r = (1/(2π))^{1/3}.
- **6**: A = (1/2)·a·(10 − a)·sen 60°. Derivar: a = 5, b = 5.
- **7**: (arcsen x)' + (arccos x)' = 0 ⇒ suma constante = π/2 (valor en x = 0).
- **8**: f'(2) = 0: 12 + a = 0, a = −12. f(2) = −16: 8 − 24 + b = −16 ⇒ b = 0.
- **10**: 0/0 → (sec²x − 1)/(3x²) → … = 1/3.
