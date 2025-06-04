import axios from "axios";

const consumirPokemon = async (id)=>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);  
    console.log();
    return respuesta;

}
//funciones fachada
export const consumirPokemonFachada = async (id) => {
    return await consumirPokemon(id);
}
