document.getElementById('btn').addEventListener('click', () => {
    axios.get('http://localhost:3000/api/dados') // Envia uma requisição GET para o servidor
      .then(response => {
        document.getElementById('response').textContent = JSON.stringify(response.data, null, 2);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  });
  