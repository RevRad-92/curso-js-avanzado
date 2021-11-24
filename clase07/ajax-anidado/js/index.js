console.log(document.querySelector('title').textContent);

let url = "https://jsonplaceholder.typicode.com/posts/"

/*------------------------------------------------------------*/
/*Petición asincrónica por ajax anidado (desorden)------------*/
/*------------------------------------------------------------*/

// "https://jsonplaceholder.typicode.com/posts/1"

function traerPost(id) {
    let xhr = new XMLHttpRequest;
    xhr.open('get', url + id); // concateno url + id
    xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
            let respuesta = JSON.parse(xhr.response);
            console.log(respuesta);
        }
    });
    xhr.send();
}

function traerVariosPost() { // ajax anidado
    console.log('Inicio de peticiones');
    traerPost(1);
    traerPost(2);
    traerPost(3);
    traerPost(4);
    traerPost(5);
    traerPost(6);
    traerPost(7);
    traerPost(8);
    traerPost(9);
    traerPost(10);
    console.log('fin de las peticiones');
}

// traerVariosPost(); // devuelve desordenado porque response según hilos del procesador del servidor. (asincrónico)

/*---------------------------------------------------------------*/
/*Petición asincrónica por ajax anidado usando callbacks (orden)-*/
/*---------------------------------------------------------------*/

function traerPostCallback(id, cb) { 
    let xhr = new XMLHttpRequest;
    xhr.open('get', url + id);
    xhr.addEventListener('load', ()=> {
        if(xhr.status === 200) {
            let respuesta = JSON.parse(xhr.response);
            console.log(respuesta);
            if(cb) cb(respuesta);
        }
    });
    xhr.send();
}

function traerTodosLosPostCallback() {
    console.log('Inicio de peticiones');
    // CALLBACK HELL - PIRAMIDE DE LA PERDICION
    traerPostCallback(1, () => {
        traerPostCallback(2, () => {
            traerPostCallback(3, () => {
                traerPostCallback(4, () => {
                    traerPostCallback(5, () => {
                        traerPostCallback(6, () => {
                            traerPostCallback(7, () => {
                                console.log('fin de las peticiones');
                            });
                        });
                    });
                });
            });
        });
    });

}

// traerTodosLosPostCallback();

/*---------------------------------------------------------------*/
/*Petición asincrónica por ajax anidado usando Promesas (orden)--*/
/*---------------------------------------------------------------*/

function traerPostPromise(id) {
    return new Promise((resolve, reject)=> {
        let xhr = new XMLHttpRequest;
        xhr.open('get', url + id);
        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                let respuesta = JSON.parse(xhr.response);
                // console.log(respuesta);
                resolve(respuesta);
            } else {
                let error = {
                    type: 'Error AJAX status',
                    body: xhr.status,
                    id, // id = id
                }

                reject(error);
            }
        });

        xhr.addEventListener('error', e => {
            let error = {
                type: 'Error AJAX',
                body: e,
                id,
            };
            reject(error);
        });
        xhr.send();
    })
}

// console.log(traerPostPromise(1));

/*---------------------------------------------------------------*/
/* Uso de Promesas con sintaxis then catch-----------------------*/
/*---------------------------------------------------------------*/

function traerTodosLosPostThenCatch() {
    console.log('Inicio');


    const promesa = traerPostPromise(1);
    promesa
        .then(post => {
            console.log(post); // muestro primero
            return traerPostPromise(2); // return para que siga. pido el segundo
        })
        .then(post => {
            console.log(post); // muestro el segundo
            return traerPostPromise(3); // pido el tercero, etc
        })
        .then(post => {
            console.log(post);
            return traerPostPromise(4);
        })
        .then(post => {
            console.log(post);
            return traerPostPromise(5);
        })
        .then(post => {
            console.log(post);
            return traerPostPromise(6);
        })
        .then(post => {
            console.log(post) // para mostrar la última que se pidió (id= 6)
        })
        .catch(error => {
            console.error(error); // si hay error en un then, se corta ahi.
        })

}

// traerTodosLosPostThenCatch();



/*---------------------------------------------------------------*/
/* Uso de Promesas con sintaxis async / await (ES8)--------------*/
/*---------------------------------------------------------------*/

/* funcion asincrona */
async function traerTodosLosPostPromiseAsyncAwait() {

    console.log('Inicio de peticiones');

    try {
        let rta = await traerPostPromise(1); // espera la resolucion o rechazo de promesa
        console.log(rta);

        rta = await traerPostPromise(2); 
        console.log(rta);

        rta = await traerPostPromise(3); 
        console.log(rta);

        rta = await traerPostPromise(4); 
        console.log(rta);

        rta = await traerPostPromise(5); 
        console.log(rta);

        rta = await traerPostPromise(6); 
        console.log(rta);

        console.log('Fin de las peticiones');

    } catch (error) {
        console.error(error); // entra al catch cuando hay un error y se saltea el resto de las peticiones del try.
    }


}

traerTodosLosPostPromiseAsyncAwait();