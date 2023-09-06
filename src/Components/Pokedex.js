import React, {useState, useEffect} from 'react';
import "../Styles/Pokedex.css";
import {getPokemonList} from "./PokePrevNext";
import defaultImage from '../Assets/Img/gif3.gif';
import PokeButtonNext from './PokeButtonNext';
import PokeSearch from './PokeSearch';


  function Pokedex(){

    // randomPokemons almacenar los Pokemon
    const [isList, setIsList] = useState ([]);
    useEffect ( () =>{
        const fetchPokemon = async () => {
            try {
              
              var response = await getPokemonList('https://pokeapi.co/api/v2/pokemon?limit=24');
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
          <div className='pokedex-title'>
            <h1>Pokedex</h1>
          </div>
          <div className='pokedex-Search'>
            {/* <input type='search' placeholder='Search'/> */}
            <PokeSearch/>
          </div>
        <div className="pokeBox" >
        {isList.map((pokemon) => (
          <div id='poke1' key={pokemon.id}>
            <div className='poke-Card'>
            <img 
            src={defaultImage}
            alt={pokemon.name}
            data-src={pokemon.image} // Almacenar la URL real en un atributo personalizado
            onLoad={handleImageLoad} // Manejador de carga de imagen
            loading="lazy" // Agregar atributo "loading" con valor "lazy"
            style={{maxHeight:'100px', maxWidth: "100px", borderRadius:"5px",}}/>
            </div>
            <div className='poke-Card-info'>
              <p>
                {pokemon.name} <br/>
                {/* #{pokemon.id} */}
              </p>
              <p>
                Height: {pokemon.height}
              </p>
              <p>
                Weight: {pokemon.weight}
              </p>
              <p>
                Types: {pokemon.types}
              </p>
              <p>
                {/* Stats
              </p>
              <p>
                Hp: {pokemon.hp}
              </p>
              <p>
              Attack: {pokemon.attack}
              </p>
              <p>
              Defense: {pokemon.defense}
              </p>
              <p>
              Special attack: {pokemon.specialattack}
              </p>
              <p>
              Special defense: {pokemon.specialdefense}
              </p>
              <p>
              Speed: {pokemon.speed} */}
              </p>
              <button className='favorite-button'>Favorite</button>
            </div>
          </div>
        ))}
      </div>
      <div className='button-Box'>
        <PokeButtonNext/>
      </div>
      </div>
     );
 }
 
 export default Pokedex;