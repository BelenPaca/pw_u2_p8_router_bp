<template>
    <div class="container">
        <h1>Imagen Astronómica de la NASA</h1>
        
        <button @click="cargarImagen" :disabled="cargando">
            {{ cargando ? 'Cargando dato astronómico...' : 'Ver Imagen de Hoy' }}
        </button>

        <div v-if="datosImagen" class="nasa-container">
            <h2>{{ datosImagen.titulo }}</h2>
            
            <img v-if="datosImagen.tipo_medio === 'image'" :src="datosImagen.url" :alt="datosImagen.titulo" class="nasa-media" />
            <iframe 
                v-else-if="datosImagen.tipo_medio === 'video'" 
                :src="datosImagen.url" 
                frameborder="0" 
                allowfullscreen 
                class="nasa-media"
                title="Video Astronómico del Día"
            ></iframe>
            
            <p class="explicacion-imagen">{{ datosImagen.explicacion }}</p>
            <p v-if="datosImagen.creditos" class="creditos-imagen">Créditos: {{ datosImagen.creditos }}</p>
        </div>
        
        <p v-if="error" class="mensaje-error">{{ error }}</p>
    </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/NasaApodClient.js";

export default {
    data() {
        return {
            datosImagen: null,     
            cargando: false,    
            error: null,        
        };
    },
    methods: {
        async cargarImagen() {
            this.cargando = true; 
            this.datosImagen = null; 
            this.error = null; 

            const datosApi = await consultarRespuestaFachada();
            this.datosImagen = {
                titulo: datosApi.title,
                url: datosApi.url,
                explicacion: datosApi.explanation,
                tipo_medio: datosApi.media_type,
                creditos: datosApi.copyright 
            };
            
            this.cargando = false; 
        },
    },
    mounted() {
        this.cargarImagen();
    }
};
</script>

<style scoped>
.container { 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    max-width: 800px;
    margin: 50px auto;
    background-color:#f0f4f7;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #333;
}

h1 {
    color: #2c3e50; 
    margin-bottom: 25px;
    font-size: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

button {
    padding: 12px 25px;
    font-size: 20px;
    background-color: #468dd4; 
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover:not(:disabled) {
    background-color: #68db90; 
    transform: translateY(-2px);
}



.nasa-container {
    background-color: rgb(223, 235, 227);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
}

h2 {
    color: #2c3e50;
    font-size: 1.8em;
    margin-bottom: 15px;
}

.nasa-media {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    display: block; 
    margin-left: auto;
    margin-right: auto;
    max-height: 500px; 
}

.explicacion-imagen {
    font-size: 1.1em;
    line-height: 1.6;
    color: #555;
    text-align: justify;
    margin-bottom: 15px;
}

.creditos-imagen {
    font-size: 0.9em;
    color: #777;
    font-style: italic;
    margin-top: 10px;
}

.mensaje-error {
    color: red;
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1em;
}
</style>