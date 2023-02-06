export const NewSuapTokenIfCookieIsExpired = (
    finishTime,
    tokenValue
) => {
    if (!Cookies.get("suapToken") && tokenValue && finishTime) {
        Cookies.set("suapToken", tokenValue, { expires: finishTime });
    }
};