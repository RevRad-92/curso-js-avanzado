console.log(document.querySelector('title').innerText);

/* ------------------------------------------------------- */
/* Documentación extra                                     */
/* ------------------------------------------------------- */
// https://www.w3.org/
// https://validator.w3.org/
// https://docs.emmet.io/cheat-sheet/

/* -------------------------------------------------------- */
/* CALLBACKS                                                */
/* -------------------------------------------------------- */

console.log("\n/*** CALLBACKS ***/");

let texto1 = () => {
    console.log('Soy el texto1');
}

let texto2 = () => {
    console.log('Soy el texto2');
}

/* console.log(texto1);
console.log(texto2);
texto1();
texto2(); */

console.log("--------------------------");

function prueba(item, callback) {
    /* console.log(item);
    console.log(callback); */

    /* console.log('------------------------');
    console.log('callback =>', callback, ' ---> ' + typeof callback );
    console.log(typeof callback);
    console.log('------------------------'); */
    
    if(typeof callback == 'function') {
        callback();
    } else {
        console.log(`Prueba: el callback: ${callback} no es una funcion`);
    }

    // Forma corta de escribir un IF
    /* if(typeof callback == 'function') callback();
    else console.log(`Prueba: el callback: ${callback} no es una funcion`); */
}

prueba(2, "texto");
prueba(4, texto2);

console.log("--------------------------");

function pruebaCon2Callbacks(item, cb1, cb2) {
    console.log(item);

    if(typeof cb1 == 'function') cb1();
    else console.log(`Prueba: el callback: ${cb1} no es una funcion`);

    if(typeof cb2 == 'function') cb2();
    else console.log(`Prueba: el callback: ${cb2} no es una funcion`);
}

pruebaCon2Callbacks(10, texto1, texto2);
pruebaCon2Callbacks(5, texto1, texto2);

console.log("--------------------------");

function operacion(a, b, cb) {
    // Forma corta de escribir un IF
    // if(!cb) return "\n*** Operacion no definida ***"

    if(!cb) {
        return "\n*** Operacion no definida ***"
    }
    return cb(a,b);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

let num1 = 15;
let num2 = 4;

console.log(`La suma es ${operacion(num1, num2, suma)}`);
console.log(`La resta es ${operacion(num1, num2, resta)}`);
console.log(`La multiplicación es ${operacion(num1, num2, multiplicacion)}`);
console.log(`La división es ${operacion(num1, num2, division)}`);

console.log("--------------------------");

/* -------------------------------------------------------- */
/* EVENTOS                                                  */
/* -------------------------------------------------------- */
// https://developer.mozilla.org/es/docs/Web/Events
// https://developer.mozilla.org/es/docs/Web/API/Event 

console.log("\n/*** EVENTOS ***/");

const btn = document.querySelector('#btn');
console.log(btn);

function click1() {
    console.log('Click 1');
}

function click2() {
    console.log('Click 2');
}

/* btn.onclick = click1;

btn.onclick = click2;

btn.onclick = function() {
    console.log('click');
} */

// ------------ addEventListener -----------------

const callback = () => {
    console.log("Click 1");
}

btn.addEventListener('click', callback);

btn.addEventListener('click', function() {
    console.log('Click 2');
});

btn.addEventListener('click', () => {
    console.log('Click 3');
});

btn.addEventListener('click', function() {
    console.log('Click 4');
});

btn.addEventListener('click', function() {
    console.log('Click 99..');
});

console.log("--------------------");




