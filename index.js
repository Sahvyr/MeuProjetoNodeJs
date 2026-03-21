const express = require("express");
const app = express();

const pokemonRoutes = require("./routes/pokemonRoutes");

app.use(express.json());

app.use("/pokemon", pokemonRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
