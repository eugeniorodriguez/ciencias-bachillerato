# TEMA 1. NÚMEROS REALES, POLINOMIOS, ECUACIONES E INECUACIONES

## 1.1. El conjunto de los números reales (ℝ)

### 1.1.1. Construcción progresiva de los conjuntos numéricos

La matemática va ampliando el concepto de número según las necesidades operativas que surgen:

- **Naturales (ℕ)**: {0, 1, 2, 3, …}. Se usan para contar. Son cerrados para la suma y el producto, pero no para la resta.
- **Enteros (ℤ)**: {…, −2, −1, 0, 1, 2, …}. Aparecen al querer restar cualquier par de números. Cerrados para suma, resta y producto, pero no para la división.
- **Racionales (ℚ)**: números de la forma p/q con p, q ∈ ℤ, q ≠ 0. Incluyen todas las fracciones. Su expresión decimal es finita o periódica.
- **Irracionales (𝕀)**: números cuya expresión decimal es infinita no periódica. Ejemplos: √2, π, e, √3, número áureo φ = (1+√5)/2.
- **Reales (ℝ)** = ℚ ∪ 𝕀: cubre toda la recta real. Es un cuerpo ordenado completo (propiedad del supremo).

Inclusiones: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.

### 1.1.2. Demostración clásica: √2 es irracional

**Por reducción al absurdo**. Supongamos que √2 = p/q con p/q irreducible.
Elevando al cuadrado: 2q² = p². Entonces p² es par, luego p es par (si fuera impar, p² también). Escribimos p = 2k. Sustituyendo: 2q² = 4k² ⇒ q² = 2k². Entonces q también es par. Pero si p y q son ambos pares, la fracción no era irreducible. Contradicción. Por tanto √2 ∉ ℚ.

### 1.1.3. Paso de decimal periódico a fracción (fracción generatriz)

- **Decimal exacto**: 0,375 = 375/1000 = 3/8.
- **Periódico puro**: 0,̄7 = 7/9;  0,̄23 = 23/99;  0,̄abc = abc/999.
- **Periódico mixto**: 0,1̄6̄ = (16 − 1)/90 = 15/90 = 1/6.

**Truco general**: N = (número completo sin comas − parte no periódica) / (tantos 9 como dígitos periódicos, seguidos de tantos 0 como dígitos no periódicos tras la coma).

### 1.1.4. Intervalos y entornos

Sean a < b:

| Notación | Definición |
|---|---|
| (a, b) | {x ∈ ℝ : a < x < b}  abierto |
| [a, b] | {x : a ≤ x ≤ b}  cerrado |
| [a, b) | semiabierto por la derecha |
| (a, +∞) | x > a |
| (−∞, b] | x ≤ b |

**Entorno** de centro a y radio r > 0:  E(a, r) = (a − r, a + r) = {x : |x − a| < r}.
**Entorno reducido**: E*(a, r) = E(a, r) \ {a}.

### 1.1.5. Valor absoluto

|x| = x si x ≥ 0; |x| = −x si x < 0.

Propiedades clave:
- |x·y| = |x|·|y|
- |x + y| ≤ |x| + |y|  (desigualdad triangular)
- ||x| − |y|| ≤ |x − y|
- |x| ≤ k ⇔ −k ≤ x ≤ k  (k > 0)
- |x| ≥ k ⇔ x ≤ −k  o  x ≥ k

**Ejemplo resuelto**: |2x − 5| < 3 ⇔ −3 < 2x − 5 < 3 ⇔ 2 < 2x < 8 ⇔ 1 < x < 4. Solución: x ∈ (1, 4).

### 1.1.6. Potencias y radicales

Reglas fundamentales (a, b > 0; m, n ∈ ℤ):

- aᵐ · aⁿ = aᵐ⁺ⁿ
- aᵐ / aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- (a·b)ⁿ = aⁿ·bⁿ
- a⁻ⁿ = 1/aⁿ
- a⁰ = 1
- aᵐ/ⁿ = ⁿ√(aᵐ)

**Operaciones con radicales**:
- ⁿ√a · ⁿ√b = ⁿ√(ab)
- ⁿ√a / ⁿ√b = ⁿ√(a/b)
- ᵐ√(ⁿ√a) = ᵐⁿ√a
- Racionalizar: se eliminan raíces del denominador multiplicando por el conjugado o por la raíz adecuada.

**Ejemplo**: 1/(√3 − 1) = (√3 + 1) / [(√3 − 1)(√3 + 1)] = (√3 + 1)/2.

### 1.1.7. Notación científica

Un número está en notación científica cuando se escribe a·10ⁿ con 1 ≤ |a| < 10 y n ∈ ℤ.

- 0,0000587 = 5,87·10⁻⁵
- 340 000 000 = 3,4·10⁸

**Operar en notación científica**:
- Multiplicar: se multiplican las mantisas y se suman los exponentes.
- Dividir: se dividen las mantisas y se restan los exponentes.
- Sumar/restar: se igualan exponentes antes de operar mantisas.

## 1.2. Polinomios

