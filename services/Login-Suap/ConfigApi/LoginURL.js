import { SuapApiSettings } from "./SuapApiSettings.js";

export const GetLoginURL = () => {
    const clientID = SuapApiSettings.CLIENT_ID;
    const redirectURL = SuapApiSettings.REDIRECT_URL;
    const scope = SuapApiSettings.SCOPE;
    const authorizationURL = `${SuapApiSettings.AUTH_HOST}/o/authorize/`;
  
    const responseType = "token";
    const grantType = "implict";
    
    const loginUrl = authorizationURL +
        "?response_type=" +
        responseType +
        "&grant_type=" +
        grantType +
        "&client_id=" +
        clientID +
        "&scope=" +
        scope +
        "&redirect_uri=" +
        redirectURL;
    return loginUrl;
};
