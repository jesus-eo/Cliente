let datos = [5,23,12,85];
let sumaDatos = 0;

/* for (let i = 0; i < datos.length; i++) {
    sumaDatos += datos[i];
    document.write(sumaDatos + '\n'); 
} */

/* for in
 for(let i in datos){
     sumaDatos += datos[i];
     document.write(`El resultado total es: ${sumaDatos}`);
 } */

 let alumno = {
     nom:"Jesús Manuel",
     ape1:"Espinar",
     ape2:"Ocaña"
 }
 let nombreCompleto = "";

 for(let i in alumno){
    nombreCompleto += alumno[i] + " ";
    
 }

 document.write(`El resultado total es: ${nombreCompleto}`);
 