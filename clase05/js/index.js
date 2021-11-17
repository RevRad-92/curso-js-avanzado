/* COMUNICACION ASINCRÓNICA CON AJAX (HMLHttpRequest)   */
/* AJAX: Asynchronous JavaScript And XML  (+JSON)       */

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


console.log(document.querySelector('title').innerText);


let xhr = new XMLHttpRequest; // Creación de instancia (status 0)
console.log(xhr);
/* console.log(xhr.readyState); // State (0 a 4)
console.log(xhr.status); (200, 404... etc)
console.log(xhr.response); <- informacion que necesite */ 

/*
-------------------------------------------------------------------
xhr.readyState:
0 -> La instancia esta creada
1 -> La instancia está configurada 
2 -> Hay intercambio de headers entre el cliente y el servidor
3 -> Transferencia de información 
4 -> Fin de la comunicación (status: 200 = OK || status: 404 = TODO MAL)
-------------------------------------------------------------------
xhr.status
200 -> Transferencia correcta
404 -> Recurso no encontrado
Otros -> errores 
*/

console.log('\n/*** XMLHttpRequest ***/');

xhr.addEventListener('readystatechange', () => { // revisa el cambio de status
    console.log('readystatechange -> ', xhr.readyState) 

    if (xhr.readyState == 2) {
        let headers = xhr.getAllResponseHeaders(); // trae todos los headers
        // console.log(headers);
        let tipo = xhr.getResponseHeader('content-type'); // trae el que pidas.
        console.log(tipo); 

        if (!tipo.includes('application/json')) {
            xhr.abort(); // abortar porque no se recibió lo esperado (por ej, si recibe un text/html). Se dispara el envento abort.
        }
    }

    /* if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.response); // lee el recurso 

                const contenedor = document.querySelector('#contenedor');

                // contenedor.innerHTML = xhr.response; // mostrar ese html 



            } else {
                console.error('Error status comunicación', xhr.status);
        }
    } */

    
});

xhr.addEventListener('load', () => { // load dispara cuando sea igual a 4
    if (xhr.status == 200) {
        // console.log(xhr.response);
        const json = JSON.parse(xhr.response); // transforma string en objeto JS
        console.log(json);
    }
})


 

xhr.addEventListener('abort', () => { // si el evento es abort...
    console.warn('La petición fue abortada'); // .log .warn .error
})

xhr.open('get', 'texto.json'); // configuracion de objeto. método y recurso. // status: 1.
xhr.send(); // envío (status 2, 3, 4)