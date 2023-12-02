export const turnPlanetUrlIntoNo = (url) => {
  const planetUrl = url;
  const planetNoWithSlash = planetUrl.split("/planets/")[1];
  const planetNoWithNoSlash = planetNoWithSlash.split("/")[0];
  const planetNo = Number(planetNoWithNoSlash);
  return planetNo;
};
