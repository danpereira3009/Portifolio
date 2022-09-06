import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Index";
import Adopet from "./views/Projetos/Adopet"
import Amanda from "./views/Projetos/Amanda"


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