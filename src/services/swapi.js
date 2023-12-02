import axios from "axios";
import { turnPlanetUrlIntoNo } from "../utils/turnPlanetUrlIntoNo";

// export const get = async (url) => {
export const getPeopleData = async (url) => {
  try {
    const response = await axios.get(url);
    const { next, results } = response.data;
    const peopleData = results.map((character) => {
      const planetNo = turnPlanetUrlIntoNo(character.homeworld);
      return {
        name: character.name,
        height: character.height,
        mass: character.mass.split(",").join(""),
        created: character.created,
        edited: character.edited,
        homeworld: character.homeworld,
        planetNo,
      };
    });
    return { next, people: peopleData };
  } catch (err) {
    console.error(err);
  }
};

export const getPlanetsNames = async (url) => {
  try {
    const response = await axios.get(url);
    const { next, results } = response.data;
    const planetsNames = results.map((planet) => planet.name);
    return { next, planetsNames };
  } catch (err) {
    console.error(err);
  }
};

export const getPlanetData = async (url) => {
  try {
    const response = await axios.get(url);
    const { name, diameter, climate, population } = response.data;
    const data = {
      name,
      diameter,
      climate,
      population,
    };
    return { data };
  } catch (err) {
    console.error(err);
  }
};
