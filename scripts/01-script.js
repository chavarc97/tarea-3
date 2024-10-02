// Configuraciones iniciales
let img = null;
let positionX = 0;
let positionY = 0;
let speedX = 2; // Velocidad horizontal
let speedY = 2; // Velocidad vertical

// Inicialización de la imagen
window.onload = function () {
    img = document.querySelector('img');
    img.style.position = 'absolute';  // Para permitir movimiento
    img.style.width = '100px';        // Tamaño de la imagen
    img.style.height = 'auto';        // Mantener la proporción
    moveImage();                      // Iniciar el movimiento
};

// Función para mover la imagen
function moveImage() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Cambiar posición
    positionX += speedX;
    positionY += speedY;

    // Rebotar en los bordes de la pantalla
    if (positionX + img.clientWidth >= windowWidth || positionX <= 0) {
        speedX = -speedX;
    }
    if (positionY + img.clientHeight >= windowHeight || positionY <= 0) {
        speedY = -speedY;
    }

    // Aplicar nueva posición
    img.style.left = positionX + 'px';
    img.style.top = positionY + 'px';

    // Repetir la animación
    requestAnimationFrame(moveImage);
}
