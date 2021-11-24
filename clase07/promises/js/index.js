console.log(document.querySelector('title').textContent);

/*------------------------------------------------------------*/
/*-Promise (resolve, reject)----------------------------------*/
/*------------------------------------------------------------*/

// 2 Estados Clave: resolverse (fulfilled)/ no resolverse (rejected)
// resolve: la promesa se cumple
// reject: la promesa no se cumple

const promesa = new Promise(/*funcion ejecutor obligatoria*/ function(resolve, reject) /*nombres arbitrarios*/ {
    // resolve('Se cumplió'); // fulfilled-cumplida
    // reject('No se cumplió'); // rejected-no cumplida
    setTimeout(()=>{
        let llego = 'si';

        if(llego == 'si') {
            resolve('Llegó, cumplió la promesa');
        } else {
            reject('Falló, no fué');
        }
        // resolve('Estos son los datos de la promesa cumplida');
        
    }, 3000); // para verla cumplida hay que llamarla de nuevo en consola.
});

console.log(promesa); // pending

promesa
    // THEN: Se ejecuta con el resolve
    .then(datos => {
        console.log('Promesa Resuelta', datos);
    })
    // CATCH: Se ejecuta con el reject
    .catch(err => {
        console.log('Promesa no resuelta', err);
    })
    // FINALLY: Se ejecuta de todas formas (resolve o reject)
    .finally(()=> {
        console.log('Fin');
    });

// PROMISES: Se utilizan en la programacion asincronica y representa un valor que puede estar disponible ahora, en un futuro o nunca