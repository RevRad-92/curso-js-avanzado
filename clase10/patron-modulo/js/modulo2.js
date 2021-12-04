(()=> {

    /*------------------*/
    /* Variable privada */
    /*------------------*/
    
    let clave = 'qwerty1234';
    
    /*-------------------*/
    /* Funciones privada */
    /*-------------------*/
    
    function getClaveEncriptada() {
        return clave.split('').reverse().join('');
        // split('') agarra caracter por caracter ('separa' por patron vacio...-> entonces letra por letra)
        // join('') junta todo de acuerdo al patron (vacio) , join() es igual a join(',')
    }
    
    function getClave() {
        let password = 'qweq23sdsa';
        return password;
    } 

    function firmarTexto(texto) {
        return texto + '.' + parseInt(Math.random()*10000);
    }

    function getRandom() {
        return parseInt(Math.random()* 1000) + 1; // de 1 a 1000 (saco el 0)
    }

    /*--------------------*/
    /* Funciones públicas */
    /*--------------------*/
    
    /*---------FORMA 1-------*/
    // window.modulo2 = () => getClaveEncriptada();
    // window.modulo3 = () => getClave();
    // window.modulo4 = texto => firmarTexto(texto);
    // window.modulo5 = () => getRandom();

    
    /*---------FORMA 2-------*/
    // agrupar funciones en objeto {clave: valor} {funcion: ()=> funcion()}

    window.modulo2 = {
        getClaveEncriptada: () => getClaveEncriptada(),
        getClave: () => getClave(),
        firmarTexto: texto => firmarTexto(texto),
        getRandom: () => getRandom(),
    }



    console.log('Módulo 2 instalado');
})();