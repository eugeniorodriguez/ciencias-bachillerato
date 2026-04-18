# TEMA 3. VECTORES EN EL PLANO

## 3.1. Concepto de vector

### 3.1.1. Vector fijo y vector libre

Un **vector fijo** AB tiene origen A y extremo B. Queda determinado por:
- Módulo: distancia |AB|.
- Dirección: la recta que contiene A y B.
- Sentido: de A hacia B.

Dos vectores fijos son **equipolentes** si tienen el mismo módulo, misma dirección y mismo sentido. El conjunto de todos los vectores equipolentes a uno dado constituye un **vector libre**, representable desde cualquier origen.

### 3.1.2. Notaciones

Un vector libre se denota **v** o $\vec{v}$. En coordenadas cartesianas respecto a la base canónica:
**v** = (v₁, v₂) = v₁·**i** + v₂·**j**.

Si **v** es el vector libre determinado por A(a₁, a₂) y B(b₁, b₂):
  **v** = AB = (b₁ − a₁, b₂ − a₂).

## 3.2. Operaciones con vectores

### 3.2.1. Suma

**u** + **v** = (u₁ + v₁, u₂ + v₂).

Gráficamente: regla del paralelogramo o regla del triángulo (poner **v** a continuación de **u**).

**Propiedades**:
- Conmutativa: **u** + **v** = **v** + **u**.
- Asociativa: (**u** + **v**) + **w** = **u** + (**v** + **w**).
- Elemento neutro: vector nulo **0** = (0, 0).
- Elemento opuesto: −**v** = (−v₁, −v₂).

### 3.2.2. Producto por un escalar

k · **v** = (k·v₁, k·v₂),  con k ∈ ℝ.

**Propiedades**:
- k(**u** + **v**) = k·**u** + k·**v**
- (k + m)·**v** = k·**v** + m·**v**
- k(m·**v**) = (km)·**v**
- 1·**v** = **v**,  0·**v** = **0**.

### 3.2.3. Combinación lineal

Un vector **w** es combinación lineal de **v₁**, …, **vₙ** si existen escalares k₁, …, kₙ tales que
**w** = k₁·**v₁** + … + kₙ·**vₙ**.

### 3.2.4. Dependencia e independencia lineal

- Dos vectores son **linealmente dependientes** (LD) si uno es múltiplo del otro; en otro caso son **linealmente independientes** (LI).
- En el plano, tres o más vectores son siempre LD.
- Dos vectores LI del plano forman una **base**: cualquier otro vector se expresa de manera única como combinación lineal suya.

**Criterio con coordenadas** (dos vectores LI en el plano): el determinante
| u₁  u₂ |
| v₁  v₂ | ≠ 0.

## 3.3. Módulo de un vector

El **módulo** o **norma** de **v** = (v₁, v₂) es
|**v**| = √(v₁² + v₂²).

### 3.3.1. Propiedades

- |**v**| ≥ 0;  |**v**| = 0 ⇔ **v** = **0**.
- |k·**v**| = |k|·|**v**|.
- |**u** + **v**| ≤ |**u**| + |**v**|  (desigualdad triangular).

### 3.3.2. Vector unitario

**û** = **v** / |**v**|. Tiene la misma dirección y sentido que **v** y módulo 1.

### 3.3.3. Distancia entre dos puntos

d(A, B) = |AB| = √[(b₁ − a₁)² + (b₂ − a₂)²].

## 3.4. Producto escalar

### 3.4.1. Definición

**u** · **v** = |**u**| · |**v**| · cos α,  con α = ángulo entre **u** y **v** (0 ≤ α ≤ π).

**En coordenadas cartesianas**:
**u** · **v** = u₁ v₁ + u₂ v₂.

### 3.4.2. Propiedades

- Conmutativo: **u** · **v** = **v** · **u**.
- Distributivo: **u** · (**v** + **w**) = **u** · **v** + **u** · **w**.
- (k·**u**) · **v** = k (**u** · **v**).
- **u** · **u** = |**u**|².
- Si **u** y **v** son no nulos: **u** · **v** = 0 ⇔ **u** ⊥ **v**.

### 3.4.3. Cálculo del ángulo entre dos vectores

cos α = (**u** · **v**) / (|**u**| · |**v**|).

### 3.4.4. Proyección de un vector sobre otro

Proyección escalar de **u** sobre **v**:
  proy_**v** **u** = (**u** · **v**) / |**v**|.

Proyección vectorial:
  Proy_**v** **u** = [(**u** · **v**) / |**v**|²] · **v**.

### 3.4.5. Vectores ortogonales y ortonormales

- **Ortogonales**: **u** · **v** = 0.
- **Ortonormales**: ortogonales y de módulo 1 (la base canónica {(1,0), (0,1)} es ortonormal).

