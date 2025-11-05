const header = document.getElementById("mainHeader");
let prevScrollPos = window.pageYOffset; 
let headerHeight = 0; 

document.addEventListener('DOMContentLoaded', () => {
    if (header) {
        headerHeight = header.offsetHeight;
        header.style.top = "0";
        document.body.style.paddingTop = headerHeight + 'px';
    } else {
        console.error("Error: Elemento con ID 'mainHeader' no encontrado.");
        return;
    }
});

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (!headerHeight) return;

    if (currentScrollPos <= 5) {
        header.style.top = "0";
        prevScrollPos = 0;
        return;
    }

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else if (currentScrollPos > headerHeight) {
        header.style.top = `-${headerHeight}px`; 
    }
    
    prevScrollPos = currentScrollPos;
};