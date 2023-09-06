import React,{useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function PokeSearch() {
    const [pokemon,setPokemon] = useState([]);
    const [tablaPokemon,setTablaPokemon] = useState([]);
    const [search,setSearch] = useState("");
    const peticionesGet = async ()=>{
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/{id or name}/`);
        const data = await response.json();
        setPokemon(data.id);
        setTablaPokemon(data.id);
    }
    
    const handleChange =e=>{
        setSearch(e.target.value)
        filtrar(e.target.value);
    }

    const filtrar = (finalSearch) =>{
        var result = tablaPokemon.filter((elemento)=>{
            if (elemento.name.toString().toLowerCase().includes(finalSearch.toLowerCase())
            || (elemento.id.toString().toLowerCase().includes(finalSearch.toLowerCase()
        ))) {
                return elemento;
            }
        });
        setPokemon(result);
    }

    useEffect(()=>{
      peticionesGet();  
    },[])
    return ( 
        <div className='pokemons'>
            <div className='containerInput'>
                <input className='inputSearh'
                value={search}
                placeholder='Search pokemon'
                onChange={handleChange}
                />
                <button className='button-Search'>Search</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon &&
                    pokemon.map((pokemon)=>(
                        <tr key={pokemon.id}>
                            <td>{pokemon.id}</td>
                            <td>{pokemon.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}

export default PokeSearch;