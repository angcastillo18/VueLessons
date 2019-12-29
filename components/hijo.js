Vue.component('hijo', {
    template:/* html */
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo:  {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
        <button @click="numero++" >+</button>
    </div>
    `,
    /* Data para que sea dinamica , es una funcion */

    props:['numero'],
    data(){
        return {
          nombre:'Angelo'
        }
    },
    /* Evento Mounted, una vez que el DOM ya este listo */
    mounted(){
        /* eMITIR un evento y que pasaremos un nombre 
        al componente padre con el nombre de 'nombreHijo*/
        this.$emit('nombreHijo', this.nombre)
    }
  
});
