<template>
     {{ mensaje2 }}
    <div class="option-container">
        
        <ul>
            <li @click="comunicarClick(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">
                {{ pokemon.nombre }}
            </li>

        </ul>
    </div>


</template>

<script>


export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
        data() {
        return {
            mensaje2:"mensaje2"

        };
    },
    methods: {
        comunicarClick(id) {
            console.log("click....");
            console.log(id);
            const objetoEnviado={
                atributo1: id,
                atributo2: "Belen",
                atributo3: true,

            };
            this.$emit('seleccionado', objetoEnviado);

        },
    },



};
</script>

<style>
ul {
    list-style-type: none;
}

li {
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

.option-container {
    display: flex;
    justify-content: center;
}

li:hover {
    background: rgba(0, 0, 0, 0.1);

}
</style>