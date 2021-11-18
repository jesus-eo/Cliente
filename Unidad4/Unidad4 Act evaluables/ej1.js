let btnAsc = document.getElementById("btnAsc");
let btnDesc = document.getElementById("btnDesc");
let btnInverso = document.getElementById("btninverso");
let btnSumatorio = document.getElementById("btnSumatorio");
let salida = document.getElementById("salida");
let numinicial = 1;
let numfinal = 21;
let numeroBusqueda = document.getElementById("numbusqueda");
let btnBuscar = document.getElementById("btnBuscarNum");
//***Eventos***
btnBuscar.addEventListener("click", buscarNumArray);
//Ordena ascendentemente
btnAsc.addEventListener("click", function (){
   salida.innerHTML = (`${arraynumImpares.sort(function(a, b){return a - b})}`);
   salida.style.color = "";
})
//Ordena descendentemente
btnDesc.addEventListener("click", function (){
    salida.innerHTML = (`${arraynumImpares.sort(function(a, b){return b - a})}`);
    salida.style.color = "";
})
btnInverso.addEventListener("click",function (){
    salida.innerHTML = `Array Invertido ${arraynumImpares.reverse()}`
});
btnSumatorio.addEventListener("click",sumaImpares);

//***Funciones***
//Función que pasandole dos parámetros introduce en numimpares los números impares
let arraynumImpares = sacaimpares(numinicial,numfinal);
function sacaimpares(numinicial, numfinal){
    let arrayImpares = [];
    for (let i = numinicial; i <= numfinal; i++) {
        /* arrayImpares.push(i) = i%2 != 0 || null ;  */
        if (i%2 != 0) {
            arrayImpares.push(i);
        }
        /* console.log(arrayImpares); */
    }
    return arrayImpares;
}

function sumaImpares() {
    let suma = 0;
    for (const i of arraynumImpares) {
        suma += i;
    }
    salida.innerHTML = `El sumatorio de los número del array es: ${suma}`;
    salida.style.color = "";
}

/* No entiendooooo let arrayInverso = (arraynumImpares) => arraynumImpares.reverse();
 */
//Esta función busca un número en el array y comprueba si existe o no, si existe lo borra 
function buscarNumArray() {
    console.log(arraynumImpares);
    
    if (arraynumImpares.includes(parseInt(numeroBusqueda.value))) {
        let indiceNumBusqueda =arraynumImpares.indexOf(parseInt(numeroBusqueda.value));
        salida.innerHTML = (`Su busqueda tubo exito su número elegido esta en la posición ${indiceNumBusqueda}`);
        salida.style.color = "green";
        arraynumImpares.splice(indiceNumBusqueda,1);
    } else {
        salida.innerHTML = `Lo siento su busqueda no tubo exito`;
        salida.style.color = "red";
    }
}