import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Index";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </Router>
    );
}