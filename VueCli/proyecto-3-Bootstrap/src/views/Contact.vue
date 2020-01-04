<template>
  <div class="mt-5">
      <h1>Formularios</h1>

      <form action="">
          <b-row>
              <b-col md="3">
                <h4> Input</h4>
                <b-form-input type="text" v-model="texto" :state="comprobar" ></b-form-input>
                <small>Míminimo 3 carácteres</small>
                <p>texto : {{texto}}</p>
              </b-col>
              <b-col md="3"> 
                <h4> List Select</h4>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <p>Seleccionado: {{selected}}</p>
              </b-col>
              <b-col md="3">
                  <h4> Radio-group</h4>
                  <b-form-radio-group v-model="radio" :options="animalesRadio" ></b-form-radio-group>
                  <p>Radio: {{radio}}</p>
              </b-col>
              <b-col md="3">
                  <h4> Checkbox-group</h4>
                  <b-form-checkbox-group v-model="check" :options="animalesRadio"> </b-form-checkbox-group>
                  <p>Multiple: {{check}}</p>
              </b-col>
          </b-row>
      </form>
  </div>
</template>

<script>
export default {
    name:'contact',
    data(){
        return{
            texto:'',
            check:[],
            radio:null,
            selected:null,
            options:[
                { value: null, text: 'Seleccione un animal' },
                { value: 'perro', text: 'Perro' },
                { value: 'gato', text: 'Gato' },
                { value: 'loro' , text:'Loro'}
/*                 { value: { C: '3PO' }, text: 'This is an option with object value' }, */
            ],
            animalesRadio:[
                { value: 'perro', text: 'Perro' },
                { value: 'gato', text: 'Gato' },
                { value: 'loro' , text:'Loro'}
            ]
        }
    },
    computed:{
        comprobar(){
            return this.texto.length >2 ? true : false
        }
    }
}
</script>

<style>

</style>