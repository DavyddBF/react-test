import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";


class RouterApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouterApp;