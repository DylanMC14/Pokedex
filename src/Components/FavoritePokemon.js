import React, { useState, useEffect } from "react";
import "../Styles/Pokedex.css";
import { addFavorite, deleteFavorite, getPokemonIdByName } from "./AddFavorite";

function FavoritePokemon({ name, favorites, update }) {
  console.log("1");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const targetName = name;
  // // Usa some() para verificar si algún usuario tiene el nombre deseado
  const hasTargetName = favorites.some(
    (pokemon) => pokemon.name === targetName
  );

  const handleAddFavorite = async () => {
    const currentMode = isDarkMode; // almacenar el modo actual
    setIsDarkMode(!currentMode);
    // vendria siendo igual que setIsDarkMode (!isDarkMode);

    const addedFavorite = await addFavorite({ name: name });
    if (addedFavorite) {
      console.log("Añadido");
      update();
    }
  };

  // Borrar un favorito : Recibir un id a borrar
  const handleDeleteFavorite = async () => {
    const nowMode = isLightMode; // almacenar el modo actual
    setIsLightMode(!nowMode);
    // vendria siendo igual que setIsDarkMode (!isDarkMode);
    // llama al api aqui para que lo borre
    const id = await getPokemonIdByName(name);
    console.log("deleted," + id);
    await deleteFavorite(id);
    update();
  };

  return (
    <>
      <div className="btn-Fav-Del">
        {hasTargetName ? (
          <>
            <p id="fav">⭐⭐</p>
            <button
              className="btn-F-E"
              onClick={() => handleDeleteFavorite(name)}
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button className="btn-F-E-2" onClick={handleAddFavorite}>
              Fav?
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default FavoritePokemon;
