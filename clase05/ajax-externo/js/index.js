/*-------------------------------------------------------------- */
/* AJAX EXTERNO --- JSONPLACEHOLDER
/*-------------------------------------------------------------- */

// Documentación JsonPlaceHolder 
// https://jsonplaceholder.typicode.com/

// console.log('\n/*** AJAX Externo -- JSONPLACEHOLDER');

// const url = 'https://jsonplaceholder.typicode.com/users';

// let xhr = new XMLHttpRequest;

// xhr.open('get', url);
// xhr.addEventListener('load', () => {
//     if (xhr.status == 200) {
//         // console.log(xhr.response);
//         let respuesta = JSON.parse(xhr.response);
//         // console.log(respuesta);
//         respuesta.forEach(user => {

//             console.log('------------');
//             console.log(user.id);
//             console.log(user.username);
//             console.log(user.name);

//             const p = document.createElement('p');
//             p.innerText = `${user.id} - ${user.name} - ${user.username} `;

//             document.body.appendChild(p);
//         });
//     } else {
//         console.error('Algo falló', xhr.status);
//         const p = document.createElement('p');
//         p.innerHTML = '<span style="color: red; font-weight: bold;">Se rompió todo</span>';

//         document.body.appendChild(p); // en realidad, hay que hacer append a otro element (ej: div)
//     }
// });

// xhr.send();




/*-------------------------------------------------------------- */
/* AJAX EXTERNO --- SIMPSONS QUOTES API
/*-------------------------------------------------------------- */

// https://thesimpsonsquoteapi.glitch.me/quotes
// https://thesimpsonsquoteapi.glitch.me/ (documentación)

console.log('\n/*** AJAX EXTERNO - SIMPSONS QUOTES API ***/');

function pegarEnContenedor(respuesta) {
   /*  console.log(respuesta[0].quote);
    console.log(respuesta[0].character);
    console.log(respuesta[0].image); */
    
    // Desestructuración (con array y objetos)
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    const { quote: frase, character: personaje, image: imagen} = respuesta[0]; // igualas todos los atributos a la posicion del array

    console.log(frase);
    console.log(personaje);
    console.log(imagen);

    const contenedor = document.querySelector('#contenedor');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.innerText = personaje;
    p.innerText = frase;
    img.src = imagen;

    contenedor.appendChild(h2);
    contenedor.appendChild(p);
    contenedor.appendChild(img);

}


const url_simpsons = 'https://thesimpsonsquoteapi.glitch.me/quotes';

let xhr = new XMLHttpRequest;
xhr.open('get', url_simpsons);

// load => readyState == 4
xhr.addEventListener('load', () => {
    if (xhr.status == 200) {
        // console.log(xhr.response);
        let respuesta = JSON.parse(xhr.response);
        // console.log(respuesta[0].quote); // posicion 0, elemento/atributo quote del array
        
        pegarEnContenedor(respuesta);
    }
});


xhr.send();


