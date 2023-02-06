const SUAP_URL = "https://suap.ifrn.edu.br";

export const SuapApiSettings = {
    CLIENT_ID: "hdBUL9RxxrkwppEk53TMtX5hiXdUqHJQTLRJQjId",
    REDIRECT_URL: "http://127.0.0.1:5500/index.html",
    AUTH_HOST: SUAP_URL,
    SCOPE: "identificacao email documentos_pessoais",
    URL_FOR_GET_USERDATA: `${SUAP_URL}/api/v2/minhas-informacoes/meus-dados/`,
};
