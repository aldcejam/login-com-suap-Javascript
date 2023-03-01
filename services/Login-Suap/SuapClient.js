 
import { TokenSuap } from "./TokenSuap.js";

import { ExtractToken } from "./SuapClient/StratifiedURLSpecification/ExtractToken.js";
import { ExtractScope } from "./SuapClient/StratifiedURLSpecification/ExtractScope.js";
 
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

    const Login = () => {
        window.location.href = GetLoginURL();
    };
    const Logout = () => LogoutSuap(token)

    const isAuthenticated = () => {
        return token.IsSuapTokenExist();
    };

    const userLogged = isAuthenticated();
    
    const userDataNotChecked = GetUserData(token.getValue());
    const userData = CheckUserAndUserData(userDataNotChecked, userLogged);
    

    return {
        Login,
        Logout,
        token,
        userData,
        isAuthenticated,
    };
};
