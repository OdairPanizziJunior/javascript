import mongoose from 'mongoose'; // Importa o mongoose

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/meuBanco", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB!");
  } catch (erro) {
    console.error("Erro ao conectar ao MongoDB:", erro);
  }
};

export default conectarDB; // Exporta a função
