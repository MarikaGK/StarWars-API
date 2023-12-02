import React from "react";
import uuid from "react-uuid";
import { formatDate } from "../../utils/formatDate";

const TableRow = ({
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
    <ul className="table-row">
      <li key={uuid()} className="table-item">
        {name}
      </li>
      <li key={uuid()} className="table-item">
        {height}
      </li>
      <li key={uuid()} className="table-item">
        {mass}
      </li>
      <li key={uuid()} className="table-item">
        {formatDate(created)}
      </li>
      <li key={uuid()} className="table-item">
        {formatDate(edited)}
      </li>
      <li
        key={uuid()}
        className="table-item__link"
        onClick={() => openModal(homeworld)}
      >
        {planet}
      </li>
    </ul>
  );
};
export default TableRow;
