import express from 'express';
import cors from 'cors'; // Importando o CORS

const app = express();

app.use(cors()); // Permitir CORS para todas as origens

app.get('/api/dados', async (req, res) => {
  const dados = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };
  res.json(dados);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
