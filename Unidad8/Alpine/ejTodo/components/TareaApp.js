 //Creamos esa variable que es una función la cual accedemos a ella desde el x-data
export default () => {
    return {
      tareas: [],
      nuevaTarea: '',
      enviarTarea() {
        this.tareas.push({ cuerpo: this.nuevaTarea, completada: false });
        this.nuevaTarea = '';
        console.table(this.tareas);
      }
    }
  }


  /*  function tareaApp(){
     return {tareas:[], nuevaTarea: ''}
   } */
