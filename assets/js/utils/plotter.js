// Gráfica una o varias funciones en un contenedor dado.
import { waitFunctionPlot } from './mathRender.js';

export async function plot(target, options) {
  const fp = await waitFunctionPlot();
  target.innerHTML = '';
  const width = Math.min(target.clientWidth || 600, 720);
  const config = Object.assign({
    target,
    width,
    height: 340,
    grid: true,
    yAxis: { domain: [-10, 10] },
    xAxis: { domain: [-10, 10] },
    disableZoom: false,
  }, options || {});
  try {
    fp(config);
  } catch (err) {
    target.innerHTML = `<p style="color:#ef4444;padding:12px">Error en gráfica: ${err.message}</p>`;
  }
}
