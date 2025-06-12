<template>
     {{ mensaje1 }}
    <div class="image-container">
        <img v-if="!mostarImagen" 
        class="ocultar" 
        :src="imagenFuente" 
        alt="No se puede renderizar pokemon">

        <img v-if="mostarImagen" 
        :src="imagenFuente" 
        alt="No se puede renderizar pokemon">
       

    </div>

</template>

<script>

export default {
    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
        mostarImagen: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data() {
        return {
            mensaje1:"mensaje1"

        };
    },
    computed: {
        imagenFuente() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;

        }

    },
}


</script>

<style>
img {
    height: 200px;
    position: absolute;
    right: 42%;

}

.ocultar {
    filter: brightness(0);

}

.image-container {
    height: 200px;
}
</style>