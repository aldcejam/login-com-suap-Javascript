import {
  GetSuapTokenExpirationTimeIfCookieNotExpired,
  GetSuapTokenIfCookieNotExpired,
  NewSuapTokenExpirationTimeIfCookieIsExpired,
  NewSuapTokenIfCookieIsExpired,
  RevokeCookiesSuap,
} from "./TokenSuap/UseCookiesToken/index.js";


export const TokenSuap = (tokenValue, expirationTime, scope) => {
  let startTime = new Date().getTime(); 
  let finishTime = new Date(startTime + expirationTime);
  
  NewSuapTokenIfCookieIsExpired(
    finishTime,
    tokenValue
  );
  tokenValue = GetSuapTokenIfCookieNotExpired();

  NewSuapTokenExpirationTimeIfCookieIsExpired(finishTime);

  finishTime = GetSuapTokenExpirationTimeIfCookieNotExpired();

  const getValue = () => {
    return tokenValue;
  };

  const getExpirationTime = () => {
    return finishTime;
  };

  const getScope = function () {
    return scope;
  };

  const IsSuapTokenExist = () => {
    if (Cookies.get("suapToken") && tokenValue != null) {
      return true;
    }
    return false;
  };

  const revoke = () => {
    tokenValue = null;
    startTime = new Date().getTime();
    finishTime = null;

    RevokeCookiesSuap();
  };
  return { getValue, getExpirationTime, getScope, IsSuapTokenExist, revoke };
};
