import React from "react";
import uuid from "react-uuid";
import { formatDate } from "../../utils/formatDate";

const CharacterDetails = ({
  name,
  height,
  mass,
  created,
  edited,
  homeworld,
  planet,
  openModal,
}) => {
  return (
    <ul className="character-details">
      <li key={uuid()} className="character-details__item">
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">name:&nbsp;</span>{" "}
          {name}
        </p>
      </li>
      <li key={uuid()} className="character-details__item">
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">
            height in cm:&nbsp;
          </span>
          {height}
        </p>
      </li>
      <li key={uuid()} className="character-details__item">
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">
            mass in kg:&nbsp;
          </span>
          {mass}
        </p>
      </li>
      <li key={uuid()} className="character-details__item">
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">
            created at:&nbsp;
          </span>
          {formatDate(created)}
        </p>
      </li>
      <li key={uuid()} className="character-details__item">
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">
            edited at:&nbsp;
          </span>{" "}
          {formatDate(edited)}
        </p>
      </li>
      <li
        key={uuid()}
        className="character-details__item__link"
        onClick={() => openModal(homeworld)}
      >
        <p className="character-details__desc">
          <span className="character-details__desc__mobile">planet:&nbsp;</span>
          {planet}
        </p>
      </li>
    </ul>
  );
};
export default CharacterDetails;
