console.log(document.querySelector('title').textContent);

/*------------------------------------------------------------*/
/* ARRAY PUSH                                                 */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY PUSH ***');

// Agrega un elemento al final del array
// devuelve la nueva cantidad de elementos (length)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numeros);

let nuevoLength = numeros.push(9); // devuelve length

console.log(numeros);
console.log(nuevoLength);


/*------------------------------------------------------------*/
/* ARRAY UNSHIFT                                              */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY UNSHIFT ***');
// Agrega elementos al principio
// devuelve la nueva cantidad de elementos (length)

nuevoLength = numeros.unshift(0);

console.log(numeros);
console.log(nuevoLength);

/*------------------------------------------------------------*/
/* ARRAY POP                                                  */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY POP ***');
// Elimina el último elemento del array
// devuelve el elemento eliminado

let eliminado = numeros.pop();

console.log(numeros);
console.log('Elemento eliminado: ' + eliminado);

/*------------------------------------------------------------*/
/* ARRAY SHIFT                                                */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY SHIFT ***');
// Elimina el primer elemento
// devuelve el elemento eliminado

eliminado = numeros.shift();
console.log('Elemento eliminado: ' + eliminado);

/*------------------------------------------------------------*/
/* ARRAY SPLICE                                               */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY SPLICE ***');
// Elimina elementos especificados según posicion
// devuelve array con los elementos eliminados

eliminado = numeros.splice(2); // a partir de elemento en pos. 2

console.log(numeros); // queda array con elementos 0 y 1
console.log(eliminado); // se elimina todo el resto

/*-------------------------------------------------------------*/

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);
eliminado = numeros.splice(3, 2); // a partir de pos 3 (4), elimina 2 elementos (4 y 5 )
console.log(numeros); // [1, 2, 3, 6, 7, 8, 9, 10]
console.log(eliminado); // 4 y 5 

/*------------------------------------------------------------*/
/* ARRAY MAP                                                  */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY MAP ***');
// La diferencia entre map y forEach es que devuelve un array de la misma cantidad de elementos que tiene el actual
// array(6) => devuelve array(6)
// Dentro del array resultado voy a tener diferentes elementos. Misma cantidad de elementos, pero diferentes.

numeros = [10, 20, 30, 40, 50, 60];

console.log(numeros);

// numeros.map(/* callback*/);
// numeros.map((elemento, indice, array) => {
//     console.log(elemento);
//     console.log(indice);
//     console.log(array);
//     return 1;
// });

const arrayDevuelto = numeros.map(elem => {
    console.log('original: ' + elem);
    let doble = elem * 2;
    console.log('doble: ' + doble);
    return doble;
});

// const arrayDevuelto = numeros.map(e => e * 2);

console.log(arrayDevuelto);

const objetos = [
    {nombre: 'Max', apellido: 'Principe'},
    {nombre: 'Manuel', apellido: 'Miranda'},
    {nombre: 'Pablo', apellido: 'Fernandez'},
    {nombre: 'Nicolás', apellido: 'Correa'},
    {nombre: 'Gonzalo', apellido: 'Apolinario'},
]

console.log(objetos);

const resultado = objetos.map(item => {
    return {
        // ...item, // spread operator (devuelve tal cual los items presentes)
        nombreYApellido: `${item.nombre} ${item.apellido}`
    }
})

console.log(resultado);

/*------------------------------------------------------------*/
/* ARRAY FILTER                                               */
/*------------------------------------------------------------*/
console.log('\n/*** ARRAY FILTER ***');
// Por medio de una funcion (cb) filtra elementos del array.
// Devuelve array con la cantidad de elementos filtrados
// dispone de elemento, indice y array

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);

// const pares = numeros.filter(/*callback*/);
const pares = numeros.filter((numero) => {
    console.log(numero); // todos los que recorre
    return numero % 2 === 0; // if (numero %2 === 0)... es par (true)
});

console.log(pares);

const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares);