console.log(document.querySelector('title').textContent);

/*--------------------------------------------------------------*/
/* PATRON PUB-SUB (OBSERVER)                                    */
/*--------------------------------------------------------------*/
// suscripcion -> accion publicador -> notificacion al subscriptor
// newsletter
// canal de comunicación


/*--------------------------------------------------------------*/
/* OBJETO MAILER                                               */
/*--------------------------------------------------------------*/

let Mailer = function() {}

Mailer.prototype = {
    enviaMailDeCompra: function(mail) {
        console.log('Enviando email....');
        setTimeout(() => {
            console.log('Email enviado a ' + mail);
        }, 2000);
    }
}

// class Mailer {
//     enviaMailDeCompra(mail) {
//         console.log('Enviando mail ...');
//         setTimeout(()=> {
//             console.log('email enviado a ' + mail);
//         }, 2000);
//     }
// }

/*--------------------------------------------------------------*/
/* OBJETO ORDEN COMPRA                                          */
/*--------------------------------------------------------------*/

let Orden = function(mail) {
    this.mail = mail;
}

Orden.prototype = {
    enviar: function() {
        console.log('Orden de compra almacenada');
        this.enviarMail(this.mail);
    },
    enviarMail: function(mail) { 
        //----------------------------------
        // Fuerte acoplamiento
        //----------------------------------

        let mailer = new Mailer();
        mailer.enviaMailDeCompra(mail);
        // SOLUCION -> Utilizar patron de diseño pub-sub
    }
}


/*--------------------------------------------------------------*/
/* ACCIONES                                                     */
/*--------------------------------------------------------------*/


let orden = new Orden('max@gmail.com');
orden.enviar();