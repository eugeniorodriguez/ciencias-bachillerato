# UD 10 · Límites, Continuidad y Asíntotas

Herramienta de estudio **interactiva** (web estática) para repasar la UD 10 de Matemáticas: límites, continuidad y asíntotas.

## ✨ Qué incluye

- **Inicio** con navegación a todas las secciones.
- **Límites**: teoría, calculadora numérica de límites (laterales, en el infinito), gráfica automática y ejemplos clásicos con un clic.
- **Continuidad**: editor de funciones **a trozos** (puedes añadir/quitar trozos) que detecta empalmes, clasifica la discontinuidad (evitable / salto finito / salto infinito) y grafica.
- **Asíntotas**: analizador que detecta candidatos a verticales, estudia horizontales y oblicuas en ±∞ y las superpone en la gráfica.
- **Ficha PDF**: los ejercicios del PDF (`Ficha Repaso UD 10`) con **pasos desplegables**, solución y gráfica.
- **Práctica**: generador aleatorio de ejercicios por tipo, corrector automático, pistas y solución. Además puedes **guardar tus propios ejercicios** (se almacenan en `localStorage`).
- **Laboratorio**: introduce **cualquier** función y te devuelve dominio aproximado, ceros, simetría, asíntotas, comportamiento en ±∞ y gráfica. Guarda tus funciones favoritas.

Toda la web funciona **100% en el navegador** (no hay backend). MathJax renderiza LaTeX, math.js evalúa expresiones y function-plot dibuja.

## 🚀 Cómo publicarla en GitHub Pages

1. Crea un repo nuevo en GitHub (por ejemplo `ud10-limites`).
2. Entra en la carpeta del proyecto y súbela:
   ```bash
   cd "limites_continuidad_asintotas"
   git init
   git add .
   git commit -m "UD10: web de estudio inicial"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<repo>.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages** y en **Source** selecciona **GitHub Actions**.
4. Al hacer `push` a `main`, el workflow `.github/workflows/deploy.yml` despliega el sitio automáticamente.
5. La URL será `https://<tu-usuario>.github.io/<repo>/`.

No hace falta instalar nada localmente. Si quieres probar en local:

```bash
python3 -m http.server 8080   # o cualquier server estático
# abre http://localhost:8080
```

## ➕ Cómo añadir funciones / ejercicios

Hay **dos formas** de ampliar la herramienta:

### A) Sin tocar código (desde el propio navegador)
- En **Práctica** → *Añadir tu propio ejercicio*: guardas un enunciado (f, punto, solución) y aparece en la lista con su gráfica y comprobador.
- En **Laboratorio** → *Guardar*: memoriza funciones y vuelve a cargarlas cuando quieras.

Estos datos se guardan en `localStorage`, por lo que permanecen entre sesiones **en ese navegador**.

### B) Modificando el código (se comparte con todo el mundo)

La arquitectura está pensada para ampliarla fácilmente:

```
limites_continuidad_asintotas/
├─ index.html               ← entrada
├─ .nojekyll                ← evita que Pages ignore los assets
├─ .github/workflows/
│  └─ deploy.yml            ← despliegue automático
└─ assets/
   ├─ css/main.css
   └─ js/
      ├─ app.js              ← router hash simple
      ├─ data/ficha.js       ← ejercicios del PDF (añade aquí los tuyos)
      ├─ modules/
      │  ├─ inicio.js
      │  ├─ limites.js
      │  ├─ continuidad.js
      │  ├─ asintotas.js
      │  ├─ ficha.js
      │  ├─ practica.js
      │  └─ laboratorio.js
      └─ utils/
         ├─ mathRender.js    ← MathJax + math.js + límites numéricos
         ├─ plotter.js       ← function-plot
         └─ storage.js       ← localStorage
```

Para **añadir un nuevo ejercicio del PDF**, edita [`assets/js/data/ficha.js`](assets/js/data/ficha.js) y añade un objeto con `id`, `seccion`, `enunciado` (LaTeX), `expr` (math.js), `puntoTex`, `pasos[]` y `solucion`.

Para **añadir una nueva sección** (p. ej. *Derivadas*):
1. Crea `assets/js/modules/derivadas.js` que exporte `renderDerivadas(root)`.
2. Regístrala en `app.js` (importa y añádela a `routes`).
3. Añade un `<a>` en la barra de navegación de `index.html`.

## 📚 Librerías usadas (CDN)

- [MathJax 3](https://www.mathjax.org/) — LaTeX.
- [math.js 12](https://mathjs.org/) — parseo y evaluación simbólica/numérica.
- [function-plot 1.25](https://mauriciopoppe.github.io/function-plot/) + D3 — gráficas.

No hay build. No hay `npm install`. Basta con servir los ficheros estáticos.

## 📄 Licencia

Libre para uso educativo.
