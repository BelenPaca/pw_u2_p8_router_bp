<template>
    <h1>Selecciona el Pokemon Correcto</h1>
    <Pockemon-image :pokemonId="42" :mostarImagen="true" />
    <PockemonOption :pokemons="vectorPokemon" />


</template>

<script>
import PockemonImage from "@/components/PockemonImage.vue";
import PockemonOption from "@/components/PockemonOption.vue";
import { obtenerOpcionesFachada } from '@/clients/PokemonClient'
export default {
    data (){
        return {
            vectorPokemon:[],

        };
    },
    components: {
        PockemonImage,
        PockemonOption
    },
    methods: {
        async iniciarJuego() {
            const opciones = await obtenerOpcionesFachada(4);
            this.vectorPokemon=opciones;
            console.log(opciones);

        },
    },
    mounted() {
        this.iniciarJuego();
    },

};


</script>

<style></style>