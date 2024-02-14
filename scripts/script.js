document.addEventListener("DOMContentLoaded", function() {
    const botonAbrir = document.getElementById("botonAbrir");
    const carta = document.getElementById("carta");
    const iconoFlotante = document.getElementById("iconoFlotante");

    document.getElementById('container').addEventListener('click', function (event) {
        createFlower(event.clientX, event.clientY);
      });
  
    botonAbrir.addEventListener("click", function() {
      // Dibujar el contenido de la carta
      dibujarContenidoCarta();
      // Desplazar el botón hacia arriba
      gsap.to(botonAbrir, { y: "-100%", duration: 0.5 });
      // Hacer la carta visible con una animación de opacidad y desplazamiento
      gsap.to(carta, { opacity: 1, y: 0, duration: 1, display: "block", delay: 0.5 });
      botonAbrir.style.display = "none";
    });
  
    function dibujarContenidoCarta() {
      const mensaje = document.createElement("div");
      mensaje.id = "mensaje";
      mensaje.innerHTML = `
        <h1>Para Silu</h1>
        <p>Mi compañerita, mi amor</p>
        <p>Te amo más de lo que podrías creer, eres lo más bonito que me ha pasado y con quien más disfruto pasar mi día.</p>
        <h2>Te AMOOO</h2>
      `;
      carta.appendChild(mensaje);
    }

   // Define una función para animar el icono flotante de forma aleatoria
  function animarIcono() {
    gsap.to(iconoFlotante, {
      x: Math.random() * window.innerWidth, // posición X aleatoria dentro del ancho de la ventana
      y: Math.random() * window.innerHeight, // posición Y aleatoria dentro de la altura de la ventana
      duration: 4, // duración de la animación en segundos
      ease: "power1.inOut", // tipo de easing
      onComplete: animarIcono // cuando la animación se completa, inicia otra animación
    });
  }
  
  // Inicia la animación del icono flotante
  animarIcono();

  function createFlower(x, y) {
    const flower = document.createElement('div');
    flower.className = 'rose';
    flower.style.left = x + 'px'; // establecer la posición x
    flower.style.top = y + 'px'; // establecer la posición y
    document.getElementById('container').appendChild(flower);
  
    gsap.from(flower, {
      duration: 1,
      width: 0, // ancho inicial
      height: 0, // alto inicial
      x: x, // posición inicial x
      y: y, // posición inicial y
      ease: "elastic.out(1, 0.3)" // efecto elástico
    });
  }
  
  
});



  