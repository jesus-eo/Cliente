/* Crea un programa en el que crees 5 variables numéricas (entero, decimal, científico, octal y
    hexadecimal).
    A las variables les asignarás los siguientes números: 1357, 135.7, 135e7, 01357 y 0x1357.
    Muestra con 5 alerts su valor, escribiendo la siguiente sentencia:
     alert (“Número entero” + entero);
    Comenta el código con los comentarios que estimes necesarios. */


let entero = 1357;
let decimal = 135.7;
let cientifico = 135e7;
let octal = 01357;
let hexadecimal = 0x1357;

alert("Número entero " + entero);
alert("Número decimal " + decimal);
//Utilizamos templates con comillas invertidas ´
alert(`Número cientifico ${cientifico}`);
alert(`Número octal ${octal}`);
alert(`Número hexadecimal ${hexadecimal}`);

