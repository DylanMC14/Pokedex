import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Components/Home';
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Pokedex from '../Components/Pokedex';

    function AppRouter (){
        return (
            <>
            <Navbar/>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/pokedex' element = {<Pokedex/>}/>
            </Routes>
            </>
        )
    }

export default AppRouter;