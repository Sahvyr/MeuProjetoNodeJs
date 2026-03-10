const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

console.log("Servidor WebSocket rodando na porta 8080");

wss.on("connection", (ws) => {
  console.log("Novo cliente conectado");

  ws.send("Bem-vindo ao servidor WebSocket!");

  ws.on("message", (message) => {
    console.log("Mensagem recebida do cliente:", message);

    // Echo da mensagem de volta para o cliente
    ws.send(`Você disse: ${message}`);
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});
