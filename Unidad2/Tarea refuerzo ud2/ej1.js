/* 1. Escribe una sentencia if...else que a partir de un valor recibido por el usuario:
• muestre "e ven" si el número es par
• muestre "odd" si el número es impar
o Sugerencia: Usa el operador módulo */

$entrada = parseInt(prompt("Inserte un número"));

if ($entrada % 2 == 0) {
    document.getElementById("parrafo").innerHTML= ("even");
    document.getElementById("parrafo").style.color= "green" ;
}else{
    document.getElementById("parrafo").innerHTML= ("odd");
    document.getElementById("parrafo").style.color= "red" ;
    
}