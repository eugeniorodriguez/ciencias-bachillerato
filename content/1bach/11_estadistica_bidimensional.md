# TEMA 11. ESTADÍSTICA BIDIMENSIONAL

## 11.1. Distribuciones bidimensionales

Cuando sobre cada individuo se miden simultáneamente dos variables X e Y, se obtiene una **distribución bidimensional** (X, Y), formada por pares (x₁, y₁), (x₂, y₂), …, (xₙ, yₙ).

**Objetivo**: estudiar la posible relación entre ambas variables: si X aumenta, ¿Y tiende a aumentar, disminuir o permanecer indiferente? Y si hay relación, ¿qué función describe mejor esa tendencia?

## 11.2. Frecuencias y tablas

### 11.2.1. Tabla de doble entrada

Se colocan los valores de X en filas y los de Y en columnas. En cada celda se escribe la **frecuencia absoluta conjunta** f_{ij}.

| X \ Y | y₁ | y₂ | … | yₘ | fᵢ· |
|-------|----|----|---|----|-----|
| x₁ | f₁₁ | f₁₂ | … | f₁ₘ | f₁· |
| x₂ | f₂₁ | … | | | f₂· |
| … | | | | | |
| x_k | | | | | f_k· |
| f·ⱼ | f·₁ | f·₂ | … | f·ₘ | N |

- **Distribuciones marginales**: fᵢ· = Σⱼ f_{ij}; f·ⱼ = Σᵢ f_{ij}.
- **Distribuciones condicionadas**: distribución de X cuando Y = yⱼ, con frecuencias f_{ij}/f·ⱼ.

### 11.2.2. Parámetros marginales

x̄ = Σ xᵢ·fᵢ·/N;  ȳ = Σ yⱼ·f·ⱼ/N.
σ²_x = Σ xᵢ²·fᵢ·/N − x̄²;  σ²_y = Σ yⱼ²·f·ⱼ/N − ȳ².

## 11.3. Nube de puntos (diagrama de dispersión)

Representa cada par (xᵢ, yⱼ) como un punto en el plano. Su forma sugiere:

- Alineación en recta creciente → relación lineal directa.
- Alineación en recta decreciente → relación lineal inversa.
- Forma curva → relación no lineal.
- Nube dispersa sin tendencia → independencia estadística.

## 11.4. Covarianza

σ_{xy} = Σ (xᵢ − x̄)(yⱼ − ȳ)·f_{ij}/N.

**Fórmula computacional**:
σ_{xy} = (Σ xᵢ·yⱼ·f_{ij})/N − x̄·ȳ.

**Interpretación**:
- σ_{xy} > 0: tendencia creciente (Y aumenta cuando X aumenta).
- σ_{xy} < 0: tendencia decreciente.
- σ_{xy} = 0: no hay relación lineal (puede haber relación no lineal).

**Limitación**: depende de las unidades. Conviene usar el coeficiente de correlación.

## 11.5. Correlación lineal

### 11.5.1. Coeficiente de correlación de Pearson

r = σ_{xy} / (σ_x · σ_y).

**Propiedades**:
- −1 ≤ r ≤ 1.
- r = 1: relación lineal directa perfecta. r = −1: inversa perfecta.
- r = 0: sin relación lineal (pero podría haber relación no lineal).
- Adimensional.

**Escala orientativa**:
| |r| | Fuerza |
|-----|--------|
| 0,0 – 0,2 | nula / muy débil |
| 0,2 – 0,4 | débil |
| 0,4 – 0,7 | moderada |
| 0,7 – 0,9 | fuerte |
| 0,9 – 1,0 | muy fuerte |

### 11.5.2. Correlación vs. causalidad

Una correlación alta indica asociación, **no implica causalidad**. Pueden existir variables ocultas (confusión) o azar.

## 11.6. Recta de regresión

Se busca la mejor recta que ajusta la nube de puntos. El criterio habitual es el de **mínimos cuadrados**: minimizar la suma de los cuadrados de las distancias verticales (o horizontales) entre los puntos y la recta.

### 11.6.1. Recta de regresión de Y sobre X

Minimiza Σ (yⱼ − (a·xᵢ + b))². Resultado:

  y − ȳ = (σ_{xy}/σ²_x) · (x − x̄).

Pendiente: m_{y/x} = σ_{xy}/σ²_x. Es la **recta de regresión de Y sobre X**, útil para predecir Y conocido X.

### 11.6.2. Recta de regresión de X sobre Y

Minimiza Σ (xᵢ − (c·yⱼ + d))². Resultado:

  x − x̄ = (σ_{xy}/σ²_y) · (y − ȳ).

Útil para predecir X conocido Y.

### 11.6.3. Relación entre ambas rectas

- Se cortan siempre en el **centro de gravedad** (x̄, ȳ).
- El producto de sus pendientes (cuando se expresan en la misma variable dependiente) es el cuadrado de r:
  m_{y/x} · m_{x/y} = r².
- Si r = ±1: ambas rectas coinciden. Si r = 0: son perpendiculares (horizontal y vertical por (x̄, ȳ)).

### 11.6.4. Coeficiente de determinación

R² = r². Indica la fracción de la varianza de Y explicada por la relación lineal con X.

Si R² = 0,81, el 81 % de la variabilidad de Y queda explicada por la regresión lineal.

## 11.7. Estimaciones y predicciones

