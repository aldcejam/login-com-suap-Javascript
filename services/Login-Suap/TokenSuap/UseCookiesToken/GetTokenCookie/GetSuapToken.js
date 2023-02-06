export const GetSuapTokenIfCookieNotExpired = () => {
    if (Cookies.get("suapToken")) {
        return Cookies.get("suapToken");
    }
};