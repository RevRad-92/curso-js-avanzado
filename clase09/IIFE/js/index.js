/* USE STRICT */
'use strict';
var a = 5; // si no empleo constructor para crear la variable (var, let, const), el modo estricto me avisa. ('use strict'; al principio), tira error.
console.log(a);


console.log(document.querySelector('title').textContent);

/*---------------------------------------------------------------*/
/* FUNCIONES AUTO INVOCADAS - IIFE                               */
/*---------------------------------------------------------------*/
console.log('*** FUNCIONES AUTO INVOCADAS - IIFE (ify) ');
// anonima.
// generar librerias y encapsular codigo (para que no se pisen las variables y funciones del resto del proyecto)

function sumar(num) {
    console.log('El numero es: ', num);
}

sumar(3); 



(function(num) {
    console.log(num);
})(3);


((num) => {
    let clave = 'query' + num;
    console.log('Generó la clave correctamente');
    console.log(clave);
})(1234);

(function(num) {
    let clave = 'query' + num;
    console.log('Generó la clave correctamente');
    console.log(clave);
})(1234);



