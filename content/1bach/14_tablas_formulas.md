# ANEXO. TABLAS Y FÓRMULAS DE REFERENCIA

## A. Trigonometría

### Ángulos notables

| α (°) | 0 | 30 | 45 | 60 | 90 | 120 | 135 | 150 | 180 |
|-------|---|----|----|----|----|----|----|----|-----|
| sen α | 0 | 1/2 | √2/2 | √3/2 | 1 | √3/2 | √2/2 | 1/2 | 0 |
| cos α | 1 | √3/2 | √2/2 | 1/2 | 0 | −1/2 | −√2/2 | −√3/2 | −1 |
| tan α | 0 | √3/3 | 1 | √3 | — | −√3 | −1 | −√3/3 | 0 |

### Identidades fundamentales
- sen²α + cos²α = 1
- 1 + tan²α = sec²α
- 1 + cotan²α = cosec²α

### Ángulos relacionados
- Complementarios: sen(90°−α)=cos α; cos(90°−α)=sen α.
- Suplementarios: sen(180°−α)=sen α; cos(180°−α)=−cos α.
- Opuestos: sen(−α)=−sen α; cos(−α)=cos α.

### Suma y diferencia
- sen(α±β) = sen α cos β ± cos α sen β
- cos(α±β) = cos α cos β ∓ sen α sen β
- tan(α±β) = (tan α ± tan β)/(1 ∓ tan α tan β)

### Doble
- sen 2α = 2 sen α cos α
- cos 2α = cos²α − sen²α = 2cos²α − 1 = 1 − 2sen²α

### Resolución de triángulos
- **Senos**: a/sen A = b/sen B = c/sen C = 2R
- **Coseno**: a² = b² + c² − 2bc cos A
- **Área**: S = ½ ab sen C = √[p(p−a)(p−b)(p−c)] (p = (a+b+c)/2)

## B. Vectores

- Módulo: |**v**| = √(v₁² + v₂²).
- Suma: (u₁+v₁, u₂+v₂).
- Producto escalar: **u**·**v** = u₁v₁ + u₂v₂ = |**u**||**v**|cos α.
- Ángulo: cos α = (**u**·**v**)/(|**u**||**v**|).
- Perpendicularidad: **u**·**v** = 0.
- Paralelismo: u₁v₂ − u₂v₁ = 0.

## C. Rectas

| Forma | Ecuación |
|-------|----------|
| Vectorial | (x,y) = (x₀,y₀) + t·(d₁,d₂) |
| Paramétrica | x = x₀+td₁; y = y₀+td₂ |
| Continua | (x−x₀)/d₁ = (y−y₀)/d₂ |
| General | Ax+By+C = 0 |
| Explícita | y = mx + n |
| Punto-pend. | y−y₀ = m(x−x₀) |
| Segmentaria | x/a + y/b = 1 |

- Pendiente: m = d₂/d₁.
- Perpendicular: m₁m₂ = −1 (o A₁A₂ + B₁B₂ = 0).
- Distancia punto-recta: d = |Ax₀+By₀+C|/√(A²+B²).
- Área triángulo por coordenadas: S = ½|x_A(y_B−y_C) + x_B(y_C−y_A) + x_C(y_A−y_B)|.

## D. Números complejos

- z = a + bi.
- Módulo: |z| = √(a²+b²).
- Conjugado: z̄ = a − bi; z·z̄ = |z|².
- Forma polar: z = r_α; r = |z|, α = arg z.
- Producto: r_α · s_β = (rs)_{α+β}.
- Cociente: r_α / s_β = (r/s)_{α−β}.
- De Moivre: (r_α)ⁿ = rⁿ_{nα}.
- Raíces: z_k = (ⁿ√r)_{(α+360°k)/n}, k = 0,…,n−1.
- Euler: eⁱᵅ = cos α + i sen α.

## E. Transformaciones de funciones

| y = | Efecto |
|-----|--------|
| f(x) + k | desplazamiento vertical k |
| f(x+k) | desplazamiento horizontal −k |
| −f(x) | reflexión eje OX |
| f(−x) | reflexión eje OY |
| k·f(x), k>1 | dilatación vertical |
| k·f(x), 0<k<1 | contracción vertical |
| f(kx), k>1 | contracción horizontal |
| |f(x)| | reflexión de la parte negativa |
| f(|x|) | simetría par |

## F. Cónicas

| Cónica | Ecuación canónica | Elementos |
|--------|-------------------|-----------|
| Circunferencia | (x−a)²+(y−b)² = r² | centro (a,b), radio r |
| Elipse | x²/a² + y²/b² = 1 | focos (±c,0), c²=a²−b² |
| Hipérbola | x²/a² − y²/b² = 1 | focos (±c,0), c²=a²+b², asíntotas y=±(b/a)x |
| Parábola | y² = 4px | foco (p,0), directriz x=−p |

## G. Logaritmos

- log_a(xy) = log_a x + log_a y.
- log_a(x/y) = log_a x − log_a y.
- log_a(xⁿ) = n log_a x.
- Cambio de base: log_a x = log_b x / log_b a.
- log_a 1 = 0; log_a a = 1; a^{log_a x} = x.

## H. Derivadas elementales

| f(x) | f'(x) |
|------|-------|
| k | 0 |
| xⁿ | n·xⁿ⁻¹ |
| √x | 1/(2√x) |
| 1/x | −1/x² |
| eˣ | eˣ |
| aˣ | aˣ ln a |
| ln x | 1/x |
| log_a x | 1/(x ln a) |
| sen x | cos x |
| cos x | −sen x |
| tan x | sec²x = 1+tan²x |
| arcsen x | 1/√(1−x²) |
| arctan x | 1/(1+x²) |

