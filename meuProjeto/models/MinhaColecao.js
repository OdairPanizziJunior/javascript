//arquivo para definir o modelo de dados 

const mongoose = require('mongoose');

const minhaColecaoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

const MinhaColecao = mongoose.model('MinhaColecao', minhaColecaoSchema);

modelo.exports = MinhaColecao;