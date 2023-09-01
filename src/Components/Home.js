import React from 'react';
import "../Styles/Home.css";
import PokeInfo from './PokeInfo';
import Header from './Header';

function Home() {
    return ( 
        <div className='boxHome'>
          <div className='home-Header'>
            <Header/>
          </div>


          <div className='box-games'>
          <h3 id='title-Games'>These are some of the many pokemon games that exist.</h3>
          <div className='images-Games'>
            <h1>Hola</h1>
          </div>
          </div>
        </div>
     );
}

export default Home;