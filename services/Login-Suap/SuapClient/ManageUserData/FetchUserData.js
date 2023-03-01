import { SuapApiSettings } from "../../authSettings/SuapApiSettings.js";

export const GetUserData = async (tokenValue) => {
    if (!tokenValue) {
        return;
    }

    const urlForGetUserData = SuapApiSettings.URL_FOR_GET_USERDATA;
    const scope = SuapApiSettings.SCOPE;

    const queryParams = new URLSearchParams({ scope }).toString();
    const url = `${urlForGetUserData}?${queryParams}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${tokenValue}`,
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
};
