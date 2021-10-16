/* Crea un programa que genere un listado de horas que vayan desde las 9 hasta las 21 de 5 minutos en 5 minutos.

En lugar de mostrar un alert, utiliza la instrucción document.write(“Mensaje”) que muestra los datos en el propio HTML.

Comenta el código con los comentarios que estimes necesarios.  */

for (let i = 9; i < 22; i++) {
    if(i<21){
        for (let p = 05; p < 65; p+=5) {
            document.write(`${i}:${p} `);
            
        }
    }else{document.write(i + ":00")}
    
}