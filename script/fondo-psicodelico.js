// fondo-psicodelico.js

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("psychedelicCanvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const section = canvas.parentElement;
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function draw(time) {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      width
    );

    gradient.addColorStop(0, "#00B2A9");     // Color 1
    gradient.addColorStop(0.5, "#1C2D4A");   // Color 2
    gradient.addColorStop(1, "#3A3F4B");     // Color 3

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
});
