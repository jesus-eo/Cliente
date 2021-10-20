/* Los grupos musicales reciben un nombre en función del número de componentes.
Realiza una serie de sentencias condicionales que:
• muestre "not a group" si musicians es menor o igual que O
• muestre "solo" si rnusicians es igual 1
• muestre "duet" si rnusicians es igual a 2
• muestre "trio" si rnusicians es igual a 3
• muestre "quartet" si rnusicians es igual a 4
• muestre "thes es a large group" si rnusicians es mayor que 4 */



function nombreMusical() {
    
    let incomponente = document.getElementById("componentes");


        
            switch (true) {
                case isNaN(incomponente.value):
                    document.getElementById("parrafo").innerHTML= ("No has introducido un número");
                    incomponente.value = "";
                    break;
                case (incomponente.value) <= 0:
                    document.getElementById("parrafo").innerHTML= ("not a group");
                    break;
                case (incomponente.value) == 1:
                    document.getElementById("parrafo").innerHTML= ("solo");
                    break;
                case (incomponente.value) == 2:
                    document.getElementById("parrafo").innerHTML= ("duet");
                    break;
                case (incomponente.value) == 3:
                    document.getElementById("parrafo").innerHTML= ("trio");
                    break;
                case (incomponente.value) == 4:
                    document.getElementById("parrafo").innerHTML= ("quartet");
                    break;
                case (incomponente.value) > 4:
                    document.getElementById("parrafo").innerHTML= ("thes es a large group");
                    break;
                
            }
    
}