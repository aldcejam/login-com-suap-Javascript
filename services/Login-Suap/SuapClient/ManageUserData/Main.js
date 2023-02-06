import { GetUserData } from "./FetchUserData";

export async function Main(tokenValue) {
    const userData = await GetUserData(tokenValue);

    console.log(userData);
}
