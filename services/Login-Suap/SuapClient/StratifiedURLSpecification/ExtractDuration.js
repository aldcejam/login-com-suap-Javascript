export const ExtractDuration = () => {
    const tranformSecondsToMilliseconds = 1000;
    const machineInWeb = typeof window

    const match =
        machineInWeb !== "undefined"
            ? window.location.hash.match(/expires_in=(\d+)/)
            : null;

    return match?.[1] ? Number(match[1]) * tranformSecondsToMilliseconds : 0;
};
