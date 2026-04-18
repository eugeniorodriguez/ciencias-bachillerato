# Ciencias · Bachillerato

Herramienta de estudio **interactiva** (web estática) para las asignaturas de ciencias de Bachillerato: **Matemáticas, Física, Química y Tecnología**.

🌐 **Live:** https://eugeniorodriguez.github.io/ciencias-bachillerato/

Por ahora la asignatura con contenido completo es **Matemáticas · 1.º Bachillerato · UD 10 (Límites, Continuidad y Asíntotas)**. Las demás asignaturas están preparadas con estructura de bloques y se irán rellenando.

## ✨ Qué incluye

### Estructura general
- **Hub** con las 4 asignaturas de ciencias.
- **Matemáticas → 1.º Bachillerato** → listado de 14 UDs (UD 10 activa).
- **Física / Química / Tecnología** → placeholders con bloques previstos.
- **Breadcrumbs** y **subnav contextual** cuando estás dentro del tema UD 10.
- **Tema claro/oscuro** con persistencia y respeto a `prefers-color-scheme`.
- **Diseño "libro académico"**: papel crema + tinta azul, Source Serif + Inter + JetBrains Mono.

### UD 10 · Límites, Continuidad y Asíntotas
- **Límites**: teoría con trucos, calculadora de límites laterales y en el infinito, gráfica automática, ejemplos clásicos con un clic.
- **Continuidad**: editor de funciones **a trozos** (añade/quita trozos), detecta empalmes, clasifica la discontinuidad (evitable / salto finito / salto infinito) y grafica.
- **Asíntotas**: analizador que detecta candidatos a verticales, estudia horizontales y oblicuas en ±∞ y las superpone en la gráfica.
- **Chuleta**: resumen en una página con los tres bloques y todos los truquillos.
- **Ficha PDF**: los ejercicios del PDF oficial con **pasos desplegables**, solución y gráfica.
- **Práctica**: generador aleatorio por tipo, corrector automático, pistas y solución. Puedes **añadir tus propios ejercicios** (incluso completos con pasos), que se integran en la ficha.
- **Laboratorio**: introduce **cualquier** función y te devuelve dominio aproximado, ceros, simetría, asíntotas y gráfica. Guarda tus funciones favoritas.

Toda la web funciona **100% en el navegador** (no hay backend). MathJax renderiza LaTeX, math.js evalúa expresiones y function-plot dibuja.

## 🚀 Despliegue

El repo se despliega automáticamente en GitHub Pages con el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Cada `git push` a `main` → redeploy automático.

### Probar en local

```bash
python3 -m http.server 8080   # o cualquier server estático
# abre http://localhost:8080
```

## ➕ Cómo ampliar

### Añadir ejercicios (sin tocar código)
- En **Práctica** → *Añadir tu propio ejercicio* o *Añadir ejercicio completo (con pasos)*.
- En **Laboratorio** → *Guardar* funciones favoritas.
- Todo se guarda en `localStorage` del navegador.

### Añadir contenido (tocando código)

```
ciencias-bachillerato/
├─ index.html
├─ .nojekyll
├─ .github/workflows/deploy.yml
└─ assets/
   ├─ css/main.css
   └─ js/
      ├─ app.js                ← router por hash + breadcrumbs + subnav
      ├─ data/ficha.js         ← ejercicios de la ficha PDF
      ├─ modules/
      │  ├─ hub.js             ← landing con las 4 asignaturas
      │  ├─ matematicas.js     ← cursos de Matemáticas
      │  ├─ mates-1bach.js     ← listado de UDs de 1.º BACH
      │  ├─ ud10-home.js       ← landing del tema UD 10
      │  ├─ limites.js         ← sección Límites
      │  ├─ continuidad.js     ← sección Continuidad
      │  ├─ asintotas.js       ← sección Asíntotas
      │  ├─ chuleta.js         ← resumen rápido con trucos
      │  ├─ ficha.js           ← ejercicios del PDF
      │  ├─ practica.js        ← generador + banco de ejercicios
      │  ├─ laboratorio.js     ← análisis de funciones propias
      │  ├─ placeholder.js     ← helper para asignaturas "próximamente"
      │  ├─ fisica.js          ← placeholder
      │  ├─ quimica.js         ← placeholder
      │  └─ tecnologia.js      ← placeholder
      └─ utils/
         ├─ mathRender.js      ← MathJax + math.js + límites numéricos
         ├─ plotter.js         ← function-plot
         └─ storage.js         ← localStorage
```

**Añadir un tema nuevo** (por ejemplo UD 11):
1. Marca la UD como `active: true, href: '#/ud11'` en [`assets/js/modules/mates-1bach.js`](assets/js/modules/mates-1bach.js).
2. Crea los módulos que necesites (landing + secciones) en `assets/js/modules/`.
3. Regístralos en el mapa `routes` de [`assets/js/app.js`](assets/js/app.js).

**Añadir un ejercicio al PDF de la UD 10**: edita [`assets/js/data/ficha.js`](assets/js/data/ficha.js) y añade una entrada con `id`, `seccion`, `enunciado` (LaTeX), `expr` (math.js), `puntoTex`, `pasos[]` y `solucion`.

**Rellenar una asignatura nueva** (Física, Química, Tecnología): usa [`placeholder.js`](assets/js/modules/placeholder.js) como referencia y crea módulos propios con la misma estructura (teoría + trucos + ejercicios + laboratorio) que la UD 10.

## 📚 Librerías (todas por CDN)

- [MathJax 3](https://www.mathjax.org/) — renderizado de LaTeX.
- [math.js 12](https://mathjs.org/) — parseo y evaluación simbólica/numérica.
- [function-plot 1.25](https://mauriciopoppe.github.io/function-plot/) + D3 — gráficas.
- Tipografías: *Source Serif 4*, *Inter*, *JetBrains Mono* (Google Fonts).

No hay build. No hay `npm install`.

## 📄 Licencia

Libre para uso educativo.
