import React from 'react';
import "../Styles/About.css";

function About() {
    return ( 
        <div className='text'>
          <div className='boxAbout'>
            <h1 className='title'> What is our page about ?</h1>
            <h3 className='poke-Info'> Our page is oriented on the pokemon pokedex and the information it provides.</h3>

            <h2 className='seconds-Titles'> What is the pokedex ?</h2>
            <p className='paragraphs'>
              In the world of Pokémon is a high-tech portable virtual encyclopedia that Pokémon trainers
              they carry with them to record the tokens of all the various
              Pokémon species they encounter during their journey as trainers. The capacity of the
              Pokédex can be increased allowing to store data of other Pokémon, which
              they are not common, like the legendary ones
              and Pokémon that are not native to that region.
              Said "expanded" Pokédex is known as the National Pokédex.
            </p>

            <h2 className='seconds-Titles'> How does it work ?</h2>
            <p className='paragraphs'>
              The Pokédex works simply, as it is organized into entries. When
              gets for the first time, these are empty and don't even show the
              name of the Pokémon to which they belong; just his number. When a sighted
              Pokémon for the first time, for example in a fight, the Pokédex registers it
              superficially, associating the name of the Pokémon and its image with its number.
              But when the Pokémon is caught, the Pokédex is already capable of scanning the
              Pokémon and to register its complete basic data: type, cry, location,
              weight, height, footprint, shape and general description. The device differentiates between
              cases and others, and shows the number of Pokémon
              of each, sighted and captured.
            </p>

            <h2 className='seconds-Titles'> Can you search the pokedex ?</h2>
            <p className='paragraphs'>
              The Pokédex is capable, through its search system, of classifying Pokémon
              in different ways, the main one is by the number they have in their Pokédex and
              then the number of the National Pokédex that is common to all. Also
              sorts them alphabetically, by type, by color, by size, by height, by
              the shape of their body, if they are registered in their shiny form,
              if they have mega evolution, or if they are not captured.
            </p>

            <h2 className='seconds-Titles'> Location</h2>
            <p className='paragraphs'>
              The Pokédex is capable of showing all the places where a Pokémon in the region lives.
              In some cases, the locations vary and, in others, there are Pokémon that can only be spotted
              at certain hours. However, there are some Pokémon for which the Pokédex does not show its location;
              This is what happens especially in legendary Pokémon.
            </p>

            <h2 className='seconds-Titles'> Pokédex by generation</h2>
            <p className='paragraphs'>
              With the passage of time, the Pokédex has been presenting modifications, resulting in different
              versions or models that vary from generation to generation and by region.
            </p>


          </div>
        </div>
     );
}

export default About;