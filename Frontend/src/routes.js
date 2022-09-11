import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Adopet from "./components/pages/Projetos/Adopet"
import Amanda from "./components/pages/Projetos/Amanda"


export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/adopet' element={<Adopet />}/>
                <Route path='/amanda' element={<Amanda />}/>
            </Routes>
        </Router>
    );
}