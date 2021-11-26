window.onload = iniciar;
let salida = document.getElementById("error");
function iniciar() {
    document.getElementById('enviar').addEventListener('click', validar);
}
//Checkvalidity comprueba si la validación que le ponemos en el html es correcta
function validarNombre(){
    let nombre = document.getElementById('nombre');
    if (!nombre.checkValidity()){
        error(nombre);
        return false;
    }
    return true;
}
function validaredad(){
    let edad = document.getElementById('edad');
    if (!edad.checkValidity()){
        error(edad);
        return false;
    }
    return true;
}
function validartelefono(){
    let telefono = document.getElementById('telefono');
    if (!telefono.checkValidity()){
        error(telefono);
        return false;
    }
    return true;
}
function validar(e){
    borrarError();
    if (validarNombre() && validaredad() && validartelefono() && confirm("Deseas enviar el formulario")){
        return true;
    }else {
        let formulario = document.getElementById("formulario");
        e.preventDefault(formulario);
        return false;
    }
}
function error(elemento) {
    salida.innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function borrarError(){
    let form = document.getElementById("formulario");
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].className = " ";
    }
}
/* Tambien podemos validar con el elemento validity y sus propiedades ej:elemento.validity.patternMismatch-- devuelve true o false si ese elemento cumple el patrón que le ponemos en el html 
validity.valueMissing-->Es para comprobar el required si el input tiene valor o no.
  */