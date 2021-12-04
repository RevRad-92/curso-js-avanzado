/*--------------------------------------------------------------*/
/* PATRON SINGLETON                                             */
/*--------------------------------------------------------------*/

// - limitar la creacion de instancias


(function() {
    'use strict';

    let instancia;
    

    function App() { // funcion constructora
        
        if(instancia == undefined) { // limitador 
            
            this.id = Math.random(); 
            instancia = this; // propio objeto como contexto (ya que estaba por fuera) this hace referencia a App
        } else { // la instancia tiene un valor...
            
            console.warn('No se permite más de una instancia de esta funcion constructora');
            return instancia; // retorna la instancia ya creada
        }
        
    }

    window.App = App;


    console.log('Patrón Singleton instalado');
})();