### 3.4.6. Desigualdad de Cauchy-Schwarz

|**u** · **v**| ≤ |**u**| · |**v**|, con igualdad si y sólo si **u** y **v** son paralelos.

## 3.5. Aplicaciones

### 3.5.1. Punto medio de un segmento

M = ((a₁ + b₁)/2, (a₂ + b₂)/2).

### 3.5.2. Punto que divide un segmento en razón dada

Si P divide AB en razón k = AP/PB:
P = ((a + k·b)/(1 + k), (a₂ + k·b₂)/(1 + k)).

### 3.5.3. Baricentro de un triángulo

G = ((a₁ + b₁ + c₁)/3, (a₂ + b₂ + c₂)/3).

### 3.5.4. Condiciones de paralelismo y perpendicularidad

- Paralelismo: **u** ∥ **v** ⇔ u₁·v₂ − u₂·v₁ = 0.
- Perpendicularidad: **u** ⊥ **v** ⇔ u₁·v₁ + u₂·v₂ = 0.

### 3.5.5. Vector normal (perpendicular) a uno dado

Si **v** = (a, b), un vector perpendicular es **n** = (−b, a) o (b, −a).

## 3.6. Ejercicios resueltos

**Ejercicio 1**. Dados A(1, 2), B(4, 6), halla AB, |AB| y el unitario de AB.

AB = (3, 4); |AB| = √(9 + 16) = 5; unitario = (3/5, 4/5).

**Ejercicio 2**. Comprueba si **u** = (2, −3) y **v** = (6, −9) son LD.
Determinante: 2·(−9) − (−3)·6 = −18 + 18 = 0. Son LD (de hecho **v** = 3**u**).

**Ejercicio 3**. Calcula el ángulo entre **u** = (1, 2) y **v** = (3, −1).
**u** · **v** = 3 − 2 = 1;  |**u**| = √5;  |**v**| = √10.
cos α = 1/(√5·√10) = 1/√50. α ≈ 81,87°.

**Ejercicio 4**. Halla k para que **u** = (k, 3) y **v** = (2, −k) sean perpendiculares.
**u** · **v** = 2k − 3k = −k = 0 ⇒ k = 0.

**Ejercicio 5**. Los puntos A(2, 1), B(−1, 3), C(5, 7) forman un triángulo. Determina su baricentro y comprueba si es rectángulo.
G = (2, 11/3).
AB = (−3, 2), AC = (3, 6), BC = (6, 4).
AB · AC = −9 + 12 = 3 ≠ 0.
AB · BC = −18 + 8 = −10 ≠ 0.
AC · BC = 18 + 24 = 42 ≠ 0.
No es rectángulo.

**Ejercicio 6**. Halla un vector de módulo 10 y que forme 30° con el eje OX.
**v** = (10 cos 30°, 10 sen 30°) = (5√3, 5).

**Ejercicio 7**. Dados **u** = (3, −4) y **v** = (1, 2), calcula la proyección escalar de **u** sobre **v**.
**u** · **v** = 3 − 8 = −5. |**v**| = √5. Proyección = −5/√5 = −√5.

## 3.7. Ejercicios propuestos

1. Con A(1,−1), B(3, 4), C(−2, 5), calcula AB + 2·CA.
2. Expresa **w** = (5, −1) como combinación lineal de **u** = (1, 2) y **v** = (3, −1).
3. Halla k para que **u** = (k, 1) y **v** = (2, −4) sean paralelos.
4. Determina el ángulo entre AB y AC si A(0,0), B(1, 3), C(4, 1).
5. Encuentra el pie de la altura desde A sobre BC en el triángulo A(1,2), B(3,5), C(6,1).
6. Prueba que los puntos P(1, 2), Q(4, 6), R(5, 10) no están alineados.
7. Dado **u** = (2, −1), halla los vectores de módulo 5 perpendiculares a **u**.
8. Calcula el área del triángulo A(−1,2), B(3,4), C(5,−1) usando la fórmula con producto escalar.
9. Determina si {**u**=(1,3), **v**=(2,6)} forma una base del plano.
10. Un paralelogramo tiene lados **u** y **v** con |**u**| = 4, |**v**| = 3 y un ángulo de 60°. Calcula la longitud de la diagonal mayor.

### Pistas

- **2**: sistema: k + 3m = 5;  2k − m = −1. k = 2/7, m = 11/7.
- **3**: paralelismo: (−4)k = 2 ⇒ k = −1/2.
- **7**: perpendicular: (1, 2) y múltiplos. Unitario (1/√5, 2/√5), escalar ±5 ⇒ (√5, 2√5) y (−√5, −2√5).
- **10**: ley del paralelogramo: diag mayor² = |**u**|² + |**v**|² + 2|**u**||**v**|cos 60°.
