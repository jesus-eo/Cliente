/* Crea un programa que pida al usuario que introduzca una edad y muestre el siguiente mensaje en función del número introducido:

0-12: Niño
13-26: Joven
26-60: Adulto
>60: Jubilado
Para guardar un valor del usuario utilizamos el siguiente código:

var respuesta = prompt (“Mensaje”);
También comprobará que no se meta un número menor de 0. Comenta el código con los comentarios que estimes necesarios */
let val = parseInt(prompt("Introduzca su edad:"));
if (val < 0) {
    alert("No puedes introducir un valor menor que 0");
}else if(val > 0 && val <= 12){
    alert("Eres un niño");
}else if(val >= 13 && val <= 26){
    alert("Eres joven");
}else if(val >= 26 && val <= 60){
    alert("Eres adulto");
}else if(val > 60){
    alert("Eres un jubilado");
}

document.write(`Tu edad es: ${val}`);
