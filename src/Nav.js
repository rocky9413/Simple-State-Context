import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h3>React useState useContext</h3>
      <p>Total Movie List: {movies.length}</p>
    </div>
  );
};

export default Nav;
