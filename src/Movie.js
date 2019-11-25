import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h5>
        {name}
        <span>: {price}</span>
      </h5>
    </div>
  );
};

export default Movie;
