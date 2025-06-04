<template>
    <h1>Selecciona Pokemon Correcto</h1>
    <Pockemon-image :pokemonId="17" :mostarImagen="true"/>
    <PockemonOption/>
    
  
</template>

<script>
import PockemonImage from "@/components/PockemonImage.vue";
import PockemonOption from "@/components/PockemonOption.vue";
export default{
    components: {
        PockemonImage,
        PockemonOption
    },

}


</script>

<style>

</style>