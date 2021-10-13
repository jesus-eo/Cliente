/* Crea un programa en el que crees 4 variables, 2 cadenas y 2 números, con los siguientes valores: tu nombre, tu
apellido, tu edad y tu año de nacimiento.
■ Muestra en un alert una frase que incluya comillas simples.
■ Muestra en un alert tu nombre y apellidos separados por un salto de línea.
■ Muestra en un alert la suma de las variables edad y año de nacimiento.
■ Muestra en un alert la suma de todas las variables.
Comenta el código con los comentarios que estimes necesarios. */

let nombre = "Jesús";
let apellido = "Espinar";
let edad = 29;
let año = 1992;

alert('Hola,Buenos dias');
//Para saltar el caracter y poder usar el salto de linea utilizr comillas dobles.
alert(nombre + "\n" + apellido);
alert(edad + año);
alert(nombre + apellido + edad + año);