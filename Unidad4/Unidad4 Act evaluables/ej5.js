  /* a) Crear constructor con las propiedades: marca, modelo, color y año fabricación */
  let salida = document.getElementById("salida");
  function coche(marca, modelo, color, anyoFabricacion) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.anyoFabricacion = anyoFabricacion;
  };
  /*b) Instanciar dos objetos. */
  let coche1 = new coche("Peugeot", "Partner", "Gris", 2005);
  let coche2 = new coche("Seat", "León", "Negro", 2006);
 /*  c) Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca */
  salida.innerHTML += (`<p> Notación por puntos: ${coche1.marca}.</p>`);
  /* d) Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color. */
  salida.innerHTML += (`Notación por corchetes: ${coche2['color']}`);
  //e)Métodos mostrar datos
  let mostrarDatosObj1 = document.getElementById("mostrarDatosObj1").addEventListener("click", function () {
      coche1.mostrarDatos();
  });
  coche.prototype.mostrarDatos = function (){ salida.innerHTML += (`<ul>
       <li> La marca es: ${this.marca} </li>
       <li> El modelo es: ${this.modelo} </li>
       <li> El color es: ${this.color} </li>
       <li> El año de fabricación es: ${this.anyoFabricacion} </li>
       </ul>`) };
  /*f) Crear un método acelerar(velocidad). Mostrará    por pantalla que el coche ha acelerado a la velocidad
  pasada. */
  let aceleraObj1 = document.getElementById("aceleraObj1").addEventListener("click", function () {
      coche1.acelerar(120);
  });
  coche.prototype.acelerar = function (velocidad) {
      salida.innerHTML += (`<ul>
       <li> El coche va a una velocidad de : ${velocidad}Km/h </li>
       </ul>`) 
  };
  /*  g) Crear un método con función interna arrancar.   Mostrará por pantalla que el coche de marca _,modelo_, de color_ ha arrancado. */ 
  let arrancarObj1 = document.getElementById("arrancarObj1").addEventListener("click", function () {
      coche1.arrancar();
  });   
  coche.prototype.arrancar = function (){ salida.innerHTML += (`<ul>
       <li> El coche de la marca ${this.marca} ,modelo ${this.modelo} de color ${this.color} ha arrancado.
       </li>
       </ul>`) 
  };
  /* h) Asignar una nueva propiedad cilindrada. */ 
  coche.prototype.cilindrada = "";
  /*  i)Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ ha
  parado. */
  let frenarObj1 = document.getElementById("frenarObj1").addEventListener("click", function () {
      coche1.frenar();
  });   
  coche.prototype.frenar = function (){ salida.innerHTML += (`<ul>
       <li> El coche de la marca ${this.marca} ,modelo ${this.modelo} de color ${this.color} ha parado.
       </li>
       </ul>`) 
  };
  /*   j) Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(),
  Object.keys(). */
  let propiedadesObj1 = document.getElementById("propiedadesObj1");
  propiedadesObj1.addEventListener("click",verPropiedad1);  
  function verPropiedad1(){
      let propiedades = "";
      for (const key in coche1) {
          if (typeof key != "fuction"){
          propiedades += key + "<br>";
          }    
      }
      salida.innerHTML += (`<p> Propiedades utilizando for in: <br> ${propiedades} </p>`);
      salida.innerHTML += (`<p> Propiedades utilizando getOwnPropertiesNames: <br> ${Object.getOwnPropertyNames(coche1)} </p>`); 
      salida.innerHTML += (`<p> Propiedades utilizando object.keys: <br> ${Object.keys(coche1)} </p>`);
  }
   /*    k) Modifica los descriptores de las propiedades para que no se muestren los métodos ni la propiedad, marca al usar for...in y Object.keys. Muestra de nuevo las propiedades del Objeto1. */
   let modificaDescrip = document.getElementById('modificaDescrip').addEventListener('click', function () {
       modificarDescriptores();
       let e1 = new Event("click"); 
       propiedadesObj1.dispatchEvent(e1);
   })
   function modificarDescriptores(){
      Object.defineProperties(coche1,{
      marca: {enumerable: false, configurable: false, writable: false},
      mostrarDatos: {enumerable: false, configurable: false, writable: false},
      acelerar: {enumerable: false, configurable: false, writable: false},
      frenar: {enumerable: false, configurable: false, writable: false},
      arrancar: {enumerable: false, configurable: false, writable: false},
  });
  }    
  