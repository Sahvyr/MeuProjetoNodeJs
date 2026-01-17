const express = require("express");
const router = express.Router();
const clientPromise = require("../banco-de-dados/config");

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
router.get("/:id", (req, res) => {
  res.send(`pokemons de id ${req.params.id}`);
});
router.post("/", (req, res) => {
  const { texto } = req?.body;
  res.json({ recebido: texto });
});
module.exports = router;
