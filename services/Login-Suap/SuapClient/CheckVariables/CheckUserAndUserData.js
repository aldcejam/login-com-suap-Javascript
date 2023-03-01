export const CheckUserAndUserData = (userData, userLogged) => {
    const userConnectedButDataUndefined = CheckUserConnectedButDataUndefined(userData, userLogged);
    const userNotLogged = CheckIfUserLogged(userLogged);
    const userDataNotExist = CheckIfUserDataExist(userData);

    const Situation = () => {
        if (userConnectedButDataUndefined) {
            return userConnectedButDataUndefined;
        }
        if (userNotLogged) {
            return userNotLogged;
        }
        if (userDataNotExist) {
            return userDataNotExist;
        }
    };

    return Situation();
};

/*  ================================== */

const CheckIfUserLogged = (userLogged) => {
    if (!userLogged) {
        return "Usuário não conectado";
    }
    return false;
};
const CheckUserConnectedButDataUndefined = (userData, userLogged) => {
    if (userLogged && !userData) { 
        window.location.reload()
    }
    return false;
};


const CheckIfUserDataExist = (userData) => {
    if (userData) {
        return userData;
    }
    return false;
};
