   //Selecciono formulario
   let formulario = document.getElementById('miformulario');
   //.elements[] Devuelve un array con todos los input del formulario
   //getElementsByTagname("etiqueta") Devuelve un array con todos los elementos de la etiqueta
   window.onload = iniciar;

   function iniciar() {
       document.getElementById('enviar').addEventListener("click", validar);
   }


   function validaNombre(){
       let elemento = document.getElementById("nombre");
       limpiarError(elemento);
       if (elemento.value == ""){
           alert("El campo nombre no puede ser vacio");
           error(elemento);
           return false;
       }
       return true;
   }

   function validaTelefono(){
       let elemento = document.getElementById("telefono");
       if (isNaN(elemento.value)) {
           alert("El campo telefono es obligatorio");
           return false;
       }
       return true;
   }

   function validaFecha() {
       let dia = document.getElementById('dia');
       let mes = document.getElementById('mes');
       let ano = document.getElementById('ano');
       let fecha = new Date(ano, mes, dia);
       console.log(fecha);
       console.log(typeof fecha);
       if (isNaN(fecha)){ //Aqui falla y esta igual que el video*****************************
           alert("Los datos de fecha son incorrectos");
           return false;
       }
       return true;
   }

   function validaCheck() {
       let mayorEdad = document.getElementById("m18");
       if (!mayorEdad.checked) {
           alert("Tienes que seleccionar el campo check");
           return false;
       }
       return true;
   }
   function validar(e){
       console.log("entra en validar");
       if(validaNombre() && validaTelefono() && validaCheck() && confirm("Pulsa si deseas enviar este formulario")) {
           return true;
       }else{
           e.preventDefault(formulario);
           return false;
       }
   }

   function error(elemento){
       elemento.className = "error";
       elemento.focus();
   }
   function limpiarError(elemento){
       elemento.className = " ";
   }