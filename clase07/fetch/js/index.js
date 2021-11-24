console.log(document.querySelector('title').textContent);

/*--------------------------------------------------------------*/
/*--Peticion asincrona con AJAX utilizando funcion fetch--------*/
/*--------------------------------------------------------------*/

let url = "https://jsonplaceholder.typicode.com/users/"

// const opcionesPeticionAjax = async id => { .. }
const opcionesPeticionAjax = async function(id) {
    //-------------------------------------------
    // OPCION 1: XMLHTTPRequest (Callbacks)

    let xhr = new XMLHttpRequest;
    xhr.open('get', url + id);
    xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
            let respuesta = JSON.parse(xhr.response);
            console.log("XMLHTTPRequest", respuesta);
        } else {
            console.error('Error status', xhr.status);
        }
    })

    xhr.send();

    //-------------------------------------------
    // OPCION 2: Fetch (Promises) con then /catch

    let urlFinal = url + id;
    fetch(urlFinal) // devuelve una promesa
        .then((datos) => {
            return datos.json();
        })
        .then(user => console.log('fetch con then/catch', user))
        .catch((error) => console.error(error));

    //-------------------------------------------
    // OPCION 3: Fetch (Promises) con async / await
    // con async function 

    try {
        let request = await fetch(url + id);
        let user = await request.json();
        console.log('fetch con async/await', user);

    } catch (error) {
        console.error(error);
    }

}

// opcionesPeticionAjax(1);

/*--------------------------------------------------------------*/
/*Peticiones asincronicas con AJAX anidadas utilizando fetch----*/
/*--------------------------------------------------------------*/

// https://pokeapi.co/

function traerUserFetch(id) {
    return fetch(url + id) // retorna promise
        .then(datos => {
            console.warn(datos);
            if(!datos.ok) throw "ERROR EN STATUS: " + datos.status; 
            return datos.json(); // devuelve promesa
        })
        .catch(error => {
            console.error("Error fetch (catch interno -> ", error);
            // return "*** ERROR***"
            let err = {
                type: -30,
                descripcion: "Error fetch (catch interno)",
                body: error,  // lo toma de throw
            }
            throw err; // new Error();
        })
}


/*Fetch anidado con then / catch---------------------------------*/


function traerTodosLosUsersConFetchThenCatch() {
    traerUserFetch(1) // promise
    .then((user) => {
        console.log(user);
        return traerUserFetch(2);
    })
    .then(user => {
        console.log(user);
        return traerUserFetch(3);
    })
    .then(user => {
        console.log(user);
        return traerUserFetch(4);
    })
    .then(user => {
        console.log(user);
        return traerUserFetch(5);
    })
    .then(user => console.log(user))
    .catch(error => console.error("Error fetch (catch externo -> ", error));
}


// function traerTodosLosUsersConFetchThenCatch();

/*Fetch anidado con async / await--------------------------------*/

const traerUserFetchAsyncAwait = async function() {
    try {
        let user = await traerUserFetch(1)
        console.log(user);
        
        user = await traerUserFetch(2)
        console.log(user);

        user = await traerUserFetch(3)
        console.log(user);

        user = await traerUserFetch(4)
        console.log(user);

        user = await traerUserFetch(5)
        console.log(user);

    } catch (error) {
        console.log("Error fetch (catch externo) -> ", error);

        const p = document.createElement('p');
        p.innerText = error.body;

        // debugger;

        document.body.appendChild(p);
    }
}

traerUserFetchAsyncAwait();