import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/meuBanco", {
    } as any); // 'as any' para evitar warnings em TypeScript

    console.log("Conectado ao MongoDB!");
  } catch (erro) {
    console.error("Erro ao conectar ao MongoDB:", erro);
  }
};

export default conectarDB;
