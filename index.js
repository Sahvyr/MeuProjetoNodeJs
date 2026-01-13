const express = require("express");
const app = express();
const contatosRouter = require("./routes/contatos.js");

app.use("/contatos", contatosRouter);
app.use("/contatos/:id", contatosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
