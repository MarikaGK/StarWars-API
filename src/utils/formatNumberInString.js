export const formatStringAsSpacedNumber = (string) => {
  if (string) {
    const divided = string
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .join(" ")
      .split("")
      .reverse()
      .join("");
    return divided;
  }
};
