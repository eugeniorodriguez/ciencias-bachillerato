---
name: teoria-base-plegada
description: Cada concepto teórico nuevo de las UDs de la web (todas las asignaturas) debe llevar uno o varios bloques plegados <details>📚 Teoría base</details> con los prerequisitos en los que se apoya. Por defecto cerrados, para no entorpecer el flujo principal.
metadata:
  tags: docencia, didáctica, prerequisitos, foldable, teoría, ciencias-bachillerato
---

## Cuándo usar

Siempre que añadas o edites un panel teórico en cualquier UD de la web `ciencias-bachillerato/assets/js/modules/*.js`, identifica los conceptos previos que se usan sin demostrarlos y resúmelos en un bloque plegable **📚 Teoría base** dentro del mismo panel.

Objetivo: que la teoría principal quede limpia y al alumno que necesite repasar le baste con desplegar el bloque sin abandonar la página.

## Patrón HTML obligatorio

```html
<section class="panel">
  <h2>2. Vector en función del ángulo</h2>

  <p>Texto principal del concepto, ejemplo, fórmula, etc.</p>

  <details>
    <summary><strong>📚 Teoría base</strong> — razones trigonométricas en un triángulo rectángulo</summary>
    <div class="theory">
      <h4>Triángulo rectángulo</h4>
      <p>Un triángulo con un ángulo de 90°. El lado opuesto al ángulo recto es la
         <strong>hipotenusa</strong>. Los otros dos son los <strong>catetos</strong>.</p>

      <h4>Las 6 razones trigonométricas</h4>
      <ul class="clean">
        <li>$\sen\alpha = \dfrac{\text{co}}{h}$</li>
        <li>$\cos\alpha = \dfrac{\text{cc}}{h}$</li>
        <li>$\tan\alpha = \dfrac{\text{co}}{\text{cc}}$</li>
        <li>cosecante, secante, cotangente como recíprocos</li>
      </ul>

      <h4>Identidad fundamental y Pitágoras</h4>
      <p>$\sen^2\alpha + \cos^2\alpha = 1$ se sigue directamente del teorema de Pitágoras.</p>
    </div>
  </details>
</section>
```

## Reglas

1. **Siempre plegado por defecto** — `<details>` sin atributo `open` (al estilo del bloque "Curiosidad: etimología de seno y coseno" de fisica-ud9).
2. **Título descriptivo** en el `<summary>`: el emoji 📚 y el rótulo "Teoría base", seguidos de un guion y una pista corta de qué cubre. Ejemplos:
   - `📚 Teoría base — qué es un vector y sus operaciones`
   - `📚 Teoría base — MRU en una dimensión`
   - `📚 Teoría base — derivada y regla de la cadena`
3. **Contenido envuelto en `<div class="theory">`** para conservar el estilo tipográfico del resto de explicaciones.
4. **Si el concepto se apoya en varias bases distintas**, usa varios `<details>` consecutivos en lugar de uno gigante.
5. **No repetir innecesariamente**: si ya existe una UD/sección dedicada al concepto base, enlázala con un `<a>` y resume sólo lo imprescindible.
6. **Prioriza fórmulas y definiciones**, no demostraciones largas. La idea es desbloquear al alumno, no dar otra UD entera.

## Mapeo orientativo de prerequisitos por asignatura

### Física
- Cinemática 2D / tiro parabólico → MRU, MRUA, vectores y trigonometría básica.
- Dinámica → leyes de Newton, descomposición de fuerzas (trigonometría).
- Energía → trabajo y producto escalar, definiciones de Ec/Ep.
- Ondas → MAS, funciones trigonométricas.
- Campos → ley de Coulomb, vectores, integración (en 2.º).

### Matemáticas
- Derivadas → límites y continuidad.
- Integrales → derivadas.
- Complejos → trigonometría y plano cartesiano.
- Estadística bidimensional → unidimensional (media, varianza).
- Probabilidad → combinatoria y conjuntos.

### Química
- Estequiometría → mol, masa molar.
- Termoquímica → entalpía, primer principio.
- Equilibrio → ley de acción de masas, constantes.
- Redox → enlace iónico/covalente, números de oxidación.
- Orgánica → enlace covalente, hibridación.

### Tecnología
- Análisis de circuitos → ley de Ohm, leyes de Kirchhoff.
- Programación → tipos de datos, estructuras de control.
- Neumática → presión, principios de fluidos.

## Verificación tras una edición

Antes de hacer commit, abre el `.js` modificado y comprueba que:
- ✅ Cada `<section class="panel">` con un concepto **no trivial** tiene al menos un `<details><summary>📚 Teoría base — …</summary>…</details>`.
- ✅ El bloque está plegado por defecto.
- ✅ Al desplegarlo, el contenido es autosuficiente para entender el prerequisito sin salir de la página.
- ✅ No hay duplicados entre paneles consecutivos: si dos paneles comparten el mismo prerequisito, repite el bloque en ambos en vez de obligar al alumno a buscarlo arriba.
