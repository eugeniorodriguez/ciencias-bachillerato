# TEMA 13. PROBABILIDAD

## 13.1. Experimentos aleatorios

### 13.1.1. Conceptos básicos

- **Experimento determinista**: al repetirlo en las mismas condiciones, el resultado es el mismo.
- **Experimento aleatorio**: al repetirlo en las mismas condiciones, el resultado puede variar; no se puede predecir con certeza.
- **Espacio muestral** E (o Ω): conjunto de todos los resultados elementales posibles del experimento.
- **Suceso**: cualquier subconjunto de E.
- **Suceso elemental**: conjunto con un solo resultado.
- **Suceso seguro**: E (siempre ocurre).
- **Suceso imposible**: ∅.

**Ejemplo**. Lanzar un dado: E = {1, 2, 3, 4, 5, 6}. Suceso "obtener par" = {2, 4, 6}.

### 13.1.2. Operaciones con sucesos

Sean A, B ⊂ E.

- **Unión**: A ∪ B = "ocurre A o B (o ambos)".
- **Intersección**: A ∩ B = "ocurren A y B simultáneamente".
- **Complementario** (o contrario): Ā = E \ A.
- **Diferencia**: A − B = A ∩ B̄ = "A pero no B".
- **Sucesos incompatibles** (excluyentes): A ∩ B = ∅.
- **Sistema completo (partición)**: {A₁, A₂, …, Aₙ} con Aᵢ disjuntos y unión igual a E.

**Leyes de De Morgan**:
- (A ∪ B)̄ = Ā ∩ B̄.
- (A ∩ B)̄ = Ā ∪ B̄.

### 13.1.3. Álgebra de sucesos

- Conmutativa: A ∪ B = B ∪ A.
- Asociativa: (A ∪ B) ∪ C = A ∪ (B ∪ C).
- Distributiva: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).
- A ∪ ∅ = A;  A ∩ ∅ = ∅;  A ∪ E = E;  A ∩ E = A.

## 13.2. Frecuencias y probabilidad

### 13.2.1. Frecuencia relativa

Si un experimento se repite n veces y un suceso A ocurre n_A veces:
  h_n(A) = n_A / n.

A medida que n crece, h_n(A) tiende a un valor estable: **la probabilidad de A** (ley de los grandes números).

### 13.2.2. Definición axiomática (Kolmogórov)

Una probabilidad sobre E es una función P que asigna a cada suceso un número real cumpliendo:
1. P(A) ≥ 0, para todo suceso A.
2. P(E) = 1.
3. Si A y B son incompatibles: P(A ∪ B) = P(A) + P(B).

### 13.2.3. Propiedades deducibles

- P(∅) = 0.
- P(Ā) = 1 − P(A).
- Si A ⊂ B: P(A) ≤ P(B).
- P(A − B) = P(A) − P(A ∩ B).
- **Regla general de la unión**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A∩B) − P(A∩C) − P(B∩C) + P(A∩B∩C).

## 13.3. Regla de Laplace (espacio finito equiprobable)

Cuando todos los sucesos elementales tienen la misma probabilidad:

  P(A) = (número de casos favorables) / (número de casos posibles).

## 13.4. Combinatoria al servicio de la probabilidad

### 13.4.1. Variaciones

- **Variaciones sin repetición** V_{n,k} = n! / (n − k)! = n · (n − 1) · … · (n − k + 1).
- **Variaciones con repetición** VR_{n,k} = nᵏ.

### 13.4.2. Permutaciones

- Sin repetición: P_n = n!.
- Con repetición (n elementos, con grupos de igualdades de tamaños a₁, a₂, …):
  PR_n^{a₁, a₂, …} = n! / (a₁! · a₂! · …).

### 13.4.3. Combinaciones

- C(n, k) = (n choose k) = n! / [k! (n − k)!].

### 13.4.4. Ejemplos

- Palabras de 3 letras distintas con las 5 vocales: V_{5,3} = 60.
- Resultados al lanzar 4 monedas: VR_{2,4} = 2⁴ = 16.
- Resultados al ordenar las letras de AAARRRS: PR_7^{3,3,1} = 7!/(3!3!1!) = 140.

## 13.5. Probabilidad condicionada

### 13.5.1. Definición

Para sucesos A, B con P(B) > 0:
  P(A | B) = P(A ∩ B) / P(B).

Es la probabilidad de A sabiendo que ha ocurrido B.

