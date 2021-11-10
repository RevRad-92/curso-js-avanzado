console.log(document.querySelector('title').innerText);

const detener = document.querySelector('#botonDetener');
// console.log(detener);

function setearColorBody() {
    let body = document.querySelector('body');
    // console.log(body);
    
    body.style.backgroundColor = (body.style.backgroundColor == "red") ? "green" : "red"; // condicion ? true : false;
    
}

let alternarColor = setInterval(setearColorBody, 300); //1000 = 1 seg

function stopSetearColor() {
    clearInterval(alternarColor);
}

// detener.addEventListener('click', stopSetearColor);
detener.addEventListener('click', () => {
    stopSetearColor(); // detiene el setInterval. 
    setTimeout(function() {
        setearColorBody()
    }, 1000);
});


/*------EJEMPLO SET INTERVAL 2-----------------------------------*/

const botonRun = document.querySelector('#run');

function progresoBarra() {
    let elem = document.querySelector('#barra');
    let width = 0;

    let id = setInterval(carga, 10); // (callback, milisegundos)

    function carga() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }

}

botonRun.addEventListener('click', progresoBarra);

/*-----MANIPULACION DEL DOM CON UN EVENTO DE BOM-----------------*/

// setInterval(function() {
//     console.log('oW: ' + outerWidth, 'oH:' + outerHeight, 'iW: ' + innerWidth, 'iH: ' + innerHeight);
// }, 1000);


// setInterval( () => {
//     console.log('oW: ' + outerWidth, 'oH:' + outerHeight, 'iW: ' + innerWidth, 'iH: ' + innerHeight);
// }, 1000);

window.addEventListener('resize', () => {
    console.log('Cambió el tamaño del navegador');
    document.querySelector('.info-resize').innerHTML = `
    <b>Cambió el tamaño del navegador</b></br>
    Las dimensiones del navegador <span style="color: blue">Externas</span> son <i>${outerWidth} pixeles de ancho poor ${outerHeight} pixeles de alto e <span style="color: red">Internas</span> son <i>${innerWidth} pixeles de ancho poor ${innerHeight} pixeles de alto</i><br>`
 

})

