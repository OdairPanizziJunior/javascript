const mongoose = require('mongoose');

// Schema para "pessoas"
const pessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true }, 
    idade: { type: Number, required: true },
    profissao: { type: String, required: true}
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema, 'pessoas');

module.exports = Pessoa;



