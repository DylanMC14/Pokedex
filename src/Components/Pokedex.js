import React, {useState, useEffect} from 'react';
import "../Styles/Pokedex.css";
import {getPokemonList} from "./PokePrevNext";
import defaultImage from '../Assets/Img/gif3.gif';


  function Pokedex(){

    // randomPokemons almacenar los Pokemon
    const [isList, setIsList ] = useState ([]);
    useEffect ( () =>{
        const fetchPokemon = async () => {
            try {
              
              var response = await getPokemonList('https://pokeapi.co/api/v2/pokemon?limit=20');
              var data = response.array;
              setIsList(data);
              console.log(data);
              
              
              
            } catch (error) {
              console.error("Error capturando Pokemon data", error);
            }
            
          };
          fetchPokemon();
        }, []);
        const handleImageLoad = (event) => {
          event.target.src = event.target.dataset.src;
        };
        


    return ( 
        <div className='boxPokedex'>
        <div className="pokeBox">
        {isList.map((pokemon) => (
          <div id='poke1' key={pokemon.id}>
            
            <img className='poke-Card'
            src={defaultImage}
            alt={pokemon.name}
            data-src={pokemon.image} // Almacenar la URL real en un atributo personalizado
            onLoad={handleImageLoad} // Manejador de carga de imagen
            loading="lazy" // Agregar atributo "loading" con valor "lazy"
            style={{maxHeight:'100px', maxWidth: "100px", borderRadius:"5px",}}/>
            <div className='poke-Card-info'>
              <p>
                {pokemon.name}
              </p>
              <p>
                Height: {pokemon.height}
              </p>
              <p>
                Weight: {pokemon.weight}
              </p>
              <p>
                {/* Types: {pokemon.types} falta ver como recorrer eel array */}
              </p>
              <p>
                Stats: {pokemon.stats}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
     );
 }
 
 export default Pokedex;