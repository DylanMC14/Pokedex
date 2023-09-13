import React, { useState, useEffect } from "react";
import "../Styles/Pokedex.css";
import { getPokemonList, getPokemonMockApi } from "./PokePrevNext";
import defaultImage from "../Assets/Img/gif3.gif";
import PokeButtonNext from "./PokeButtonNext";
import PokeSearch from "./PokeSearch";
import FavoritePokemon from "./FavoritePokemon";
import VanillaTilt from "vanilla-tilt";

function Pokedex() {
  //update cards
  const [updateCards,setUpdateCards]=useState(false)
  //favoritos
  const [favorites,setFavorites]=useState([])
  // randomPokemons almacenar los Pokemon
  const [isList, setIsList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const totalPokemon = isList.length;
  // Paginacion
  const [page, setPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const laststPosition = currentPage * page;
  const firstPosition = laststPosition - page;
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        var response = await getPokemonList(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        var data = response.array;
        setIsList(data);
        //pokemones favoritos
        const dataFavorites=await getPokemonMockApi();
        setFavorites(dataFavorites)
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
    };
    fetchPokemon();
  }, [updateCards]);

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".poke1"),{
      scale: 1.1,
      perspective: 2000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      transition: true,
      maxTilt: 20,
      reset: true,
      speed: 300,
      // glare: true,
      maxGlare: 0.5
    })
  })
  const handleImageLoad = (event) => {
    event.target.src = event.target.dataset.src;
  };

  const handleFilteredPokemon = (filteredData) => {
    console.log(filteredData);
    setFilteredPokemon(filteredData);
  };
  function update(){
    setUpdateCards(!updateCards)
  }

  return (
    <div className="boxPokedex">
      <div className="pokedex-title">
        <h1>Pokedex</h1>
      </div>
      <div className="pokedex-Search">
        <PokeSearch handleFilteredPokemon={handleFilteredPokemon} />
      </div>
      <div id="text">
        <h5>
        The ⭐ means that the pokemon is added to favorites <br/>
        The ❌ would be to remove the pokemon from the favorites list
        </h5>
      </div>
      <div className="pokeBox">
        {(filteredPokemon.length > 0 ? filteredPokemon : isList)
          .map((pokemon) => (
            <div >
              <div className="poke1 rg" key={pokemon.id}>
              <div className="poke-Card">
                <img
                  src={defaultImage}
                  alt={pokemon.name}
                  data-src={pokemon.image} // Almacenar la URL real en un atributo personalizado
                  onLoad={handleImageLoad} // Manejador de carga de imagen
                  loading="lazy" // Agregar atributo "loading" con valor "lazy"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="poke-Card-info">
                <p>
                  # {pokemon.id}<br/>
                  {pokemon.name} 
                </p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Types: {pokemon.types}</p>
                {/* <p>
                Stats
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
              Speed: {pokemon.speed}
              </p> */}
                <div className="poke-Btn-Fav-Del">
                  <FavoritePokemon name={pokemon.name} favorites={favorites} update={update} />
                </div>
              </div>
            </div>
            </div>
            
          ))
          .slice(firstPosition, laststPosition)}
      </div>
      <div className="button-Box">
        <PokeButtonNext
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPokemon={totalPokemon}
        />
      </div>
    </div>
  );
}

export default Pokedex;
