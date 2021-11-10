console.log(document.querySelector('title').innerHTML);

/*---------Evento de formularios ----------------*/
console.log('----evento en formularios----');

// let input = document.querySelector('input');

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', e => {
//     e.preventDefault(); // frenamos para validar
//     console.log('Me quedo en la página para chequear');
    
//     let valido = input.checkValidity(); // true o false


//     // validacion basica (no correcta)
//     if(valido) {
//         let valor = input.value;
//         console.log('Click', '['+valor+']'); // muestra el valor 
//     } else{
//         console.error('Este campo es obligatorio');
//     }
    

// });

/*---------------------------------------------------------------*/
/* Ejemplo con Validacion JavaScript y mensajes                  */
/*---------------------------------------------------------------*/

let input = document.querySelector('input');

let btn = document.querySelector('#btn');

let form = document.querySelector('form');


function setCustomValidity(mensaje) {
    let divForm = document.querySelector('#divForm');
    // console.log(divForm);
    divForm.innerHTML = mensaje;
    divForm.style.display = (mensaje) ? 'block' : 'none'; 
}

// setCustomValidity();

function validarInput(valor) {
    console.log('valor recibido dentro de validarInput: ' + valor);
    
    valor = valor.trim(); // saca (recorta) espacios de adelante y atras

    let longitud = valor.length; // string es array de caracteres
    
    if (longitud == 0  ) {
        // console.log('Este campo es obligatorio');
        setCustomValidity('Este campo es obligatorio');
        return null; // para que no siga 
    } else if (longitud < 3) {
        // console.log('Este campo debe tener al menos 3 caracteres');
        setCustomValidity('Este campo debe tener al menos 3 caracteres');
        return null;
    } else if (longitud > 40) {
        // console.log('Este campo debe tener como máximo 40 caracteres');
        setCustomValidity('Este campo debe tener como máximo 40 caracteres');
        return null;
    } else if (valor.includes(' ')) {
        // console.log('No se permiten espacios intermedios');
        setCustomValidity('No se permiten espacios intermedios');
        return null;
    } else if (!(valor[0] >= 'A' && valor[0] <= 'Z')) { // valor[0] : "nico" => "n"
        setCustomValidity('El primer caracter debe estar en mayúscula');
        return null;
    }  

    setCustomValidity(""); // que no muestre mensaje
    valor = encodeURIComponent(valor); // transforma los caracteres especiales. (´, " " => "%20", etc )

    return valor;
}

/*---Evento para que valide en vivo ---*/
input.addEventListener('input', () => {
    // console.log(input.value);
    validarInput(input.value);
})



form.addEventListener('submit', e => {
    e.preventDefault();
    
    let valor = validarInput(input.value); // input.value es lo que contiene el input

    if (valor) {
        console.log('Valor ingresado: ', '['+valor+']');
    } 
})
