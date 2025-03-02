const express = require('express');
const conectarMongoDB = require('./database');
const Pessoa = require('./models/model');

const app = express();
app.use(express.json()); // Permite que o Express entenda JSON no corpo da requisição

const cors = require('cors');
app.use(cors()); // Permite que qualquer origem acesse a API

// Função assíncrona para iniciar o servidor após a conexão com o MongoDB
const startServer = async () => {
    try {
        // Conectar ao MongoDB
        await conectarMongoDB();

        // Rota para adicionar documento

        app.post('/adicionar', async (req, res) => {
            const { nome, idade } = req.body;
            try {
                const novoDocumento = new MeuModelo({ nome, idade });
                await novoDocumento.save();
                res.status(200).send('Documento adicionado com sucesso!');
            } catch (error) {
                console.error(error);
                res.status(500).send('Erro ao adicionar documento');
            }
        });

        // Testar o servidor
        app.get('/', (req, res) => {
            res.send('Servidor funcionando!');
        });

        // Iniciar o servidor
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.log('Erro ao conectar ao MongoDB:', error);
    }
};




// Iniciar o servidor
startServer();
