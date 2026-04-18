# TEMA 4. RECTAS EN EL PLANO

## 4.1. Ecuaciones de la recta

Una recta en el plano puede definirse de varias maneras equivalentes. Dado un punto P₀(x₀, y₀) y un vector director **d** = (d₁, d₂) no nulo:

### 4.1.1. Ecuación vectorial

(x, y) = (x₀, y₀) + t·(d₁, d₂),  t ∈ ℝ.

El parámetro t recorre todos los reales y describe todos los puntos de la recta.

### 4.1.2. Ecuaciones paramétricas

x = x₀ + t·d₁
y = y₀ + t·d₂

### 4.1.3. Ecuación continua

(x − x₀)/d₁ = (y − y₀)/d₂  (si d₁, d₂ ≠ 0).

### 4.1.4. Ecuación general o implícita

Ax + By + C = 0,  con (A, B) = (d₂, −d₁) vector normal a la recta.

El **vector director** es entonces **d** = (−B, A) o (B, −A). El **vector normal** es **n** = (A, B).

### 4.1.5. Ecuación explícita

y = mx + n,  con m = −A/B (pendiente) y n = −C/B (ordenada en el origen).

- **Pendiente** m = d₂/d₁ = Δy/Δx = tan α, donde α es el ángulo que forma la recta con el eje OX.

### 4.1.6. Ecuación punto-pendiente

y − y₀ = m·(x − x₀).

### 4.1.7. Ecuación canónica o segmentaria

x/a + y/b = 1,  donde a y b son los cortes con los ejes OX y OY respectivamente (ninguno nulo).

### 4.1.8. Recta que pasa por dos puntos

Dados P(x₁, y₁) y Q(x₂, y₂):

(x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁).

O también, explícita: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)]·(x − x₁).

## 4.2. Posición relativa de dos rectas

Dadas r: A₁x + B₁y + C₁ = 0 y s: A₂x + B₂y + C₂ = 0.

| Razón | A₁/A₂ vs B₁/B₂ | vs C₁/C₂ | Posición |
|-------|----------------|----------|----------|
| distintas | ≠ | — | secantes (se cortan en un punto) |
| iguales | = | ≠ | paralelas |
| iguales | = | = | coincidentes |

Equivalentemente:
- **Secantes**: los vectores directores son LI (o los normales no son paralelos).
- **Paralelas**: los vectores directores son paralelos pero las rectas no coinciden.
- **Coincidentes**: son la misma recta.

### 4.2.1. Perpendicularidad

Dos rectas son perpendiculares cuando sus vectores directores son perpendiculares, o equivalentemente:
- En explícita: m₁·m₂ = −1.
- En general: A₁A₂ + B₁B₂ = 0.

## 4.3. Haz de rectas que pasa por un punto

Todas las rectas que pasan por P(x₀, y₀) pueden expresarse como:
  y − y₀ = m·(x − x₀),   para cada m ∈ ℝ,
más la recta vertical x = x₀.

### 4.3.1. Haz de rectas determinado por dos

Dadas r: A₁x + B₁y + C₁ = 0 y s: A₂x + B₂y + C₂ = 0 secantes, el haz de rectas que pasan por su punto de corte es:
  λ·(A₁x + B₁y + C₁) + μ·(A₂x + B₂y + C₂) = 0.

## 4.4. Puntos y rectas notables de un triángulo

Sea un triángulo de vértices A, B, C.

### 4.4.1. Mediatrices y circuncentro

La **mediatriz** de un lado es la recta perpendicular al lado en su punto medio. Las tres mediatrices se cortan en un único punto, el **circuncentro**, equidistante de los tres vértices. Es el centro de la circunferencia circunscrita.

Método: mediatriz de AB es el conjunto de puntos P con |PA| = |PB|, de ecuación
(x − a₁)² + (y − a₂)² = (x − b₁)² + (y − b₂)²,
que al simplificar resulta una recta.

### 4.4.2. Alturas y ortocentro

La **altura** desde A es la recta perpendicular a BC que pasa por A. Las tres alturas concurren en el **ortocentro** H.

### 4.4.3. Medianas y baricentro

La **mediana** desde A es la recta que pasa por A y el punto medio de BC. Las tres medianas se cortan en el **baricentro** G = ((a₁+b₁+c₁)/3, (a₂+b₂+c₂)/3), que divide cada mediana en razón 2:1.

### 4.4.4. Bisectrices e incentro

La **bisectriz** de un ángulo es la recta que lo divide por la mitad. Las tres bisectrices interiores concurren en el **incentro** I, centro de la circunferencia inscrita.

Punto de la bisectriz equidistante de los dos lados: uno de ellos se obtiene multiplicando o dividiendo adecuadamente los vectores unitarios de los lados.

### 4.4.5. Recta de Euler

El ortocentro H, el baricentro G y el circuncentro O están alineados, con HG = 2·GO (recta de Euler).

## 4.5. Ángulo entre dos rectas

El ángulo α entre dos rectas de vectores directores **d₁** y **d₂** cumple:

cos α = |**d₁** · **d₂**| / (|**d₁**|·|**d₂**|).

Se toma valor absoluto para obtener el ángulo entre 0 y 90°.

Equivalentemente, con pendientes:
tan α = |m₁ − m₂| / |1 + m₁·m₂|,  siempre que m₁·m₂ ≠ −1.

Si m₁·m₂ = −1, α = 90°.

## 4.6. Distancia

### 4.6.1. Distancia punto–punto

d(P, Q) = √[(x_q − x_p)² + (y_q − y_p)²].

