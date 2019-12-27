Vue.component('my-component', {
    /* comillas simples es para una linea
    Para poner mas lineas se usa los templates literales ALT + 96`` 
    Ademas, se tienen que envolver dentro de un contenedor un div por ejemplo*/
    //html para que se pinte como html
    template:/* html */
    `
    <div>
    <h1>{{saludo}}</h1>
    <h3>texto de ejemplo</h3>
    </div>
    `,
    /* Data para que sea dinamica , es una funcion */
    data(){
        return {
            saludo:'Hola desde Vue'
        }
    }
});

