const clientPromise = require("../config/config");
const Pokemon = require("../models/pokemonModel");

const { ObjectId } = require("mongodb");

exports.getPokemon = async () => {
  const client = await clientPromise;
  const db = client.db("thiago_db");

  return db.collection("Pokemons").find({}).toArray();
};

exports.getPokemonById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }
  const client = await clientPromise;
  const db = client.db("thiago_db");

  return db.collection("Pokemons").findOne({ _id: new ObjectId(id) });
};

exports.createPokemon = async (pokemonData) => {
  const client = await clientPromise;
  const db = client.db("thiago_db");

  const pokemon = new Pokemon(pokemonData);

  return db.collection("Pokemons").insertOne(pokemon);
};

exports.deletePokemon = async (id) => {
  const client = await clientPromise;
  const db = client.db("thiago_db");

  return db.collection("Pokemons").deleteOne({ _id: new ObjectId(id) });
};

exports.downloadPokemon = async (id) => {
  const client = await clientPromise;
  const db = client.db("thiago_db");

  const pokemon = await db
    .collection("Pokemons")
    .findOne({ _id: new ObjectId(id) });
  if (!pokemon) {
    throw new Error("Pokémon não encontrado");
  }
  return pokemon;
};

exports.updatePokemon = async (id, pokemonData) => {
  const client = await clientPromise;
  const db = client.db("thiago_db");

  const pokemon = new Pokemon(pokemonData);

  return db
    .collection("Pokemons")
    .updateOne({ _id: new ObjectId(id) }, { $set: pokemon });
};
