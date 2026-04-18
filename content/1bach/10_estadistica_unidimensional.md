# TEMA 10. ESTADÍSTICA UNIDIMENSIONAL

## 10.1. Conceptos fundamentales

### 10.1.1. Población, muestra e individuo

- **Población**: conjunto de todos los elementos que se estudian.
- **Muestra**: subconjunto representativo de la población.
- **Individuo** o **unidad estadística**: cada elemento.
- **Tamaño** de la muestra: número N de individuos.

### 10.1.2. Variable estadística

Característica objeto de estudio. Puede ser:

- **Cualitativa** (atributos): género, color, profesión.
  - Nominal (sin orden).
  - Ordinal (con orden: excelente, bueno, regular…).
- **Cuantitativa** (numérica):
  - **Discreta**: valores aislados (número de hijos, número de aciertos).
  - **Continua**: cualquier valor de un intervalo (altura, peso, tiempo).

### 10.1.3. Fases de un estudio estadístico

1. Recogida de datos.
2. Organización en tablas.
3. Representación gráfica.
4. Cálculo de parámetros.
5. Interpretación.

## 10.2. Frecuencias y tablas

Sea una variable X con valores x₁, x₂, …, x_k (o intervalos).

- **Frecuencia absoluta** fᵢ: número de individuos con valor xᵢ.
- **Frecuencia relativa** hᵢ = fᵢ/N.
- **Frecuencia absoluta acumulada** Fᵢ = f₁ + f₂ + … + fᵢ.
- **Frecuencia relativa acumulada** Hᵢ = Fᵢ/N.
- **Porcentajes**: hᵢ · 100.

**Propiedades**:
- Σ fᵢ = N.
- Σ hᵢ = 1.

### 10.2.1. Tabla tipo (variable discreta)

| xᵢ | fᵢ | hᵢ | Fᵢ | Hᵢ |
|----|----|----|----|----|
| x₁ | f₁ | h₁ | F₁ | H₁ |
| x₂ | f₂ | h₂ | F₂ | H₂ |
| … | … | … | … | … |

### 10.2.2. Datos agrupados en intervalos

Cuando hay muchos valores o es continua, se agrupan en intervalos o **clases**:
- Se escogen intervalos de igual amplitud a.
- **Marca de clase** xᵢ = punto medio del intervalo.

Regla empírica: número de clases ≈ √N  (o regla de Sturges: 1 + 3,32·log₁₀ N).

## 10.3. Representaciones gráficas

### 10.3.1. Para datos cualitativos

- **Diagrama de barras** (alturas = fᵢ o hᵢ).
- **Diagrama de sectores** (ángulo proporcional a hᵢ·360°).
- **Pictograma**.

### 10.3.2. Datos cuantitativos discretos

- **Diagrama de barras**.
- **Polígono de frecuencias** (une los extremos superiores).
- **Diagrama acumulativo**: va formando una escalera.

### 10.3.3. Datos cuantitativos continuos

- **Histograma**: rectángulos sobre intervalos, altura = frecuencia/amplitud (si amplitud constante, altura = fᵢ).
- **Polígono de frecuencias**: línea que une marcas de clase en la cima de cada rectángulo.
- **Ojiva** (polígono acumulativo).

## 10.4. Medidas de tendencia central

### 10.4.1. Media aritmética

x̄ = (Σ xᵢ fᵢ) / N.

**Propiedades**:
- Σ(xᵢ − x̄)·fᵢ = 0: la suma de desviaciones respecto a la media es 0.
- Lineal: si y = a·x + b, entonces ȳ = a·x̄ + b.
- Sensible a valores atípicos.

### 10.4.2. Mediana (Me)

Valor que deja la mitad de los datos a cada lado.

- Datos sin agrupar: se ordenan y se toma el valor central (o media de los dos centrales si N es par).
- Datos agrupados:  Me = L + [(N/2 − F_{i−1})/fᵢ]·a,  donde L es extremo inferior del intervalo mediano, Fᵢ₋₁ la acumulada anterior, fᵢ su frecuencia y a la amplitud.

### 10.4.3. Moda (Mo)

Valor (o clase) más frecuente. Puede haber varias (**bimodal**, **multimodal**).

Datos agrupados:
  Mo = L + [d₁/(d₁ + d₂)] · a,
con d₁ = fᵢ − fᵢ₋₁, d₂ = fᵢ − fᵢ₊₁ (intervalo modal).

### 10.4.4. Comparación

- Media: usa todos los datos; afectada por outliers.
- Mediana: robusta frente a outliers; buena para distribuciones asimétricas.
- Moda: útil en datos cualitativos y discretos.

## 10.5. Medidas de posición

- **Cuartiles** Q₁, Q₂ = Me, Q₃: dividen la distribución en 4 partes iguales.
- **Deciles** D₁, …, D₉.
- **Percentiles** P₁, …, P₉₉.

**Cálculo** (datos agrupados): análogo al de la mediana, cambiando N/2 por N·k/100.

### 10.5.1. Rango intercuartílico

RIC = Q₃ − Q₁. Mide la dispersión central (contiene el 50 % central de datos).

### 10.5.2. Diagrama de caja y bigotes (boxplot)

Representa gráficamente mínimo, Q₁, Me, Q₃, máximo. Los **valores atípicos** son los que quedan fuera de Q₁ − 1,5·RIC o Q₃ + 1,5·RIC.

