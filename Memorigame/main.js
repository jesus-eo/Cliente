function juego() {
   return {
      cartas: [
         { color: 'red', girada: false, borrada: false },
         { color: 'blue', girada: false, borrada: false },
         { color: 'green', girada: false, borrada: false },
         { color: 'yellow', girada: false, borrada: false },
         { color: 'red', girada: false, borrada: false },
         { color: 'blue', girada: false, borrada: false },
         { color: 'green', girada: false, borrada: false },
         { color: 'yellow', girada: false, borrada: false }
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
               if (this.cartasGiradas[0].color == this.cartasGiradas[1].color) {
                  lanzaParejaEncontrada('Has encontrado una pareja'); /* En este momento cuando se lanza este evento se asocia al del html de nombre parjaencontrada y ejecuta lo que tenga en el html */

                  this.cartasGiradas.forEach(carta => carta.borrada = true);
                  //Si las cartas son iguales sumo puntos
                  this.SumarPuntos;
                  if (this.puntos == this.cartas.length) {
                     setTimeout(()=> alert('Enhorabuena, has ganado'), 250); 
                     this.reiniciar;
                   /*   setTimeout(vuelvePagInicio, 250);
                     function vuelvePagInicio(){
                       alert('Enhorabuena, has ganado');
                        this.reiniciar;                       
                     } */
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
         this.cartas.forEach(carta => {
            carta.girada = true;
         });
         setTimeout(this.reiniciar, 250);
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