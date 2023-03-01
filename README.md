# Cliente SUAP Javascript

## Sobre

O **Cliente SUAP Javascript** implementa a integração com o SUAP, tendo 2 principais funcionalidades:

- Logar com SUAP via OAuth2
- Consumir API (via OAuth2) obtendo recursos em nome do usuário

## QuickStart

### Crie sua Aplicação no SUAP

Crie sua aplicação em https://suap.ifrn.edu.br/api/ com as seguintes informações:

- **Client Type:** Public
- **Authorization Grant Type:** Implicit
- **Redicert URIs**: http://127.0.0.1:5500/index.html

### Instalando, Configurando e Rodando o Cliente SUAP Javascript

Considerando que você já tenha clonado o repositório **cliente_suap_javascript**. abra o terminal:

	cd cliente_suap_javascript
	cp services Login-Suap authSettings SuapApiSettings.js 

Faça os ajustes necessários, definindo a variável **CLIENT_ID**.

Para rodar a aplicação basta instalar a extensão live server no 
Visual Studio Code, clicar com botão direito no arquivo index.html e 
clicar na opção OPEN WITH LIVE SERVER