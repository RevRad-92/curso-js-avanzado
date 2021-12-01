// [CLASE 8] ---Las funciones en JS tienen closure-----------------

function externa(x) {
    console.log(x);
    let z = 5;
    return function interna(y) { // closure (no hay y, quedan disponibles los valores de x & z)
        console.log(y+x+z);
    }
}

let resultado = externa(50); // x = 50 ( y z = 5) // guardas en variable resultado la funcion interna() (que es el resultado de la funcion externa(), que incluye CLOSURE (las variables disponibles hasta ahí))
console.log(resultado); // 50 & funcion interna
console.dir(resultado); // closure: x =50 z = 5 (DISPONIBLES)

resultado(10); // y = 10

// [CLASE 9]--------------------------------------------------

/* --------------------------------------------------------------- */
/* 3.1.e) Las funciones en JavaScript tienen closure (clausuras)   */
/* --------------------------------------------------------------- */
console.log('\n/*** 3.1.d) Las funciones en JavaScript tienen closure (clausuras)  ***/');



function nombreM(firstName) {
    console.log(firstName);
    return function nombreYApellido(lastName) {
        console.log(firstName + ' ' + lastName);
    }
}

let nombreCompleto = nombreM('Maximiliano');

console.log(nombreCompleto);
console.dir(nombreCompleto);

let apellido = 'Príncipe'

nombreCompleto(apellido);

/*---------------------------------------------------------------*/
/* 3.1.f) POO, COP: Aplicacion de funciones constructoras
/*---------------------------------------------------------------*/
console.log('\n/*** 3.1.f) POO, COP: Aplicacion de funciones constructoras  ***/');

let persona = {
    nombre: null,
    edad: null,
}

// let juan = persona; // No
// let ana = persona; // No

// console.log(juan, ana); // No funciona.

// Solución: Función constructora.

console.log('\n/*** 3.a) Funciones constructoras -> Factory o Fabrica de objetos  ***/');

function personas(nombre, edad) { // Funcion constructora de objeto literal
    let p = {
        nombre,
        edad, // igual que edad: edad,
    }
    return p;
}

let gaston = personas('Gastón', 24);
let perla = personas('Perla', 25);

console.log(gaston, perla);

console.log('\n/*** 3.b) Funciones constructoras -> Operador new  ***/');

function PersonaJS5(nombre, edad) { //Funcion constructora (supersintáctica)
    this.nombre = nombre;
    this.edad = edad;
} // no necesita return

console.dir(PersonaJS5);

let alexisJS5 = new PersonaJS5('Alexis', 25);
let nicolasJS5 = new PersonaJS5('Nicolás', 20);

console.log(alexisJS5);
console.log(nicolasJS5);

/*---------------------------------------------------------------*/
/* Cuando escribo palabra reservada new: (new PersonaJS5(...))
/*---------------------------------------------------------------*/

// 1) crea un objeto vacío (p = {})
// 2) ejecuto la funcion constructora. En el contexto (this) del objeto (PersonaJS5) PersonaJS5.call(p, ..)
// 3) retorna el objeto creado en el punto 1) (por eso no es necesario return). Para ser almacenado en una variable. (let alexisJS5)

console.log('\n/*** 4) Funcion Class ES6 (con new)  ***/');

class PersonaES6 {
    
    constructor(nombre, edad) { // constructor suele llevar el mismo nombre de la clase
        this.nombre = nombre;
        this.edad = edad;
    }
}

console.log(PersonaES6);

let perlaES6 = new PersonaES6('Perla', 26);

console.log(perlaES6);
console.log(perlaES6.nombre);
console.log(perlaES6.edad);

console.log('\n/*** PROTOTYPE DE UNA FUNCION CONSTRUCTORA vs PROPIEDADES Prototipo ***/');
console.log('\n/*** Propiedades de instancia / Propiedades prototipos / propiedades estáticas ***/');

/*--------------*/
/*Utilizando JS5*/
/*--------------*/

function AlumnoJS5 (nombre, edad) {
    // propiedad de instancia 
    this.nombre = nombre;
    this.edad = edad;

    AlumnoJS5.contador++; // cada vez q se instancia se suma 1
}
console.log(AlumnoJS5);

//propiedades estáticas (compartido entre todas las instancia del objeto)
AlumnoJS5.contador = 0;

//propiedades prototipos // Metodos de un objeto
AlumnoJS5.prototype.saludo = function() {
    console.log('Hola');
}

const oscarJS5 = new AlumnoJS5('Oscar', 30); // contador 1
const ericaJS5 = new AlumnoJS5('Erica', 22); // contador 2
const nicolas = new AlumnoJS5('Nicolás', 30); // contador 3

console.log(oscarJS5, ericaJS5, nicolas);

console.log(oscarJS5.constructor.contador);
console.log(ericaJS5.constructor.contador);
console.log(nicolas.constructor.contador);


/*--------------*/
/*Utilizando ES6*/
/*--------------*/

class AlumnoES6 {
    // propiedades estaticas
    static contador = 0;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

        AlumnoES6.contador++; // cada vez q se instancia se suma 1
    }

    // propiedad de prototipo
    saludo() {
        console.log('Hola');
    }
}

console.dir(AlumnoES6);

let oscarES6 = new AlumnoES6('Oscar', 25);
let maxES6 = new AlumnoES6('Max', 33);

console.log(oscarES6);
console.log(maxES6);
console.log(AlumnoES6.contador); // 2
console.log(new AlumnoES6('Juan', 22));
console.log(AlumnoES6.contador); // 3


