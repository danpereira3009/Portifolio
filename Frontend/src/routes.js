import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cabecalho from "./components/Cabecalho";
import Home from "./views/Home/Index";
import Projetos from "./views/Projetos/Projetos";
import Contato from "./views/Contato/Contato";

export default function AppRouter() {
    return (
        <Router>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contato' element={<Contato />}/>
                <Route path='/projetos' element={<Projetos />}/>
            </Routes>
        </Router>
    );
}