### Reglas
- (f+g)' = f' + g'.
- (f·g)' = f'g + fg'.
- (f/g)' = (f'g − fg')/g².
- Cadena: [f(g(x))]' = f'(g(x))·g'(x).
- Inversa: (f⁻¹)'(y) = 1/f'(x).

## H2. Primitivas inmediatas (integración)

| f(x) | ∫ f(x) dx |
|------|-----------|
| k | kx + C |
| xⁿ, n ≠ −1 | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln a + C |
| sen x | −cos x + C |
| cos x | sen x + C |
| sec²x | tan x + C |
| 1/√(1−x²) | arcsen x + C |
| 1/(1+x²) | arctan x + C |
| f'·fⁿ (n≠−1) | fⁿ⁺¹/(n+1) + C |
| f'/f | ln|f| + C |
| f'·eᶠ | eᶠ + C |

### Reglas de integración
- Linealidad: ∫(af + bg) = a∫f + b∫g.
- Sustitución: ∫ f(g(x))·g'(x) dx = ∫ f(u) du.
- Por partes: ∫ u dv = u·v − ∫ v du.
- Barrow: ∫_a^b f = F(b) − F(a).
- TFC: d/dx ∫_a^x f(t) dt = f(x).

## H3. Probabilidad

| Concepto | Fórmula |
|----------|---------|
| Laplace | P(A) = casos favorables / casos posibles |
| Complementario | P(Ā) = 1 − P(A) |
| Unión | P(A∪B) = P(A) + P(B) − P(A∩B) |
| Condicionada | P(A|B) = P(A∩B)/P(B) |
| Producto | P(A∩B) = P(A)·P(B|A) |
| Independencia | P(A∩B) = P(A)·P(B) |
| Probabilidad total | P(B) = Σ P(Aᵢ)·P(B|Aᵢ) |
| Bayes | P(Aᵢ|B) = P(B|Aᵢ)·P(Aᵢ) / Σ P(Aⱼ)·P(B|Aⱼ) |
| V_{n,k} | n!/(n−k)! |
| VR_{n,k} | nᵏ |
| P_n | n! |
| PR_n^{a₁,a₂,…} | n!/(a₁!·a₂!·…) |
| C(n,k) | n!/(k!(n−k)!) |

## I. Estadística

### Unidimensional
- Media: x̄ = Σxᵢfᵢ/N.
- Varianza: σ² = Σxᵢ²fᵢ/N − x̄².
- Desviación típica: σ = √σ².
- CV = σ/|x̄|.
- Tipificación: z = (x−x̄)/σ.

### Bidimensional
- Covarianza: σ_{xy} = Σxᵢyⱼf_{ij}/N − x̄ȳ.
- Correlación: r = σ_{xy}/(σ_x σ_y).
- Recta Y/X: y − ȳ = (σ_{xy}/σ²_x)(x − x̄).
- Recta X/Y: x − x̄ = (σ_{xy}/σ²_y)(y − ȳ).

## J. Símbolos matemáticos

| Símbolo | Significado |
|---------|-------------|
| ℕ, ℤ, ℚ, ℝ, ℂ | naturales, enteros, racionales, reales, complejos |
| ∈, ∉ | pertenece, no pertenece |
| ⊂, ⊃ | incluido, incluye |
| ∪, ∩ | unión, intersección |
| ∅ | conjunto vacío |
| ∀, ∃ | para todo, existe |
| ⇒, ⇔ | implica, si y sólo si |
| ≈ | aproximadamente igual |
| ≤, ≥ | menor/mayor o igual |
| ∞ | infinito |
| Σ | sumatorio |
| Π | productorio |
| ∫ | integral |
| n! | factorial de n |
| C(n,k) | número combinatorio |
| | · | | valor absoluto / módulo |

## K. Límites notables

- lim_{x→0} sen x / x = 1.
- lim_{x→0} (1 − cos x)/x = 0; /x² = 1/2.
- lim_{x→0} (eˣ − 1)/x = 1.
- lim_{x→0} ln(1+x)/x = 1.
- lim_{x→∞}(1 + 1/x)ˣ = e.
- lim_{x→∞} xⁿ/eˣ = 0 (n fijo).
- lim_{x→∞} (ln x)/x = 0.

## L. Productos notables y factorización

- (a±b)² = a² ± 2ab + b².
- (a+b)(a−b) = a² − b².
- (a±b)³ = a³ ± 3a²b + 3ab² ± b³.
- a² − b² = (a+b)(a−b).
- a³ ± b³ = (a ± b)(a² ∓ ab + b²).

## M. Binomio de Newton

(a+b)ⁿ = Σ_{k=0}^{n} C(n,k) aⁿ⁻ᵏbᵏ.

T_{k+1} = C(n,k) aⁿ⁻ᵏ bᵏ.

## N. Gráficas más representativas

- Lineal: y = mx + n. Recta.
- Cuadrática: y = ax² + bx + c. Parábola.
- Cúbica: y = x³. Punto de inflexión en 0.
- Raíz: y = √x. Dom [0, ∞).
- Racional: y = 1/x. Hipérbola equilátera.
- Exponencial: y = eˣ. Siempre creciente, >0.
- Logarítmica: y = ln x. Dom (0, ∞).
- Trigonométricas: y = sen x, y = cos x. Periódicas, Im = [−1,1].
- Valor absoluto: y = |x|. En forma de V.
