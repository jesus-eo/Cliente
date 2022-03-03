/* El templat es el que sale en el html cuando llamamos a presentación */
Vue.component('Presentacion', {
    data() {
       return ({saludo: 'Hola, soy Desiré, te saludo desde un componente!'})
        },
        template: `
        <div>
        <span> {{ saludo }} <span>
        </div> 
        `
})
/* El data seria como el x-data de alpine */
const app = new Vue({
    el:'#app',
    data:{
        saludo: 'Hola, soy nuevo por aqui',
        mostrado: false,
    },
    methods: {
        mostrar() {
        this.mostrado = !this.mostrado
        }
    }
})
