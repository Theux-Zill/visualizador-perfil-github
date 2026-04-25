// Seleciona os elementos do DOM
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

// Função para mostrar o carregamento
function mostrarLoading() {
    profileResults.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <span class="loading-text">Carregando...</span>
        </div>
    `;
}

// Adiciona evento de clique ao botão
btnSearch.addEventListener('click', async () => {
    // Pega o valor do input
    const valorBusca = inputSearch.value;

    // Verifica se o input não está vazio
    if (valorBusca) {
        // Mostra o carregamento
        mostrarLoading();

        try {
            const responde = await fetch(`${BASE_URL}/users/${valorBusca}`);
            if (!responde.ok) {
                profileResults.innerHTML = '<p style="color: red; padding: 1rem;">Usuário não encontrado!</p>';
                return;
            }
            
            const userData = await responde.json();
            console.log(userData);

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Foto de perfil de ${userData.login}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Sem bio disponível.'}</p>
                </div>
            </div>`;

        } catch (error) {
            console.error(`Erro ao buscar perfil:`, error);
            profileResults.innerHTML = '<p class="error-message">Ocorreu um erro ao buscar o perfil. Por favor, tente novamente.</p>';
        }

    } else {
        alert('Por favor, insira um nome de usuário!');
    }
});

// Permite buscar pressionando Enter no input
inputSearch.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        btnSearch.click();
    }
});

