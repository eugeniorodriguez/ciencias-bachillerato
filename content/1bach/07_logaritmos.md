# TEMA 7. EXPONENCIALES Y LOGARITMOS

## 7.1. Función exponencial

### 7.1.1. Definición

Dada a > 0 con a ≠ 1, la función exponencial de base a es
  f(x) = aˣ,   x ∈ ℝ.

- Si a > 1: creciente.
- Si 0 < a < 1: decreciente.

### 7.1.2. Propiedades de aˣ

- Dom = ℝ.
- Im = (0, +∞): toda exponencial es siempre estrictamente positiva.
- Pasa por (0, 1): a⁰ = 1.
- Pasa por (1, a).
- Asíntota horizontal: y = 0, por un lado (x → −∞ si a > 1; x → +∞ si a < 1).
- No tiene asíntotas verticales; es continua en todo ℝ.
- No tiene mínimo ni máximo absolutos.

### 7.1.3. Propiedades algebraicas

- aˣ · aʸ = aˣ⁺ʸ
- aˣ / aʸ = aˣ⁻ʸ
- (aˣ)ʸ = aˣʸ
- (a·b)ˣ = aˣ · bˣ
- a⁻ˣ = 1/aˣ

### 7.1.4. Función exponencial natural

Base especial e ≈ 2,71828… (número de Euler, irracional y trascendente). La función eˣ es la única que coincide con su propia derivada.

Definición mediante límite:
  e = lim_{n→∞} (1 + 1/n)ⁿ.

Aparece de forma natural en crecimientos continuos (interés compuesto continuo, decaimiento radiactivo, etc.).

## 7.2. Función logarítmica

### 7.2.1. Definición

Para a > 0, a ≠ 1, el **logaritmo en base a** se define como la inversa de la exponencial:
  log_a(y) = x  ⇔  aˣ = y.

La función log_a es la inversa de aˣ. Por tanto, sus gráficas son simétricas respecto a la recta y = x.

### 7.2.2. Propiedades de log_a

- Dom = (0, +∞) (no hay logaritmos de cero ni de negativos en ℝ).
- Im = ℝ.
- Si a > 1: creciente.
- Si 0 < a < 1: decreciente.
- Pasa por (1, 0): log_a 1 = 0.
- Pasa por (a, 1): log_a a = 1.
- Asíntota vertical: x = 0.

### 7.2.3. Bases especiales

- **log₁₀**: logaritmo decimal. Se escribe log.
- **log_e**: logaritmo neperiano o natural. Se escribe ln.

### 7.2.4. Propiedades fundamentales

Sean a > 0, a ≠ 1, x, y > 0:

1. log_a(x·y) = log_a x + log_a y.
2. log_a(x/y) = log_a x − log_a y.
3. log_a(xⁿ) = n·log_a x.
4. log_a(ⁿ√x) = (1/n)·log_a x.
5. log_a 1 = 0;  log_a a = 1;  log_a(aˣ) = x;  a^{log_a x} = x.

### 7.2.5. Cambio de base

log_a x = log_b x / log_b a.

En particular:
  log_a x = ln x / ln a = log x / log a.

**Ejemplo**: log₂ 7 = ln 7 / ln 2 ≈ 1,9459/0,6931 ≈ 2,807.

## 7.3. Cálculo logarítmico

### 7.3.1. Descomposición de un logaritmo

Se expresa una expresión complicada como suma/diferencia de logaritmos más simples.

**Ejemplo**: log(x³·√y / z) = 3 log x + (1/2) log y − log z.

### 7.3.2. Composición de un logaritmo

Proceso inverso: una suma/resta de logaritmos se expresa como un único logaritmo.

**Ejemplo**: 2 log x − 3 log y + log 5 = log(5x²/y³).

### 7.3.3. Cálculo con calculadora

Para logaritmos en cualquier base, se usa el cambio a base 10 o e.

## 7.4. Ecuaciones exponenciales

Una ecuación es exponencial si la incógnita aparece en el exponente.

### 7.4.1. Método 1: Igualar bases

Si aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ con a > 0, a ≠ 1, entonces f(x) = g(x).

**Ejemplo**: 2^{x+1} = 32 = 2⁵ ⇒ x + 1 = 5 ⇒ x = 4.

### 7.4.2. Método 2: Tomar logaritmos

Si no se pueden igualar bases, se aplica logaritmo a ambos lados.

**Ejemplo**: 3ˣ = 7 ⇒ x·log 3 = log 7 ⇒ x = log 7 / log 3 ≈ 1,771.

### 7.4.3. Método 3: Cambio de variable

Cuando aparecen combinaciones del tipo aˣ, a²ˣ, etc., se hace t = aˣ.

**Ejemplo**: 4ˣ − 5·2ˣ + 4 = 0. Con t = 2ˣ: t² − 5t + 4 = 0 ⇒ t = 1 o t = 4. Así 2ˣ = 1 ⇒ x = 0 o 2ˣ = 4 ⇒ x = 2.

### 7.4.4. Sistemas exponenciales

Se combinan las técnicas anteriores.

**Ejemplo**: 2ˣ + 3ʸ = 17;  2ˣ − 3ʸ = −1.  Sumando: 2·2ˣ = 16 ⇒ 2ˣ = 8 ⇒ x = 3.  Restando: 2·3ʸ = 18 ⇒ 3ʸ = 9 ⇒ y = 2.

