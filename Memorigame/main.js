function juego() {
    return{ cartas: [ 
      { color: 'red', girada: false, borrada: false },
      { color: 'blue', girada: false, borrada: false },
      { color: 'green', girada: false, borrada: false },
      { color: 'yellow', girada: false, borrada: false },
      { color: 'red', girada: false, borrada: false },
      { color: 'blue', girada: false, borrada: false },
      { color: 'green', girada: false, borrada: false },
      { color: 'yellow', girada: false, borrada: false }
    ],
    //Devuelve un array de las cartas que girada sea true
   get cartasGiradas() {
      return this.cartas.filter(carta => carta.girada)
   },
   //Devuelve un array de las cartas que borrada sea true
   get cartasBorradas() {
      return this.cartas.filter(carta => carta.borrada)
   },
   //Devuelve el número de cartas que borrada sea true
   get puntos() {
      return this.cartasBorradas.length
   },
   /**
    * 
    * @param {"objeto"} carta 
    * @returns 
    * @description cambia carta.girada a true o false, comprueba si los colores de las cartas giradas son iguales,lanza el evento y cambia el estado de borrada de las cartas a true para que desaparezca con el x-show y vuelve a poner las cartas giradas a false
    */
   girarCarta(carta) {
     //El return te saca de la función
     if (this.cartasGiradas.length == 2) {
       return
     }
      carta.girada = !carta.girada;
      console.log(this.cartasGiradas);

      if (this.cartasGiradas.length == 2) {
         if (this.cartasGiradas[0].color == this.cartasGiradas[1].color) {
           lanzaParejaEncontrada('Has encontrado una pareja'); /* En este momento cuando se lanza este evento se asocia al del html de nombre parjaencontrada y ejecuta lo que tenga en el html */
            setTimeout(() => {
               this.cartasGiradas.forEach(carta => carta.borrada = true);

               if (this.puntos == this.cartas.length) {
                  alert('Enhorabuena, has ganado');
               }
            }, 750);
         }
         
         setTimeout(() => {
            this.cartasGiradas.forEach(carta => carta.girada = false);
         }, 750);

      }
   } 
  }
  }
/* Asocia el evento al con el mismo nombre qu en el alpine del html */
  function lanzaParejaEncontrada(mymensaje){
    let myEvento = new CustomEvent ('parejaencontrada', {detail: {mensaje: mymensaje}});
    window.dispatchEvent(myEvento);
  }