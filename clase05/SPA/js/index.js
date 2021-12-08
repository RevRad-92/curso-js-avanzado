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

        getPlantillaSinHistory(); // se llama siempre que se llama la nav.
    } // else para error
});


// Navegacion SPA sin historial


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

