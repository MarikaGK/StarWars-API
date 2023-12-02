import React from "react";
import uuid from "react-uuid";

const TableHeader = ({ sortByDate, sortByString, sortByNumber }) => {
  return (
    <ul className="table-row table-header table-body">
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="name"
          onClick={(ev) => sortByString(ev)}
        >
          Name
        </button>
      </li>
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="height"
          onClick={(ev) => sortByNumber(ev)}
        >
          {" "}
          Height
        </button>
      </li>
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="mass"
          onClick={(ev) => sortByNumber(ev)}
        >
          Mass
        </button>
      </li>
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="created"
          onClick={(ev) => sortByDate(ev)}
        >
          Created
        </button>
      </li>
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="edited"
          onClick={(ev) => sortByDate(ev)}
        >
          Edited
        </button>
      </li>
      <li key={uuid()} className="table-item__header">
        <button
          type="button"
          className="table-header__btn"
          name="planet"
          onClick={(ev) => sortByString(ev)}
        >
          Planet
        </button>
      </li>
    </ul>
  );
};

export default TableHeader;
