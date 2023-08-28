import React from 'react';
import "../Styles/Home.css";
import PokeInfo from './PokeInfo';
import Header from './Header';

function Home() {
    return ( 
        <div className='boxHome'>
          <div>
            {/* <h1 id='title-home'>Home</h1> */}
            {/* <PokeInfo/> */}
            <Header/>
            {/* <img src="https://www.bizak.es/wp-content/uploads/2018/09/BANNER-26-POKEMON-1920X700-1170x427.jpg" alt="Banner Pokemon" height={200} width={200}/> */}
          </div>


          <div className='prueba'>
          </div>
        </div>
     );
}

export default Home;