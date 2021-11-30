console.log(document.querySelector('title').textContent);

/*------------------------------------------------------------*/
// Objetos en JS: 4 formas.
// 1) Forma literal (JS5)
// 2) Forma a traves de la funcion create de Object
// 3) Forma a traves de las funciones constructoras (JS5)
//      a) Factory (fabrica de objetos)
//      b) Operador new
// 4) Forma a traves de la funcion constructora class (ES6)
/*------------------------------------------------------------*/


//------------FORMA LITERAL------------------------------------
console.log('\n/*** 1) Forma Literal ***/');

let a = {
    nombre: 'Perla',
    altura: '1.7',
}
console.dir(a); // interior del objeto

let key = 'nombre';
console.log(a.nombre);
console.log(a[key]);

console.log(a.hasOwnProperty('nombre')); // true / false
console.log(a.hasOwnProperty('edad')); // true / false

// if (a.hasOwnProperty('nombre')) {
    //     console.log(a.nombre)
    // } else {
        //     console.log('no tiene el atributo');
        // }
        
        
        
//------------FUNCION CREATE OBJECT--------------------------------
console.log('\n/*** 2) Función create de Object ***/');

let prototipo1 = { // hereda por defecto de Object
    saludo: function() {
        console.log('Hola soy el prototipo 1');
    }
} 

console.log(prototipo1);

let prototipo2 = Object.create(Object.prototype); // con null de parametro no hereda de nada. con Object.prototype, hereda de object

prototipo2.saludo2 = function() {
    console.log('Hola soy el proto 2');
}

console.log(prototipo2);

let b = Object.create(prototipo1); // hereda de objeto prototipo1
let b2 = Object.create(prototipo1); // hereda de objeto prototipo1
let b3 = Object.create(prototipo2); // hereda de objeto prototipo2

console.log(prototipo1.isPrototypeOf(b)); // true 
console.log(prototipo1.isPrototypeOf(b2)); // true
console.log(prototipo1.isPrototypeOf(b3)); // false

console.log(prototipo2.isPrototypeOf(b)); // false
console.log(prototipo2.isPrototypeOf(b2)); // false
console.log(prototipo2.isPrototypeOf(b3)); // true



console.log('\n/***2.1) Configuracion avz de obj con Object.create ***/');

// Objeto dinamico

let c = Object.create(Object.prototype);
// creacion de atributos para objeto c:
c.x = 1;
c.y = 2;
console.log(c);

c.x = 22; // reemplazar valor
console.log(c); // se reemplaza porque por defecto writable es true

// Objeto estático

let d = Object.create(Object.prototype, {
    x: {
        value: 1,
        writable: false, // default
        configurable: false, // default
        enumerable: true, // default false
    },
    y: {
        value: 2, 
        enumerable: true, // default false
    }
})

console.log(d);
d.x = 22; // reemplazar valor

console.log(d); // no se cambia el valor (writable: false por defecto, hay que poner true.)

delete d.x; // configurable: false -> no se borra
console.log(d);

for (let key in d) { // itero sobre los atributos del objeto
    console.log(key + ': ', d[key]);
}

//------------FUNCIONES CONSTRUCTORAS------------------------------
console.log('\n/***3) Funciones constructoras ***/');

function foo(){
    console.log('Soy foo');
}

foo();
console.log(foo);
console.dir(foo);

foo.x = true; //agregar atributo a la funcion foo, que es un objeto(prototipo), como todo en JS
console.log(foo.x);

//--Las funciones en JS son variadicas:

function suma(a = 0, b = 0) { // solucion a NaN cuando no se pasan argumentos
    console.log(a,b);
    return a + b;
}

console.log(suma(2,4));

function resta(a, b) {
    console.log(a, b);
    return (a||0) - (b||0); // resuelve NaN // si a es undefine, es 0 // SHORT CIRCUIT OPERATOR
}

console.log(resta(3, 2));
console.log(resta()); 


//--Las funciones en JS tienen 'ambito/scope':

let global = 'global'; // es global, la pueden usar las funciones

function foo2(argumento) {
    let local2 = 'local2';
    console.log(global, local2, argumento);
}

function foo3() {
    let local3 = 'local3';
    console.log(global, local3);
}

foo2('argumento');
foo3();

console.log(global);
// console.log(local2); // error, local2 no es global, esta definida dentro de una funcion, no se puede leer

//--Las funciones en JS tienen contexto (this):

function foo4() {
    console.log(this); // window (this es referencia al contexto del propio objeto)
}

foo4();

var nombre = 'Gastón';

let persona = {
    nombre: 'Pablo',
    saludo: function() {
        console.log(this, this.nombre); // contexto de persona. nombre de persona (persona, persona.nombre )
    }
}

persona.saludo(); // ejecucion de metodo de obj persona ('Pablo')
const saludoExt = persona.saludo; // asignando a saludoExt la funcion persona.saludo() sin ejecutar /variable global(window) - ejecutar saludoExt es lo mismo que persona.saludo() pero hace referencia a otro nombre (nombre global)

saludoExt(); // 'Gaston'(funcion toma variable nombre global )


//---Metodos: apply, call, bind------------------------------------

// recuperar contexto
saludoExt.apply(persona); // vuelve a ser 'Pablo' (le paso el contexto de persona)
saludoExt.call(persona); // le paso el contexto de persona
saludoExt.bind(persona)(); // igual, pero hay que ejecutarlo 

//---Las funciones en JS tienen closure----------------------------

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