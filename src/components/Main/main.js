import React from 'react'
import "./main.css";
import FaceBookLogo from "../../assets/facebookIcon.png"
import InstagramLogo from "../../assets/Instagram.png"
import TelegramLogo from "../../assets/Telegram.png"
import Line1 from "../../assets/Line1.png";

export default function Main() {
    return (
        <div className="main">
            <div className="text">
                Farzandingiz kelajagini biz bilan quring!
            </div>
            <button className="register">
                <p>Ro'yxatdan o'tish</p>
            </button>
            <div className="line1">
             <img src={Line1} alt="line1"/>
            </div>
            <div className="components">
            <img className="facebook" src={FaceBookLogo} alt="FacebookLogo"/>
            <img className="instagram" src={InstagramLogo} alt="InstagramLogo"/>
            <img className="telegram" src={TelegramLogo} alt="TelegramLogo"/>
            </div>
        </div>
    )
}
