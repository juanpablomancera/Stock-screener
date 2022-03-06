import React from "react"
import logo from "../images/logo2.png"
import "./navbar.css"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt=""/>
            <ul className="sections">
                <li>
                    Login
                </li>
                <li>
                    Register
                </li>
                <li>
                    Stock screener
                </li>
            </ul>
        </nav>
    )
}