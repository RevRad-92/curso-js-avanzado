// API HTTP
const http = require('http');
const moment = require('moment'); 

let contadorVisitas = 0;

// console.log(http); // muestra objeto http

// git bash:
// $ node server.js (ejecutar app node)
// ctrl + c (cortar ejecucion)

const server = http.createServer((request, response) => {

    // console.log(request);
    let url = request.url;
    console.log(url);

    // proceso el root
    if (url === '/') {
        // escribir el content-type
        response.writeHead(200, {'content-type': 'text/html'}); // codigo y content type
        response.write('<p style="color:blue;">Hola soy un nuevo servidor http desde NodeJS</p>');
        response.end(`<p style="color:orangered;">contador de visitas: ${++contadorVisitas} </p>`)
    }
    // proceso ruta /fecha
    // Libreria moment: $ npm i moment
    else if(url === '/fecha') {
        let now = moment().format('L');
        // https://momentjs.com/
        response.writeHead(200, {'content-type': 'text/html'});
        response.end(`<h3 style="color:green;">La fecha actual es ${now}</h3>`);
    } // proceso las otras rutas 
    else {
        response.writeHead(404, {'content-type': 'text/html'});
        response.end(`<h2 style="color:red;">Recurso ${url} NO ENCONTRADO</h2>`);
    }

});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
})


