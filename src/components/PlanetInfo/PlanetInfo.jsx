import React from "react";
import { formatStringAsSpacedNumber } from "../../utils/formatNumberInString";

const PlanetInfo = ({ name, diameter, climate, population }) => {
  return (
    <>
      <h2 className="planet-info__title">Planet info</h2>
      <ul className="planet-info__wrapper">
        <li>
          <p className="planet-info__description">name</p>
          <h3 className="planet-info">{name}</h3>
        </li>
        <li>
          {" "}
          <p className="planet-info__description">diameter</p>
          <h3 className="planet-info">
            {diameter === "unknown"
              ? diameter
              : `${formatStringAsSpacedNumber(diameter)} m`}
          </h3>
        </li>
        <li>
          {" "}
          <p className="planet-info__description">climate</p>
          <h3 className="planet-info">{climate}</h3>
        </li>
        <li>
          {" "}
          <p className="planet-info__description">population</p>
          <h3 className="planet-info">
            {population === "unknown"
              ? population
              : formatStringAsSpacedNumber(population)}
          </h3>
        </li>
      </ul>
    </>
  );
};

export default PlanetInfo;
