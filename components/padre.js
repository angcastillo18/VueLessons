Vue.component('padre', {
    template:/* html */
    `
    <div class="p-5 bg-dark text-white">
        <h2> Componente padre : {{numeroPadre}} </h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        
        <hijo :numero="numeroPadre" ></hijo>
    </div>
    `,
    /* Para pasar el dato del padre al hijo, se pasa el atributo numero con  : , que significa v-bind*/
    /* Data para que sea dinamica , es una funcion */
    /* Los props permiten hacer comunicacion entre componentes */
    data(){
        return {
           numeroPadre:0
        }
    }
});
