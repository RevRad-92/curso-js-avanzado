console.log(document.querySelector('title').textContent);

// https://caniuse.com/?search=geolocation
// https://developer.mozilla.org/es/docs/Web/API/Geolocation_API

// navigator.geolocation.getCurrentPosition(callbackSuccess, callbackError, objetoDeOpciones)

let options = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0, 
}

navigator.geolocation.getCurrentPosition(success, error, options);

function success(position) {
    let coordenadas = position.coords;

    console.log('Tu posición actual es: ');
    console.log('Latitud: ' + coordenadas.latitude);
    console.log('Longitud: ' + coordenadas.longitude);
}

function error(error) {
    console.log(`ERROR(${error.code}): ${error.message}`);
};