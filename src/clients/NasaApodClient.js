import axios from "axios";

const NASA_APOD_API_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'kAkM6av7cvvEwi8iDORl5MBpL2Tdg0F85eKbcovY'; 

const consultarRespuesta = async () => {
    const respuesta = axios.get(`${NASA_APOD_API_URL}?api_key=${API_KEY}`).then(rpt => rpt.data);
    console.log(); 
    return respuesta;
}
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}