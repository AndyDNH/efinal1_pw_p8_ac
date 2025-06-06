import axios from 'axios'


const numArreglo = []

const consumirAPI = (id) => {
    const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.data);
    return resp;

}

export function numerosRandomicos(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arregloNumerico() {
    numArreglo = []
    for (let i = 0; i < 5; i++) {
        numArreglo[i] = numerosRandomicos(1,600)
    }




}

function obtener

