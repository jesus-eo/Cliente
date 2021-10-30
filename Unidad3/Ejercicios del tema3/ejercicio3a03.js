/* 
    Condiciones:
    (999,999)
    Los números pueden tener entre 1 y 3 dígitos. 
*/

let entrada = document.getElementById("entrada");
let btn = document.getElementById("btn");
/* Escapamos los parentesis porque son caracteres especiales */
let regexp = /^\(\d{1,3},\d{1,3}\)$/g;

btn.addEventListener('click',function(){
    if (regexp.test(entrada.value)) {
        document.getElementById("salida").innerHTML = "Coordenadas validas";
    }else{
        document.getElementById("salida").innerHTML = "Coordenadas incorrectas, prueba de nuevo";
    }
})