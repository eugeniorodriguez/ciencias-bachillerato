# TEMA 2. TRIGONOMETRÍA

## 2.1. Medida de ángulos

### 2.1.1. Sistemas sexagesimal y radián

- **Sexagesimal**: la circunferencia se divide en 360°. 1° = 60'; 1' = 60''.
- **Radián**: un radián es el ángulo central que abarca un arco de longitud igual al radio.
  Una circunferencia completa mide 2π rad.

### 2.1.2. Conversión entre sistemas

360° ↔ 2π rad   ⇒   180° ↔ π rad.

Regla de tres:  α (rad) = α (°) · π/180;   α (°) = α (rad) · 180/π.

| Grados | Radianes |
|--------|----------|
| 0° | 0 |
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

### 2.1.3. Longitud de arco y área del sector

En una circunferencia de radio r con ángulo α en radianes:
- Longitud de arco:  L = r·α.
- Área de sector circular:  A = (1/2) r² α.

## 2.2. Razones trigonométricas de un ángulo agudo

Dado un triángulo rectángulo con hipotenusa h, cateto opuesto a α llamado co, y cateto contiguo cc:

- sen α = co / h
- cos α = cc / h
- tan α = co / cc = sen α / cos α
- cosec α = 1 / sen α
- sec α = 1 / cos α
- cotan α = 1 / tan α = cos α / sen α

### 2.2.1. Identidades fundamentales

- sen²α + cos²α = 1
- 1 + tan²α = sec²α
- 1 + cotan²α = cosec²α

### 2.2.2. Razones de ángulos notables

| α | 0° | 30° | 45° | 60° | 90° |
|---|----|-----|-----|-----|-----|
| sen α | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos α | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan α | 0 | √3/3 | 1 | √3 | — |

**Cómo recordarlo**: sen(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2.

### 2.2.3. Demostración geométrica

- En un triángulo equilátero de lado 1 dividido por su altura, se obtienen 30° y 60° con catetos 1/2 y √3/2.
- En un triángulo rectángulo isósceles de cateto 1, hipotenusa √2, se obtiene 45°.

## 2.3. Ampliación a cualquier cuadrante

La circunferencia goniométrica (radio 1 centrada en el origen) permite extender las razones a ángulos de 0° a 360° y más allá.

Si el lado terminal del ángulo corta a la circunferencia en P(x, y):
- cos α = x
- sen α = y
- tan α = y/x

### 2.3.1. Signos por cuadrante

| Cuadrante | Ángulo | sen | cos | tan |
|-----------|--------|-----|-----|-----|
| I  | 0°–90°    | + | + | + |
| II | 90°–180°  | + | − | − |
| III| 180°–270° | − | − | + |
| IV | 270°–360° | − | + | − |

Regla mnemotécnica: **Todos–Sólo seno–Tangente–Coseno** (en sentido antihorario desde el I cuadrante).

## 2.4. Relaciones entre razones de ciertos ángulos

### 2.4.1. Ángulos complementarios (suman 90°)

- sen(90° − α) = cos α
- cos(90° − α) = sen α
- tan(90° − α) = cotan α

### 2.4.2. Suplementarios (suman 180°)

- sen(180° − α) = sen α
- cos(180° − α) = −cos α
- tan(180° − α) = −tan α

### 2.4.3. Opuestos (simétricos respecto al eje OX)

- sen(−α) = −sen α  (seno es función impar)
- cos(−α) = cos α  (coseno es función par)
- tan(−α) = −tan α

### 2.4.4. Ángulos que difieren en 180°

- sen(180° + α) = −sen α
- cos(180° + α) = −cos α
- tan(180° + α) = tan α

### 2.4.5. Ángulos que difieren en 360°

Todas las razones son iguales: sen(α + 360°) = sen α, etc. (periodicidad).

## 2.5. Fórmulas de adición y múltiplos

### 2.5.1. Suma y diferencia

- sen(α ± β) = sen α cos β ± cos α sen β
- cos(α ± β) = cos α cos β ∓ sen α sen β
- tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)

### 2.5.2. Ángulo doble

- sen 2α = 2 sen α cos α
- cos 2α = cos²α − sen²α = 1 − 2 sen²α = 2 cos²α − 1
- tan 2α = 2 tan α / (1 − tan²α)

### 2.5.3. Ángulo mitad

- sen(α/2) = ±√[(1 − cos α)/2]
- cos(α/2) = ±√[(1 + cos α)/2]
- tan(α/2) = ±√[(1 − cos α)/(1 + cos α)] = sen α/(1 + cos α) = (1 − cos α)/sen α

