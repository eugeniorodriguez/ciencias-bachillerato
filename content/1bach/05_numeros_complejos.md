# TEMA 5. NÚMEROS COMPLEJOS

## 5.1. Necesidad de los números complejos

En ℝ, la ecuación x² + 1 = 0 no tiene solución porque ningún número real al cuadrado es negativo. Para que toda ecuación polinómica tenga solución, se amplía el conjunto definiendo una unidad imaginaria **i** tal que
  i² = −1.

De este modo, √(−1) = i;  √(−a) = i·√a  (a > 0).

El conjunto obtenido es ℂ = {a + bi : a, b ∈ ℝ}. Cada número complejo z = a + bi tiene una **parte real** Re(z) = a y una **parte imaginaria** Im(z) = b.

**Inclusiones**: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ.

## 5.2. Forma binómica

z = a + bi.

### 5.2.1. Igualdad

a + bi = c + di ⇔ a = c y b = d.

### 5.2.2. Suma y resta

(a + bi) + (c + di) = (a + c) + (b + d)i.
(a + bi) − (c + di) = (a − c) + (b − d)i.

### 5.2.3. Producto

(a + bi)(c + di) = (ac − bd) + (ad + bc)i.

**Se opera como con binomios**, sustituyendo i² por −1.

### 5.2.4. Potencias de i

i⁰ = 1,  i¹ = i,  i² = −1,  i³ = −i,  i⁴ = 1, …

Se repiten cíclicamente cada 4. Para calcular iⁿ, se divide n entre 4 y se toma el resto:
- Resto 0 → 1;  1 → i;  2 → −1;  3 → −i.

### 5.2.5. Conjugado

El conjugado de z = a + bi es z̄ = a − bi.

**Propiedades**:
- (z̄)̄  = z.
- z + z̄ = 2 Re(z);  z − z̄ = 2i Im(z).
- z · z̄ = a² + b² (real no negativo).
- Conjugado de suma: (z + w)̄ = z̄ + w̄.
- Conjugado de producto: (z·w)̄ = z̄ · w̄.

### 5.2.6. División

Para dividir, se multiplica numerador y denominador por el conjugado del denominador:

(a + bi)/(c + di) = [(a + bi)(c − di)] / [(c + di)(c − di)] = [(ac + bd) + (bc − ad)i] / (c² + d²).

### 5.2.7. Inverso

z⁻¹ = 1/z = z̄ / |z|² = (a − bi)/(a² + b²).

## 5.3. Representación gráfica. Plano complejo

Cada complejo z = a + bi se representa como un punto (a, b) del plano, o equivalentemente como un vector desde el origen hasta ese punto.

- **Eje real**: eje OX.
- **Eje imaginario**: eje OY.
- Los números reales ocupan el eje OX; los imaginarios puros (a = 0) el eje OY.

### 5.3.1. Afijo

El **afijo** de z = a + bi es el punto A(a, b).

### 5.3.2. Módulo

|z| = √(a² + b²) (distancia del origen al afijo). Coincide con el módulo del vector (a, b).

**Propiedades**:
- |z| ≥ 0;  |z| = 0 ⇔ z = 0.
- |z·w| = |z|·|w|;  |z/w| = |z|/|w|.
- |z + w| ≤ |z| + |w|.
- |z|² = z · z̄.

### 5.3.3. Argumento

El **argumento** arg(z) es el ángulo α que forma el vector (a, b) con el semieje OX positivo, medido en sentido antihorario.

- En [0, 2π) se llama **argumento principal** (a veces en (−π, π]).
- tan α = b/a (hay que elegir el cuadrante correcto según los signos de a y b).

## 5.4. Forma polar y trigonométrica

### 5.4.1. Forma trigonométrica

z = r·(cos α + i sen α),  con r = |z| y α = arg(z).

### 5.4.2. Forma polar

z = r_α  o bien z = |z|_{arg(z)}.

### 5.4.3. Paso binómica → polar

Dado z = a + bi:
- r = √(a² + b²)
- α = arctan(b/a), ajustado al cuadrante:
  - Primer cuadrante (a > 0, b ≥ 0): α directamente.
  - Segundo (a < 0, b ≥ 0): α + 180°.
  - Tercero (a < 0, b < 0): α + 180°.
  - Cuarto (a > 0, b < 0): α + 360° (o negativo).

### 5.4.4. Paso polar → binómica

z = r_α = r·cos α + r·sen α · i.

## 5.5. Operaciones en forma polar

### 5.5.1. Producto

r_α · s_β = (r·s)_{α + β}.

### 5.5.2. Cociente

r_α / s_β = (r/s)_{α − β}.

### 5.5.3. Potencia (fórmula de De Moivre)

(r_α)ⁿ = r^n_{nα}.

Equivalentemente:  (cos α + i sen α)ⁿ = cos(nα) + i sen(nα).