### 13.5.2. Regla del producto

  P(A ∩ B) = P(A) · P(B | A) = P(B) · P(A | B).

Generalización:  P(A₁ ∩ A₂ ∩ … ∩ Aₙ) = P(A₁) · P(A₂|A₁) · P(A₃|A₁A₂) · … · P(Aₙ|A₁…Aₙ₋₁).

### 13.5.3. Independencia

A y B son **independientes** si la ocurrencia de uno no afecta a la del otro:
  P(A ∩ B) = P(A) · P(B),
equivalentemente P(A | B) = P(A)  y  P(B | A) = P(B).

- **Independencia ≠ incompatibilidad**: si A y B son incompatibles y de probabilidades no nulas, **no** pueden ser independientes (P(A∩B) = 0 ≠ P(A)·P(B) > 0).

## 13.6. Teorema de la probabilidad total

Sea {A₁, A₂, …, Aₙ} una partición de E (sucesos incompatibles entre sí cuya unión es todo el espacio muestral) con P(Aᵢ) > 0. Para cualquier suceso B:

  P(B) = Σᵢ P(Aᵢ) · P(B | Aᵢ).

Idea gráfica: **diagrama en árbol** donde la primera ramificación es la partición y la segunda el suceso B.

**Ejemplo** (elección de aula). En el aula I, un 10 % de ordenadores no funciona; en el aula II, un 3 %. Se elige un aula al azar y dentro un ordenador al azar. Probabilidad de que funcione:
  P(F) = 0,5 · 0,9 + 0,5 · 0,97 = 0,935.

## 13.7. Teorema de Bayes

Bajo las mismas hipótesis del teorema de la probabilidad total:
  P(Aᵢ | B) = [P(B | Aᵢ) · P(Aᵢ)] / [Σⱼ P(Aⱼ) · P(B | Aⱼ)].

Permite calcular la probabilidad a posteriori de Aᵢ una vez sabido que ha ocurrido B.

**Ejemplo** (DVD defectuosos). Operarios A, B, C revisan el 30 %, 50 %, 20 % de los DVDs respectivamente, dejando escapar defectos en un 3 %, 1 %, 2 %. Un cliente recibe un DVD defectuoso. ¿Cuál es la probabilidad de que lo revisase A?

P(E) = 0,03·0,3 + 0,01·0,5 + 0,02·0,2 = 0,009 + 0,005 + 0,004 = 0,018.
P(A | E) = (0,03 · 0,3) / 0,018 = 0,009/0,018 = 0,5.

Análogamente P(B | E) = 0,28;  P(C | E) = 0,22. El más probable es A.

## 13.8. Ejemplos resueltos adicionales

**Ejemplo 1**. Se lanzan dos dados (uno blanco y uno verde). Sean A = "suma = 6", B = "iguales", C = "par en el verde".
|E| = 36. A = {(5,1),(4,2),(3,3),(2,4),(1,5)} ⇒ P(A) = 5/36.
B tiene 6 casos ⇒ P(B) = 6/36 = 1/6.
C tiene 18 casos ⇒ P(C) = 1/2.
P(A ∩ B) = P({(3,3)}) = 1/36.
P(A ∪ C)? A tiene 5 elementos, C 18, A ∩ C (par en verde, suma 6): (4,2),(2,4) → P(A∩C) = 2/36. P(A ∪ C) = 5/36 + 18/36 − 2/36 = 21/36 = 7/12.

**Ejemplo 2**. P(A) = 0,5;  P(B̄) = 0,6;  P(A ∩ B̄) = 0,3. Calcula P(A ∩ B) y P(A ∪ B).
P(B) = 0,4;  P(A ∩ B) = P(A) − P(A ∩ B̄) = 0,5 − 0,3 = 0,2.
P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7.

**Ejemplo 3**. Bolsa con 3 rojas, 2 blancas y 4 verdes. Extraer una:
P(R) = 3/9 = 1/3;  P(V̄) = 5/9;  P(B ∪ V) = 6/9 = 2/3.

**Ejemplo 4**. Moneda trucada con P(cara) = 2·P(cruz). Halla ambas.
Sea P(cruz) = p. 2p + p = 1 ⇒ p = 1/3. P(cara) = 2/3.

**Ejemplo 5**. Se lanzan 4 monedas. Probabilidades:
Espacio: 16 resultados.
P(3 caras) = 4/16 = 1/4.
P(4 caras) = 1/16.
P(al menos 2 caras) = 1/16 + 4/16 + 6/16 = 11/16.
P(al menos 1 cruz) = 1 − P(ninguna cruz) = 1 − 1/16 = 15/16.

