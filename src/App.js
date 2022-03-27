import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './index.css';
import Main from './Main';
import Register from "./Register"
import Login from "./Login"
import Screener from "./Screener"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="stockscreener" element={<Screener/>}/>
                </Routes>
        </BrowserRouter>
    )

}
