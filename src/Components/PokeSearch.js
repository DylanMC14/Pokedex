import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPokemonList } from "./PokePrevNext";
import "../Styles/Pokedex.css";

function PokeSearch({ handleFilteredPokemon }) {
  const [pokemon, setPokemon] = useState([]);
  const [tablePokemon, setTablaPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const requestsGet = async () => {
    try {
      var response = await getPokemonList(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      var data = response.array;
      setPokemon(data);
      setTablaPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    filteredOut(e.target.value);
    setSearch(e.target.value);
  };

  const handleButtonChange = (e) => {
    // filteredOut(e.target.value);
  };

  const filteredOut = (finalSearch) => {
    const result = tablePokemon.filter((elemento) =>
      elemento.name.toLowerCase().includes(finalSearch.toLowerCase().trim())
    );
    setPokemon(result);
    console.log("aquiii", result);
    handleFilteredPokemon(result);
  };

  useEffect(() => {
    requestsGet();
  }, []);
  return (
    <div className="pokemons">
      <div className="containerInput">
        <input
          className="inputSearh"
          value={search}
          placeholder="Search pokemon"
          onChange={handleChange}
        />
        <button
          className="button-Search"
          value={search}
          onClick={handleButtonChange}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default PokeSearch;