### 2.5.4. Transformaciones suma ↔ producto

- sen A + sen B = 2 sen((A+B)/2) cos((A−B)/2)
- sen A − sen B = 2 cos((A+B)/2) sen((A−B)/2)
- cos A + cos B = 2 cos((A+B)/2) cos((A−B)/2)
- cos A − cos B = −2 sen((A+B)/2) sen((A−B)/2)

## 2.6. Ecuaciones trigonométricas

**Estrategia general**:
1. Transformar todo a la misma función (sen, cos o tan) o al mismo ángulo.
2. Usar identidades si hay ángulos dobles/mitades/sumas.
3. Hacer un cambio de variable (por ejemplo t = sen x).
4. Resolver y volver a la variable original, añadiendo todos los ángulos con la misma razón: + 2kπ, + k·180°, etc.

**Ejemplo**: 2 sen²x + sen x − 1 = 0. Con t = sen x: 2t² + t − 1 = 0 ⇒ t = 1/2 o t = −1.
- sen x = 1/2 ⇒ x = 30° + 360°k o x = 150° + 360°k.
- sen x = −1 ⇒ x = 270° + 360°k.

## 2.7. Resolución de triángulos

Dado un triángulo cualquiera (no necesariamente rectángulo) con lados a, b, c opuestos a los ángulos A, B, C respectivamente.

### 2.7.1. Teorema de los senos

a / sen A = b / sen B = c / sen C = 2R  (R = radio del circuncírculo).

### 2.7.2. Teorema del coseno

- a² = b² + c² − 2bc·cos A
- b² = a² + c² − 2ac·cos B
- c² = a² + b² − 2ab·cos C

Generaliza el Pitágoras: si A = 90°, cos A = 0 y recuperamos a² = b² + c².

### 2.7.3. Casos de resolución

| Datos | Estrategia |
|-------|------------|
| LAL (dos lados y el ángulo entre ellos) | cos para el tercer lado, después senos |
| LLL (tres lados) | coseno para cada ángulo |
| ALA (ángulo–lado–ángulo) | tercer ángulo por suma 180°, luego senos |
| LLA (dos lados y un ángulo opuesto) | senos; caso ambiguo: puede haber 0, 1 o 2 soluciones |

### 2.7.4. Área de un triángulo

- Conocidos base y altura:  S = (1/2)·b·h.
- Conocidos dos lados y el ángulo entre ellos:  S = (1/2) a·b·sen C.
- Fórmula de Herón con p = (a+b+c)/2:  S = √[p(p−a)(p−b)(p−c)].
- A partir del circuncírculo:  S = abc/(4R).
- A partir del incírculo de radio r:  S = r·p.

## 2.8. Aplicaciones

### 2.8.1. Altura de un objeto inaccesible

Se toman dos medidas del ángulo de elevación desde dos puntos alineados distantes d. Llamando α y β (α > β):

  h = d / (cotan β − cotan α)

### 2.8.2. Distancia entre dos puntos inaccesibles

Se mide una base y los ángulos hacia cada punto desde ambos extremos; se resuelven triángulos por el teorema de los senos.

## 2.9. Ejercicios propuestos

1. Convierte 72°, 135°, 210°, 315° a radianes.
2. Calcula sin calculadora sen 1200°, cos(−150°), tan 315°.
3. Si sen α = 3/5 y α está en el II cuadrante, calcula cos α y tan α.
4. Si tan α = 2 con α ∈ (0, π/2), calcula sen 2α y cos 2α.
5. Demuestra que (sen α + cos α)² = 1 + sen 2α.
6. Resuelve: sen 2x = cos x en [0, 2π).
7. Resuelve el triángulo con a = 7, b = 10, C = 60°.
8. Determina el área del triángulo de lados 13, 14, 15.
9. Una torre se ve desde dos puntos alineados con su base, distantes 50 m, con ángulos de elevación 30° y 45°. Halla la altura.
10. Demuestra: cos 3α = 4 cos³α − 3 cos α.

### Pistas seleccionadas

- **4**: sen²α = 4/5, cos²α = 1/5 (usando 1 + tan²α). sen 2α = 4/5.
- **6**: sen 2x = 2 sen x cos x ⇒ cos x (2 sen x − 1) = 0.
- **7**: c² = 49 + 100 − 140·(1/2) = 79; c = √79; luego senos.
- **8**: Herón con p = 21. S = √(21·8·7·6) = 84.
- **10**: cos(2α + α) con ángulo doble y suma.
