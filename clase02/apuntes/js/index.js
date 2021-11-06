console.log(document.querySelector('title').innerText);

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

// Ejemplo: Por valor

let nombre = "Nicolás";

function datos(nombre2) {

    nombre2 = nombre2 + " Nuevo"; // Nicolás Nuevo
    return nombre2;
}

console.log(datos(nombre));
console.log(nombre);

// Ejemplo por referencia:

let id = [];

function dato(id) {
    let nuevoValor = id[0] = 2;
    return nuevoValor;
}

console.log(dato(id));
console.log(id); // ahora es 2

/* -------------------------------------------------------------------------------------*/
/* Objetos                                                                              */
/* -------------------------------------------------------------------------------------*/

// objetos literal

const persona = {nombre: "Lucas", edad: 20}; // forma de escribirlo

/*const persona = {
    nombre: "Lucas",
    edad: 20
};
*/

console.log(persona);
console.log(persona.nombre);
console.log(persona['nombre']);
console.log(persona.edad);
console.log(persona['edad']); 

/* -------------------------------------------------------------------------------------*/
/* Acceso BOM - Browser Object Model                                                    */
/* -------------------------------------------------------------------------------------*/

// Acceso al BOM
console.log(window);

alert('Hola, soy un método BOM');


// setTimeout(()=> {
//     console.log('Me ejecuto luego de 2 segundos');
// }, 2000) 

console.log(window.outerWidth); // ancho del navegador (toda la ventana)
console.log(outerWidth);

if (outerWidth <= 1200) {
    alert('Me muestro cuando el ancho del navegador sea menor o igual 1200')
}





/* -------------------------------------------------------------------------------------*/
/* Acceso DOM - Document Object Model                                                   */
/* -------------------------------------------------------------------------------------*/

// Acceso al DOM
console.log(window.document);
console.log(document);

console.log('Selectores tradicionales');

// selecciono por id.
console.log(window.document.getElementById('tit'));

const tit = window.document.getElementById('tit');
console.log(tit);

console.log(document.querySelectorAll('.hola'));

