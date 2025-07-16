document.addEventListener('DOMContentLoaded', () => {
  const fotoIzquierda = document.getElementById('foto-izquierda');
  const fotoDerecha = document.getElementById('foto-derecha');

  if (fotoIzquierda && fotoDerecha) {
    const rutaOriginalIzquierda = 'images/Foto1.jpeg';
    const rutaOriginalDerecha = 'images/Foto2.jpeg';
    const rutaHoverIzquierda = 'images/perros.jpeg';
    const rutaHoverDerecha = 'images/gatos.jpeg';

    const cambiarImagen = (elemento, nuevaRuta) => {
      elemento.classList.add('fade-out');
      setTimeout(() => {
        elemento.src = nuevaRuta;
        elemento.classList.remove('fade-out');
      }, 250); // tiempo igual al del CSS
    };

    fotoIzquierda.addEventListener('mouseover', () => {
      cambiarImagen(fotoIzquierda, rutaHoverIzquierda);
    });

    fotoIzquierda.addEventListener('mouseout', () => {
      cambiarImagen(fotoIzquierda, rutaOriginalIzquierda);
    });

    fotoDerecha.addEventListener('mouseover', () => {
      cambiarImagen(fotoDerecha, rutaHoverDerecha);
    });

    fotoDerecha.addEventListener('mouseout', () => {
      cambiarImagen(fotoDerecha, rutaOriginalDerecha);
    });
  }
});

// -----------------------------------------------
// Redirecciona a los enlaces de YouTube
// -----------------------------------------------
function irAVideo1() {
  window.open("https://www.youtube.com/watch?v=cLfO1lq7_5Y&list=RDcLfO1lq7_5Y&start_radio=1", "_blank");
}

function irAVideo2() {
  window.open("https://www.youtube.com/watch?v=YBWHNEQQpto&list=RDYBWHNEQQpto&start_radio=1", "_blank");
}
