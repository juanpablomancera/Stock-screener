import React from "react"
import logo from "../images/logo2.png"
import "./navbar.css"

export default function Navbar(){
    return(
        <nav>
            <img src={logo}/>
            <ul className="sections">
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">Stock screener</a>
                </li>
            </ul>
        </nav>
    )
}