## 10.6. Medidas de dispersión

### 10.6.1. Rango o recorrido

R = x_max − x_min.

### 10.6.2. Desviación media

DM = (Σ |xᵢ − x̄|·fᵢ)/N.

### 10.6.3. Varianza

σ² = (Σ (xᵢ − x̄)²·fᵢ)/N.

**Fórmula computacional**:
σ² = (Σ xᵢ²·fᵢ)/N − x̄².

### 10.6.4. Desviación típica

σ = √σ² (unidades de los datos; la varianza está al cuadrado).

**Propiedades**:
- σ ≥ 0; σ = 0 ⇔ todos los datos son iguales.
- Si y = a·x + b, σ_y = |a|·σ_x.

### 10.6.5. Coeficiente de variación (CV)

CV = σ / |x̄|.

Suele expresarse en %. Permite comparar dispersiones de distribuciones con unidades o medias distintas.

## 10.7. Medidas de forma

### 10.7.1. Asimetría (sesgo)

- Simétrica: x̄ ≈ Me ≈ Mo.
- Asimetría positiva (cola a la derecha): Mo < Me < x̄.
- Asimetría negativa (cola a la izquierda): x̄ < Me < Mo.

**Coeficiente de asimetría de Pearson**:  A_s = (x̄ − Mo)/σ.

### 10.7.2. Curtosis

Mide cuán apuntada es la distribución.

## 10.8. Estandarización (puntuación tipificada)

Dado un dato x:
  z = (x − x̄)/σ.
Los valores z son adimensionales y permiten comparar posiciones en distribuciones diferentes.

### 10.8.1. Desigualdad de Chebyshev

Al menos 1 − 1/k² de los datos están en [x̄ − kσ, x̄ + kσ].

## 10.9. Ejemplo completo

Notas de 20 estudiantes:
4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 10, 10.

**Tabla**:
| xᵢ | fᵢ | Fᵢ | xᵢ·fᵢ | xᵢ²·fᵢ |
|----|----|----|--------|---------|
| 4 | 1 | 1 | 4 | 16 |
| 5 | 2 | 3 | 10 | 50 |
| 6 | 3 | 6 | 18 | 108 |
| 7 | 4 | 10 | 28 | 196 |
| 8 | 5 | 15 | 40 | 320 |
| 9 | 3 | 18 | 27 | 243 |
| 10 | 2 | 20 | 20 | 200 |
| **Σ** | 20 | | 147 | 1133 |

- **Media**: x̄ = 147/20 = 7,35.
- **Mediana**: valor 10 y 11 son ambos 7, 8. Me = (7 + 8)/2 = 7,5. (Con N = 20, posición (N+1)/2 = 10,5.)
- **Moda**: Mo = 8 (fᵢ = 5).
- **Varianza**: σ² = 1133/20 − 7,35² = 56,65 − 54,0225 = 2,6275.
- **Desviación típica**: σ ≈ 1,621.
- **CV**: 1,621/7,35 ≈ 22 %.
- **Q₁**: posición 20·0,25 = 5 ⇒ Q₁ = 6. **Q₃**: posición 15 ⇒ Q₃ = 8.
- **RIC**: 2.

## 10.10. Ejercicios propuestos

1. Los pesos (kg) de 15 bebés son:
   3,2; 3,5; 3,4; 3,1; 3,7; 3,6; 3,3; 3,8; 3,5; 3,2; 3,4; 3,6; 3,7; 3,5; 3,4.
   Agrúpalos en intervalos de amplitud 0,2 kg empezando en 3,0. Construye tabla e histograma.

2. Calcula media, mediana y desviación típica de los datos del ejercicio 1.

3. En un examen los resultados de dos grupos A y B son:
   A: x̄ = 6, σ = 1.  B: x̄ = 7,5, σ = 2.
   ¿Cuál es más homogéneo? ¿Qué nota de B equivale a un 7 de A tipificando?

4. Halla la mediana (datos agrupados):
   [0,10): 5;  [10,20): 12;  [20,30): 18;  [30,40): 10;  [40,50): 5.

5. En una distribución, los deciles 1º y 9º son 4 y 18. ¿Qué indica la diferencia? Da una interpretación.

6. La media de 30 datos es 50. Al añadir un nuevo valor la media pasa a 51. ¿Cuál es el valor añadido?

7. Explica por qué no se usa la desviación media sobre la mediana y sí sobre la media.

8. Si a todos los datos se les suma 5 y se multiplican por 2, ¿cómo cambian la media y la desviación típica?

9. Construye un boxplot para: 3, 5, 5, 7, 8, 9, 10, 10, 12, 14, 20.

10. Razona por qué en una distribución unimodal y simétrica se cumple Mo = Me = x̄.

### Pistas

- **3**: CV_A = 1/6 ≈ 17 %; CV_B = 2/7,5 ≈ 26,7 %. A más homogéneo. z = (7 − 6)/1 = 1 ⇒ en B: x = 7,5 + 1·2 = 9,5.
- **4**: mediana en intervalo [20, 30) porque acumulada 17 < 25 < 35. Me = 20 + (25 − 17)/18 · 10 = 20 + 4,44 = 24,44.
- **6**: nuevo dato = 51·31 − 50·30 = 1581 − 1500 = 81.
- **8**: y = 2(x + 5). ȳ = 2(x̄ + 5); σ_y = 2·σ_x.
