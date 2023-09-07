

export async function getPokemonList (url) {
    var pokemonData = [];
    var result = {}
    try {
        // Consumir el api con la url recibida
        const response = await fetch(url);
        // vamos a esperar la respuesta y formatearla a json
        const data = await response.json();
        if (data.results && data.results.length){
            // iterar cata pokemon
            for (const pokemon of data.results){
                const url = pokemon.url;
                const detailPokemon = await getPokemonDetailByUrl(url);
                //push al arreglo de pokemons
                pokemonData.push(detailPokemon);
            }
        }
        result ={count:data.count,
            next:data.next,
            previous: data.previous,
            array: pokemonData};

    } catch (error) {
        console.error (" Error capturando la Pokemon data", error);
        return null;
    }
    return result;
 }

 async function getPokemonDetailByUrl(url) {
    try {
        // obtener el detalle de cada pokemon
        const response = await fetch(url);
        const data = await response.json();
        const id = data.id;
        // console.log("AQUI", data.types.length)
        // pokeType =data.types.map(nombres =>nombres.type.name);

        // console.log(pokeType);
        // pokeTypeTotal = "The pokemon is of type: " + pokeType;
        // const totalTypes = data.types["0"]["type"]["name"] + data.types["1"]["type"]["name"]
        return {
            id:data.id,
            name:data.name,
            image:data.sprites.other["official-artwork"]["front_default"],
            weight:data.weight,
            height:data.height,
            types:data.types.map(nombres =>nombres.type.name + " "),
            hp:data.stats["0"]["base_stat"],
            attack:data.stats["1"]["base_stat"],
            defense:data.stats["2"]["base_stat"],
            specialattack:data.stats["3"]["base_stat"],
            specialdefense:data.stats["4"]["base_stat"],
            speed:data.stats["5"]["base_stat"]
            
        }
    } catch (error) {
      console.error (" Error capturando el detalle", error);
      throw error;  
    }
 }