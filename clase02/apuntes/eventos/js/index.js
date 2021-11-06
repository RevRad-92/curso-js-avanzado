console.log(document.querySelector('title').innerText);

//----------------
// CALLBACKS
//-------------

console.log("\n/*** CALLBACKS ***/");

let texto1 = () => {
    console.log('soy el texto 1');
}

let texto2 = () => {
    console.log('soy el texto 2');
}

console.log(texto1);
console.log(texto2);
texto1();
texto2();


function prueba(item, callback) {
    // console.log(item);
    // console.log(callback);
    // console.log('callback', callback, '--->' + typeof callback);
    if (typeof callback == 'function') {
        callback();
    } else {
        console.log(`Prueba: el callback: ${callback} no es una función`);
    }
    // forma corta: 
    // if(typeof callback == 'function') callback();
    // else console.log(`Prueba: el callback: ${callback} no es una función`);
}


prueba(2, 'texto');

prueba(4, texto2);

console.log('------------------------');

// function pruebaCon2Callbacks(item, cb1, cb2) {
//     console.log(item);

//     if(typeof callback == 'function') cb1();
//     else console.log(`Prueba: el callback: ${cb1} no es una función`);

//     if(typeof callback == 'function') cb2();
//     else console.log(`Prueba: el callback: ${cb2} no es una función`);

// }

// pruebaCon2Callbacks(10, texto1, texto2);

function operacion(a, b, cb) {
    // forma corta 
    // if (!cb) return "\n/*** Operacion no definida ***"

    if (!cb || typeof cb !== 'function') {
        return "\n/*** Operacion no definida ***"

    }
    return cb(a, b);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplicacion = (a, b) => a * b;

let num1 = 15;
let num2 = 4;

console.log(`La suma es ${operacion(num1, num2, "hola")}`);
console.log(`La resta es ${operacion(num1, num2, resta)}`);


//-----------------
// EVENTOS
//-----------------


console.log("\n/*** EVENTOS ***/");

const btn = document.querySelector('#btn');
// console.log(btn);

function click1() {
    console.log('Click 1');
}

btn.onclick = click1; // pasas el callback al evento. Si repetis abajo otro, lo pisa.

// btn.onclick = function() {
//     console.log('Click 1');
// }

// addEventListener

const callback = () => {
    console.log('click 1');

}

btn.addEventListener('click', callback); // funcion reutilizable

btn.addEventListener('click', function() {
    console.log('Click 2');
})

btn.addEventListener('click', () => {
    console.log('Click 3');
}) // funcion atada a listener
