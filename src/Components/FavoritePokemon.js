import React, {useState, useEffect} from 'react';
import { fetchFavorites, addFavorite, updateFavorite, deleteFavorite } from './AddFavorite';

function FavoritePokemon() {
    const [favorites, setFavorites] = useState([]);  // Estado para almacenar la lista de favoritos
    const [newFavorite, setNewFavorite] = useState(""); // Estado para el nuevo favorito


    // Obtener los favoritos
    useEffect(() => {
        // funcion asincrona que llama al api
        async function getFavorites () {
            const data = await fetchFavorites (); // Obtengo los favoritos de la api
            console.log(data);
            setFavorites (data); // Actualizamos el estado de los favoritos
            console.log(favorites);
        }
        getFavorites()
    },[])

    // Insertar el favorito : Agregando el valor que tiene newFavorite
    const handleAddFavorite = async () => {
        if (newFavorite.trim() !== "") {
            const addedFavorite = await addFavorite ({name: newFavorite});
            if (addedFavorite) {
                // actualizo la lista
                setFavorites([...favorites, addedFavorite])
                // limpio el campo de texto
                setNewFavorite("");
            }
        }
    }

    // Actualizar un favorito : Recibr un id un nuevo valor
    const handleUpdateFavorite = async (id, newName) => {
        const updatedFavorite = await updateFavorite(id, { name: newName }); // Actualizar el nombre de un favorito en la API
        if (updatedFavorite) {
          const updatedFavorites = favorites.map(fav => (fav.id === id ? updatedFavorite : fav)); // Actualizar el estado con el favorito actualizado
          setFavorites(updatedFavorites);
        }
      };

    // Borrar un favorito : Recibir un id a borrar
    const handleDeleteFavorite = async (id) => {
        // llama al api aqui para que lo borre
        await deleteFavorite(id);

        // actualizar la interfaz despues de que borramos el pokemon
        // [a, b, c, d] -> [b,c,d]
        const newFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(newFavorites); // actualizar el 
    }


    return ( 
        <div>

            <p>Favorite</p>
            {/* <h2>Mis Pokemon Favoritos</h2>
            <ul>
            {favorites.map((favorite) => (
              <li key={favorite.id}>
                 <input
                 type="text"
                 value={favorite.name}
                 onChange={(e) => handleUpdateFavorite(favorite.id, e.target.value)}
                 />
                 <button onClick={() => handleDeleteFavorite(favorite.id)}>Eliminar</button>
              </li>
        ))}
            </ul>
            <input
            type='text'
            placeholder='Nuevo Pokemon Favorito'
            value={newFavorite}
            onChange={(e) => setNewFavorite (e.target.value)}
            />
            <button onClick={handleAddFavorite}>Agregar Favorito</button> */}
        </div>
     );
}

export default FavoritePokemon;