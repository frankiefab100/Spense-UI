import React, { useState } from "react";
import Hamburger from "/icons/Hamburger Menu.svg";
import Close from "/icons/Hamburger Menu.svg";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("hidden");
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-menu">
        <a href="/">
          <div className="logo">Spense.</div>
        </a>

        <div className="hamburger-icon" onClick={handleMenu}>
          {showMenu ? (
            <img src={Close} alt="close menu" />
          ) : (
            <img src={Hamburger} alt="hamburger menu" />
          )}
        </div>
      </div>

      <ul className={`${showMenu ? "nav-items hamburger-menu" : "nav-items"}`}>
        <li onClick={handleMenu}>
          <a href="business">business</a>
        </li>
        <li onClick={handleMenu}>
          <a href="pricing">Pricing</a>
        </li>
        <li onClick={handleMenu}>
          <a href="features">Features</a>
        </li>
        <div className="user-auth">
          <a href="login" className="login">
            Login
          </a>
          <a href="get-started" id="nav-btn" className="get-started">
            Get Started
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
