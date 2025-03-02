const mongoose = require('mongoose');

//Schema para "minhaColecao"
const pessoaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: {type: Number, requird: true}
});

//modelo a partir do schema
const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
