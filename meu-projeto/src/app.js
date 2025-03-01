const button = document.getElementById('btn');
const responseContainer = document.getElementById('response');

button.addEventListener('click', () => {
  axios.get('http://localhost:3000/api/dados')
    .then((response) => {
      responseContainer.textContent = JSON.stringify(response.data, null, 2); // Exibir resposta
    })
    .catch((error) => {
      console.error('Erro ao buscar dados', error);
    });
});
