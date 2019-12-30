<template>
  <div id="app" class="container ">
    <Cabecera></cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Cabecera,
    Lista
  }
}
</script>

<style>

</style>
