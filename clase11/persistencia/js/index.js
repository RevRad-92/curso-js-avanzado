console.log(document.querySelector('title').textContent);

// window.localStorage
// window.sessionStorage

// LocalStorage y SessionStorage guardan información en una clave/valor y almacenan en strings.
// guardo número, almacena string, recupero string.
// localStorage persiste info si cerras y abris pestaña/browser. en sessionStorage caduca



// Leo un valor en localStorage/sessionStorage

let a = Number(localStorage.getItem('a')) || 1; // Number() lo convierte a number  (casteo)
let s = Number(sessionStorage.getItem('a')) || 1;

console.log(a, typeof a); // 22 (Application Key/Value)

function cambiar(val) {
    a = val;
    // Guardo valor en local/session
    localStorage.setItem('a', a);
    return 'ok';
}

cambiar(10);

// ver el objeto storage

console.log(localStorage);

/*---------------------------------------------------------------*/
/* Ejemplo uso de localStorage                                   */
/*---------------------------------------------------------------*/

// guardar valor en localStorage (setItem)

localStorage.setItem('usuario', 'Nicolás');
localStorage.setItem('nulo', null);
localStorage.setItem('numero', 3);
localStorage.setItem('boolean', true);
// localStorage.setItem('objeto', {x:1, y:2, z:3}); // [object Object] IRRECUPERABLE
localStorage.setItem('objeto', JSON.stringify({x:1, y:2, z:3})); 


// recuperar valor (casteador + getItem)
console.log(localStorage.getItem('numero')); // devuelve string
console.log(String(localStorage.getItem('usuario')));
console.log(Number(localStorage.getItem('numero')));
console.log(Boolean(localStorage.getItem('boolean')));
console.log(JSON.parse(localStorage.getItem('objeto')));

// Lo mismo, JSON.parse sirve para todo
console.log(localStorage.getItem('usuario'));
console.log(JSON.parse(localStorage.getItem('numero')));
console.log(JSON.parse(localStorage.getItem('boolean')));
console.log(JSON.parse(localStorage.getItem('objeto')));

/*---------------------------------------------------------------*/
/* Funcion para representar contenido del storage                */
/*---------------------------------------------------------------*/

console.log('\n/*** Función para representar contenido del storage ***');


function representarStorage(storage) {
    for (let i = 0; i < storage.length; i++) {
        let clave = storage.key(i); // key es metodo de storage. devuelve elementos por indice

        try {
            valor = JSON.parse(storage.getItem(clave))
        } catch {
            valor = valor = storage.getItem(clave)
        }
        console.log(clave, valor);
    }
}

representarStorage(localStorage);

/*---------------------------------------------------------------*/
/* Borrar item del storage                                       */
/*---------------------------------------------------------------*/

console.log('\n/*** Borrar item del storage ***');

//removeItem 

localStorage.removeItem('a');
localStorage.removeItem('numero');
console.log(localStorage);

/*---------------------------------------------------------------*/
/* Borrar todos los elementos de storage                         */
/*---------------------------------------------------------------*/

console.log('\n/*** Borrar todos los elementos del storage ***');

localStorage.clear();
console.log(localStorage);

// sessionStorage es igual

/*---------------------------------------------------------------*/
/* Eventos de almacenamiento                                     */
/*---------------------------------------------------------------*/

setInterval(() => {
    localStorage.setItem('timestamp', Date.now());
}, 2000)

/*---------------------------------------------------------------*/
/* Ejemplo uso de cookies                                        */
/*---------------------------------------------------------------*/

// creación de cookies sin tiempo de expiración
document.cookie = "usuario=Nico";

// creación de cookies con tiempo de expiración. Max-Age: tiempo de vida en segundos

document.cookie = "apellido=Madeo; Max-Age=30"; 

// Borrar cookie

document.cookie = "apellido=Madeo; Max-Age=0"; // o 29, tiene que ser menor que el que tenía.

// ver cookies

console.log(document.cookie);

/*---------------------------------------------------------------*/
/* Chrome DevTools                                               */
/*---------------------------------------------------------------*/

console.log('\n/*** Con console.time y console.timeEnd***');
// sirve para medir el tiempo sincronico de un proceso

console.time('retardo del proceso 1');

console.time('retardo del proceso 2');
// ---------se mide lo que pasa acá dentro-------------
for (let i = 0; i < 1e9; i++); //proceso a medir

console.timeEnd('retardo del proceso 2');

for (let i = 0; i < 1e10; i++); //proceso a medir

console.timeEnd('retardo del proceso 1');

console.log('\n/*** Con console.table***');
console.table({x:1, y:2, z:3}); // muestra objeto/array en forma de tabla

