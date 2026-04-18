# TEMA 12. INTEGRACIÓN

## 12.1. Primitiva de una función

### 12.1.1. Definición

Una función F(x) es una **primitiva** de f(x) en un intervalo I si F'(x) = f(x) para todo x ∈ I.

- Dos primitivas de la misma función difieren en una constante: si F y G son primitivas de f, existe C ∈ ℝ con G(x) = F(x) + C.
- Por tanto, el conjunto de todas las primitivas de f se expresa como F(x) + C, con C constante arbitraria.

### 12.1.2. Integral indefinida

Se denota:
  ∫ f(x) dx = F(x) + C.

El símbolo ∫ procede del alargamiento de una S ("suma"), y dx indica la variable respecto a la que se integra. F(x) + C es la **integral indefinida** de f.

### 12.1.3. Propiedades lineales

- ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx.
- ∫ k·f(x) dx = k · ∫ f(x) dx,  k ∈ ℝ.

**¡Cuidado!**: no existe regla directa análoga para el producto o el cociente.

## 12.2. Tabla de primitivas inmediatas

| Función | Primitiva |
|---------|-----------|
| k | kx + C |
| xⁿ  (n ≠ −1) | xⁿ⁺¹/(n + 1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln a + C |
| sen x | −cos x + C |
| cos x | sen x + C |
| 1 + tan²x = sec²x | tan x + C |
| 1/sen²x | −cotan x + C |
| 1/√(1 − x²) | arcsen x + C |
| −1/√(1 − x²) | arccos x + C |
| 1/(1 + x²) | arctan x + C |

**Reglas equivalentes útiles**:
- ∫ (3x − 5)² dx = (3x − 5)³/(3·3) + C = (3x − 5)³/9 + C.
- ∫ dx/√(1 − x²) se reconoce como arcsen x + C.

## 12.3. Métodos de integración inmediata y por ajuste

### 12.3.1. Identificación con la tabla

La mayoría de primitivas inmediatas se resuelven observando que la integral tiene la forma ∫ f'(x)·[f(x)]ⁿ dx, ∫ f'(x)/f(x) dx, ∫ f'(x)·eᶠ⁽ˣ⁾ dx, etc.

**Tipos fundamentales**:

| Tipo | Integral | Primitiva |
|------|----------|-----------|
| 1 | ∫ f'(x)·[f(x)]ⁿ dx, n ≠ −1 | [f(x)]ⁿ⁺¹/(n+1) + C |
| 2 | ∫ f'(x)/f(x) dx | ln|f(x)| + C |
| 3 | ∫ f'(x)·eᶠ⁽ˣ⁾ dx | eᶠ⁽ˣ⁾ + C |
| 4 | ∫ f'(x)·aᶠ⁽ˣ⁾ dx | aᶠ⁽ˣ⁾/ln a + C |
| 5 | ∫ f'(x)·sen f(x) dx | −cos f(x) + C |
| 6 | ∫ f'(x)·cos f(x) dx | sen f(x) + C |
| 7 | ∫ f'(x)·(1 + tan²f(x)) dx | tan f(x) + C |
| 8 | ∫ f'(x)/√(1 − f(x)²) dx | arcsen f(x) + C |
| 9 | ∫ f'(x)/(1 + f(x)²) dx | arctan f(x) + C |

### 12.3.2. Ejemplos de cada tipo

**Tipo 1**. ∫ (3x² − 2x + 1) dx = x³ − x² + x + C.

**Tipo 1 (compuesta)**. ∫ x·(x² + 1)⁵ dx = (1/2) · (x² + 1)⁶/6 + C.

**Tipo 2**. ∫ (2x)/(x² + 3) dx = ln|x² + 3| + C.

**Tipo 3**. ∫ xeˣ² dx = (1/2)·eˣ² + C.

**Tipo 4**. ∫ x²·5ˣ³⁻¹ dx = (1/3) · 5ˣ³⁻¹ / ln 5 + C.

**Tipo 5**. ∫ sen 2x dx = (1/2) · ∫ 2 sen 2x dx = −(1/2) cos 2x + C.

**Tipo 9**. ∫ x/(1 + x⁴) dx = (1/2) · ∫ 2x/(1 + (x²)²) dx = (1/2) arctan(x²) + C.

**Tipo 2 con trucos**. ∫ tan x dx = ∫ sen x/cos x dx = −ln|cos x| + C.
Análogo para cotan x = cos x/sen x → ln|sen x| + C.

### 12.3.3. Primitivas por ajuste de constante

Se multiplica y divide por una constante para que el numerador sea la derivada del denominador o factor interno:

∫ cos(3x + 2) dx = (1/3) · ∫ 3 cos(3x + 2) dx = (1/3) sen(3x + 2) + C.

## 12.4. Método de sustitución (cambio de variable)

Si u = g(x), entonces du = g'(x) dx, y
  ∫ f(g(x)) · g'(x) dx = ∫ f(u) du.

**Pasos**:
1. Elegir un cambio u = g(x) adecuado (suele ser la expresión que complica la integral).
2. Calcular du = g'(x) dx y sustituir.
3. Integrar respecto a u.
4. Deshacer el cambio.

**Ejemplos**:

1) ∫ x·√(x² + 1) dx. Sea u = x² + 1 ⇒ du = 2x dx ⇒ x dx = du/2.
   ∫ √u · du/2 = (1/2) · u^{3/2}/(3/2) + C = (1/3)(x² + 1)^{3/2} + C.

2) ∫ cos(ln t)/t dt. Cambio u = ln t ⇒ du = dt/t. ∫ cos u du = sen u + C = sen(ln t) + C.

3) ∫ 2x/√(1 − x⁴) dx. Cambio u = x² ⇒ du = 2x dx. ∫ du/√(1 − u²) = arcsen(u) + C = arcsen(x²) + C.

4) ∫ eˢ/(1 + e²ˢ) ds. Cambio u = eˢ ⇒ du = eˢ ds. ∫ du/(1 + u²) = arctan(eˢ) + C.

## 12.5. Integración por partes

Fórmula (de la derivada del producto):
  ∫ u dv = u·v − ∫ v du.

**Elección de u y dv** (regla mnemotécnica "LIATE"): escoger u como la primera que aparezca en la lista:
- **L**ogarítmica
- **I**nversas trigonométricas
- **A**lgebraica (polinomios)
- **T**rigonométrica
- **E**xponencial

**Ejemplos**:

1) ∫ x·eˣ dx. Tomamos u = x, dv = eˣ dx ⇒ du = dx, v = eˣ.
   = x·eˣ − ∫ eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C.

2) ∫ ln x dx. Tomamos u = ln x, dv = dx ⇒ du = dx/x, v = x.
   = x·ln x − ∫ x · dx/x = x·ln x − x + C.

3) ∫ x²·cos x dx. Dos aplicaciones:
   u = x², dv = cos x dx ⇒ du = 2x dx, v = sen x.
   = x²·sen x − ∫ 2x·sen x dx.
   Segunda aplicación a ∫ 2x sen x dx: u = 2x, dv = sen x dx ⇒ du = 2 dx, v = −cos x.
   ∫ 2x sen x dx = −2x cos x + ∫ 2 cos x dx = −2x cos x + 2 sen x + C.
   Así: ∫ x² cos x dx = x²·sen x + 2x cos x − 2 sen x + C.

## 12.6. Integración de funciones racionales

Para ∫ P(x)/Q(x) dx con grado(P) < grado(Q):
1. Factorizar Q(x).
2. Descomponer en fracciones simples.
3. Integrar cada fracción simple.

Si grado(P) ≥ grado(Q), dividir previamente P/Q = C(x) + R(x)/Q(x).

