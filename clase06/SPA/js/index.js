/*---------------------------------------------------------------*/
/* Funcion AJAX                                                  */
/*---------------------------------------------------------------*/

function ajax(url, metodo="get") { // por defecto, get
    let httpMetodo = metodo;
    let xhr = new XMLHttpRequest;
    xhr.open(httpMetodo, url);
    xhr.send();

    return xhr;
}

//  Cargar nav bar

let nav = document.querySelector('nav');
// console.log(nav);

let xhr = ajax('nav-bar.html'); // metodo get por defecto

xhr.addEventListener('load', () => {
    if (xhr.status == 200) {
        // console.log(xhr.response);
        nav.innerHTML = xhr.response;

        getPlantillaConHistoryHash();
        // getPlantillaSinHistory(); // se llama siempre que se llama la nav.
    } // else para error
});

/*--------------------------------------------------------------*/ 
// Navegacion SPA sin historial
/*--------------------------------------------------------------*/ 


function getPlantillaSinHistory() {
    
    let main = document.querySelector('main');
    // console.log(main);
    
    /* Cargar la home */
    
    let archivo = 'home.html';
    let xhr = ajax(archivo); 
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            main.innerHTML = xhr.response;
        }
    })
    
    /*Cargar paginas restantes */
    let links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            let id = link.id;
            // console.log(id);
            
            let archivo = id + '.html';
            
            let xhr = ajax(archivo);
            xhr.addEventListener('load', () => {
                if (xhr.status == 200) {
                    main.innerHTML = xhr.response;
                }
            })
            
        })
    })
    
    
}


/*--------------------------------------------------------------*/ 
// Navegacion SPA con historial
/*--------------------------------------------------------------*/

function getPlantillaConHistoryHash() {
    let main = document.querySelector('main');

    /* Cargar la home*/

    let hash = location.hash;
    console.log(hash); // vacio => false
    let archivo = (hash) ? hash.slice(1) + '.html': 'home.html';
    // si hash => #perfil.html => #perfil.html.slice(1) => perfil.html
    console.log(archivo);
    let xhr = ajax(archivo);
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            main.innerHTML = xhr.response;
        }
    })

    /* Carga de las paginas restantes */
    let links =  document.querySelectorAll('a');
     
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            let id = link.id;
            location.hash = id;
            // console.log(id);
            // console.log(location);

        })
    })

    /* registro de evento de cambio de URL*/
    window.addEventListener('hashchange', () => {
        // console.log('cambio la url');

        let hash = location.hash;
        console.log(hash);

        let archivo = hash ? hash.slice(1) + '.html' : 'home.html';
        console.log(archivo);

        let xhr = ajax(archivo);
        xhr.addEventListener('load', ()=> {
            if (xhr.status = 200) {
                main.innerHTML = xhr.response;
            }
        })
    })

}