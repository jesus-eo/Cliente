function juego() {
   return {
      cartas: [
         { color: 'red', girada: false, borrada: false ,numero: 1},
         { color: 'blue', girada: false, borrada: false ,numero: 1},
         { color: 'green', girada: false, borrada: false ,numero: 1},
         { color: 'yellow', girada: false, borrada: false ,numero: 1},
         { color: 'red', girada: false, borrada: false ,numero: 1},
         { color: 'blue', girada: false, borrada: false ,numero: 1},
         { color: 'green', girada: false, borrada: false ,numero: 1},
         { color: 'yellow', girada: false, borrada: false ,numero: 1},

         { color: 'red', girada: false, borrada: false ,numero: 2},
         { color: 'blue', girada: false, borrada: false ,numero: 2},
         { color: 'green', girada: false, borrada: false ,numero: 2},
         { color: 'yellow', girada: false, borrada: false ,numero: 2},
         { color: 'red', girada: false, borrada: false ,numero: 2},
         { color: 'blue', girada: false, borrada: false ,numero: 2},
         { color: 'green', girada: false, borrada: false ,numero: 2},
         { color: 'yellow', girada: false, borrada: false ,numero: 2},

         { color: 'red', girada: false, borrada: false ,numero: 3},
         { color: 'blue', girada: false, borrada: false ,numero: 3},
         { color: 'green', girada: false, borrada: false ,numero: 3},
         { color: 'yellow', girada: false, borrada: false ,numero: 3},
         { color: 'red', girada: false, borrada: false ,numero: 3},
         { color: 'blue', girada: false, borrada: false ,numero: 3},
         { color: 'green', girada: false, borrada: false ,numero: 3},
         { color: 'yellow', girada: false, borrada: false ,numero: 3},

         { color: 'red', girada: false, borrada: false ,numero: 4},
         { color: 'blue', girada: false, borrada: false ,numero: 4},
         { color: 'green', girada: false, borrada: false ,numero: 4},
         { color: 'yellow', girada: false, borrada: false ,numero: 4},
         { color: 'red', girada: false, borrada: false ,numero: 4},
         { color: 'blue', girada: false, borrada: false ,numero: 4},
         { color: 'green', girada: false, borrada: false ,numero: 4},
         { color: 'yellow', girada: false, borrada: false ,numero: 4},
      ],
      puntosTotales: 0
      ,
      get cartasGiradas() {
         return this.cartas.filter(carta => carta.girada)
      },
      get cartasBorradas() {
         return this.cartas.filter(carta => carta.borrada)
      },
      get puntos() {
         return this.cartasBorradas.length 
      },
      get RestarPuntos(){
         this.puntosTotales = this.puntosTotales  - 1;
      },
      get SumarPuntos(){
         this.puntosTotales = this.puntosTotales + 20;
      },
      girarCarta(carta) {
         //El return te saca de la función
         if (this.cartasGiradas.length == 2) {
            return
         }
         carta.girada = !carta.girada;
         console.log(this.cartasGiradas);

         if (this.cartasGiradas.length == 2) {
            setTimeout(() => {
               if (this.cartasGiradas[0].color == this.cartasGiradas[1].color && this.cartasGiradas[0].numero == this.cartasGiradas[1].numero) {
                  lanzaParejaEncontrada('Has encontrado una pareja'); /* En este momento cuando se lanza este evento se asocia al del html de nombre parjaencontrada y ejecuta lo que tenga en el html */

                  this.cartasGiradas.forEach(carta => carta.borrada = true);
                  //Si las cartas son iguales sumo puntos
                  this.SumarPuntos;
                  if (this.puntos == this.cartas.length) {
                     setTimeout(()=> {alert('Enhorabuena, has ganado'); this.reiniciar}, 250); 
                  }
               }else {
                  /* Llama a la función que lanza el evento y si las cartas son distintas resto puntos*/
                  lanzaParejaNoEncontrada('Carta distinta')
                  this.RestarPuntos;
               };
            
            this.cartasGiradas.forEach(carta => carta.girada = false);
            }, 750);
         }
      },
//Recorro las cartas yle cambio las propiedades a las iniciales
      get reiniciar(){
         this.cartas.forEach(carta => {
            carta.girada = false,
            carta.borrada = false
         });
         this.puntosTotales = 0;
         Alpine.store('containerBody').btnVisible = true;
         Alpine.store('containerBody').bodyVisible = false
      },

      get mostrarCartasInicio() {
         console.log("Entraaa");
         this.barajar;
         this.cartas.forEach(carta => {
            carta.girada = true;
            console.log("Entraaa");
         });       
         setTimeout(()=>{this.reiniciarCartas}, 450);
      },

      get reiniciarCartas() {
        this.cartas.forEach(carta => {
            carta.girada = false,
            carta.borrada = false
         });
      },
      get barajar(){
         this.cartas.sort(()=> Math.random() - 0.5);        
      }

   }


}

/* Asocia el evento al con el mismo nombre qu en el alpine del html */
function lanzaParejaEncontrada(mymensaje) {
   let myEvento = new CustomEvent('parejaencontrada', { detail: { mensaje: mymensaje } });
   window.dispatchEvent(myEvento);
}
/*Creo un evento para cuando las cartas son distintas, esta función se ejecuta cuando las cartas son distintas, crea un evento el cual lo relaciona con el @parejanoencontrada.window el cual recoge con $event.detail.mensaje*/
function lanzaParejaNoEncontrada(mymensaje){
 let myEvento = new CustomEvent ('parejanoencontrada', {detail: {mensaje: mymensaje}});
 window.dispatchEvent(myEvento);
}

document.addEventListener('alpine:init', () => {
Alpine.store('containerBody',{
   btnVisible: true,
   bodyVisible: false,
});
})