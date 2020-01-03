<template>
  <div>
      <h1>Galeria de fotos</h1>
      <!-- rutas dinamicas  -->
      <router-link :to="{name:'photos',params:{id:item}}" 
      v-for="(item, index) in fotosArray" :key="index">
          <button>foto {{item}}</button>
      </router-link>
      <Photo/>
    <!-- Escrubiendo la ruta descrita en los methods-->
      <button @click="home">Home</button>
      <button @click="anterior">Anterior</button>
      <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
/* importamos componentes */
import Photo from "@/components/Photo.vue"

export default {
    components:{
        Photo
    },
    data(){
        return{
            fotosArray: [1,2,3]
        }
    },
    methods:{
        /* Ir a la ruta con path / */
        home(){
            this.$router.push('/');
        },
        /* Ir en el historial atras */
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(1);
        }
    }
}
</script>

<style>

</style>