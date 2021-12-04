const libreria1 = (()=> {
    'use strict';

    // parte privada

    let x = true;

    function getX() {
        console.log(x);
    }

    // parte publica

    // window.modulo1 = getX;
    return {
        getX: () => getX(), // esta forma cuando no tiene parametros
    }
    console.log('Libreria 1 instalada');

})();