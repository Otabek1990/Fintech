import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";
import FintechLogo from "../../assets/fintechLogo.jpg"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="fintech_logo">
            <img  src={FintechLogo} alt="logo"/>
            </div>
                <div className="nav_links">
            <Link to="/" className="lab">Laboratoriya</Link>
            <Link to="/" className="lab">Bizning kurslar</Link>
            <Link to="/" className="lab">Tadbirlar</Link>
            <Link to="/" className="lab">Biz bilan aloqa</Link>
            </div>
            <div className="call_btn">
            <p>+998(71) 203-88-00</p>
            </div>

        </div>
    )
}