**Ejemplo 6**. Dos urnas. U: 8 blancas, 4 verdes; V: 5 blancas, 7 verdes. De cada urna se extrae una bola. ¿P(ambas del mismo color)?
Como son independientes: P(BB) + P(VV) = (8/12)·(5/12) + (4/12)·(7/12) = 40/144 + 28/144 = 68/144 = 17/36.

**Ejemplo 7**. Alarma de un comercio. P(intento atraco) = 0,12. La alarma funciona bien en el 97 % de los casos (suena si hay intento; no suena si no). Si suena, ¿probabilidad de que realmente haya intento?
P(A|T) = 0,97; P(A|T̄) = 0,03. P(A) = 0,97·0,12 + 0,03·0,88 = 0,1164 + 0,0264 = 0,1428.
P(T|A) = 0,97·0,12 / 0,1428 = 0,815.

**Ejemplo 8**. En una clase de 35 alumnos (60% chicas) se eligen, sin reemplazo, 4 personas para cargos.
P(las 4 sean chicos) = (14/35)(13/34)(12/33)(11/32) ≈ 0,0191.

## 13.9. Ejercicios propuestos

1. Sea P(A) = 0,5, P(B) = 0,625, P(A ∪ B) = 0,75. Calcula P(Ā), P(B̄), P(A ∩ B), P(Ā ∩ B̄), P(A ∩ B̄).
2. A y B incompatibles con P(A) = 0,4, P(B) = 0,3. Halla P(Ā), P(A ∪ B), P(Ā ∩ B), P(Ā ∩ B̄).
3. Con las cifras 1, 2, 3, 4, 5, 6 se forman números de 4 cifras. Calcula la probabilidad de que sea múltiplo de 5:
   a) con cifras distintas;  b) pudiendo repetirse.
4. Se forman palabras con las letras AAARRRS. ¿Probabilidad de que resulte "ARRASAR"?
5. Estudiante aprueba Mates con P = 0,7 y Lengua con P = 0,8. Además, P(aprobar Lengua y no Mates) = 0,2. Calcula:
   a) aprobar ambas;
   b) aprobar Mates pero no Lengua;
   c) aprobar al menos una;
   d) no aprobar ninguna.
6. Un artículo se compone de tres partes independientes con probabilidades de fallo 0,02; 0,03; 0,05. Probabilidad de que el artículo no sea defectuoso.
7. P(A) = 0,5, P(A ∩ B) = 0,2, A y B independientes. Halla P(B), P(A ∪ B), P(Ā ∩ B̄), P(exactamente uno de los dos).
8. En una ciudad A (doble de habitantes que B) el 45 % tiene más de 60 años, frente al 30 % en B. Se elige una persona al azar entre las dos ciudades. ¿Probabilidad de que tenga más de 60 años? Si la persona tiene más de 60 años, ¿probabilidad de que sea de A?
9. Familias con 5 hijos (equiprobabilidad niño/niña):
   a) al menos un niño;
   b) exactamente 3 niñas.
10. En una lotería de 100 números, Juan lleva 8. Se sortean 2 premios.
    a) Probabilidad de ganar uno;
    b) probabilidad de ganar al menos uno.

### Pistas

- **1**: P(A∩B) = 0,5 + 0,625 − 0,75 = 0,375. P(Ā∩B̄) = 1 − P(A∪B) = 0,25.
- **2**: Ā∩B = B; P(Ā∩B) = 0,3. P(Ā∩B̄) = 1 − P(A∪B) = 0,3.
- **3a**: 60/360 = 1/6.  3b): favorables VR con terminación en 5 → 6³ = 216; total 6⁴ = 1296 ⇒ 1/6.
- **4**: 1/140.
- **5**: 0,6 / 0,1 / 0,9 / 0,1.
- **6**: 0,98·0,97·0,95 = 0,9031.
- **7**: P(B) = 0,4; P(A∪B) = 0,7; P(Ā∩B̄) = 0,3; "exactamente uno" = 0,5.
- **8**: P(>60) = 0,45·(2/3) + 0,30·(1/3) = 0,4. Bayes: P(A | >60) = 0,45·(2/3)/0,4 = 0,75.
- **9a**: 31/32.  9b): 10/32 = 5/16.
- **10a**: 8·92 / C(100,2) = 736/4950 ≈ 0,149.  10b): 0,154.
