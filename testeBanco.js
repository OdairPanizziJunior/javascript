import { MongoClient } from 'mongodb';

async function main() {
  const uri = 'mongodb://localhost:27017'; // URL de conexão com o MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect(); // Conecta ao MongoDB

    console.log('Conectado ao MongoDB com sucesso!');
    const database = client.db('meuBanco'); // Nome do banco de dados
    const collection = database.collection('minhaColecao'); // Nome da coleção

    // Inserir um documento
    const result = await collection.insertOne({ nome: 'Carlos', idade: 28 });
    console.log(`Documento inserido com o id: ${result.insertedId}`);
    
  } finally {
    await client.close(); // Fecha a conexão com o MongoDB
  }
}

main().catch(console.error);
