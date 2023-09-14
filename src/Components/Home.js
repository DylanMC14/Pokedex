import React from 'react';
import "../Styles/Home.css";
import PokeInfo from './PokeInfo';
import Header from './Header';
import PokeCarousel from './PokeCarousel';

function Home() {
    return ( 
        <div className='boxHome'>
          <div className='home-Header'>
            <Header/>
          </div>


          <div className='box-games'>
          <h3 id='title-Games'>These are some of the many pokemon games that exist.</h3>
            <div className='images-Games'>
              <PokeCarousel/>
              <h1>What is the history of pokemon?</h1>
              <p>The story of Pokémon (short for Pocket Monsters) begins in Japan, a country where a video
                 game lover named Satoshi Tajiri, at just 25 years old, had the idea of 
                 designing a system in which several players could interact in a shared world. It was an 
                 ambitious idea for 1990, but it was the seed of what years later would become a worldwide success. 
                 Tajiri was lucky enough to work under the direction of the legendary Shigeru Miyamoto 
                 (father of Mario Bros) on several video games and after years of developing the idea, he presented
                  his first Pokémon for the Game Boy portable console in February 1996.</p>
              <h1></h1>
              <p></p>
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
     );
}

export default Home;