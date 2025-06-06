<template>
  <PokemonImg />
</template>

<script>
import { numerosRandomicos } from "@/clients/PokemoClient";
import PokemonImg from "@/components/PokemonImg.vue";
export default {
  components: {
    PokemonImg,
  },

  methods: {
    probarMetodos() {
      console.log(numerosRandomicos(1, 10));
    },
  },
  mounted() {

    probarMetodos()
  },
};
</script>

<style>
</style>