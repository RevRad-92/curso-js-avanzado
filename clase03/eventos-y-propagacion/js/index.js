console.log(document.querySelector("title").innerText);

// const btn = document.querySelector('#btn');

// console.log(btn);

// btn.addEventListener('click', function() {
//     console.log('click 1');
// })


console.log('Botones y Eventos');

// Nodelist con todos los botones
// const botones = document.querySelectorAll('button');
// console.log(botones);

// botones[0].addEventListener('click', function (){
//     botones[0].style.backgroundColor = "blue";
//     console.log('Hicieron click sobre mi, boton 1');
// })


// botones[1].addEventListener('click', function (){
//     botones[1].style.backgroundColor = "pink";
//     console.log('Hicieron click sobre mi, boton 2');
// })

// botones[2].addEventListener('click', function (){
//     botones[2].style.backgroundColor = "red";
//     console.log('Hicieron click sobre mi, boton 3');
// })

// botones[3].addEventListener('click', function (){
//     botones[3].style.backgroundColor = "green";
//     console.log('Hicieron click sobre mi, boton 3');
// })

const contenedor = document.querySelector("#contenedor");

// objetoEvento = e
contenedor.addEventListener('click', objetoEvento => {
    // console.log("me clickearon", objetoEvento.target.id);
    if(objetoEvento.target.id !== 'contenedor') {
        objetoEvento.target.style.backgroundColor = objetoEvento.target.dataset.color || "purple";
        console.log('me clickearon');
    } // else {
    //     console.log('click sobre div');
    // }


})

/* --------------------------------------------------------------*/
/* Detener un evento automatico del navegador (e.preventDefault) */
/* --------------------------------------------------------------*/

const link = document.querySelector('#link');
console.log(link);

link.addEventListener('click', e => {
    e.preventDefault(); // no redirecciona
    console.log("click en el hipervinculo");
    console.log(location); // BOM
    location.href = "http://www.educacionit.com";
})

/* --------------------------------------------------------------*/
/* Bubbling y Capturing || Propagacion de eventos                */
/* --------------------------------------------------------------*/

console.log('\n/*** Bubbling y Capturin ***/');

const UNO = document.querySelector('#uno');
const DOS = document.querySelector('#dos');
const TRES = document.querySelector('#tres');

// console.log(UNO, DOS, TRES);

UNO.addEventListener('click', function(e) {
    console.log('click en 1');
    console.log(e.target);
    
}, false) //false es por defecto: primero target, desp los que se disparan por bubbling(hasta el parent mas lejano). true: capturing (invierte orden de eventos por bubbling) o primero el último que este en true y así hasta volver al target

DOS.addEventListener('click', function(e) {
    console.log('click en 2');
    console.log(e.target);
    e.stopPropagation(); // captura. frena el evento para que no siga subiendo
})

TRES.addEventListener('click', function(e) {
    console.log('click en 3');
    console.log(e.target);
    e.stopPropagation();
})