## 7.5. Ecuaciones logarítmicas

La incógnita aparece dentro de logaritmos.

### 7.5.1. Reglas de trabajo

1. Combinar en un solo logaritmo a cada lado.
2. Si log_a A = log_a B ⇒ A = B (con A, B > 0).
3. Si log_a A = k ⇒ A = aᵏ.
4. **Comprobar siempre** las soluciones: las transformaciones pueden introducir soluciones espurias (argumentos negativos o nulos).

### 7.5.2. Ejemplos

**Ejemplo 1**. log x + log(x − 3) = 1 (base 10).
log[x(x − 3)] = 1 ⇒ x(x − 3) = 10 ⇒ x² − 3x − 10 = 0 ⇒ x = 5 o x = −2.
Comprobamos: x = −2 haría log(−2), no válido. Solución: x = 5.

**Ejemplo 2**. log₃(x + 6) − log₃ x = 2.
log₃((x + 6)/x) = 2 ⇒ (x + 6)/x = 9 ⇒ x + 6 = 9x ⇒ x = 3/4.

### 7.5.3. Sistemas logarítmicos

**Ejemplo**: log x + log y = 2;  x − y = 3.
log(xy) = 2 ⇒ xy = 100. Con x = y + 3: (y + 3)·y = 100 ⇒ y² + 3y − 100 = 0.
y = (−3 ± √409)/2. Se toma sólo la positiva.

## 7.6. Aplicaciones

### 7.6.1. Interés compuesto

Capital final = C₀·(1 + r)ⁿ, siendo C₀ capital inicial, r tasa por periodo, n periodos.

**Interés compuesto continuo**:  C(t) = C₀·eʳᵗ.

### 7.6.2. Crecimiento/decaimiento exponencial

- Crecimiento: P(t) = P₀·eᵏᵗ con k > 0.
- Decaimiento: P(t) = P₀·e⁻ᵏᵗ con k > 0.
- Vida media (en decaimiento): tiempo T tal que P₀·e⁻ᵏᵀ = P₀/2 ⇒ T = ln 2 / k.

### 7.6.3. Escalas logarítmicas

- **pH = −log[H⁺]**: acidez.
- **Escala Richter** de magnitud sísmica.
- **Decibelios**: dB = 10 log(I/I₀).

## 7.7. Ejemplos resueltos

**Ejemplo 1**. Calcula log₂ 80 − log₂ 5.
= log₂(80/5) = log₂ 16 = 4.

**Ejemplo 2**. Despeja x: 5^{2x+1} = 125.
125 = 5³. 2x + 1 = 3 ⇒ x = 1.

**Ejemplo 3**. Resuelve: log(x + 1) + log(x − 2) = log 4 + log 3.
log[(x+1)(x−2)] = log 12 ⇒ (x+1)(x−2) = 12 ⇒ x² − x − 14 = 0.
x = (1 ± √57)/2. Sólo la positiva vale: x = (1 + √57)/2 ≈ 4,27.

**Ejemplo 4**. Un capital se invierte al 5% anual compuesto continuo. ¿En cuánto tiempo se duplica?
2C₀ = C₀·e^{0,05 t} ⇒ 0,05 t = ln 2 ⇒ t = ln 2/0,05 ≈ 13,86 años.

**Ejemplo 5**. Si log 2 = 0,301 y log 3 = 0,477, halla log 72.
72 = 2³·3². log 72 = 3·0,301 + 2·0,477 = 0,903 + 0,954 = 1,857.

## 7.8. Ejercicios propuestos

1. Resuelve 9ˣ − 3ˣ⁺¹ + 2 = 0 (falta por ajustar: usar 9ˣ = (3ˣ)²).
2. Simplifica log(a³b²/c⁴).
3. Calcula log₅ 125 + log₅ (1/25) − log₅ √5.
4. Resuelve 2^{x+3} − 2ˣ = 56.
5. Resuelve log₂(x² − 5x + 6) = 0.
6. Resuelve log x² = (log x)².
7. En una reacción la masa decae con k = 0,1 h⁻¹. ¿Cuánto queda al cabo de 10 h?
8. Sistema: log x + log y = 3;  log x − log y = 1.
9. Halla x: 3^{2x} − 28·3ˣ + 27 = 0.
10. Demuestra que log_a b · log_b a = 1.

### Pistas

- **1**: con t = 3ˣ, t² − 3t + 2 = 0 ⇒ t = 1 o t = 2. Soluciones x = 0, x = log 2/log 3.
- **3**: 3 + (−2) − 1/2 = 1/2.
- **4**: 2ˣ(2³ − 1) = 56 ⇒ 2ˣ · 7 = 56 ⇒ 2ˣ = 8 ⇒ x = 3.
- **5**: x² − 5x + 6 = 1 ⇒ x² − 5x + 5 = 0 ⇒ x = (5 ± √5)/2.
- **6**: 2 log x = (log x)². Sea t = log x. t² − 2t = 0 ⇒ t(t − 2) = 0. x = 1 o x = 100.
- **8**: log x = 2, log y = 1 ⇒ x = 100, y = 10.
- **10**: Cambio de base: log_a b = ln b/ln a; log_b a = ln a/ln b. Producto = 1.
