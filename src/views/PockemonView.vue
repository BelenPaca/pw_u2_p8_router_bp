<template>
    <h1>Selecciona el Pokemon Correcto</h1>
    <h1>{{ mensaje }}</h1>
    <Pockemon-image
    v-if="pokemon" :pokemonId="pokemon.id"
    :mostarImagen="mostrar"
    ref = "miHijo1" 
    />
    <PockemonOption 
    @seleccionado="recibioPadre($event)" 
    :pokemons="vectorPokemon" ref="miHijo2" 
    />

    <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import PockemonImage from "@/components/PockemonImage.vue";
import PockemonOption from "@/components/PockemonOption.vue";
import {
    obtenerOpcionesFachada, obtenerAleatorioFachada
} from '@/clients/PokemonClient'
export default {
    data() {
        return {
            vectorPokemon: [],
            pokemon: null,
            mostrar: false,
            mensaje: null,

        };
    },
    components: {
        PockemonImage,
        PockemonOption
    },
    methods: {
        async iniciarJuego() {
            const opciones = await obtenerOpcionesFachada(8);
            this.vectorPokemon = opciones;
            console.log(this.vectorPokemon);

            //Elegir un pokemon de los 4
            let pokemonCorrecto = obtenerAleatorioFachada(0, this.vectorPokemon.length);
            this.pokemon = this.vectorPokemon[pokemonCorrecto];
            console.log(this.pokemon.nombre);

        },
        recibioPadre(id) {
            console.log("Mensaje recibido desde Hijo");
            console.log(id);
            this.mostrar = true;
            console.log(this.mostrar);
            this.validarRespuesta(id.atributo1);
        },
        validarRespuesta(opcionSeleccionada){
            if(opcionSeleccionada === this.pokemon.id ){
                this.mensaje = "Correcto";

            }else {
                this.mensaje = "Perdiste  el correcto es:" + this.pokemon.nombre;
            }
        },
        comunicarHijo(){
            console.log(this.$refs.miHijo1.mensaje1);
            this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

            console.log(this.$refs.miHijo2.mensaje2);
            this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";

        },
    },
    mounted() {
        this.iniciarJuego();
    },

};


</script>

<style></style>