export const NewSuapTokenExpirationTimeIfCookieIsExpired = (
    finishTime,
) => {
    if (!Cookies.get("suapTokenExpirationTime") && finishTime) {
        Cookies.set("suapTokenExpirationTime", finishTime + "", {
            expires: finishTime,
        });
    }
};