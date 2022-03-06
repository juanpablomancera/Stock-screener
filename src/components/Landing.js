import React from "react"
import "../ComponentsStyles/landing.css"
import {Outlet, Link} from "react-router-dom"

export default function Landing(){
    return (
        <section>
            <div className="introduction">
                <h1 className="title">The best stock market screener for finding the most profitable stocks</h1>
                <h3 className="description">Get started know and find the next superperformance stock </h3>
                <button className="register-btn"><Link to="/register" style={{ textDecoration: 'none',color:'#1E1E24' }}>Register</Link></button>
            </div>
            <Outlet />
        </section>)
}