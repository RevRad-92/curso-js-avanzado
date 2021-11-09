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