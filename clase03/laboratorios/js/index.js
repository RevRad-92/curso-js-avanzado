const form = document.querySelector('form');

function setCustomValidityJS(mensaje) {
    let div = document.querySelector('#divForm');
    div.innerHTML = mensaje;
    div.style.display = (mensaje) ? "block" : "none";
}


function validarNombre(valor) {
    let mensaje = 'El nombre no es válido';
    
    let nombre = valor.trim().split(" ");
    
    if (nombre.length > 1) {
        if (nombre[0].length < 3) {
            setCustomValidityJS(mensaje);
            return null;
        } else if (nombre[1].length < 3) {
            setCustomValidityJS(mensaje);
            return null;
        } 
        // console.log(nombre[0], nombre[1]);
    
    } else if (nombre[0].length < 3) {
        setCustomValidityJS(mensaje)
        return null;
    } 

    setCustomValidityJS("");
    return nombreFinal = nombre[0] + " " + nombre[1];
    
}

function validarApellido(valor) {
    let mensaje = 'El apellido no es válido';
    
    let apellido = valor.trim().split(" ");
    
    if (apellido.length > 1) {
        if (apellido[0].length < 4) {
            setCustomValidityJS(mensaje);
            return null;
        } else if (apellido[1].length < 4) {
            setCustomValidityJS(mensaje);
            return null;
        } 
        // console.log(apellido[0], apellido[1]);
    
    } else if (apellido[0].length < 4) {
        setCustomValidityJS(mensaje)
        return null;
    } 

    setCustomValidityJS("");
    return apellidoFinal = apellido[0] + " " + apellido[1];
    
}

function validarEmail(valor) {
    let mensaje = 'El email no es válido';
    
    let email = valor.trim().split("@");
    
    

    if (email) {
        
        let nombre = email[0];
        
        if (!valor.includes("@")) {
            setCustomValidityJS(mensaje);
            return null;
        }

        console.log(nombre);
        console.log(email[1]);
        // console.log("nombre es: " + typeof(nombre))
        // console.log("nombre: " + nombre);
        // 65-90(A-Z) 97-122(a-z) 95(_) 42( . ) 45(-)  48-57
        for (let i=0; i < nombre.length; i++) {
            let letra = nombre[i]
            let codigo = letra.charCodeAt();
            if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122) || codigo == 95 || codigo == 42 || codigo == 45 || (codigo >= 48 && codigo <= 57) || codigo == " ") {
                setCustomValidityJS("")
            } else if ( letra == " ") {
                setCustomValidityJS(mensaje);
                return null
            } else {
                setCustomValidityJS(mensaje);
                return null
            }
        }

        
        console.log("email total: ", email);

        if (email.length > 1) {

            
            let dominio = String(email[1]);
            // console.log("dominio: " + dominio);
            let dom = dominio.split(".");
            dominio = String(dom[0]);
            console.log("dominio: " + dominio);

            if (!valor.includes(".")) {
                setCustomValidityJS(mensaje);
                return null;
            }
            
            
            for (let i=0; i < dominio.length; i++) {
                
                let letra = dominio[i];
               
                let codigo = letra.charCodeAt();
                if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122) || codigo == 42 || codigo == 45 || (codigo >= 48 && codigo <= 57) || codigo == " ") {
                    setCustomValidityJS("")
                    
                } else if (codigo == 32) {
                    setCustomValidityJS(mensaje);
                    return null
                } else {
                    setCustomValidityJS(mensaje);
                    return null
                }
            }

            
            let com = String(dom[1]);
            console.log("com: " + com);

            if (com === "") {
                setCustomValidityJS(mensaje);
                return null;
            }
            

            if (com) {
                for (let i=0; i < com.length; i++) {
                    let letra = com[i];
                   
                    let codigo = letra.charCodeAt();
                    if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
                        setCustomValidityJS("");
                        
                    } else {
                        setCustomValidityJS(mensaje);
                        return null
                    }
                }
            }
            
            if (dom[2] === "" || dom[2] === !null) {
                setCustomValidityJS(mensaje);
                return null
            }

            console.log(typeof(dom[3]));
            if (dom[3] !== undefined) {
                let last = String(dom[3]);
            
                setCustomValidityJS(mensaje);
                return null
            }
           

            
        }
    }

    
    setCustomValidityJS('');
    console.log('este es el mail final: ', inputEmail.value);
    return emailFinal = inputEmail.value;

}


const inputNombre = document.querySelector('#nombre');
inputNombre.addEventListener('input', (e) => {
    e.stopPropagation();        
    validarNombre(inputNombre.value);
})

const inputApellido = document.querySelector('#apellido');
inputApellido.addEventListener('input', (e) => {
    e.stopPropagation();        
    validarApellido(inputApellido.value);
})

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('input', (e) => {
    e.stopPropagation();
    validarEmail(inputEmail.value);
    
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form);
})

