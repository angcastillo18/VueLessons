<template>
  <div>
    <ul class="list-group">
        <li v-for="(item, index) in arrayOrdenado" :key="item.id" @click="aumentar(index)"
         class="list-group-item d-flex justify-content-between align-items-center">
            {{item.nombre}}
            <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
        </li>
    </ul>
    <button class="btn btn-danger my-2 btn-block" @click="reiniciarCantidad">Reiniciar</button>
  </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'   


export default {
    name:'Lista',
    props:{

    },
    computed:{
        ...mapState(['frutas']),
        arrayOrdenado(){
            return this.frutas.sort((a,b)=> b.cantidad - a.cantidad)
        }
    },
    methods: {
        ...mapMutations(['aumentar','reiniciarCantidad'])
    },
}
</script>

<style>

</style>