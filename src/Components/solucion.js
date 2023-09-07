import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokeSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [tablaPokemon, setTablaPokemon] = useState([]);
  const [search, setSearch] = useState('');

  const peticionesGet = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=24%27");
      const data = response.data.results;
      setPokemon(data);
      setTablaPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (finalSearch) => {
    const result = tablaPokemon.filter(
      (elemento) =>
        elemento.name.toLowerCase().includes(finalSearch.toLowerCase()) ||
        elemento.url.includes(finalSearch.toLowerCase())
    );
    setPokemon(result);
  };

  useEffect(() => {
    peticionesGet();
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
        <button className="button-Search">Search</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemon &&
            pokemon.map((pokemon, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pokemon.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokeSearch;
