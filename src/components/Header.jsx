import React from "react";
import "../scss/Header.scss";
import logo from "../images/Rick_and_Morty_title_card.png";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Rick and Morty Logo" />
        </header>
    );
}

export default Header;
