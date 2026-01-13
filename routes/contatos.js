const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Está é a página de contatos");
});

router.get("/:id", (req, res) => {
  res.send(`Usuario com ID: ${req.params.id}`);
});
router.post("/", (req, res) => {
  const { texto } = req?.body;
  res.json({ recebido: texto });
});

module.exports = router;
