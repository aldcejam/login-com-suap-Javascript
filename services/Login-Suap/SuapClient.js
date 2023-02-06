import { SuapApiSettings } from "./ConfigApi/SuapApiSettings.js";

import { TokenSuap } from "./TokenSuap.js";

import { ExtractToken } from "./SuapClient/StratifiedURLSpecification/ExtractToken.js";
import { ExtractScope } from "./SuapClient/StratifiedURLSpecification/ExtractScope.js";

import { RemoveSlashIfLastLetter } from "./SuapClient/CheckVariables/RemoveSlashIfLastLetter.js";

import { GetUserData } from "./SuapClient/ManageUserData/FetchUserData.js";
import { GetLoginURL } from "./ConfigApi/LoginURL.js";
import { LogoutSuap } from "./SuapClient/OptionsSuapClient/LogoutSuap.js";
import { ExtractDuration } from "./SuapClient/StratifiedURLSpecification/ExtractDuration.js";
import { CheckUserAndUserData } from "./SuapClient/CheckVariables/CheckUserAndUserData.js";

export const SuapClient = () => {
    const token = TokenSuap(
        ExtractToken(),
        ExtractDuration(),
        ExtractScope(),
    );

    let authHost = SuapApiSettings.AUTH_HOST;
    authHost = RemoveSlashIfLastLetter(authHost);

    const clientID = SuapApiSettings.CLIENT_ID;
    const redirectURL = SuapApiSettings.REDIRECT_URL;


    const Login = () => {
        window.location.href = GetLoginURL(clientID, redirectURL);
    };
    const Logout = () => LogoutSuap(token)

    const isAuthenticated = () => {
        return token.IsSuapTokenExist();
    };

    const userDataNotChecked = GetUserData(token.getValue());
    const userLogged = isAuthenticated();
    const userData = CheckUserAndUserData(userDataNotChecked, userLogged);

    return {
        Login,
        Logout,
        token,
        userData,
        isAuthenticated,
    };
};
