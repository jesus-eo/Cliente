let alumno1 = [];
let alumno2 = [];
let alumno3 = [];
let alumno4 = [];
let alumno5 = [];
let arrayMultidimensional = [alumno1, alumno2, alumno3, alumno4, alumno5];

let nombre = document.getElementById("nombre");
let dwec = document.getElementById("dwec");
let diw = document.getElementById("diw");
let dwese = document.getElementById("dwese");
let cabeceras = ["Nombre", "DWEC", "DIW", "DWESE"];
let tabla = document.createElement('table');
let trFila1 = document.createElement('tr');
let trFila2 = document.createElement('tbody');
let td = document.createElement('td');
let btn = document.getElementById("btn");

btn.addEventListener("click",compruebaCrearray);

function validarNombre(){
    if(!nombre.checkValidity || !isNaN(nombre.value)){
        nombre.reportValidity();
        return false;
    }
    return true;
}
function validardwec(){
    if(!dwec.checkValidity || isNaN(dwec.value)){
        dwec.reportValidity();
        return false;
    }
    return true;
}
function validardiw(){
    if(!diw.checkValidity || isNaN(diw.value)){
        diw.reportValidity();
        return false;
    }
    return true;
}
function validardwese(){
    if(!dwese.checkValidity || isNaN(dwese.value)){
        dwese.reportValidity();
        return false;
    }
    return true;
}
//Compruebo si los campos estan rellenos y los meto en el array 
let numAlumnos = 0;
function compruebaCrearray(e) {
    if(validarNombre()  && validardwec() && validardiw() && validardwese() && numAlumnos < 6) {
        arrayMultidimensional[numAlumnos].push(nombre.value, dwec.value, diw.value,dwese.value);
        numAlumnos++;
        console.log(numAlumnos);
        if (numAlumnos == 5){
            mostrarTabla();
        }
        e.preventDefault();
    } else {
       e.preventDefault();
    }
}

//Recorro el array de la cabecera, y meto dentro del th el contenido de cada elemento del array <th> nombre <th> y después esto lo inserta en el dentro del tr --> <tr> <th>nombre</th> <tr>
function mostrarTabla() {
for (let cabecera of cabeceras) {
  let th = document.createElement('th');
  th.textContent = cabecera;
  trFila1.appendChild(th);
}
for (let array  of arrayMultidimensional) {
  let tr = document.createElement('tr');
    for (let elemento of array) {
      let td = document.createElement('td');
      td.textContent = elemento;
      tr.appendChild(td);
      trFila2.appendChild(tr);
    }
}
tabla.appendChild(trFila1);
tabla.appendChild(trFila2);
document.body.appendChild(tabla);
}