
let entrada = prompt("Inserta una frase");
//Convierto en array la entrada y compruebo si no es número crea un nuevo array con los elementos que cumplan esa condición y lo convierto a cadena con el join.
let salida = document.getElementById("salida");
let arrayEntrada = [...entrada];
let arrayFiltrado = arrayEntrada.filter(elem => isNaN(parseInt(elem)));
let EntradaFiltrada = arrayFiltrado.join("");
/* Esta función recorre cada carácter de la cadena(EntradaFiltrada) y va mostrando cada caracter, el setTimeout llama a la función una vez cada cierto tiempo hasta que recorra la cadena entera que ya no entrara en el if */
let i = 0;
/* Texto*/
let speed = 200;
/* The speed/duration of the effect in milliseconds */
typeWriter();
function typeWriter() {
    console.log(i);
    console.log(EntradaFiltrada);
    if (i < parseInt(EntradaFiltrada.length)) {
        console.log("ENTRA");
        salida.innerHTML += EntradaFiltrada.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
/* setInterval(cursor,500);
function cursor() {
    salida.innerHTML += "|";
} */
console.log(EntradaFiltrada);