import React from 'react';
import "../Styles/Home.css";
import PokeInfo from './PokeInfo';
import Header from './Header';

function Home() {
    return ( 
        <div className='boxHome'>
          <div>
            <h1>Home</h1>
            {/* <PokeInfo/> */}
            <Header/>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon"/> */}
          </div>

          <div>
            <body>
              <h1>Hola prueba</h1>
            </body>
          </div>

        </div>
     );
}

export default Home;