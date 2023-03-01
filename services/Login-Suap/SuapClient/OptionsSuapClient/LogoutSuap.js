import { SuapApiSettings } from "../../authSettings/SuapApiSettings.js";
import { RemoveSlashIfLastLetter } from "../CheckVariables/RemoveSlashIfLastLetter.js";


export const LogoutSuap = async (token) => {
    let authHost = SuapApiSettings.AUTH_HOST
    authHost = RemoveSlashIfLastLetter(authHost);
    const logoutURL = `${authHost}/o/revoke_token/`;

    if(!token.IsSuapTokenExist()) return;
    fetch(logoutURL, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
            token: token.getValue(),
            client_id: SuapApiSettings.CLIENT_ID,
        }),
    })
        .then(() => {
            token.revoke();
            window.location.href = SuapApiSettings.REDIRECT_URL;
        })
        .catch((error) => {
            alert("Faddlha na comunicação com o SUAP");
            console.error(error);
        });
};
