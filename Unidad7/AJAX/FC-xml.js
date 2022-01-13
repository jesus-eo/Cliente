
document.getElementById('btn').addEventListener('click',cargarCatalogo);
let xhr = new XMLHttpRequest(); //Creo request

function cargarCatalogo() {
    xhr.onreadystatechange = function () { //Por cada cambio de estado(EVENTO) llamo a la función
        if(this.readyState == 4 && this.status==200){
            mostrarXML(this); /* Le paso el objeto xhr para ver si request */
        };
    }
    xhr.open("GET","cd_catalogo.xml",true);
    xhr.send();
}

function mostrarXML(xhr){

    let docXml = xhr.responseXML;/*  Obtenemos el documento en XML(ETIQUETAS html) */
    
    let cd =docXml.getElementsByTagName('CD');//Obtengo un HTMLCOLLECTION con todos los cd(ETIQUETAS HTML).
    let arrayCd = Array.from(cd); //Convierto el html collection a array para recorrerlo con el foreach porque da fallo si no es array con el for i no da fallo

     let tabla = document.createElement("table");  //Creo la tabla
     tabla.setAttribute("border","2");
     /* tabla.style.border = "2px solid black"; */
     const thead = document.createElement("tr");   //Creo la el tr del thead
     const thartista = document.createElement("th"); //Creo el th del thead
     thartista.textContent = "Artista";              //Inserto el string al th
     const thtitulo = document.createElement("th");
     thtitulo.textContent = "Titulo";
     thead.appendChild(thartista);                    //Añado los th dentro del tr
     thead.appendChild(thtitulo);
     tabla.appendChild(thead);                         //Añado los tr a la tabla
     
     arrayCd.forEach((element) => {                 //Para utilizar el foreach tiene que ser un iterable , , el getElementBytagNAme devuelve htmlcollection
         
       const trbody = document.createElement("tr");
       const tdartista = document.createElement("td");
       tdartista.textContent = element.querySelector("ARTIST").textContent; 
       //con element.getElementByTagNAme('ARTIST')[0]
       const tdtitulo = document.createElement("td");
       tdtitulo.textContent = element.querySelector("TITLE").textContent;
       trbody.appendChild(tdartista);
       trbody.appendChild(tdtitulo);
       tabla.appendChild(trbody);

    }); 

    document.body.appendChild(tabla);
     /*  RTIST").textContent); OBtenemos la etiqueta artista y para sacarle el contenido console.log(i.querySelector("A usamos textContent */
    /*  
    for (const i of cd) {
       tabla += `<tr><td>${i.querySelector("ARTIST").textContent}</td><td>${i.querySelector("TITLE").textContent}</td></tr>`;
    } */

}
