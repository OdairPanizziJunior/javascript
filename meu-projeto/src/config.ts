import axios from 'axios';
import https from 'https';

// Criar um agente HTTPS customizado que desabilita a validação de certificados
const agent = new https.Agent({  
  rejectUnauthorized: false  // Desabilitar a verificação de certificado
});

// Configuração do Axios
const axiosInstance = axios.create({
  httpsAgent: agent,
  baseURL: 'https://api.exemplo.com', // Substitua pela URL da sua API
});

export default axiosInstance;
