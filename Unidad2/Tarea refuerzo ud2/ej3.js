
let habactual = document.getElementById("habitacion");
let sospechoso = document.getElementById("sospechosos");
let btn = document.getElementById("resolver");
let arma = "";
let resuelto = false;
document.querySelector("form").addEventListener('click',function(event) {
    event.preventDefault();
});
btn.addEventListener('click',armactual);
btn.addEventListener('click',resolver);



function armactual() {
  switch (habactual.value) {
      case "salon":
          arma = "veneno";
          break;
      case "galeria":
          arma = "trofeo";
          break;
      case "billar":
          arma = "palo";
          break;
      case "comedor":
          arma = "cuchillo";
          break;
      
  }
  console.log(arma);
}

function resolver() {
    if ((habactual.value) == "comedor" && (sospechoso.value) == "SR.Parkes") {
        resuelto = true;
    } else if((habactual.value) == "galeria" && (sospechoso.value) == "SRA.VanCleve"){
        resuelto = true;
    }else if((habactual.value) == "billar" && (sospechoso.value) == "Sra.Sparr"){
        resuelto = true;
    }else if((habactual.value) == "salon" && (sospechoso.value) == "Sr.Kalehoff"){
        resuelto = true;
    }
    if(resuelto){
        document.getElementById("resultado").innerHTML = (`${sospechoso.value} lo hizo en el ${habactual.value} con el ${arma}! `);
        document.getElementById("resultado").style.color="green";
    }else{ 
        document.getElementById("resultado").innerHTML = ("El misterio sigue sin resolverse, sigue probando.");
        document.getElementById("resultado").style.color="red";
    }
    resuelto = false;
}