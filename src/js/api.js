const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return response.json();
}

export async function fetchGitHubRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=12&sort=created`);
    if (!response.ok) {
        throw new Error('Erro ao buscar repositórios');
    }
    return response.json();
}
