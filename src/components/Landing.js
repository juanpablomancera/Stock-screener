import React from "react"
import "./landing.css"
import portada from "../images/background.jpg";

export default function Landing(){
    return (
        <section>
            <img src={portada} alt ="" className="portada"/>
            <div className="introduction">
                <h1 className="title">The best stock market screener for finding the most profitable stocks</h1>
                <h3 className="description">Get started know and find the next superperformance stock </h3>
                <button className="register-btn">Register</button>
            </div>

        </section>)
}