### 1.2.1. Definición

Un polinomio en la variable x es una expresión
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀, con aᵢ ∈ ℝ, aₙ ≠ 0.

- **Grado**: el exponente mayor con coeficiente no nulo (n).
- **Coeficiente líder**: aₙ. **Término independiente**: a₀.
- **Polinomio mónico**: aquel con aₙ = 1.

### 1.2.2. Operaciones

- **Suma/Resta**: término a término, agrupando por grado.
- **Producto**: distributiva. Grado(P·Q) = grado(P) + grado(Q).
- **División**: P(x) = D(x)·C(x) + R(x), con grado(R) < grado(D) (o R = 0).

### 1.2.3. Regla de Ruffini

Sirve para dividir un polinomio P(x) por un binomio (x − a). Se disponen los coeficientes, se baja el primero, se multiplica por a y se suma al siguiente.

**Ejemplo**: dividir 2x³ − 3x² + 4x − 5 entre (x − 2):

```
        2   −3    4   −5
   2 |       4    2   12
       -----------------
        2    1    6    7
```

Cociente: 2x² + x + 6. Resto: 7.

### 1.2.4. Teorema del resto

El resto de dividir P(x) entre (x − a) es P(a).

### 1.2.5. Teorema del factor

a es raíz de P(x) ⇔ (x − a) divide a P(x).

### 1.2.6. Raíces racionales (Regla del candidato)

Si P(x) tiene coeficientes enteros y p/q es una raíz racional irreducible, entonces:
- p divide al término independiente a₀.
- q divide al coeficiente líder aₙ.

En particular, si P es mónico con coeficientes enteros, sus raíces racionales son divisores de a₀.

**Ejemplo**: P(x) = x³ − 6x² + 11x − 6. Candidatos: ±1, ±2, ±3, ±6. Probando, P(1) = 0, P(2) = 0, P(3) = 0. Factorización: (x − 1)(x − 2)(x − 3).

### 1.2.7. Productos notables e identidades útiles

- (a + b)² = a² + 2ab + b²
- (a − b)² = a² − 2ab + b²
- (a + b)(a − b) = a² − b²
- (a + b)³ = a³ + 3a²b + 3ab² + b³
- (a − b)³ = a³ − 3a²b + 3ab² − b³
- a³ + b³ = (a + b)(a² − ab + b²)
- a³ − b³ = (a − b)(a² + ab + b²)

### 1.2.8. Fracciones algebraicas

Una fracción algebraica es un cociente de polinomios P(x)/Q(x).

- Se simplifican factorizando numerador y denominador.
- Suma/resta: se reduce a común denominador (el mcm de los denominadores).
- Multiplicación/división: igual que con fracciones numéricas.

**Ejemplo**: (x² − 1)/(x² − 2x + 1) = (x − 1)(x + 1)/(x − 1)² = (x + 1)/(x − 1), con x ≠ 1.

## 1.3. Binomio de Newton

### 1.3.1. Factorial y números combinatorios

- n! = n·(n − 1)·…·2·1;  0! = 1.
- C(n, k) = (n choose k) = n! / [k!(n − k)!].

**Propiedades**:
- C(n, 0) = C(n, n) = 1
- C(n, k) = C(n, n − k)
- C(n, k) + C(n, k + 1) = C(n + 1, k + 1)  (Pascal)

### 1.3.2. Triángulo de Pascal

Cada número es suma de los dos superiores:

```
               1
             1   1
           1   2   1
         1   3   3   1
       1   4   6   4   1
     1   5  10  10   5   1
```

### 1.3.3. Fórmula del binomio

(a + b)ⁿ = Σ_{k=0}^{n} C(n, k) · aⁿ⁻ᵏ · bᵏ.

**Término general**:  T_{k+1} = C(n, k) · aⁿ⁻ᵏ · bᵏ.

**Ejemplo**: (2x − 3)⁴ = 16x⁴ − 4·8x³·3 + 6·4x²·9 − 4·2x·27 + 81 = 16x⁴ − 96x³ + 216x² − 216x + 81.

## 1.4. Ecuaciones

### 1.4.1. Ecuaciones de primer grado

ax + b = 0  (a ≠ 0)  ⇒  x = −b/a.

Para resolver: despejar, quitar denominadores multiplicando por el mcm, agrupar términos con x a un lado.

### 1.4.2. Ecuaciones de segundo grado

**Completas**: ax² + bx + c = 0.
**Fórmula general**:   x = [ −b ± √(b² − 4ac) ] / (2a).

**Discriminante** Δ = b² − 4ac:
- Δ > 0: dos soluciones reales distintas.
- Δ = 0: solución doble.
- Δ < 0: sin soluciones reales (soluciones complejas conjugadas).

**Suma y producto de raíces** (Cardano-Vieta):  x₁ + x₂ = −b/a,  x₁·x₂ = c/a.

**Incompletas**:
- bx = 0 ⇒ x(ax + b) = 0 → x = 0 o x = −b/a
- c = 0 ⇒ x² = −c/a, dos soluciones opuestas si −c/a > 0.

