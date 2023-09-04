import React, {useState, useEffect} from 'react';
import "../Styles/GlobalStyles.css";

function PokeInfo() {
    // const [pokemonData, setPokemonData] = useState (null);
    // // var randomNumber = Math.floor(Math.random() *(500 - 0 ));
    

    // useEffect (() => {
    //     //Realiza una solicitud al API
    //     fetch('https://pokeapi.co/api/v2/pokemon/493/')
    //     .then(response => response.json())
    //     .then(data => setPokemonData(data))
    //     .catch(error => console.error('Error fetching data:', error))
    // }, []);
    // return ( 
        // <div>
        //     <h2>Pokemon's</h2>
        //     {pokemonData ? (
        //         <div className='pokeBox'>
        //             <div id='poke1'>
        //                 <div className='infoBox'>
        //                     <p>Nombre: {pokemonData.name}</p>
        //                     <p>Altura: {pokemonData.height}</p>
                            // <p>Peso: {pokemonData.weight}</p>
                            // <p>Experiencia base: {pokemonData.base_experience}</p>
                            // <p>Tipo: {pokemonData.types["0"]["type"]["name"]}</p>
        //                 </div>
        //                 <img src ={pokemonData.sprites.front_default} alt='Pokemon'/>
        //             </div>

        //             <div id='poke2'>
        //                 <div className='infoBox'>
        //                     <p>Nombre: {pokemonData.name}</p>
        //                     <p>Altura: {pokemonData.height}</p>
        //                     <p>Peso: {pokemonData.weight}</p>
        //                     <p>Experiencia base: {pokemonData.base_experience}</p>
        //                     <p>Tipo: {pokemonData.types["0"]["type"]["name"]}</p>
        //                 </div>
        //                 <img src ={pokemonData.sprites.front_default} alt='Pokemon'/>
        //             </div>

        //             <div id='poke3'>
        //                 <div className='infoBox'>
        //                     <p>Nombre: {pokemonData.name}</p>
        //                     <p>Altura: {pokemonData.height}</p>
        //                     <p>Peso: {pokemonData.weight}</p>
        //                     <p>Experiencia base: {pokemonData.base_experience}</p>
        //                     <p>Tipo: {pokemonData.types["0"]["type"]["name"]}</p>
        //                 </div>
        //                 <img src ={pokemonData.sprites.front_default} alt='Pokemon'/>
        //             </div>

        //             <div id='poke4'>
        //                 <div className='infoBox'>
        //                     <p>Nombre: {pokemonData.name}</p>
        //                     <p>Altura: {pokemonData.height}</p>
        //                     <p>Peso: {pokemonData.weight}</p>
        //                     <p>Experiencia base: {pokemonData.base_experience}</p>
        //                     <p>Tipo: {pokemonData.types["0"]["type"]["name"]}</p>
        //                 </div>
        //                 <img src ={pokemonData.sprites.front_default} alt='Pokemon'/>
        //             </div>
        //         </div>
                
        //     ): (
        //         <p> Cargando información ...</p>
        //     )
        //     }
        // </div>
    //  );
}

export default PokeInfo;