console.log(document.querySelector('title').textContent);

/*--------------------------------------------------------------*/
/* PATRON SINGLETON                                             */
/*--------------------------------------------------------------*/

console.log(App);

let app1 = new App(); // instancia creada 
console.log(app1); 

let app2 = new App(); // intento de nueva instancia
console.log(app2); // devuelve la misma instancia (app1)