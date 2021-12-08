console.log(document.querySelector('title').textContent);

/*---------------------------------------------------------------*/
/* OBJETO MAILER                                                 */
/*---------------------------------------------------------------*/

// let Mailer = function () {}

// Mailer.prototype = {
//     enviarMailDeCompra: function(mail) {
//         console.log(mail);
//         console.log('Enviando email...');
//         setTimeout(() => {
//             console.log('email enviado a ' + mail);
//         }, 2000);
//     }
// }


/*---------------------------------------------------------------*/
/* OBJETO ORDEN DE COMPRA                                        */
/*---------------------------------------------------------------*/

// let Orden = function(mail) {
//     this.mail = mail;   
// };

// Orden.prototype = {
//     enviar: function () {
//         console.log('Orden de compra almacenada');
//         this.enviarMail(this.mail);
//     },
//     enviarMail: function (mail) { // acoplamiento:
//         /*-----------------------------------------------------*/
//         /* Fuerte acoplamiento entre los objetos orden y mailer*/
//         /*----------------------------------------------------*/
//         let mailer = new Mailer();
//         mailer.enviarMailDeCompra(mail);
//         // SOLUCION --> Utilizar el patron Pub Sus
//     }
// };

/*---------------------------------------------------------------*/
/* PRUEBA: ACCIÓN                                                */
/*---------------------------------------------------------------*/

// let orden = new Orden('max@gmail.com');
// console.log(orden);
// orden.enviar();



/*---------------------------------------------------------------*/
/* Bus de comunicación entre objetos(implementacion Pub Sub)     */
/*---------------------------------------------------------------*/

let BusComunicacion = {
    acciones: {

    },
    suscribir: function(servicio, cb) {
        if(!this.acciones[servicio]) this.acciones[servicio] = [];
        this.acciones[servicio].push(cb);
        console.warn(`Servicio: ${servicio} con una nueva suscripción`);
        // console.log(this.acciones);

    },
    publicar: function(servicio, datos) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.warn(`En este servicio: ${servicio} no hay suscriptores (publicar)`);
            return // break (que no siga)
        }
        // sigue si no entró al if
        this.acciones[servicio].forEach(cb => {
            if(cb) cb(datos || {}) // datos o objeto vacio (si datos está vacío)

        });
    },
    desuscribir: function(servicio) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.warn(`En este servicio: ${servicio} no hay suscriptores (desuscribir)`);
            return
        }
        this.acciones[servicio] = [];
        console.warn(`Servicio ${servicio} desuscripto`);
    }
}


// /*---------------------------------------------------------------*/
// /* Utilización del patrón Pub-Sub (BusComunicación) realizar un test de funcionamiento                                           */
// /*---------------------------------------------------------------*/

// // Me suscribo al servicio diarios del domingo (suscribe: Sus/Sub)
// BusComunicacion.suscribir('Diario del domingo: ', diario => console.log('Llego el diario: ', diario));
// BusComunicacion.suscribir('Diario del domingo: ', diario => document.write('Llego el diario: ', diario, '<br>'));
// BusComunicacion.suscribir('Diario del martes: ', diario => console.log('Llegó el diario: ', diario));
// BusComunicacion.suscribir('Diario del martes: ', diario => document.write('Llegó el diario: ' + diario + '<br>'));

// // El diariero sale a repartir (publica: Pub)

// let refTimerD = setInterval(() => {
//     BusComunicacion.publicar('Diario del domingo', 'La Nación');
// }, 7000);


// let refTimerM = setInterval(() => {
//     BusComunicacion.publicar('Diario del martes', 'La Razón');
// }, 3500);


// // Luego de varias entregas, me desuscribo

// setTimeout(() => {
//     BusComunicacion.desuscribir('Diario del domingo');
//     clearInterval(refTimerD); // reseteo
// }, 28000); // 4 entregas

// setTimeout(() => {
//     BusComunicacion.desuscribir('Diario del martes');
//     clearInterval(refTimerM); // reseteo
// }, 14000); // 4 entregas

/*---------------------------------------------------------------*/
/* Utilizaciòn de Pub Sub (BusComunicacion) para desacoplar objetos
orden y mailer                                                   */
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
/* OBJETO MAILER                                                 */
/*---------------------------------------------------------------*/

let Mailer = function() {
    BusComunicacion.suscribir('orden', mail => this.enviarMailDeCompra(mail));
}

Mailer.prototype = {
    enviarMailDeCompra: function(mail) {
        console.log('enviando mail...');
        setTimeout(() => {
            console.log('Email enviado a ' + mail);
        }, 2000);
    }
}

/*---------------------------------------------------------------*/
/* OBJETO ORDEN                                                  */
/*---------------------------------------------------------------*/

let Orden = function(mail) {
    this.mail = mail;
}

Orden.prototype = {
    enviar: function() {
        console.log('Orden de compra almacenada');
        this.enviarMail(this.mail);
    },
    enviarMail: function(mail) {
        // solucion (desacoplamiento):
        BusComunicacion.publicar('orden', mail);

        // fuerte acoplamiento entre objetos orden y mailer
        // let mailer = new Mailer();
        // mailer.enviarMailDeCompra(mail);
    }
}


/*---------------------------------------------------------------*/
/* ACCION                                                        */
/*---------------------------------------------------------------*/

let mailer = new Mailer();
let orden = new Orden('nico@gmail.com');
orden.enviar();