const fetch = require("node-fetch")
const thing = "https://pokeapi.co/api/v2/pokemon"

async function getPokemon(pokemon){
    let response = await fetch(`${thing}/${pokemon}`);
    return await response.json();
}

module.exports = { getPokemon };