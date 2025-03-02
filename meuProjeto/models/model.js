const mongoose = require('mongoose');

// Schema para "minhaColecao"
const pessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true }, 
    idade: { type: Number, required: true } 
});

// Modelo para a coleção "minhaColecao"
const Pessoa = mongoose.model('Pessoa', pessoaSchema, 'minhaColecao');

module.exports = Pessoa;



