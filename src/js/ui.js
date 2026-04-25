export function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <span class="loading-text">Carregando...</span>
        </div>
    `;
}

export function renderProfile(container, userData) {
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
        
    `;
}

export function renderNotFound(container) {
    container.innerHTML = '<p class="error-message">Usuário não encontrado!</p>';
}

export function renderError(container, message) {
    container.innerHTML = `<p class="error-message">${message}</p>`;
}
