import React from "react";

const Filter = ({ input, onChange }) => {
  return (
    <div className="filter-wrapper">
      <label className="label">
        Looking for your favorite character, are you? Type him right there:&nbsp;&nbsp;&nbsp;
        <input
          className="filter"
          type="filter"
          name="filter"
          value={input}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
