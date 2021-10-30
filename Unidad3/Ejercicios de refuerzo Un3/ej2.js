 
let frase = (document.getElementById("frase"));
let inicio = document.getElementById("inicio");
let fin = document.getElementById("fin");
let btn = document.getElementById("enviar");

btn.addEventListener("click", extraer);

function extraer() {
    let valorEntrada = frase.value;
    let valorInicio = inicio.value;
    let valorFinal = fin.value;
    let indicefinal = valorEntrada.lastIndexOf(valorFinal);//Devuelve el índice de la última aparicion
    let indiceInicio = valorEntrada.indexOf(valorInicio);
    let sol = valorEntrada.substring(indiceInicio + 1, indicefinal);//Dicide la cadena entre los índices que le paso
    document.getElementById("salida").innerHTML = (`La oración escrita es: ${valorEntrada}. <br> <p> Los delimitadores dentro de la oración son: ${valorInicio} y ${valorFinal}.</p>  <p> La parte de los delimitadores ${indiceInicio} y ${indicefinal}: ${sol}.`);
};
