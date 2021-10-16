/* EJERCICIO: u2e9_switch
Modifica el programa u1e4_ifelse para que realice la misma operación pero utilizando un switch.

Ver soluciones a los ejercicios */
let val = parseInt(prompt("Introduzca su edad:"));
switch (true) {
    case val < 0:
        alert("No puedes introducir un valor menor que 0");
        break;
    case val > 0 && val <= 12:
        alert("Eres un niño");
        break;
    case val >= 13 && val <= 26:
        alert("Eres joven");
        break;            
    case val >= 26 && val <= 60:
        alert("Eres adulto");
        break;
    case val > 60:
        alert("Eres un jubilado");
        break;
    
}

document.write(`Tu edad es: ${val}`);