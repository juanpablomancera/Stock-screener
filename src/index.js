import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import Register from "./Register"
import Login from "./Login"
import Screener from "./Screener"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="register" element ={<Register />}/>
            <Route path="login" element ={<Login />}/>
            <Route path="stockscreener" element ={<Screener />}/>
        </Routes>
    </BrowserRouter>
    , document.getElementById('root')
);

