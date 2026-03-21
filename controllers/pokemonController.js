const pokemonService = require("../services/pokemonService");

exports.getPokemon = async (req, res) => {
  try {
    const pokemons = await pokemonService.getPokemon();
    res.json(pokemons);
  } catch (err) {
    console.error("Erro ao obter pokémons:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getPokemonById = async (req, res) => {
  try {
    const pokemon = await pokemonService.getPokemonById(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon não encontrado" });
    }
    res.json(pokemon);
  } catch (err) {
    console.error("Erro ao obter pokémon:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.downloadPokemon = async (req, res) => {
  try {
    const pokemon = await pokemonService.downloadPokemon(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon não encontrado" });
    }
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=pokemon_${pokemon.name}.txt`,
    );
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.send(JSON.stringify(pokemon, null, 2));
  } catch (err) {
    console.error("Erro ao baixar pokémon:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const result = await pokemonService.createPokemon(req.body);
    res
      .status(201)
      .json({ message: "Pokémon criado com sucesso", id: result.insertedId });
  } catch (err) {
    console.error("Erro ao criar pokémon:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.deletePokemon = async (req, res) => {
  try {
    const result = await pokemonService.deletePokemon(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Pokémon não encontrado" });
    }
    res.json({ message: "Pokémon deletado com sucesso" });
  } catch (err) {
    console.error("Erro ao deletar pokémon:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.updatePokemon = async (req, res) => {
  try {
    const result = await pokemonService.updatePokemon(req.params.id, req.body);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Pokémon não encontrado" });
    }
    res.json({ message: "Pokémon atualizado com sucesso" });
  } catch (err) {
    console.error("Erro ao atualizar pokémon:", err);
    res.status(500).json({ error: err.message });
  }
};
