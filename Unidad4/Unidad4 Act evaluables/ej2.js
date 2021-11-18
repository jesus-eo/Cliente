let salida = document.getElementById("salida");
let array = [];
let valorValido = true;
principal();
//Esta función pide al usuario que inserte una palabra si es correcta le indica si quiere insertar más o no.
function principal() {
    let entrada = prompt("Inserte una palabra: ");
    /* let valorValido = true; */
    let confirmacion = true;
    if (compruebaEntrada(entrada)) {
        while (valorValido && confirmacion) {
           confirmacion = confirm("Deseas insertar otra palabra")
           if (confirmacion) {
            entrada = prompt("Inserta una palabra");
            valorValido = compruebaEntrada(entrada);
           }
        }
    } else {valorValido = false;}
}

/*
* Esta función comprueba que los valores de entrada sean carácteres alfabéticos pasandole  el texto a comprobar si es correcto *
* lo inserta en el array
*/
function compruebaEntrada(entrada){
    let patronLetras = /[a-zA-z]/gi
    console.log(entrada);
    if (patronLetras.test(entrada)) {
        array.push(entrada);
        salida.style.color = "";
        return true;
       
    }else {
        salida.innerHTML = (`Error, Inserte sólo texto`)
        salida.style.color = "red";
        return false;
    }
}

//si el valor es valido abrir una ventana y mostrar datos dentro
if (valorValido) {
    let miVentana = window.open("","","width=600px,heigth=600px");
    //*****Porque utilizando el operador ...array me da fallo */
    miVentana.document.write(`
    <p>Todas las palabras: ${array}.</p> 
    <p>Todas las palabras colocadas al revés: ${array.reverse()}.</p> 
    <p>Primera palabra ingresada por el usuario: ${array[array.length-1]}.</p> 
    <p>Número de palabras del array: ${array.length}.</p>  <p>Ordena las palabras de la 'a' a la 'z': ${array.sort()}.</p>
     <p>Ordena las palabras de la 'z' a la 'a': ${array.sort().reverse()}.</p>`);
}


