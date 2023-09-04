import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GlobalStyles.css";

function Navbar() {
  return (
    <nav className="navBox">
      <div className="home">
        <Link to="/">Home</Link>
      </div>

      <div className="pokedex">
        <Link to="/pokedex">Pokedex</Link>
      </div>

      <div className="about">
        <Link to="/about">About us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
