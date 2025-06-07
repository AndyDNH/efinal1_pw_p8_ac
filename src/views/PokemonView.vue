<template>
  <PokemonImg :arregloPokemon="arregloIn" :puntaje="piniciador" :intento="ininiciador" />
</template>

<script>
import { numerosRandomicos, obtenerSoloTresFachada } from "@/clients/PokemoClient";
import PokemonImg from "@/components/PokemonImg.vue";
export default {
  data() {
    return {
        arregloIn:[
            {id:-1, nombre:'xxxx'},
            {id:-1, nombre:'xxxx'},
            {id:-1, nombre:'xxxx'}
        ],
        piniciador:0,
        ininiciador: 0 


       
    };
  },
  components: {
    PokemonImg,
  },

  methods: {
    probarMetodos() {
      console.log(numerosRandomicos(1, 10));
    },
    iniciar(){
        obtenerSoloTresFachada
    }
  },
  mounted() {

  },
  created() {

   
    
  }
};
</script>

<style>
</style>