**Casos habituales (factores de Q)**:
- Lineal simple (x − a): A/(x − a) → A·ln|x − a|.
- Lineal múltiple (x − a)ⁿ: A₁/(x−a) + A₂/(x−a)² + … .
- Cuadrático irreducible: (Bx + C)/(x² + bx + c) → combinación de ln y arctan.

**Ejemplo**. ∫ (2x + 3)/((x − 1)(x + 2)) dx.
Descomposición: (2x + 3)/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2).
A(x + 2) + B(x − 1) = 2x + 3. Con x = 1: 3A = 5 ⇒ A = 5/3. Con x = −2: −3B = −1 ⇒ B = 1/3.
Integral = (5/3) ln|x − 1| + (1/3) ln|x + 2| + C.

## 12.7. Integral definida

### 12.7.1. Idea intuitiva: área bajo la curva

Si f ≥ 0 y continua en [a, b], el área bajo su gráfica entre a y b se aproxima mediante sumas de rectángulos. Al refinar las particiones (espesor → 0), las sumas convergen a un número: la **integral definida**
  ∫_a^b f(x) dx.

### 12.7.2. Propiedades

- ∫_a^a f = 0.
- ∫_a^b f = −∫_b^a f.
- ∫_a^b f + ∫_b^c f = ∫_a^c f  (aditividad).
- ∫_a^b [f + g] = ∫_a^b f + ∫_a^b g.
- ∫_a^b k·f = k · ∫_a^b f.
- Si f ≤ g en [a, b]: ∫_a^b f ≤ ∫_a^b g.
- Desigualdad del valor absoluto: |∫_a^b f| ≤ ∫_a^b |f|.

### 12.7.3. Teorema del valor medio integral

Si f es continua en [a, b], existe c ∈ [a, b] con
  ∫_a^b f(x) dx = f(c)·(b − a).

El valor f(c) es el "valor medio" de f en el intervalo.

### 12.7.4. Teorema fundamental del cálculo

Si f es continua en [a, b] y
  F(x) = ∫_a^x f(t) dt,
entonces F es derivable y F'(x) = f(x).

Este teorema conecta derivación e integración: la función área es una primitiva de f.

### 12.7.5. Regla de Barrow

Si F es una primitiva cualquiera de f en [a, b]:
  ∫_a^b f(x) dx = F(b) − F(a)  [abreviadamente, F(x)]_a^b.

## 12.8. Aplicaciones geométricas

### 12.8.1. Área bajo una curva (f ≥ 0)

A = ∫_a^b f(x) dx.

### 12.8.2. Área entre curva y eje OX (f con cambios de signo)

Se parte el intervalo donde f cambia de signo:
A = ∫_a^b |f(x)| dx = suma de áreas positivas, cambiando el signo de los tramos en los que f < 0.

### 12.8.3. Área entre dos curvas

Si f(x) ≥ g(x) en [a, b]:
A = ∫_a^b [f(x) − g(x)] dx.

Si las curvas se cruzan, se calculan los puntos de intersección y se integra por tramos el valor absoluto de la diferencia.

**Ejemplo**. Área encerrada entre y = x² − 4 y y = 2x − 1.
Intersección: x² − 4 = 2x − 1 ⇒ x² − 2x − 3 = 0 ⇒ x = −1, 3. En [−1, 3] la recta está por encima.
A = ∫_{−1}^{3} [(2x − 1) − (x² − 4)] dx = ∫_{−1}^{3} (−x² + 2x + 3) dx = [−x³/3 + x² + 3x]_{−1}^{3} = 9 − (−5/3) = 32/3 u².

### 12.8.4. Espacio neto recorrido por un móvil

Si v(t) es la velocidad de un móvil, el espacio neto recorrido en [t₁, t₂] es la integral (considerando signos):
  e = ∫_{t₁}^{t₂} v(t) dt.

El **espacio total** es ∫|v(t)| dt.

