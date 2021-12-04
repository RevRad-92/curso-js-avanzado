console.log(document.querySelector('title').textContent);

(function() {
    'use strict';
    // privado
    let x = true;

    function getX() {
        console.log(x);
    }

    // público (exponer)
    window.modulo1 = getX; // agregar metodo a window (funcion sin ejecutar)

    console.log('Modulo 1 instalado');

})();