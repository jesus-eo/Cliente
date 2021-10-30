let entrada = document.getElementById("entrada");
let salida = document.getElementById("sol");
let btn = document.getElementById("btn");
btn.addEventListener("click",separa);

function separa() {
    for (const i in entrada.value) {
        
        let x = (entrada.value).charAt(i); 
        if (isNaN(x)){
            console.log(x);
            document.write(x);
        }
    }
}

