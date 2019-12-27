/* Instanciar Vue */
const app=new Vue({
    el:'#app',
    data:{
        titulo:'Hola mundo Angelo',
        frutas:[
            {nombre:'Pera',cantidad:10},
            {nombre:'manzana',cantidad:0},
            {nombre:'Platano',cantidad:11}
        ],
        nuevaFruta:'',
        total:0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevaFruta,cantidad:0
            });
            this.nuevaFruta=''
        }
    },
    /* computed
        Cada que se detecte un cambio en cantidad, se va a ejecutar , por se ve afectado por sus propiedades.
    */
    computed:{
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total=this.total+ fruta.cantidad;
            }
            return this.total;
        }
    }
})
/* Clases de vue darle estilo desde data, es dinamico*/
const app2=new Vue({
    el:'#app2',
    data:{
        fondo:'bg-warning',
        color:false
    },
    methods:{

    }
})
/* Clase 05 variables computadas */
/* Las funciones computadas se cachean y solo se ejecutan cuando las 
dependencias cambian, solo hasce el get cuando es necesario.
En cambio las funciones methods siempre se ejecutan cuando se renderiza.
Por lo tanto, cuando haya mucha logica pesada se recomienda computada */
const app3=new Vue({
    el:'#app3',
    data:{
        mensaje:'Hola soy blueweb',
        contador:0
    },
    methods:{

    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-sucess':this.contador<=10,
                'bg-warning':this.contador>10 && this.contador<20,
                'bg-danger':this.contador>=20
            }
        }
    }
})
/* Clases de vue, CICLO DE VUE*/
const app4=new Vue({
    el:'#app4',
    data:{
        cicloVue:'Life Cycle of Vue'
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('Antes de crear la instancia de Vue');
    },
    created(){
        console.log('Luego crear la instancia de Vue');
    },
    beforeMount(){
        console.log('Antes de crear el DOM');
    },
    mounted(){
        console.log('Luego de cargar el DOM');
    },
    beforeUpdate(){
        console.log('Al detectar un cambio');
    },
    updated(){
        console.log('Al realizar un cambio');
    },
    beforeDestroy(){
        console.log('Antes de destruir la instancia');
    },
    destroyed(){
        console.log('Luego de destruir la instancia');
    }
})