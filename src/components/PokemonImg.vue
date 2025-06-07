<template>
  
  <div class="contenedor-img">
    <div class="titulos" >
        <h3>Puntaje:  {{ puntaje }}</h3>
        <h3>Intento:  {{  intento }}</h3>
    </div>
    <div class="imagenes" v-for="pokemon, index in arregloPokemon" :key="index">
        <img :src="creaImagen(pokemon.id)" alt="No se cargo la imagen">
        <a> {{ pokemon.nombre }} </a>
    </div>
    <div>
        <button>Jugar</button>
    </div>


  </div>
</template>

<script>
export default {
    props:{
        arregloPokemon:{
            type:Array,
            required:true,
        },
        puntaje:{
            type:Number,
            required:true,
        },
        intento:{
            type:Number,
            required:true,
        },


    },
    methods:{
        creaImagen(id){
            if(id===-1 ){
                return 'https://placehold.co/200x200/000000/000000.png'
            }else{
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
            
            }
            console.log(id);
            
        }
    }

}
</script>

<style>

.imagenes {
    display: inline ;
    gap: 20 px;
    
    
}

</style>