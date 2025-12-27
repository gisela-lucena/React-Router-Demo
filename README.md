README - Emoji Critic
📖 Sobre o Projeto
Emoji Critic é uma aplicação web desenvolvida em React para demonstrar conceitos de roteamento com React Router. O projeto simula um site de avaliações de emojis, onde os usuários podem navegar entre diferentes seções e visualizar informações organizadas através de rotas aninhadas.

🚀 Demonstração
O aplicativo permite navegação entre diferentes páginas:

Dashboard
Página inicial com informações gerais
Reviews
Seção de avaliações de emojis
About Me
Informações pessoais com subseções:
Minha História (/about-me/my-story)
Hobbies (/about-me/hobbies)
Contato (/about-me/contact)
About Us
Informações sobre o site com subseções:
Missão (/about-us/mission)
História (/about-us/history)
🛠️ Tecnologias Utilizadas
React
Biblioteca JavaScript para construção da interface
React Router DOM v6
Gerenciamento de rotas e navegação
CSS3
Estilização dos componentes
Vite
Ferramenta de build e desenvolvimento

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

Passos para instalação:
Clone o repositório:
git clone git@github.com:tripleten-com/react-router-demo-pt.git
Navegue até o diretório do projeto:
cd react-router-demo-pt
Instale as dependências:
npm install
Execute o projeto:
npm run dev
Acesse no navegador:
O aplicativo estará disponível em http://localhost:3000
🎯 Funcionalidades Principais

### Roteamento Básico

- Navegação entre páginas principais
- URLs amigáveis e intuitivas
- Header com links de navegação

### Roteamento Aninhado

- Subpáginas organizadas hierarquicamente
- Uso do componente <Outlet /> para renderização de rotas filhas
- Caminhos relativos para navegação interna

### Componentes React Router

- BrowserRouter - Provedor de contexto de roteamento
- Routes - Container para definição de rotas
- Route - Definição individual de cada rota
- Link - Navegação declarativa entre páginas
- Outlet - Renderização de componentes de rota
