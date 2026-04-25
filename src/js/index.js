import { fetchGitHubUser } from './api.js';
import { showLoading, renderProfile, renderNotFound, renderError } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function handleSearch() {
    const username = inputSearch.value.trim();

    if (!username) {
        alert('Por favor, insira um nome de usuário!');
        return;
    }

    showLoading(profileResults);

    try {
        const userData = await fetchGitHubUser(username);
        renderProfile(profileResults, userData);
    } catch (error) {
        if (error.message === 'Usuário não encontrado') {
            renderNotFound(profileResults);
            return;
        }

        console.error('Erro ao buscar perfil:', error);
        renderError(profileResults, 'Ocorreu um erro ao buscar o perfil. Por favor, tente novamente.');
    }
}

btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        handleSearch();
    }
});

