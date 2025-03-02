const mongoose = require('mongoose');

const concectarMongoDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/meuBanco', {

        });
        console.log('Conectado ao MongoDB com sucesso!');
    }catch(error){
        console.log('Erro ao conectar ao MongoDB', error);
    }
};

module.exports = concectarMongoDB;