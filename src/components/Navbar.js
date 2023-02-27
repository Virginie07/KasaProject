import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";
import "../styles/Navbar.css";
import LogoKasa from "../img/logo_kasa.png";


const Navbar = () => {
  return (
    <header className="Appheader">
      <img src={LogoKasa} className="Appheader__logo" alt="logo" />

      <nav className="Appheader__nav">
        <ul className="Appheader__nav--list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "Appheader__nav--listLink Appheader__nav--listLinkActive linkHome"
                : "Appheader__nav--listLink linkHome"
            }
          >
            <li className="Appheader__nav--listItem">Accueil</li>
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "Appheader__nav--listLink Appheader__nav--listLinkActive linkAbout"
                : "Appheader__nav--listLink linkAbout"
            }
          >
            <li className="Appheader__nav--listItem">A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
