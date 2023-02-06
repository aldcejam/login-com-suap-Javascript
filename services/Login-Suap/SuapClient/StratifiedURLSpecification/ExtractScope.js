export const ExtractScope = () => {
    const match =
      typeof window !== "undefined"
        ? window.location.hash.match(/scope=(.*)/)
        : null;
    return match?.[1]?.split("+").join(" ") ?? null;
  };
  