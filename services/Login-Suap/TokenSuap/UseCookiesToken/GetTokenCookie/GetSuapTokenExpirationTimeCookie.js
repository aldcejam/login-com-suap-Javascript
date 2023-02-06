export const GetSuapTokenExpirationTimeIfCookieNotExpired = () => {
    if (Cookies.get("suapTokenExpirationTime")) {
      return new Date(Cookies.get("suapTokenExpirationTime") || "");
    }
    return null;
  };