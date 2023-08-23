import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home';
import About from '../Pages/About';
import Navbar from '../Components/Navbar';

    function AppRouter (){
        return (
            <>
            <Navbar/>
            <Routes>
                <Route path='/' element = {Home}/>
                <Route path='/about' element = {About}/>
            </Routes>
            </>
        )
    }

export default AppRouter