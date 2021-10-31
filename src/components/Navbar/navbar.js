import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";
import FintechLogo from "../../assets/fintechLogo.jpg";
import Menu from "../../assets/menu.png"
export default function Navbar() {
    console.log(window.innerWidth)
    return (
        <div className="navbar">
            <div className="fintech_logo">
            <img  src={FintechLogo} alt="logo"/>
            </div>
            {window.innerWidth>450 ?
            (<div className="right">
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
            ):(
                <div>
                    <div className="mini_call_btn">
                     <p>+998(71) 203-88-00</p>
                    </div>
                    <div className="menu_item">
                     <img src={Menu} alt=""/>
                    </div>
                </div>
            )}
            

        </div>
    )
}
