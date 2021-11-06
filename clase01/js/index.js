console.log(document.querySelector('title').innerHTML);

let title = document.querySelector('title');


/* ------------------------------------------------------- */
/* ALUMNI                                                  */
/* ------------------------------------------------------- */
// https://alumni.education/
// Para ingresar a la plataforma es: Su mail y número de dni

/* ------------------------------------------------------- */
/* CONSULTAS                                               */
/* ------------------------------------------------------- */
// Administrativas: alumnos@educacionit.com
// Técnicas: soporte@educacionit.com
// Telegram personal: https://t.me/joinchat/_dDUf3FdknxlMmJh


// ---------------------------------------------
// Páginas de documentación e instalaciones
// ---------------------------------------------
// https://nodejs.org/es/
// https://semver.org/lang/es/
// https://docs.emmet.io/cheat-sheet/
// https://cmder.net/
// https://code.visualstudio.com/
// https://git-scm.com/

// --------------------------------------------
// Extensiones VSC
// --------------------------------------------
// Bracket Pair Colorizer
// Live Server

// --------------------------------------------
// SHORCUTS
// --------------------------------------------
// Ctrl + click - sobre el archivo, en el html me crear carpeta y archivo
// Ctrl + B -  Abre y cierra el sidebar (Donde están los archivos).
// Alt + Shift + a -  Comentarios multilinea.
// Alt + Shift + flecha arriba/abajo - Duplico línea.
// Alt + flecha arriba/abajo - Duplico línea.


// --------------------------------------------
// Historia y creador de JavaScript
// --------------------------------------------
// JavaScript se creo en º0 días

// https://es.wikipedia.org/wiki/Brendan_Eich
// https://www.ecma-international.org/
// https://developer.mozilla.org/es/


/* -------------------------------------------------------------- */
/* JS5 - var                                                      */
/* -------------------------------------------------------------- */
// JavaScript es debilmente tipado. Java, C++ son lenguajes fuertemente tipados

var numero = "Java"; // string
numero = 2; // number
console.log(numero);

/* var PI = 3.1415;
console.log("PI: " + PI);
PI = "Yo que se";
console.log(PI); */

if(true) {
    var numero = 7;
    console.log(numero);
}
//console.log(numero);

/* for (var i = 0; i < 10; i++) {
    console.log(i);
    console.log("------")
}
console.log(i); */

/* -------------------------------------------------------------- */
/* ES6 - let y const                                              */
/* -------------------------------------------------------------- */

let nombre = "Alan";
nombre = "Max";
nombre = 3;

const PI = 3.1415;
//PI = 5.1111;
console.log(PI);

/* -------------------------------------------------------------- */
/* Comentarios                                                    */
/* -------------------------------------------------------------- */

// Comentario una línea

/*
Comentarios multilinea 
Comentarios multilinea 
Comentarios multilinea
*/

/* -------------------------------------------------------------- */
/* Bloques de repitición                                          */
/* -------------------------------------------------------------- */

console.log("--- WHILE --- ");

let x = 0;
while (x < 10) {
    x++; // suma 1 a x
    console.log(x);
}

// Prueba de escritorio

// Pasos -  x
// 1        0
// 2        1
// 10       9
// 11       10

console.log("--- DOWHILE ---");

let result = "";
let i = 0;
// Aunque sea una vez se ejecuta.
do {
    i = i + 1;
    result = result + 1;
} while (i < 5);

console.log(result);

console.log("/* --------------------------------------------------------- */");

// bloques de código anonimos

{
   let a = 5;
   const c = 12;
   console.log(a);
   console.log(c);
}
//console.log(a);
//console.log(c);

// bloque de código condicional

if(true) {
    let b = 6;
    console.log(b);
}
//console.log(b);

// Función autoinvocada

(function() {
    console.log("Se ejecuta sola");
})();

(() => {
    console.log("Se ejecuta sola arrow function");
})();

// Así se ejecuta una función.

/* function sumar() {

}

sumar(); */

/* -------------------------------------------------------------- */
/* ES6 - Arrow function ó funciones flechas o expresiones lambda  */
/* -------------------------------------------------------------- */

console.log('/* ----------------------------------------------------- */');
console.log('Funciones tradicionales');

function saludo(nombre, apellido) {
    console.log("Hola: " + nombre + " " + apellido);
};
saludo("Gonzalo", "Di Mario");

const saludo2 = function(nombre) {
    console.log("Hola: " + nombre);
}
saludo2("Matías");

console.log('Funciones tradicionales');

const saludo3 = (nombre = "Max") => {
    console.log("Hola: " + nombre);
}
saludo3("Gonza");

const saludo4 = nombre => console.log("Hola: " + nombre);

saludo4("Gaston");

/* const mutiplicar = (numero1, numero2) => {
    return numero1 * numero2;
} */

const multiplicar = (numero1, numero2) => numero1 * numero2;

let resultado = multiplicar(2, 3);
console.log(resultado);

const getRandom1a10 = () => {
    let random = Math.random();  // Un número de 0 a 1 // 0.1... 0.5... 0.8... 0.999999
    //console.log(random); 
    random = random * 10; // viene por ejemplo 0.0001
    //console.log(random);
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
    random = parseInt(random); // corta, no redondea, o sea pasa de un número decimal a entero. ej: 5.33424 a 5
    //console.log(random);
    return ++random;
    // ej: random++ si viene 8 devuelvo ese 8 y luego incremento. 
    // ej: ++random si viene 9 imprimo 10. O sea incrementa y devuelvo ese 10.
}

console.log("Esto es un número aletaroio entre 1 a 10: " + getRandom1a10());

/* ------------------------------------------------------------------------ */
/* ES6 - Template String ó Templates literales | `` <= backtick - Alt + 96  */
/* ------------------------------------------------------------------------ */
// https://elcodigoascii.com.ar/
// https://www.notengoenie.com/

console.log(`Esto es un número aleatorio entre 1 a 10: ${getRandom1a10()}`);
console.log(`Esto es un número aleatorio entre 1 a 10: ${getRandom1a10()}`);
console.log(`Esto es un número aleatorio entre 1 a 10: ${getRandom1a10()}`);
console.log(`Esto es un número aleatorio entre 1 a 10: ${getRandom1a10()}`);
console.log(`Esto es un número aleatorio entre 1 a 10: ${getRandom1a10()}`);

/* -------------------------------------------------------------- */
/* ES6 - Tipos de datos                                           */
/* -------------------------------------------------------------- */

// 1) Tipo primitivo: number (int, float => otros lenguajes), boolean, string -> su copia es x valor.
// 2) Tipo objeto: arrays, objetos, funcion -> copia es x referencia.

let firstName = "Oscar";
let edad = 25;
console.log(firstName, `Es un: ${typeof firstName}`); // typeoff nos cuenta el tipo de dato que está dentro de la variable
console.log(edad, `Es un: ${typeof edad}`);

let objeto = {
    nombre: "Matías",
    edad: 25,
}

let arrayEdades = [25, 28, 30, 35];

console.log(objeto, `Es un: ${typeof objeto}`);

console.log(`Holaaaaa Gonzalo ${edad}`);

console.log(arrayEdades, `Es un: ${typeof arrayEdades}`);