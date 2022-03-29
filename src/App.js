import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import './index.css';
import Main from './Main';
import Register from "./Register"
import Login from "./Login"
import Screener from "./Screener"
import {token} from "./Token"

export default function App() {
    const [credential, setCredential] = React.useState(
        sessionStorage.getItem("token")
    )



    function PrivateRoute({children}) {
        return credential ? children  : <Navigate to="/login"/>
    }
    return (
        <token.Provider value={[credential, setCredential]}>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route
                        path="stockscreener"
                        element={
                            <PrivateRoute >
                                <Screener />
                            </PrivateRoute>
                        }
                    />

                </Routes>
        </BrowserRouter>
        </token.Provider>
    )

}
