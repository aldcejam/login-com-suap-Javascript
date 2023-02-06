export const RevokeCookiesSuap = () => {
  if (Cookies.get("suapToken")) {
    Cookies.remove("suapToken");
  }

  if (Cookies.get("suapTokenExpirationTime")) {
    Cookies.remove("suapTokenExpirationTime");
  }

  if (Cookies.get("suapScope")) {
    Cookies.remove("suapScope");
  }
};
