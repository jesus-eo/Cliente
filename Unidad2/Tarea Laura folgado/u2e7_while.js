/* EJERCICIO: u2e7_while
Crea un control parental para que no se pueda entrar en una página.

Se pedirá al usuario que escriba el apellido del primer presidente de la democracia Suárez(si no sabes quién fue, busca en Google ;)

Para guardar un valor del usuario utilizamos el siguiente código:

var respuesta = prompt (“Mensaje”);

Mientras el usuario no introduzca el valor correcto, el mensaje seguirá saliendo.

Comenta el código con los comentarios que estimes necesarios. */

//Respuesta correcta Suárez
//Preguntar como filtrar los acentos en un prompt
let res = "j";
while (res != "suárez"){
    
    res = prompt("¿Cual es el apellido del primer presidente de la democracia").toLowerCase();
    console.log(res);
}

