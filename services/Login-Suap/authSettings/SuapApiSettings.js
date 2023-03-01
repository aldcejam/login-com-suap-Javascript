const SUAP_URL = "https://suap.ifrn.edu.br";

export const SuapApiSettings = {
    CLIENT_ID: "COLOQUE AQUI O SEU CLIENT_ID",
    REDIRECT_URL: "URL DE REDIRECIONAMENTO (CONFIGURADA NO SUAP))",
    AUTH_HOST: SUAP_URL,
    SCOPE: "identificacao email documentos_pessoais",
    URL_FOR_GET_USERDATA: `${SUAP_URL}/api/v2/minhas-informacoes/meus-dados/`,
};

/* Tanto o CLIENT_ID quanto REDIRECT_URL podem ser configurados em: 
https://suap.ifrn.edu.br/api/ */

/* URL_FOR_GET_USERDATA: parte da url pode ser acessada em 
https://suap.ifrn.edu.br/api/docs/ . Nela podera encontrar quais 
dados podem ser consumidos */
