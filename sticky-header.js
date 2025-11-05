let prevScrollPos = window.pageYOffset; // Posición inicial del scroll (arriba = 0)
const header = document.getElementById("mainHeader"); // Asegúrate que tu <header> tenga id="mainHeader"

window.onscroll = function() {
    // Posición actual del scroll
    const currentScrollPos = window.pageYOffset;
    
    // 1. Lógica: Si el scroll sube (current < prev)
    if (prevScrollPos > currentScrollPos) {
        // Muestra el header: mueve la posición top a 0
        header.style.top = "0";
    } else {
        // 2. Lógica: Si el scroll baja (current > prev)
        // Esconde el header: mueve la posición top a un valor negativo (ej: -80px)
        // El valor debe ser igual o mayor a la altura total de tu header.
        header.style.top = `-${header.offsetHeight}px`; 
        // offsetHeight es la altura calculada del elemento.
    }
    
    // 3. Actualiza la posición anterior
    prevScrollPos = currentScrollPos;
};