<template>
  <div id="app">
    <NavBar/>
<!--       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <b-container>
      <router-view/>
    </b-container>
    
  </div>
</template>

<style>

</style>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components: {
    NavBar
  }
}
</script>