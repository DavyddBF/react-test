import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Filmes from "./page/Filmes";


class RouterApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/filmes/:id" element={ <Filmes /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouterApp;