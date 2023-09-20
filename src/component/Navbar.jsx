import React from "react";
import Foto from "../image/logo.png";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={Foto} alt="foto" />
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/food">all food</a>
                </li>
                <li className="nav-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;