const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Para ajudar a resolver caminhos de arquivos

const app = express();
const porta = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Servir o arquivo HTML
app.use(express.static(path.join(__dirname, 'public')));

// Conectar ao MongoDB
const conectarMongoDB = require('./database');
conectarMongoDB();

// Criar a rota para adicionar documentos
const Pessoa = require('./models/model');
app.post('/adicionar', async (req, res) => {
    const { nome, idade, profissao } = req.body;
    
    const pessoa = new Pessoa({ nome, idade, profissao });

    try {
        await pessoa.save();
        res.json({ message: 'Documento adicionado com sucesso!', pessoa });
    } catch (error) {
        console.log('Erro ao adicionar pessoa:', error);
        res.status(500).json({ error: 'Erro ao adicionar pessoa' });
    }
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
