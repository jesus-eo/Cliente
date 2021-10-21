let entrada = prompt("Introduce un número");
while (entrada > 1000) {
    if(entrada > 1000){
        alert("Debes introducir un número menor de 1000");
    }
    entrada = prompt("Introduce un número");
}

for (let i = 0; i < entrada.length; i++) {
    document.write(entrada[i] + "<br>");
    
}

let salida = document.getElementById("salida");
let acumu = " ";
for (const i in entrada) {
    acumu += (entrada[i]) + "<br>";
}
salida.innerHTML = (`${acumu}`);
salida.style.color = "red";

for (const i of entrada) {
    alert(i);
}