import React, { useEffect, useState } from "react";
import { getPokemonList } from "./PokePrevNext";
import "../Styles/Pokedex.css";
import "../Styles/GlobalStyles.css";
function PokeButtonNext({ page, totalPokemon, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  // console.log(totalPokemon / page);

  for (let i = 1; i <= totalPokemon / page; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    alert(currentPage);
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const actualPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav
      className="pagination is-centered mb-6"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${
          currentPage === 1 ? "is-hidden" : ""
        }`}
        onClick={previousPage}
      >
        Previous
      </a>
      <a
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? "is-hidden" : ""
        }`}
        onClick={nextPage}
      >
        Next
      </a>
      <ul className="pagination-list">
        {pageNumbers.map((pokemon) => (
          <li key={pokemon}>
            <a
              className={`pagination-link ${
                pokemon === currentPage ? "is-current" : ""
              }`}
              onClick={() => actualPage(pokemon)}
            >
              {pokemon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PokeButtonNext;
