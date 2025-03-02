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
                // Criar uma nova pessoa com os dados recebidos
                const novaPessoa = new Pessoa({ nome, idade });

                // Salvar no banco de dados
                await novaPessoa.save();

                res.status(201).send({ message: 'Documento adicionado com sucesso!', pessoa: novaPessoa });
            } catch (error) {
                console.log('Erro ao salvar no banco:', error);
                res.status(500).send({ message: 'Erro ao adicionar o documento.' });
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