### 4.6.2. Distancia punto–recta

Para recta r: Ax + By + C = 0 y punto P(x₀, y₀):

d(P, r) = |A·x₀ + B·y₀ + C| / √(A² + B²).

**Demostración abreviada**: el punto de r más próximo a P se obtiene como proyección ortogonal. Si **n** = (A, B) es el vector normal y Q(x_q, y_q) un punto cualquiera de r, la componente de PQ sobre **n** es la distancia.

### 4.6.3. Distancia entre dos rectas paralelas

Las paralelas tienen ecuaciones Ax + By + C = 0 y Ax + By + C' = 0.
d(r, s) = |C − C'| / √(A² + B²).

### 4.6.4. Distancia entre rectas secantes o coincidentes

- Secantes: distancia cero (se cortan).
- Coincidentes: distancia cero.

## 4.7. Área de un triángulo con coordenadas

Con vértices A(x_a, y_a), B(x_b, y_b), C(x_c, y_c):

Área = (1/2)·|x_a(y_b − y_c) + x_b(y_c − y_a) + x_c(y_a − y_b)|.

Equivalentemente, con los vectores **u** = AB, **v** = AC:
Área = (1/2) · |u₁·v₂ − u₂·v₁| (determinante).

**Colinealidad**: tres puntos están alineados si y sólo si el determinante anterior es 0.

## 4.8. Simétricos

### 4.8.1. Simétrico de un punto respecto a otro

Si P' es el simétrico de P respecto al punto M (centro): M es punto medio de PP'.
P' = 2M − P.

### 4.8.2. Simétrico de un punto respecto a una recta

1. Hallar la recta perpendicular a r que pasa por P.
2. Intersecar con r, obteniendo M (pie de la perpendicular).
3. P' = 2M − P.

### 4.8.3. Simétrico de una recta respecto a otra

Hay dos casos:
- Si son paralelas: se halla un punto de r y su simétrico, y luego la recta por él con el mismo vector director.
- Si son secantes: se halla el punto de corte y un punto cualquiera simétrico; la recta pedida pasa por ambos.

## 4.9. Ejemplos resueltos

**Ejemplo 1**. Halla las ecuaciones de la recta que pasa por A(2, −1) y B(−3, 4).

Vector director: AB = (−5, 5), o simplificado (−1, 1).
Paramétricas: x = 2 − t; y = −1 + t.
Continua: (x − 2)/(−1) = (y + 1)/1.
General: x + y − 1 = 0.
Explícita: y = −x + 1. Pendiente m = −1.

**Ejemplo 2**. Determina la posición relativa de r: 2x − 3y + 1 = 0 y s: 4x − 6y − 5 = 0.

Razones: 2/4 = 1/2; −3/−6 = 1/2; 1/−5 ≠ 1/2. Paralelas.

**Ejemplo 3**. Halla la distancia de P(2, 3) a la recta r: 3x − 4y + 5 = 0.

d = |3·2 − 4·3 + 5| / √(9 + 16) = |−1|/5 = 1/5.

**Ejemplo 4**. Halla el circuncentro del triángulo A(0, 0), B(6, 0), C(0, 4).

Mediatriz de AB: x = 3.
Mediatriz de AC: y = 2.
Circuncentro: (3, 2).

**Ejemplo 5**. Halla la recta paralela a r: 3x + 2y − 1 = 0 que pasa por P(1, −1).

Misma dirección, forma 3x + 2y + k = 0. Sustituyendo P: 3 − 2 + k = 0 ⇒ k = −1. Recta: 3x + 2y − 1 = 0. Pero esto es la propia r. Repetimos: 3(1) + 2(−1) = 1. La recta es 3x + 2y = 1, ya es la misma r. De hecho P pertenece a r. La "paralela que pasa por P" coincide con r.

**Ejemplo 6**. Ángulo entre r: y = 2x − 1 y s: y = −3x + 2.

m₁ = 2, m₂ = −3. tan α = |2 − (−3)|/|1 + 2·(−3)| = 5/5 = 1 ⇒ α = 45°.

## 4.10. Ejercicios propuestos

1. Escribe todas las formas de la recta que pasa por A(1, 2) con dirección (3, −4).
2. Halla la recta perpendicular a r: 4x − 3y + 2 = 0 que pasa por el origen.
3. Halla el punto simétrico de P(3, 1) respecto de la recta y = x.
4. Decide la posición relativa: r: x + 2y = 3; s: 2x + 4y = 6.
5. Calcula las ecuaciones de las medianas del triángulo A(0, 0), B(4, 0), C(1, 3) y su baricentro.
6. Halla el ortocentro del triángulo del ejercicio 5.
7. Halla el área del triángulo A(1, 1), B(5, 2), C(3, 6).
8. Determina la recta que pasa por P(2, −3) y forma 60° con el eje OX.
9. Calcula la distancia entre las rectas r: 3x + 4y − 1 = 0 y s: 3x + 4y − 11 = 0.
10. Halla el incentro del triángulo A(0, 0), B(3, 0), C(0, 4).

### Pistas

- **3**: simétrico respecto a y = x es intercambiar coordenadas: (1, 3).
- **4**: coincidentes.
- **9**: d = |−1 − (−11)|/√25 = 10/5 = 2.
- **10**: lados a = 5, b = 4, c = 3 (opuestos a A, B, C). Incentro I = (a·A + b·B + c·C)/(a+b+c) = (a·(0,0) + 4·(3,0) + 3·(0,4))/12 = (1, 1).
