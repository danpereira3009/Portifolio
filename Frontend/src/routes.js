import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Index"
import Adopet from "./components/pages/Projetos/Adopet"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/adopet' element={<Adopet />}/>
            </Routes>
        </Router>
    );
}