console.log(document.querySelector('title').innerText);

/* PROTOCOLO HTTP ---------------------------------------------*/ 

// CODIGO SINCRONICO EN JS
// Hasta que no carga todo, no hay control sobre la página

//console.log('\n/*** Código sincrónico en JS ***/');

/* console.log('Inicio de tareas');
console.log('Tarea 1 -> paso a'); for(let i=0; i<3e9; i++); // 3.000.000.000

console.log('Tarea 1 -> paso b'); for(let i=0; i<3e9; i++);
console.log('Tarea 1 -> paso c'); for(let i=0; i<3e9; i++);
console.log('Tarea 1 -> paso d'); for(let i=0; i<3e9; i++);
console.log('Fin de la tarea 1');

console.log('Tarea 2 -> paso a'); for(let i=0; i<3e9; i++);
console.log('Tarea 2 -> paso b'); for(let i=0; i<3e9; i++);
console.log('Tarea 2 -> paso c'); for(let i=0; i<3e9; i++);
console.log('Tarea 2 -> paso d'); for(let i=0; i<3e9; i++);
console.log('Fin de la tarea 2');

console.log('Otras tareas');

setTimeout(() => {
    alert('Pasaron 15 segundos');
},15000); */


// CODIGO ASINCRONICO EN JS
//

console.log('\n/*** Código asincrónico en JS ***/');

console.log('Inicio de tareas');

console.log('Tarea 1 -> paso a');
setTimeout(function() {
    console.log('Tareas 1 -> paso b');
    setTimeout(function() {
        console.log('Tareas 1 -> paso c');
        setTimeout(function() {
            console.log('Tareas 1 -> paso d');
            setTimeout(function() {
                console.log('Fin tarea 1');
            },1500);
        },1500)
    },1500);
},1500);

console.log('otras tareas');

console.log('Tarea 2 -> paso a');
setTimeout(function() {
    console.log('Tareas 2 -> paso b');
    setTimeout(function() {
        console.log('Tareas 2 -> paso c');
        setTimeout(function() {
            console.log('Tareas 2 -> paso d');
            setTimeout(function() {
                console.log('Fin tarea 2');
            },1500);
        },1500)
    },1500);
},1500);

setTimeout(() => {
    alert('Pasaron 15 segundos');
},15000); 


/* COMUNICACION ASINCRÓNICA CON AJAX (HMLHttpRequest)   */
/* AJAX: Asynchronous JavaScript And XML  (+JSON)       */

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest