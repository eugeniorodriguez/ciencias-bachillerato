// Ejercicios tal y como aparecen en el PDF "Ficha Repaso UD 10" con sus pasos.
// Para añadir más ejercicios, simplemente añade entradas aquí.

export const FICHA = [
  {
    id: 'ej1a',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to \\infty} \\dfrac{x^2+3x}{2x^2-5x}$',
    expr: '(x^2+3x)/(2x^2-5x)',
    puntoTex: '+\\infty',
    pasos: [
      'Es una indeterminación $\\tfrac{\\infty}{\\infty}$ (grado num. = grado den. = 2).',
      'Cuando los grados son iguales, el límite es el cociente de los coeficientes directores: $\\tfrac{1}{2}$.',
      'Alternativamente: divide arriba y abajo por $x^2$: $\\dfrac{1 + 3/x}{2 - 5/x} \\xrightarrow{x\\to\\infty} \\dfrac{1}{2}$.'
    ],
    solucion: '$\\boxed{\\dfrac{1}{2}}$'
  },
  {
    id: 'ej1b',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to 1} \\dfrac{x^2-1}{x-2}$',
    expr: '(x^2-1)/(x-2)',
    puntoTex: '1',
    pasos: [
      'Sustitución directa: numerador $= 1-1 = 0$, denominador $= 1-2 = -1$.',
      'No es indeterminación: $\\tfrac{0}{-1} = 0$.'
    ],
    solucion: '$\\boxed{0}$'
  },
  {
    id: 'ej1c',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to \\infty} \\left(\\sqrt{x^2+4x} - x\\right)$',
    expr: 'sqrt(x^2+4x) - x',
    puntoTex: '+\\infty',
    pasos: [
      'Es indeterminación $\\infty - \\infty$. Multiplicamos y dividimos por el conjugado:',
      '$\\dfrac{(\\sqrt{x^2+4x}-x)(\\sqrt{x^2+4x}+x)}{\\sqrt{x^2+4x}+x} = \\dfrac{x^2+4x - x^2}{\\sqrt{x^2+4x}+x} = \\dfrac{4x}{\\sqrt{x^2+4x}+x}$.',
      'Ahora es $\\tfrac{\\infty}{\\infty}$. Sacando $x$ del denominador: $\\dfrac{4x}{x(\\sqrt{1+4/x}+1)} \\to \\dfrac{4}{1+1} = 2$.'
    ],
    solucion: '$\\boxed{2}$'
  },
  {
    id: 'ej1d',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to 3} \\dfrac{x^3-4x^2-3x+18}{x^3-3x^2+9x-27}$',
    expr: '(x^3-4x^2-3x+18)/(x^3-3x^2+9x-27)',
    puntoTex: '3',
    pasos: [
      'Sustituyendo $x=3$: numerador $= 27-36-9+18 = 0$; denominador $= 27-27+27-27 = 0$. Indeterminación $\\tfrac{0}{0}$.',
      'Factorizamos por Ruffini con raíz $x=3$:',
      'Num.: $x^3-4x^2-3x+18 = (x-3)(x^2-x-6) = (x-3)(x-3)(x+2) = (x-3)^2(x+2)$.',
      'Den.: $x^3-3x^2+9x-27 = (x-3)(x^2+9) = (x-3)(x^2+9)$.',
      'Simplificamos: $\\dfrac{(x-3)^2(x+2)}{(x-3)(x^2+9)} = \\dfrac{(x-3)(x+2)}{x^2+9}$.',
      'Ahora $x\\to 3$: $\\dfrac{0 \\cdot 5}{18} = 0$.'
    ],
    solucion: '$\\boxed{0}$'
  },
  {
    id: 'ej1e',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to -\\infty} \\dfrac{x^2-4}{x-2}$',
    expr: '(x^2-4)/(x-2)',
    puntoTex: '-\\infty',
    pasos: [
      'Simplificamos: $\\dfrac{x^2-4}{x-2} = \\dfrac{(x-2)(x+2)}{x-2} = x+2$ (para $x\\ne 2$).',
      'Por tanto $\\lim_{x\\to -\\infty}(x+2) = -\\infty$.'
    ],
    solucion: '$\\boxed{-\\infty}$'
  },
  {
    id: 'ej1f',
    seccion: 'Ejercicio 1 · Límites',
    enunciado: '$\\displaystyle \\lim_{x\\to 2} \\dfrac{x-5}{(x-2)^2}$',
    expr: '(x-5)/(x-2)^2',
    puntoTex: '2',
    pasos: [
      'Al sustituir: numerador $= -3 \\ne 0$, denominador $= 0^+$ (al estar al cuadrado es siempre positivo).',
      'Forma $\\tfrac{-3}{0^+}$, que tiende a $-\\infty$ por ambos lados.',
      'Por tanto el límite es $-\\infty$ (asíntota vertical en $x=2$).'
    ],
    solucion: '$\\boxed{-\\infty}$'
  },
  {
    id: 'ej2a',
    seccion: 'Ejercicio 2 · Continuidad',
    enunciado: `$f(x) = \\begin{cases} \\dfrac{1}{1+x} & \\text{si } x<0 \\\\ x+1 & \\text{si } 0\\le x\\le 2 \\\\ \\dfrac{x-2}{x^2-4} & \\text{si } x>2 \\end{cases}$`,
    expr: null,
    puntoTex: null,
    pasos: [
      'Dominio de cada trozo: $\\tfrac{1}{1+x}$ no se define en $x=-1$, que pertenece al intervalo $x<0$ → asíntota vertical en $x=-1$ (discontinuidad esencial).',
      'En $x=0$: $\\lim^- f(x) = \\tfrac{1}{1+0} = 1$; $\\lim^+ f(x) = 0+1 = 1$; $f(0)=1$. ✅ Continua.',
      'En $x=2$: $\\lim^- f(x) = 2+1 = 3$; $f(2) = 3$. Por la derecha, $f(x)=\\tfrac{x-2}{(x-2)(x+2)} = \\tfrac{1}{x+2}$, así que $\\lim^+ = \\tfrac{1}{4}$.',
      'Los laterales en $x=2$ no coinciden: $3 \\ne \\tfrac14$ → <strong>discontinuidad de salto finito</strong> en $x=2$.',
      'Además, en el tercer trozo, $\\tfrac{x-2}{x^2-4}$ no se define en $x=2$ (pero $x>2$ ahí, así que no afecta al tercer trozo).'
    ],
    solucion: 'La función es <strong>discontinua</strong>: esencial en $x=-1$, continua en $x=0$, salto finito en $x=2$.'
  },
  {
    id: 'ej3a',
    seccion: 'Ejercicio 3 · Asíntotas',
    enunciado: '$f(x) = \\dfrac{x^2+x-2}{x^2+2x-3}$',
    expr: '(x^2+x-2)/(x^2+2x-3)',
    puntoTex: null,
    pasos: [
      'Factorizamos: numerador $= (x+2)(x-1)$; denominador $= (x+3)(x-1)$.',
      'Simplificamos: $f(x) = \\dfrac{x+2}{x+3}$ con dominio $\\mathbb{R}\\setminus\\{-3, 1\\}$.',
      'En $x=1$: $\\lim = \\tfrac{3}{4}$, finito → <strong>discontinuidad evitable</strong>, no es asíntota vertical.',
      'En $x=-3$: $\\lim = \\tfrac{-1}{0} = \\pm\\infty$ → <strong>asíntota vertical</strong> $x=-3$.',
      'Asíntota horizontal: $\\lim_{x\\to\\pm\\infty} \\tfrac{x+2}{x+3} = 1$ → <strong>$y = 1$</strong>.',
      'No hay oblicua (ya hay horizontal).'
    ],
    solucion: 'Dominio: $\\mathbb{R}\\setminus\\{-3,1\\}$. A.V.: $x=-3$. A.H.: $y=1$.'
  },
  {
    id: 'ej3b',
    seccion: 'Ejercicio 3 · Asíntotas',
    enunciado: '$g(x) = \\dfrac{4x^2-2}{x}$',
    expr: '(4x^2-2)/x',
    puntoTex: null,
    pasos: [
      'Dominio: $\\mathbb{R}\\setminus\\{0\\}$ (denominador $=0$ en $x=0$).',
      'En $x=0$: numerador $=-2 \\ne 0$, denominador $=0$ → <strong>asíntota vertical</strong> $x=0$.',
      'Horizontal: $\\lim_{x\\to\\pm\\infty} \\tfrac{4x^2-2}{x} = \\pm\\infty$ → no hay.',
      'Oblicua: hacemos la división $\\tfrac{4x^2-2}{x} = 4x - \\tfrac{2}{x}$.',
      '$m = \\lim \\tfrac{g(x)}{x} = \\lim \\tfrac{4x^2-2}{x^2} = 4$; $n = \\lim (g(x)-4x) = \\lim \\tfrac{-2}{x} = 0$.',
      'Asíntota oblicua: <strong>$y = 4x$</strong>.'
    ],
    solucion: 'Dominio: $\\mathbb{R}\\setminus\\{0\\}$. A.V.: $x=0$. A.O.: $y=4x$.'
  },
];
