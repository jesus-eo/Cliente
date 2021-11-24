let btn = document.getElementById("btn");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let salida = document.getElementById("salida");
let salida1 = document.getElementById("salida1");
let btnTriple = document.getElementById("triple");
btnTriple.addEventListener("click", tripleValores);
btn.addEventListener("click",creaArray);

//Creo array y compruebo si es positivo todos sus elementos
let array;
function creaArray(){
  array = [num1.value,num2.value,num3.value,num4.value,num5.value];
  if (array.every(value => value >= 0)){
    salida.innerHTML = (`<p> a) Vector creado: ${array} <br>b) Todos los elementos son enteros positivos </p>`);
  } else {
    salida.innerHTML = (`a) Vector creado: ${array} <br>b) Algún elemento no es positivo.`);
  }
  habilitaBtn();
}

function habilitaBtn(){
  btnTriple.disabled = false;
}

function tripleValores(){
  let arrayTriple = array.map(value => value * 3);
  let arrayMultiplicado =  arrayTriple.reduce((total, item) => total * item);
  salida1.innerHTML = (`c) Valores triples: ${arrayTriple} <br> d) Resultado de multiplicar los valores del nuevo array: ${arrayMultiplicado}`);
}