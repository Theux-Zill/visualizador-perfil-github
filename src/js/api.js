const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(username) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(username)}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return response.json();
}
