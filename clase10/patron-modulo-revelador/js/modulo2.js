const calcFiguraGeometrica = (function () {

    // Metodos privados
    const PI = Math.PI;

    function calcLongCirc(r) {
        return 2*PI*r;
    }

    function calcPerimRect(b,h) {
        return 2*b + 2*h;
    }

    // exponer

    return {
        calcLongCirc, // cuando tiene parametros
        calcPerimRect,
        // o calcLonCirc: (a) => calcLongCirc(a), ...
        // calcPerimRect: (a, b) => calcPerimRect(a,b),
    }

})();