import type { NextPage } from 'next'
import { useState } from 'react';
import { useDateLoginSuap } from '../src/context/DateLoginSuap';
import { SuapClient } from '../src/services/login-winth-suap/client';
import { SuapApiSettings } from '../src/services/login-winth-suap/settings';
const Dashboard: NextPage = () => {

  const { dataUserSuap } = useDateLoginSuap();

  const NewSuapClient = SuapClient({
    authHost: SuapApiSettings.SUAP_URL,
    clientID: SuapApiSettings.CLIENT_ID,
    redirectURI: SuapApiSettings.REDIRECT_URI,
    scope: SuapApiSettings.SCOPE,
  })

  NewSuapClient.init();
  const [resourceResponse, setResourceResponse] = useState("");
  const SaveDataLoginSuap = (response: any) => {
    setResourceResponse(JSON.stringify(response.data));
  };
  NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap)

  console.log(resourceResponse);
  return (
    <>
      <div className="content">
        <h1>{ }</h1>
      </div>
    </>
  )
}

export default Dashboard
