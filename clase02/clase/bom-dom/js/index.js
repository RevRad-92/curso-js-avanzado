console.log(document.querySelector('title').innerText);

/* -------------------------------------------------------------- */
/* ES6 - Tipos de datos                                           */
/* -------------------------------------------------------------- */

// 1) Tipo primitivo: number (int, float => otros lenguajes), boolean, string -> su copia es x valor.
// 2) Tipo objeto: arrays, objetos, funciones -> copia es x referencia.

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

function datos(texto) {
    texto = texto + " Nuevo"; // Nicolás Nuevo
    return texto;
}

console.log(datos(nombre));
console.log(nombre);

// Ejemplo: Por referencia

let id = [];
console.log(id);

function datos2(id) {
    let nuevoValor = id[0] = 2;
    return nuevoValor;
}

console.log(datos2(id));
console.log(id);

/* ------------------------------------------------------------ */
/* Objetos                                                      */
/* ------------------------------------------------------------ */

// Objetos literal
const persona = { nombre: "Lucas", edad: 20 };

/* const persona = {
    nombre: "Lucas", 
    edad: 20
};
*/

console.log(persona);
console.log(persona.nombre);
console.log(persona['nombre']);
console.log(persona.edad);
console.log(persona['edad']);

const animal = { nombre: 'Alex', edad: 10 };

let key = 'nombre';

console.log(animal.key); // acá lo toma como que key o sea es un atributo
console.log(animal[key]); // acá lo toma como que es un variable que tiene que leer y el contenido es el atributo

/* --------------------------------------------------------- */
/* Acceso BOM - Browser Object Model                         */
/* --------------------------------------------------------- */
// https://www.javascripttutorial.net/javascript-bom/

// Accedo al BOM
console.log(window);

//alert('Hola soy un método del BOM');

/* setTimeout(() => {
    console.log('Me ejecuto luego de 5 segundos');
}, 5000) // milisegundos | 1seg = 1000 milis  */

console.log(window.outerWidth);
console.log(outerWidth);

if(outerWidth <= 1200) {
    alert("Me muestro cuando el ancho del navegador sea menor o igual a 1200");
}

/* --------------------------------------------------------- */
/* Acceso DOM - Document Object Model                        */
/* --------------------------------------------------------- */
// https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

// Accedo al DOM
/* console.log(window.document);
console.log(document); */

console.log('Selectores tradicionales');

// Seleciono por id. Recordar los ID son únicos.
console.log(window.document.getElementById('tit'));
console.log(document.getElementById('tit'));

// Let vs Const

let nombre2 = "Max";
nombre2 = "Daniel";
console.log(nombre2);

const nombre3 = "Daniel";
//nombre3 = "Max";
console.log(nombre3);

const tit = window.document.getElementById('tit');
console.log(tit);

console.log(typeof tit);
//tit = "Max";
console.log(typeof tit);

// Importante: Siempre trabajar con const en vez de let.

// Selecciono por etiqueta html: (h1, p, div..., strong...)
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[1].innerText);
console.log(document.getElementsByTagName('li')[5].innerText);

// Selecciono por clase
console.log(window.document.getElementsByClassName('elem')); // HTMLCollection
console.log(window.document.getElementsByClassName('elem')[0].innerText);

const parrafo = window.document.getElementsByClassName('lista');
console.log(parrafo);

parrafo[0].style.color = "red";
parrafo[1].style.color = "green";
parrafo[2].style.color = "blue";

console.log("Selectores Avanzados");

console.log(document.querySelector('#tit')); // ID uso el numeral (#)
console.log(document.querySelectorAll('.lista')); // class uso el punto (.) // devuelve un NodeList
console.log(document.querySelectorAll('.lista')[3].innerText);

// ¿Cómo accedo atributos personalizados en el HTML?
console.log(document.querySelector('[data-tamanio]').dataset.tamanio);

let p = document.createElement('p');
p.innerText = "Elemento creado desde código";

const contenedor = document.querySelector('#contenedor-parrafos');
console.log(contenedor);

contenedor.appendChild(p);

// Ejercicio integrador

const ul = document.querySelector('.lista-colores');
//console.log(ul);

const colores = ['rojo', 'azul', 'verde', 'negro', 'blanco'];

for (let i = 0; i < colores.length; i++) {
    let li = document.createElement('li');
    li.innerText = colores[i];
    ul.appendChild(li);
}