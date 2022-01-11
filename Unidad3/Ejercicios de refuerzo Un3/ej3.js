let entrada = document.getElementById("entrada");
let btn = document.getElementById("btn");
let salida = document.getElementById("salida");
btn.addEventListener("click", validar);

function validar() {
    let exreg = /^(\d{2}:?\d{2})(:\d{2})?$/g;
    if(exreg.test(entrada.value)){
        salida.innerHTML = "Datos correctos";
        salida.style.color = "green";
    }else {
        salida.innerHTML = (`La hora (${entrada.value}) no es correcta, tiene que tener el formato hh:mm:ss o hh:ss`);
        salida.style.color = "red";
    }
}

!isNaN(25)