## 12.9. Ejemplos resueltos adicionales

**Ejemplo 1**. ∫ (2x⁵ − 3x³ + 2x − 1) dx = x⁶/3 − 3x⁴/4 + x² − x + C.

**Ejemplo 2**. ∫ (3ˣ − 4/√x) dx = 3ˣ/ln 3 − 8√x + C.

**Ejemplo 3**. ∫ (t + 1)/√(t² + 2t + 3) dt. El numerador es la mitad de la derivada del radicando:
= (1/2) · ∫ (2t + 2)/√(t² + 2t + 3) dt = √(t² + 2t + 3) + C.

**Ejemplo 4**. ∫ x³·∛(x⁵) dx = ∫ x³ · x^{5/3} dx = ∫ x^{14/3} dx = x^{17/3}/(17/3) + C = (3/17)·x^{17/3} + C.

**Ejemplo 5**. ∫ sen x · cos⁴ x dx. Cambio u = cos x, du = −sen x dx:
= −∫ u⁴ du = −u⁵/5 + C = −cos⁵ x/5 + C.

**Ejemplo 6**. Área encerrada por f(x) = x(x²−1) entre x = −1 y x = 1.
La función es impar, positiva en [−1, 0] y negativa en [0, 1]. Por simetría:
A = 2 · ∫_{−1}^{0} x(x²−1) dx = 2 · [x⁴/4 − x²/2]_{−1}^{0} = 2 · (0 − (−1/4)) = 1/2 u².

**Ejemplo 7**. ∫₀^{π/4} (cos x − sen x) dx = [sen x + cos x]₀^{π/4} = √2 − 1 u².

**Ejemplo 8**. Determina f(x) = ax² + bx + c sabiendo que tiene un mínimo en (2, −4) y ∫_{−3}^{0} f(x) dx = 45.
- f(2) = −4: 4a + 2b + c = −4.
- f'(2) = 0: 4a + b = 0.
- ∫_{−3}^{0} = 45: 9a − (9b/2) + 3c = 45 ⇒ 6a − 3b + 2c = 30.
Resolviendo: a = 19/13, b = −76/13, c = 24/13.

## 12.10. Ejercicios propuestos

1. Halla: a) ∫ (3x² + 2/x − 5/x²) dx; b) ∫ (5 sen x − 3/√(1 − x²)) dx.
2. Encuentra la primitiva de f(x) = 4x + 5 que vale 3 en x = −1.
3. ∫ x/(1 + x²) dx.
4. ∫ cos x · sen³ x dx.
5. ∫ ln x dx (por partes).
6. ∫ x² eˣ dx (dos aplicaciones de partes).
7. Calcula ∫₁³ (3x − 1)/√x dx.
8. Área entre y = √x e y = 1/x en [1, 2].
9. Área encerrada por y = x² y la recta y = x + 2.
10. ∫ 2x/√(1 − x⁴) dx.
11. Calcula el espacio neto recorrido por un móvil con v(t) = t² − 5t + 6 (m/s) en [1, 3] s.
12. Determina a para que ∫_0^a 3x² dx = 2·∫_a^1 3x² dx.

### Pistas

- **2**: F(x) = 2x² + 5x + C; F(−1) = 3 ⇒ C = 6.
- **3**: (1/2) ln(1 + x²) + C.
- **4**: sen⁴ x/4 + C.
- **5**: x ln x − x + C.
- **6**: eˣ(x² − 2x + 2) + C.
- **7**: 4√3.
- **8**: calcular intersecciones: √x = 1/x ⇒ x = 1. Entre 1 y 2 dominan ambas, una por arriba y otra por abajo; integrar |√x − 1/x|.
- **9**: intersecciones x = −1, 2; área = 9/2.
- **10**: arcsen(x²) + C.
- **11**: 1 m (v < 0 en parte del intervalo).
- **12**: a³ = 2(1 − a³) ⇒ a = ∛(2/3).
