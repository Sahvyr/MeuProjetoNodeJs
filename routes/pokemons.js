const express = require("express");
const router = express.Router();
const clientPromise = require("../banco-de-dados/config");
const { ObjectId } = require("mongodb");

router.get("/", async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("thiago_db");
    const pokemon = await db.collection("Pokemons").find({}).toArray();
    res.json(pokemon);
  } catch (err) {
    console.error("Erro ao buscar pokemons:", err);
    res.status(500).json({ error: "Erro ao buscar pokemons" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("thiago_db");

    const pokemon = await db
      .collection("Pokemons")
      .findOne({ _id: new ObjectId(id) });
    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon não encontrado" });
    }
    res.json(pokemon);
  } catch (err) {
    console.error("Erro ao buscar pokémon:", err);
    res.status(500).json({ error: "Erro ao buscar pokémon" });
  }
});

router.post("/", async (req, res) => {
  const novoPokemon = req.body;
  try {
    const client = await clientPromise;
    const db = client.db("thiago_db");
    const resultado = await db.collection("Pokemons").insertOne(novoPokemon);

    res.status(201).json({
      message: "Pokémon criado com sucesso",
      id: resultado.insertedId,
    });
  } catch (err) {
    console.error("Erro ao criar pokémon:", err);
    res.status(500).json({ error: "Erro ao criar pokémon" });
  }
});

module.exports = router;
