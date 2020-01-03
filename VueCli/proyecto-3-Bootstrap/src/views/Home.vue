<template>
  <div class="home">
    <b-button-group class="mt-3">
      <b-button variant="success">Success</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="warning">Warning</b-button>
    </b-button-group>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus hic error harum voluptatum qui laboriosam fugiat debitis aliquam alias eligendi ab minima sunt officia ad inventore, eos totam assumenda?</p>
          <b-button variant="dark">Texto</b-button>
        </b-card>        
      </b-col>
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus hic error harum voluptatum qui laboriosam fugiat debitis aliquam alias eligendi ab minima sunt officia ad inventore, eos totam assumenda?</p>
          <b-button variant="dark">Texto</b-button>
        </b-card>        
      </b-col>
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus hic error harum voluptatum qui laboriosam fugiat debitis aliquam alias eligendi ab minima sunt officia ad inventore, eos totam assumenda?</p>
          <b-button variant="dark">Texto</b-button>
        </b-card>        
      </b-col>      
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  }
}
</script>
