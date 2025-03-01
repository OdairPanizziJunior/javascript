import express from 'express';
import axiosInstance from './config'; // Importa a instância personalizada do Axios

const app = express();

// Usar JSON no corpo da requisição
app.use(express.json());

app.get('/api/dados', async (req, res) => {
    try {
      // Simulando uma resposta de dados, sem usar a API externa
      const mockData = {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
      };
      res.json(mockData); // Retorna dados simulados
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar dados');
    }
  });
  

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
