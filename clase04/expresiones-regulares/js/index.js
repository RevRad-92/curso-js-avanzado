console.log(document.querySelector('title').innerText);


/*--------------------------------------------------------------*/
/*--Expresiones regulares-------(https://regex101.com)----------*/
/*--------------------------------------------------------------*/

// Buscar patrones de caracteres y facilita tarea de validación 

let miRegExp = new RegExp('abc', 'i'); //i (insensitive) // Forma declarativa tipo objeto

let mensaje = "holabc";

let valido = miRegExp.test(mensaje); // true o false

console.log('Mensaje: ' + mensaje + ' -> validación ', valido);



// forma literal
let miRegExpEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

mensaje = "mlapeducacionit@gmail.com";
validar = miRegExpEmail.test(mensaje);

console.log(`Mensaje: ${mensaje} -> validación: ${validar}`);
 

/*--------------------------------------------------------------*/
/*--Repaso formularios------------------------------------------*/
/*--------------------------------------------------------------*/

const input = document.querySelector('input');
const form = document.querySelector('form');

function setCustomValidityJS(mensaje) {
    let div =document.querySelector('#divForm');
    console.log(div);
    div.innerHTML = mensaje;
    div.style.display = (mensaje) ? 'block' : 'none';
    // false => undefined // 0 // null // {} // [] // " "
}

function validarInputRegExp(valor) {
    
    //*** VALIDAR NOMBRE  ***/

   /*  let validarNombre = /^[A-Z][a-z]{2,10}$/; // mayus y minus, 3 min. 10 maximo.
    if (!validarNombre.test(valor)) {
        let mensaje = 'Este campo no es válido';
        let longitud = valor.length;
        if(longitud == 0) mensaje = 'Este campo es obligatorio'; //inline if
        else if(longitud < 3) mensaje = 'Este campo debe poseer al menos 3 caracteres';
        else if(longitud > 10) mensaje = 'Este campo debe tener como máximo 10 caracteres';

        setCustomValidityJS(mensaje);

        return null; // break (por cada vez que entra a una parte del if)
        
    } */

    //*** VALIDAR MAIL  ***/ 
    let validadorEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if(!validadorEmail.test(valor)) {
        let mensaje = "Debe escribir un email válido";
        setCustomValidityJS(mensaje);
        return null; 
    }

    // si la validacion está ok:
    setCustomValidityJS(''); // no hay mensaje necesario

    return valor; // retorna el valor
}

input.addEventListener('input', function(e) {
    // por cada caracter escrito se ejecuta la función, está validando (input.value)
    let valor = validarInputRegExp(input.value);

})

form.addEventListener('submit', e => {
    e.preventDefault();
    let valor = validarInputRegExp(input.value);
    if (valor) {
        console.log('Valor ingresado: ', '['+valor+']');
    }
})

/* Expresiones Regulares */

let reg = /^[\\w-]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/; // no funca...

// La expresion regular empieza con "/^"
// La expresion regular termina con "$/"

// La primera parte /^[\\w-]+
// El signo + indica que debe aparecer uno o más de los caracteres
// w indica caracteres de la A a Z (may y minus), y digitos del 0 al 9 y el caracter _
// - en lugar de usar \\w podemos escribir el rango de caracteres con lo que esta expresion quedaría como: [A-Za-z0-9-_]+ 

// segunda parte => (\\.[\\w-]+)*@
// A continuacion: 
// El * indica que este grupo puede aparecer cero o más veces. 
// punto (.) El mail puede contener opcional un punto seguido de uno o más caracteres (lo que esta en corchetes)
// A continuación debe contener el caracter arroba

// Tercera parte => [A-Za-z0-9]+
// Despues del arroba el email debe contener uno o más ("+")caracteres (los que aparecen entre [])

// Cuarta parte => (\\.[A-Za-z0-9]+)*
// seguido (opcional(*), 0 o más veces) de un punto y uno o más caracteres (especificado entre corchetes)

// Quinta parte => (\\.[A-Za-z]{2,})
// seguido de un punto y al menos 2 de los caracteres que aparecen entre corchetes (".com")