### 1.4.3. Ecuaciones bicuadradas

ax⁴ + bx² + c = 0. Cambio: t = x². Se obtiene at² + bt + c = 0; después x = ±√t.

### 1.4.4. Ecuaciones con radicales

Se aíslan las raíces y se elevan al cuadrado (o potencia adecuada). Siempre comprobar las soluciones en la ecuación original (la elevación puede introducir soluciones espurias).

**Ejemplo**: √(x + 6) = x. Elevando: x + 6 = x² ⇒ x² − x − 6 = 0 ⇒ x = 3 o x = −2. Comprobando: sólo x = 3 es válida (x = −2 da √4 = 2 ≠ −2).

### 1.4.5. Ecuaciones racionales

P(x)/Q(x) = 0. Multiplicando por Q(x) (Q ≠ 0) se obtiene P(x) = 0. Hay que excluir las x que anulen Q.

### 1.4.6. Ecuaciones polinómicas de grado mayor

- Se factorizan por Ruffini o por factores comunes.
- Se resuelve cada factor.

**Ejemplo**: x³ − 4x² + x + 6 = 0. Por Ruffini con x = −1: queda (x + 1)(x² − 5x + 6) = 0 ⇒ x = −1, 2, 3.

## 1.5. Sistemas de ecuaciones

### 1.5.1. Sistemas lineales 2×2 y 3×3

Métodos: sustitución, igualación, reducción, matricial, Gauss.

**Discusión** (2×2, ax + by = c; a'x + b'y = c'):
- a/a' ≠ b/b': compatible determinado, una solución.
- a/a' = b/b' ≠ c/c': incompatible.
- a/a' = b/b' = c/c': compatible indeterminado (infinitas soluciones).

### 1.5.2. Sistemas no lineales

Se resuelven generalmente por sustitución. Tras despejar, aparecen ecuaciones cuadráticas o bicuadradas.

**Ejemplo**:  x + y = 5;  xy = 6.  Sustituyendo y = 5 − x en xy = 6: x(5 − x) = 6 ⇒ x² − 5x + 6 = 0 ⇒ x = 2, 3. Soluciones (2, 3) y (3, 2).

## 1.6. Inecuaciones

### 1.6.1. Propiedades clave

- Al multiplicar/dividir por un número negativo, se invierte la desigualdad.
- Cerradura con suma/resta: sumar/restar lo mismo a ambos lados no cambia el sentido.

### 1.6.2. Inecuaciones de primer grado

ax + b > 0: se despeja, teniendo cuidado con el signo de a.

### 1.6.3. Inecuaciones de segundo grado

ax² + bx + c > 0. Estudiar el signo del trinomio:
1. Resolver ax² + bx + c = 0.
2. Según el signo de a y las raíces, determinar en qué intervalos el polinomio es positivo o negativo.
3. Si no hay raíces reales y a > 0, el trinomio es siempre positivo (y viceversa).

**Ejemplo**: x² − 5x + 6 > 0. Raíces 2, 3. La parábola abre hacia arriba, es positiva fuera de las raíces: x ∈ (−∞, 2) ∪ (3, +∞).

### 1.6.4. Inecuaciones racionales

P(x)/Q(x) ≥ 0. Se factorizan, se estudia el signo por tramos, y se observa que Q(x) ≠ 0. Los puntos con igualdad se incluyen sólo si el signo permite (en ≥ 0 el numerador puede ser 0, el denominador nunca).

### 1.6.5. Sistemas de inecuaciones

Se resuelven por separado y la solución es la intersección de las soluciones parciales.

### 1.6.6. Inecuaciones con valor absoluto

- |f(x)| < k  ⇔  −k < f(x) < k
- |f(x)| > k  ⇔  f(x) < −k  o  f(x) > k

## 1.7. Ejercicios propuestos (con indicaciones)

1. Clasifica como racional o irracional: 0,101001000…, √9, π/4, 3,̄25.
2. Expresa como fracción: a) 2,̄3, b) 0,41̄6̄, c) 1,25.
3. Racionaliza: a) 5/√7, b) 2/(√3 + √2), c) 1/(∛4).
4. Factoriza P(x) = x⁴ − 5x² + 4 usando bicuadrada.
5. Descompón por Ruffini: P(x) = 2x³ + 3x² − 11x − 6.
6. Desarrolla (x − 2/x)⁶ y halla el término independiente.
7. Resuelve √(2x − 1) + √(x + 4) = 6.
8. Resuelve x⁴ − 10x² + 9 ≤ 0.
9. Halla el dominio de f(x) = √(x² − 4) / (x − 3).
10. Discute el sistema: kx + y = 1; x + ky = 1, según k.

### Pistas

- **7**: aislar una raíz, elevar, luego volver a aislar y elevar.
- **8**: bicuadrada, se convierte en t² − 10t + 9 ≤ 0; raíces t = 1, 9.
- **9**: numerador ≥ 0 y denominador ≠ 0.
- **10**: discriminar por k² ≠ 1 (compatible det.), k = 1 (indet.), k = −1 (incomp.).
