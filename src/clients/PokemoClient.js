import axios from 'axios'



let numArreglo = []
let arregloPoke = []
let arregloElegir3 = []

const consumirAPI = async (id) => {
    const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.data);
    return resp;

}

export function numerosRandomicos(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arregloNumerico() {
    numArreglo = []
    for (let i = 0; i < 5; i++) {
        numArreglo[i] = numerosRandomicos(0, 600)
    }

    arregloPokemon(numArreglo);
    return arregloPokemon;

}

function arregloPokemon(arrNum) {
    arregloPoke = []
    for (num in arrNum) {
        arregloPoke.push(obtenerPokemon(num))

    }

}

function obtenerSoloTres() {
    let aux = []
    for (let i = 0; i < 3; i++) {
        arregloElegir3[i] = arregloPoke[numerosRandomicos(0, 4)]

    }
}

export function obtenerSoloTresFachada() {
    return obtenerSoloTres()
}

async function obtenerPokemon(id) {
    const objetoPoke = await consumirAPI(id);
    pokemon = {
        id: objetoPoke.id,
        name: objetoPoke.name
    };
    return pokemon;
}








