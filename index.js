const express = require("express");
require("dotenv").config();

const app = express();

const pokemonsRoutes = require("./routes/pokemons");

//const pokemonController = require("./controllers/pokemonController.js");
//router.get("/", pokemonController.getPokemon);
//router.post("/", pokemonController.createPokemon);

app.use(express.json());

app.use("/pokemon", pokemonsRoutes);

app.get("/", (req, res) => {
  res.send("API rodando!");
});

app.get("/download", (req, res) => {
  const conteudo = `Olá! Este é um arquivo TXT gerado dinamicamente com Node.js. Data: ${new Date().toLocaleString()}`;

  res.setHeader("Content-Disposition", "attachment; filename=exemplo.txt");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  res.send(conteudo);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
