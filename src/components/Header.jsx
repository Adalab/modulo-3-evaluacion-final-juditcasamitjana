import React from "react";
import logo from "../images/Rick_and_Morty_title_card.png";

function Header() {
    return (
        <div>
            <h1>Evaluación Final React </h1>
            <img src={logo} alt="Rick and Morty Logo" className="logo" />
        </div>
    );
}

export default Header;
