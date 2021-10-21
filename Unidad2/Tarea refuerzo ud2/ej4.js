let cont = 1;
let res = "";
console.log("fuera");
while (cont != 21) {
    if ((cont % 3) == 0 && (cont % 5) == 0) {
        res += "El número " + cont + " es divisible por 3 y 5." + "<br>";
    }else if((cont % 3) == 0){
        res += "El número " + cont + " es divisible por 3." + "<br>";
    }else if((cont % 5) == 0){
        res += "El número " + cont + " es divisible por 5." + "<br>";
    }else{
        res += cont + "<br>";
    }
    console.log("entra");
    cont++;
}
document.getElementById("resultado").innerHTML= (`${res}`);