const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.getPokemon);

router.get("/download/:id", pokemonController.downloadPokemon);

router.get("/:id", pokemonController.getPokemonById);

router.post("/", pokemonController.createPokemon);

router.delete("/:id", pokemonController.deletePokemon);

router.put("/:id", pokemonController.updatePokemon);

module.exports = router;
