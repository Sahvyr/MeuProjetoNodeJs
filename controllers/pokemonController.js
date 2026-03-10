const pokemonService = require("../services/pokemonService");

exports.getPokemon = (req, res) => {
  const pokemons = pokemonService.getPokemon();
  res.json(pokemons);
};

exports.createPokemon = (req, res) => {
  const pokemons = pokemonService.createPokemon(req.body);
  res.json(pokemons);
};
