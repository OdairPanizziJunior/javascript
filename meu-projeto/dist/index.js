import express from 'express'; // Importa o express
import conectarDB from './database'; // Importa a função de conexão com o banco de dados

const app = express(); // Cria a aplicação Express
app.use(express.json()); // Permite que a API aceite JSON no corpo das requisições

// Conecta ao banco de dados
conectarDB();

// Rota raiz que só verifica se a API está funcionando
app.get("/", (req, res) => {
  res.send("API funcionando!"); // Envia uma resposta simples
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
