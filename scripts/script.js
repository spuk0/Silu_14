document.addEventListener("DOMContentLoaded", function() {
    const botonAbrir = document.getElementById("botonAbrir");
    const carta = document.getElementById("carta");
    const body = document.getElementById("body");

    //Cargamos las flores
    const flowers = [
        '../assets/flower1.png',
        '../assets/flower2.png',
        '../assets/flower3.png',
        '../assets/flower4.png',
        '../assets/flower5.png',
        '../assets/flower6.png'
    ];

    body.addEventListener('click', function(event) {
        createFlower(event.clientX, event.clientY);
    });

    botonAbrir.addEventListener("click", function() {
        // Dibujar el contenido de la carta
        dibujarContenidoCarta();
        // Desplazar el botón hacia arriba
        gsap.to(botonAbrir, { y: "-100%", duration: 0.5 });
        // Hacer la carta visible usando opacidad y desplazamiento
        gsap.to(carta, { opacity: 1, y: 0, duration: 1, display: "block", delay: 0.5 });
        // Generar marco de flores alrededor de la carta
        generarMarcoFlores(carta);
        // Quitar boton
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

    function generarMarcoFlores(carta) {
        const cartaRect = carta.getBoundingClientRect();
        const margen = 20; // Margen para el marco de flores
    
        // Calcular las posiciones de las flores en los bordes superior, inferior, izquierdo y derecho del marco
        const topPosiciones = calcularPosicionesSimetricas(cartaRect.left + margen, cartaRect.right - margen, cartaRect.top - margen, true);
        const bottomPosiciones = calcularPosicionesSimetricas(cartaRect.left + margen, cartaRect.right - margen, cartaRect.bottom - margen, true); // Resta margen aquí
        const leftPosiciones = calcularPosicionesSimetricas(cartaRect.top + margen, cartaRect.bottom - margen, cartaRect.left - margen, false);
        const rightPosiciones = calcularPosicionesSimetricas(cartaRect.top + margen, cartaRect.bottom - margen, cartaRect.right - margen, false); // Resta margen aquí
    
        // Generar flores en las posiciones calculadas
        topPosiciones.forEach(pos => createFlower(pos.x, pos.y));
        bottomPosiciones.forEach(pos => createFlower(pos.x, pos.y));
        leftPosiciones.forEach(pos => createFlower(pos.x, pos.y));
        rightPosiciones.forEach(pos => createFlower(pos.x, pos.y));
    }
    
    function calcularPosicionesSimetricas(inicio, fin, referencia, horizontal) {
        const posiciones = [];
        const cantidadFlores = 5; // Ajusta según la cantidad de flores deseada
        const paso = (fin - inicio) / (cantidadFlores - 1);
        for (let i = 0; i < cantidadFlores; i++) {
            let x, y;
            if (horizontal) {
                x = inicio + i * paso;
                y = referencia;
            } else {
                x = referencia;
                y = inicio + i * paso;
            }
            posiciones.push({ x, y });
        }
        return posiciones;
    }
    
    
    

    function createFlower(x, y) {
        const randomIndex = Math.floor(Math.random() * flowers.length);
        const flower = document.createElement('div');
        flower.className = 'rose';
        flower.style.left = x + 'px'; // establecer la posición x
        flower.style.top = y + 'px'; // establecer la posición y
        flower.innerHTML = `<img src="${flowers[randomIndex]}" class="rose" alt="Flower">`;
        document.body.appendChild(flower);
    
        gsap.from(flower, {
            duration: 1,
            scale: 0, // escala inicial
            ease: "back.out(1.7)"
        });
    }
    

});
