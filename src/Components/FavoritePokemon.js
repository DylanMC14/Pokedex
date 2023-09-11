import React, { useState, useEffect } from "react";
import "../Styles/Pokedex.css";
import {
  addFavorite,
  deleteFavorite,
  getPokemonIdByName
} from "./AddFavorite";

function FavoritePokemon({ name }) {

    async function fetchFavorites() {
        try {
          const response = await fetch(`https://64ee6291219b3e2873c32cbf.mockapi.io"/favorite-pokemon?name=${name}`);
          return response.json();
        } catch (error) {
          console.error("Error fetching favorites:", error);
          return null;
        }
      }

    


  const [isDarkMode,setIsDarkMode] = useState (false);

  const handleAddFavorite = async () => {

    const currentMode = isDarkMode; // almacenar el modo actual
        setIsDarkMode(!currentMode);
        // vendria siendo igual que setIsDarkMode (!isDarkMode);

    const addedFavorite = await addFavorite({ name: name });
    if (addedFavorite) {
      console.log("Añadido");
    }
  };

  // Borrar un favorito : Recibir un id a borrar
  const handleDeleteFavorite = async () => {
    // llama al api aqui para que lo borre
    const id = await getPokemonIdByName(name)
    console.log('deleted,'+ id);
    await deleteFavorite(id);
  };

  return (
    <div>
      <button className={`pokeBox ${isDarkMode ? "poke1":"poke2"}`} onClick={handleAddFavorite}>
        Favorite
      </button>
      <button onClick={() => handleDeleteFavorite(name)}>Eliminar</button>
    </div>
  );
}

export default FavoritePokemon;
