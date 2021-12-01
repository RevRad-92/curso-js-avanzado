console.log(document.querySelector('title').textContent);

console.log('\n/*** Herencia en JS5 usando funciones constructoras ***/');
console.log('\n/*** PERSONAJS5 ***/');

function PersonaJS5(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

PersonaJS5.prototype.saludo = function() { // agregar metodo a objeto (clase)
    console.log('Hola que tal');
}

let oscarJS5 = new PersonaJS5('Oscar', 25);
let gastonJS5 = new PersonaJS5('Gastón', 23);

console.dir(PersonaJS5);


console.log('\n/*** EMPLEADOJS5 ***/');

function EmpleadoJS5(sueldo, nombre, edad) {
    PersonaJS5.call(this, nombre, edad); // this refiere a EmpleadoJS5, utiliza constructor PersonaJS5 para nombre y edad //  --> composicion
    this.sueldo = sueldo;
}

EmpleadoJS5.prototype = Object.create(PersonaJS5.prototype); // --> crear Herencia

EmpleadoJS5.prototype.trabajar = function () {
    console.log('Trabajando...');
}

let empleadoJS5 = new EmpleadoJS5(2000, 'Nicolás', 25);
console.log(empleadoJS5);
console.log(empleadoJS5.saludo());
console.log(empleadoJS5.trabajar());

console.log('\n/*** Herencia en ES6 usando class ***/');
console.log('\n/*** PERSONAES6 ***/');

class PersonaES6 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludo() {
        console.log('Hola que tal');
    }
}

console.dir(PersonaES6);

const peralES6 = new PersonaES6('Perla', 25);
const gastonES6 = new PersonaES6('Gastón', 21);

console.log(peralES6, gastonES6);

console.log('\n/*** EMPLEADOES6 ***/');

class EmpleadoES6 extends PersonaES6 { // crea HERENCIA (extends)
    constructor(sueldo, nombre, edad) {
        super(nombre, edad); // COMPOSICION (toma nombre y edad de PersonaES6, para construirlo)
        this.sueldo = sueldo;
    }

    trabajar() {
        console.log('Trabajando...');
    }
}

let empleadoES6 = new EmpleadoES6(2000, 'Alexis', 25);
console.log(empleadoES6);
console.log(empleadoES6.sueldo);
console.log(empleadoES6.nombre);
console.log(empleadoES6.edad);
console.log(empleadoES6.saludo());
console.log(empleadoES6.trabajar());

console.dir(empleadoES6);

