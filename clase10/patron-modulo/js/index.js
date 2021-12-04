// console.log(document.querySelector('title').textContent);

// https://medium.com/@jmz12/patrones-de-dise%C3%B1o-en-js-43beab8f5756
// http://javaespanol.blogspot.com/2016/04/patrones-de-diseno-agrupacion-gof-gang.html

/*---------------------------------------------------------------*/
/* PATRON MODULO                                                 */
/*---------------------------------------------------------------*/

// console.log(getX);

/*---------------------------------------------------------------*/
/* MODULO 1                                                      */
/*---------------------------------------------------------------*/

// console.log(window.modulo1);
console.log(modulo1); // funcion getX sin ejecutar
modulo1(); // ejecucion de funcion getX

/*---------------------------------------------------------------*/
/* MODULO 2                                                      */
/*---------------------------------------------------------------*/

/*------------------------*/
/* FORMA 1                */
/*------------------------*/

// console.log(modulo2());
// console.log(modulo3());

// console.log(modulo4('Nicolás'));
// console.log(modulo5());
// console.log(modulo5());
// console.log(modulo5());

/*------------------------*/
/* FORMA 2                */
/*------------------------*/

console.log(modulo2.getClaveEncriptada);
console.log(modulo2.getClaveEncriptada());

console.log(modulo2.getClave);
console.log(modulo2.getClave());

console.log(modulo2.firmarTexto);
console.log(modulo2.firmarTexto('Nico'));

console.log(modulo2.getRandom);
console.log(modulo2.getRandom());
