import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import LogoKasa from "../img/logo_kasa.png";
import "../styles/index.css";

const Navbar = () => {
  
  return (
    
    <header className="Appheader">
      <img src={LogoKasa} className="Appheader__logo" alt="logo" />

      <nav className="Appheader__nav">
        <ul className="Appheader__nav--list">
          <NavLink to="/" className="Appheader__nav--listLink">
            <li className="Appheader__nav--listItem">Accueil</li>
          </NavLink>

          <NavLink to="/About" className="Appheader__nav--listLink">
            <li className="Appheader__nav--listItem">A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// {({ isActive }) =>
//                 isActive
//                   ? "Appheader__nav--listItem Appheader__nav--listItemActive"
//                   : "Appheader__nav--listItem Appheader__nav--listItemInactive"
//               }
