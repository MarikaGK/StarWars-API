import React from "react";

const Loader = ({text}) => {
  return (
    <div className="loader-wrapper">
        <h4 className="loader">{text}</h4>
    </div>
  );
};

export default Loader;
