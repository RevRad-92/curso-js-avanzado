console.log(document.querySelector('title').textContent);

/*------------------------------------------------------------*/
/*-Promises (resolve, reject)---------------------------------*/
/*------------------------------------------------------------*/

// const promesa = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         let fui = 'si';
//         if(fui == 'si') {
//             resolve('Llegué al cumpleaños');
//         } else {
//             reject('No llegué al cumpleaños');
//         }
//     }, 2000);
// });

// // console.log(promesa);

// promesa
//     .then(datos => {
//         console.log('Promesa resuelta', datos);
//     })
//     .catch(err => {
//         console.log('Promesa no resuelta', err);
//     })
//     .finally(()=> {
//         console.log('FIN');
//     })


/*------------------------------------------------------------*/
/*-Metodos: race y all----------------------------------------*/
/*------------------------------------------------------------*/

const retardo = (ms, mensaje) => new Promise((res, rej) => {
    let tipo = typeof ms; 

    if (tipo == 'number') {

        setTimeout(() => {
            res(mensaje);
        }, ms);
    } else {
        let error = {
            title: 'Error en tipo de ms (debe ser numérico)',
            ms,
            tipo, 
            mensaje
        }
        rej(error);
    }

}) // funcion arrow en una linea

const imprimeTiempo = (mensaje, cb) => cb(mensaje, new Date().toLocaleString()) // toLocaleString: formatea fecha (UTC a 00/00/00)

// TEST DE LA PROMESA RETARDO

// imprimeTiempo('inicio delay', console.warn);
// retardo(2000, 'retardo 2 segundos de prueba')
//     .then(respuesta => {
//         console.log(respuesta);
//         imprimeTiempo('Fin del delay', console.warn)
//     })
//     .catch(console.error) // es igual a -> error => console.error(error) (lo que envias es igual a lo q recibis)

/*-------------------------------------------------------------*/
/*-Metodo Race-------------------------------------------------*/
/*-------------------------------------------------------------*/

console.log('METODO RACE');

// Es una carrera de promesas. La más rapida es la que gana, y se devuelve.

// imprimeTiempo('inicio carrera', console.warn);

// Promise.race([
//     retardo(4000, 'retardo de 4 seg de prueba'),
//     retardo(3000, 'retardo de 3 seg de prueba'),
//     retardo(7000, 'retardo de 7 seg de prueba'),
// ])
// .then(respuesta=> {
//     console.log('Ganó: ', respuesta);
//     imprimeTiempo('Fin de la carrera', console.warn);

// })
// .catch(error => console.error('Error en la carrera', error));

/*-------------------------------------------------------------*/
/*-Metodo All--------------------------------------------------*/
/*-------------------------------------------------------------*/

console.log('METODO ALL');

imprimeTiempo('Inicio del cumplimiento total', console.warn);

Promise.all([
    retardo(5000, 'retardo de 5 segundos de prueba'),
    retardo(8000, 'retardo de 8 segundos de prueba'),
    retardo(2000, 'retardo de 2 segundos de prueba'),
])
.then(respuesta => {
    console.log('Se cumplieron todas: ', respuesta); // respuesta es array de promesas (Promise.all
    imprimeTiempo('Fin del cumplimiento total', console.warn);
})
.catch(error => console.error('Error cumplimiento total', error));


