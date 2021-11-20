console.log(document.querySelector('title').textContent);

/*---------------------------------------------------------------*/
/* Cargar imagen                                                 */
/*---------------------------------------------------------------*/

function cargarImagen(imagen) {
    // console.log('dentro de cargarImagen', imagen);

    const img = document.querySelector('img');
    const progress = document.querySelector('progress');
    const span = document.querySelector('span');
    // console.log(img, progress, span);

    // inicializar variables
    img.src = '';
    progress.value = '0';
    span.innerText = '0%';
    
    /* ----------------- */
    /* Hago request      */
    /* ----------------- */

    const xhr = new XMLHttpRequest;
    let urlSinCache = imagen + '?' + Date.now(); // nombre de la imagen + '?' + numero generado con date (unixstamp-UTC) fondo1.jpg?1233121345 - para que el navegador baje el archivo que mandemos por mas que sea el mismo. (o DISABLE CACHE)
    // console.log(urlSinCache);
    xhr.open('get', urlSinCache);
    xhr.responseType = 'blob'; // configuracion para leer archivo binario (blob)

    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let imagenBlob = xhr.response;
            // console.log(imagenBlob);

            let url = URL.createObjectURL(imagenBlob); // link imagen en memoria navegador
            // console.log(url);

            img.src = url; // string generado pasado a img para mostrar imagen en html (appendChild si va dentro de otro elemento)

        }
    })

    /* ----------------- */
    /* Barra de progreso */
    /* ----------------- */

    /* browser: network SLOW 3G (simular conexion lenta/cargar en servidor)*/

    xhr.addEventListener('progress', (e) => {
        console.log(e);
        if (e.lengthComputable) {
            // console.log('Descargando...', e);
            let porcentaje = parseInt((e.loaded *100) / e.total);
            console.log(porcentaje + '%');

            progress.value = porcentaje;
            span.innerText = porcentaje + '%';

            //setTimeOut para que aparezca y desaparezca la barra progress

            // simulados: spinKit CSS
            // https://tobiasahlin.com/spinkit/

        }
    })

    xhr.send();

}


/*---------------------------------------------------------------*/
/* Selección del form                                            */
/*---------------------------------------------------------------*/

const form =document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // console.dir(form); // 0:input -> files: 0 .name
    // console.dir(form[0]);
    // console.dir(form[0].files);
    // console.dir(form[0].files[0].name); // fondo1.jpg 

    let imagen = form[0].files[0].name;
    // console.log(imagen);

    cargarImagen(imagen);

})