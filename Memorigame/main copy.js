document.addEventListener('alpine:init', () => {


Alpine.data('juego',() => ({
      cartas: [ 
      {color: 'red', girada: false, borrada: false  },
      {color: 'blue', girada: false, borrada: false  },
      {color: 'green', girada: false, borrada: false  },
      {color: 'yellow', girada: false, borrada: false  },
      {color: 'red', girada: false, borrada: false  },
      {color: 'blue', girada: false, borrada: false  },
      {color: 'green', girada: false, borrada: false  },
      {color: 'yellow', girada: false, borrada: false  },
      ]
   }));
})