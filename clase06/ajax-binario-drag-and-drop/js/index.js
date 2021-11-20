console.log(document.querySelector('title').innerText);



/*---------------------------------------------------------------*/
/* Cargar imagen                                                 */
/*---------------------------------------------------------------*/


function cargarImagen(imagen) {
    const img = document.querySelector('img');
    const progress = document.querySelector('progress');
    const span = document.querySelector('span');

    img.src = '';
    progress.value = '0';
    span.innerText = '0%';

    /*-------------------------------*/
    /* Empiezo a mostrar barra carga */
    /*-------------------------------*/
    progress.style.display = 'inline-block';
    span.style.display = 'inline';

    /*------------------------------*/
    /* Request del recurso          */
    /*------------------------------*/

    const xhr = new XMLHttpRequest;
    let urlSinCache = imagen + '?' + Date.now(); // para evitar cache
    xhr.open('get', urlSinCache);
    xhr.responseType = 'blob';

    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            // console.log(xhr.response);
            let imagenBlob = xhr.response;
            let url = URL.createObjectURL(imagenBlob);
            // console.log(url);

            img.src = url;

            setTimeout(() => {
                progress.style.display = 'none';
                span.style.display = 'none';
            }, 2000);


        }
    })

    /* ----------------- */
    /* Barra de progreso */
    /* ----------------- */

    /* browser: network SLOW 3G (simular conexion lenta/cargar en servidor)*/

    xhr.addEventListener('progress', e => {
        console.log(e);
        if (e.lengthComputable) { // a veces no hay length computable entonces no se puede calcular = >simular
            // console.log('Descargando...', e);
            let porcentaje = parseInt((e.loaded *100) / e.total);
            // console.log(porcentaje + '%');

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
/* Configuracion de los eventos del Drag and Drop para zona div  */
/*---------------------------------------------------------------*/

const drop = document.querySelector('#drop');

drop.addEventListener('dragenter', e => {
    e.preventDefault();
    // console.log('Estoy dentro de la zona del drop');
});

drop.addEventListener('dragleave', e => {
    e.preventDefault();
    // console.log('Estoy afuera de la zona del drop')
});

drop.addEventListener('dragover', e => {
    e.preventDefault()
    // console.log('Estoy encima de la zona de drop');
});


/*---------------------------------------------------------------*/
/* Peticion del recurso median Drag and Drop                     */
/*---------------------------------------------------------------*/

drop.addEventListener('drop', e => {
    e.preventDefault(); // para que no abra la imagen en nueva pestaña
    // console.log("Solté el recurso");
    // console.log(e);
    // console.log(e.dataTransfer.files[0].name); // fondo3.jpeg
    const imagen = e.dataTransfer.files[0].name;


    cargarImagen(imagen);
    
    input.value = ''; // limpiar input (esta en display: none) para que no cargue la imagen cargada en el input (por click) al dropear otra.

})

/*---------------------------------------------------------------*/
/* Peticion del recurso desde el click                           */
/*---------------------------------------------------------------*/

const input = document.querySelector('input');

input.addEventListener('change', () => {
    console.log('cambió el input');

    console.dir(input.files[0].name);

    let imagen = input.files[0].name;

    cargarImagen(imagen);

    input.value = '';
})