### 5.5.4. Raíces

La raíz n-ésima de z = r_α tiene **n soluciones distintas**:

z_k = (ⁿ√r)_{(α + 360° k)/n},  k = 0, 1, …, n − 1.

Los n afijos de las raíces están distribuidos regularmente sobre una circunferencia de radio ⁿ√r centrada en el origen, formando un polígono regular de n lados.

## 5.6. Fórmula de Euler

  eⁱᵅ = cos α + i sen α.

Así:  z = r·eⁱᵅ  (forma exponencial).

Relaciones notables:
- eⁱπ + 1 = 0  (identidad de Euler).
- eⁱ⁽ᵅ⁺β⁾ = eⁱᵅ · eⁱβ justifica la multiplicación polar.
- cos α = (eⁱᵅ + e⁻ⁱᵅ)/2;  sen α = (eⁱᵅ − e⁻ⁱᵅ)/(2i).

## 5.7. Ecuaciones en ℂ

En ℂ toda ecuación polinómica de grado n tiene exactamente n raíces (Teorema Fundamental del Álgebra), contando multiplicidades.

Si el polinomio tiene coeficientes reales, las raíces complejas aparecen por pares conjugados: si z es raíz, también z̄ lo es.

**Ejemplo**: x² − 2x + 5 = 0. Discriminante −16. Raíces: x = (2 ± 4i)/2 = 1 ± 2i.

### 5.7.1. Ecuaciones con raíz z = a + bi conocida

Si se sabe que x = a + bi es raíz y el polinomio tiene coeficientes reales, (x − (a + bi))(x − (a − bi)) = x² − 2ax + (a² + b²) es factor.

## 5.8. Ejemplos resueltos

**Ejemplo 1**. Calcula (3 + 2i)(1 − i).
= 3 − 3i + 2i − 2i² = 3 − i + 2 = 5 − i.

**Ejemplo 2**. Calcula (2 + i)/(1 − 2i).
Multiplicando por el conjugado del denominador:
(2 + i)(1 + 2i) / [(1 − 2i)(1 + 2i)] = (2 + 4i + i + 2i²) / (1 + 4) = (0 + 5i)/5 = i.

**Ejemplo 3**. Pasa a polar z = −1 + i.
r = √2;  α = 135°.  z = √2_{135°}.

**Ejemplo 4**. Calcula (1 + i)¹⁰.
1 + i = √2_{45°}. Por De Moivre: (√2)¹⁰ _{450°} = 32_{90°} = 32i.

**Ejemplo 5**. Halla las raíces cúbicas de 8.
8 = 8_{0°}. Raíces: 2_{0°}, 2_{120°}, 2_{240°}, es decir 2, −1 + √3·i, −1 − √3·i.

**Ejemplo 6**. Resuelve z² = −9.
z = ±3i.

**Ejemplo 7**. Halla el complejo z tal que 2z + i·z̄ = 3 − i.
Sea z = a + bi, z̄ = a − bi.
2(a + bi) + i(a − bi) = (2a + b) + (2b + a)i = 3 − i.
⇒ 2a + b = 3;  a + 2b = −1.
Resolviendo: a = 7/3, b = −5/3.  z = 7/3 − (5/3)i.

## 5.9. Ejercicios propuestos

1. Calcula i⁴⁵, i¹⁰⁰, i⁷⁵³.
2. Expresa en forma binómica: z = (2 − i)² − (1 + 2i)(3 − i).
3. Halla el módulo y el argumento de z = −√3 + i.
4. Escribe en forma polar: z = 1 + √3·i,  w = −2 − 2i.
5. Calcula (1 − i)⁸ usando De Moivre.
6. Halla las raíces cuartas de −16 y represéntalas.
7. Halla el conjugado, el opuesto y el inverso de z = 3 − 4i.
8. Resuelve x² + 2x + 5 = 0 en ℂ.
9. Determina z ∈ ℂ tal que z · z̄ = 25 y Re(z) = 3.
10. Halla el polinomio mónico de grado mínimo con coeficientes reales y raíces 2 + i y 3.

### Pistas

- **1**: 45 = 4·11 + 1 ⇒ i; 100 = 4·25 ⇒ 1; 753 = 4·188 + 1 ⇒ i.
- **5**: (1 − i) = √2_{315°}. (√2)⁸_{2520°} = 16_{2520° mod 360°} = 16_{0°} = 16.
- **6**: −16 = 16_{180°}. Raíces: 2_{45°}, 2_{135°}, 2_{225°}, 2_{315°}, formando un cuadrado.
- **9**: a = 3, a² + b² = 25 ⇒ b² = 16 ⇒ b = ±4. Dos soluciones: 3 + 4i, 3 − 4i.
- **10**: (x − 3)(x − (2 + i))(x − (2 − i)) = (x − 3)(x² − 4x + 5).
