/**
 * Não é mais usado
 */

const axios = require('axios');

//tentativa de adicionar documento
const adicionarDocumento = async () => {
    try{
        const resposta = await axios.post('http://localhost:3000/adicionar',{
            nome: 'Pedro',
            idade: 40,
        });
        console.log('Documento adicionado:', resposta.data);
    }catch(error){
        console.log('Erro ao adicionar documento:', error);
    }
};

//consulta da rota
const testarSevidor = async () =>{
    try{
        const resposta = await axios.get('http://localhost:3000');
        console.log(resposta.data);
    }catch(error){
        console.log('Erro ao acessar o servidor', error);
    }
};

//chamar as funções criadas
testarSevidor();
adicionarDocumento();