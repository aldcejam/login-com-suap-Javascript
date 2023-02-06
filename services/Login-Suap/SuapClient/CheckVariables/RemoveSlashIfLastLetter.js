export const RemoveSlashIfLastLetter = function (variable) {
    const result = variable.split("/");
    if (result[result.length - 1] === "") {
        result.pop();
        return result.join("/");
    }
    return variable;
};