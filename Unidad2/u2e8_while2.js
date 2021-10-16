/* EJERCICIO: u2e8_while2
Modifica el ejercicio anterior de la siguiente forma:

En primer lugar, se carga un prompt donde pregunta: “¿Cuál fue el primer presidente de la democracia española?”
En caso de que el usuario introduzca mal nombre y apellido, muestre como mensaje: “ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?”
En caso de que el usuario introduzca el nombre del presidente (solamente) el prompt muestre como mensaje “Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?”.
 En caso de que el usuario introduzca el apellido del presidente (solamente) el prompt muestre como mensaje “Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?”.
Comenta el código con los comentarios que estimes necesarios. */

//Respuesta Adolfo suárez
let res = "";

while (res != "adolfo suárez") {
    
    res = prompt("¿Cuál fue el primer presidente de la democracia española?").toLowerCase();

   if(res == "adolfo"){
       alert("Te falta el apellido");
   }else if(res == "suárez"){
       alert("Te falta el nombre");
   }else if(res != "adolfo suárez"){
    alert("ERROR, Intentelo de nuevo");
   }
}
