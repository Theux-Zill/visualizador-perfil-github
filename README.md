# Visualizador de Perfil do GitHub 🚀

Uma aplicação web interativa que permite aos usuários buscar perfis do GitHub e visualizar informações detalhadas como bio, foto de perfil e repositórios públicos, consumindo diretamente a API oficial do GitHub.

## 📋 Funcionalidades

- **Busca de Usuários**: Encontre qualquer perfil público informando o nome de usuário.
- **Exibição de Dados**: Mostra informações principais do perfil e lista os repositórios.
- **Tratamento de Erros**: Mensagens claras para usuários não encontrados ou campos vazios.
- **Interface Fluida**: Indicador de carregamento (*loading*) durante as requisições assíncronas.
- **Atalhos de Teclado**: Suporte para busca ao pressionar a tecla "Enter".

## 🛠 Tecnologias Utilizadas

- **JavaScript (ES6+)**: Uso de `async/await` para requisições e módulos para organização do código.
- **GitHub API**: Interface de programação para obtenção dos dados.
- **HTML5 & CSS3**: Estruturação e estilização da interface (via `ui.js`).

## 🔧 Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador de preferência.
   - *Dica: Como o projeto utiliza ES Modules, recomenda-se abrir utilizando a extensão **Live Server** no VS Code para evitar erros de CORS ou de carregamento de módulos locais.*

## 📂 Estrutura de Arquivos (JS)

- `index.js`: Gerencia os eventos de busca e a lógica principal.
- `api.js`: Contém as funções `fetch` para comunicação com o GitHub.
- `ui.js`: Responsável pela manipulação do DOM e renderização dos dados na tela.

---
*Projeto desenvolvido para fins de estudo no DevQuest.*