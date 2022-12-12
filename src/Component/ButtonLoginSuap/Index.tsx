import { useEffect, useState } from "react";
import { SuapClient } from "../../services/login-with-suap/client";
import { SuapApiSettings } from "../../services/login-with-suap/settings";

const ButtonLoginSuap = () => {


    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();
    const [resourceResponse, setResourceResponse] = useState("");
    const [content, setContent] = useState(<></>);

    const SaveDataLoginSuap = (response: any) => {
        setResourceResponse(JSON.stringify(response.data));
    };


    useEffect(() => {
        if (NewSuapClient.isAuthenticated()) {
            NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap);
        }
        window.addEventListener(
            "message",
            (event) => {
                if (event.data === "reload") window.location.href = window.location.href;
            },
            false
        );
    }, []);



    useEffect(() => {
        setContent(
            !NewSuapClient.isAuthenticated() ? (
                <div>
                    <a
                        href={NewSuapClient.getLoginURL() + ""}
                        onClick={() => NewSuapClient.getLoginURL()}
                    >
                        Verificar
                    </a>
                </div>
            ) : (
                <div>
                    <strong>SIM</strong>
                    <button onClick={() => NewSuapClient.logout()}>Logout</button>
                </div>
            )
        );
    }, [])


    return (
        <>
            {content}
        </>
    )
}

export default ButtonLoginSuap