import React from "react";


  const API_URL = "https://64ee6291219b3e2873c32cbf.mockapi.io/favorites";

  //GET : Obtener resultados
  async function fetchFavorites() {
    try {
      const response = await fetch(`${API_URL}/favorite-pokemon`);
      return response.json();
    } catch (error) {
      console.error("Error fetching favorites:", error);
      return [];
    }
  }

  //POST : Insertar favoritos
  async function addFavorite(favorite) {
    try {
      const response = await fetch(`${API_URL}/favorite-pokemon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favorite),
      });

      return response.json();
    } catch (error) {
      console.error("Error adding favorite:", error);
      return null;
    }
  }

  // PUT : Actualiza favoritos
  async function updateFavorite(id, changes) {
    try {
      const response = await fetch(`${API_URL}/favorite-pokemon/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changes),
      });

      return response.json();
    } catch (error) {
      console.error("Error updating favorite:", error);
      return null;
    }
  }

  //DELETE : Borrar favoritos
  async function deleteFavorite(id) {
    try {
      await fetch(`${API_URL}/favorite-pokemon/${id}`, {
        method: "DELETE",
      });
      console.log(`Favorite with ID ${id} deleted.`);
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  }

  export { fetchFavorites, addFavorite, updateFavorite, deleteFavorite};