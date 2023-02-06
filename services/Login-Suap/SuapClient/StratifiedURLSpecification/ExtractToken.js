export const ExtractToken = () => {
    let match =
      typeof window !== "undefined"
        ? document.location.hash.match(/access_token=(\w+)/)
        : null;
    if (match != null) {
      return !!match && match[1];
    }
    return null;
  };
  