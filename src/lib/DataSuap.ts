import { SuapClient } from '../services/login-with-suap/client';
import { SuapApiSettings } from '../services/login-with-suap/settings';
import { useState } from 'react';

export const DateSuap = ()=>{

    type DataSuapProps = {
      campus: string
      cpf: string
      data_de_nascimento: string
      email: string
      email_academico: string
      email_google_classroom: string
      email_preferencial: string
      email_secundario: string
      identificacao: string
      nome: string
      primeiro_nome: string
      sexo: string
      ultimo_nome: string
  }


    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
      })
    
      NewSuapClient.init();
      const [resourceResponse, setResourceResponse] = useState<DataSuapProps>({} as DataSuapProps);
    
      const SaveDataLoginSuap = (response: any) => {
        setResourceResponse(JSON.parse(JSON.stringify(response.data)));
      };
      NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap)

      return(
        resourceResponse
      )


}