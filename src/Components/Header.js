import React, { useState, useEffect } from "react";
import "../Styles/GlobalStyles.css";
import defaultImage from "../Assets/Img/gif3.gif";

function Header() {
  // randomPokemons almacenar los Pokemon
  const [randomPokemons, setRandomPokemons] = useState([]);
  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1; // funcion que trae aleatorios
        //[100, 4,30,25]
        const pokemonIds = Array.from({ length: 6 }, getRandomPokemonId); // Array .from(tamañ, contenido o como llenar el contenido)

        // [ { name : Pikachu, img:""}, { name : Charmander, img:""}]
        const fetchedPokemons = [];

        for (const id of pokemonIds) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();
          fetchedPokemons.push(data);
        }

        setRandomPokemons(fetchedPokemons);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
    };
    fetchRandomPokemon();
  }, []);
  const handleImageLoad = (event) => {
    event.target.src = event.target.dataset.src;
  };

  return (
    <header>
      <div className="pokeBox">
        {randomPokemons.map((pokemon) => (
          <div id="pokeHome">
            <div id="poke" key={pokemon.id}>
              <img
                src={defaultImage}
                alt={pokemon.name}
                data-src={
                  pokemon.sprites.other["official-artwork"]["front_default"]
                } // Almacenar la URL real en un atributo personalizado
                onLoad={handleImageLoad} // Manejador de carga de imagen
                loading="lazy" // Agregar atributo "loading" con valor "lazy"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
