let pokemons=[];

exports.getPokemon = () => {
    return pokemons;
};

exports.createPokemon = (data) => {
   const newPokemon = {
    id: pokemons.length + 1,
    name: data.name,
    types: data.types,
    evolution_stage: data.evolution_stage
   };
   pokemons.push(newPokemon);
   return newPokemon;
}