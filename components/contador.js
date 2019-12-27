Vue.component('contador', {
    template:/* html */
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++" >+</button>
    </div>
    `,
    /* Data para que sea dinamica , es una funcion */
    data(){
        return {
            numero:0
        }
    }
});