Una vez obtenida la recta de Y sobre X, se puede estimar y* = a·x* + b para un valor x* dado.

**Cautelas**:
- La estimación es fiable sólo si r es alto.
- No extrapolar fuera del rango de datos observado.
- La relación puede no ser lineal en realidad: inspeccionar la nube.

## 11.8. Ejemplo completo

Datos (X = horas de estudio semanales, Y = nota del examen):

| X | 2 | 4 | 5 | 6 | 8 | 10 |
|---|---|---|---|---|---|----|
| Y | 3 | 5 | 6 | 7 | 8 | 9 |

N = 6.

- Σ x = 35; x̄ = 35/6 ≈ 5,833.
- Σ y = 38; ȳ = 38/6 ≈ 6,333.
- Σ x² = 4 + 16 + 25 + 36 + 64 + 100 = 245; σ²_x = 245/6 − 5,833² = 40,83 − 34,03 = 6,81.
- Σ y² = 9 + 25 + 36 + 49 + 64 + 81 = 264; σ²_y = 264/6 − 6,333² = 44 − 40,11 = 3,89.
- Σ xy = 6 + 20 + 30 + 42 + 64 + 90 = 252; σ_{xy} = 252/6 − 5,833·6,333 = 42 − 36,94 = 5,06.

- r = 5,06 / (√6,81 · √3,89) = 5,06 / (2,61·1,97) ≈ 5,06/5,14 ≈ 0,984. Correlación muy fuerte y directa.

- Recta Y/X: pendiente = 5,06/6,81 = 0,74.
  y − 6,333 = 0,74·(x − 5,833) ⇒ y = 0,74 x + 2,01.

- Predicción para 7 horas: y ≈ 0,74·7 + 2,01 = 7,2.

## 11.9. Otras regresiones

Si la nube no es lineal, pueden ensayarse otros ajustes:

- **Parabólica**: y = ax² + bx + c.
- **Exponencial**: y = a·bˣ (aplicando logaritmos se linealiza: ln y = ln a + x·ln b).
- **Potencial**: y = a·xᵇ (se linealiza con logaritmos en ambas variables).
- **Logarítmica**: y = a + b·ln x.

Se elige la que maximice R².

## 11.10. Ejercicios propuestos

1. Para los datos (1,2), (2,3), (3,5), (4,6), (5,8), (6,9) halla r y la recta de regresión de Y sobre X.

2. En un estudio de 50 personas se registró la estatura (X, en cm) y el peso (Y, en kg). Los parámetros fueron x̄=170, ȳ=68, σ_x=8, σ_y=10, r=0,75. Estima el peso de alguien que mide 180 cm.

3. En una distribución, σ²_x = 4, σ²_y = 9, σ_{xy} = 5. ¿Es válida esa covarianza?

4. Demuestra que las rectas de regresión se cortan en (x̄, ȳ).

5. Si r = 0 y las marginales no son constantes, justifica que las rectas de regresión son horizontal y vertical.

6. Dados σ_x = 3, σ_y = 4, σ_{xy} = −6, halla r y las pendientes de ambas rectas.

7. Al cambiar las unidades (X en metros por X en cm), ¿cambia la media, la varianza, la covarianza, el coeficiente de correlación? Justifica.

8. Una nube tiene R² = 0,64 para ajuste lineal. ¿Qué proporción de la variabilidad queda sin explicar?

9. Una regresión lineal da y = 2x + 1. Si x̄ = 5, ¿cuál es ȳ?

10. Se sospecha relación exponencial Y = a·e^{bX}. Linealiza y explica cómo aplicar mínimos cuadrados.

### Pistas

- **1**: Σx=21, Σy=33, Σxy=153, Σx²=91, Σy²=239. x̄=3,5, ȳ=5,5. σ²_x=35/12≈2,92. σ_{xy}=25,5/6=... [al calcular: recta y≈1,34x+0,81, r≈0,99].
- **2**: y − 68 = (0,75·10/8)(x − 170) = 0,9375·(x − 170). Para x=180: y ≈ 77,4 kg.
- **3**: |σ_{xy}| ≤ σ_x·σ_y ⇒ |5| ≤ 2·3 = 6. Sí es válida.
- **6**: r = −6/(3·4) = −0,5. m_{y/x} = σ_{xy}/σ²_x = −6/9 = −2/3. m_{x/y} = −6/16 = −3/8.
- **7**: la media y desviación cambian con la escala, pero r es adimensional: no cambia.
- **8**: 36 % sin explicar.
- **9**: ȳ = 2·5 + 1 = 11.
- **10**: ln Y = ln a + b·X. Llamando Z = ln Y, Z es lineal en X; se aplica regresión lineal sobre (X, Z).

## 11.11. Resumen de fórmulas clave

| Concepto | Fórmula |
|----------|---------|
| Media | x̄ = Σxᵢfᵢ/N |
| Varianza | σ² = Σxᵢ²fᵢ/N − x̄² |
| Covarianza | σ_{xy} = Σxᵢyⱼf_{ij}/N − x̄·ȳ |
| Correlación | r = σ_{xy}/(σ_x·σ_y) |
| Recta Y/X | y − ȳ = (σ_{xy}/σ_x²)(x − x̄) |
| Recta X/Y | x − x̄ = (σ_{xy}/σ_y²)(y − ȳ) |
| Coef. determinación | R² = r² |
