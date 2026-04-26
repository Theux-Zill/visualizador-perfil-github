export function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <span class="loading-text">Carregando...</span>
        </div>
    `;
}

export function renderProfile(container, userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repo-card">
               <h3>${repo.name}</h3>
               <div class="repo-stats">
                    <span> ⭐ Stars ${repo.stargazers_count}</span>
                    <span> 🍴 Forks ${repo.forks_count}</span>
                    <span> 👁️ Watchers ${repo.watchers_count}</span>
                    <span> 💻 Language ${repo.language || 'N/A'}</span>
                </div>
            </div>
        </a>`
    ).join('') : '<p class="no-repos">Nenhum repositório encontrado.</p>';

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Foto de perfil de ${userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Sem bio disponível.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="repositories-section">
            <h2>Repositórios</h2>
            <div class="repositories-list">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

export function renderNotFound(container) {
    container.innerHTML = '<p class="error-message">Usuário não encontrado!</p>';
}

export function renderError(container, message) {
    container.innerHTML = `<p class="error-message">${message}</p>`;
}

