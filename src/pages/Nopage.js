import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nopage.scss";

const Nopage = () => {
  return (
    <div>
      <div className="error">
        <p className="error__number">404</p>
        <p className="error__txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>

      <NavLink to="/" className="linkError">
        <li className="linkError__txtAccueil">
          Retourner sur la page d'accueil
        </li>
      </NavLink>
    </div>
  );
};

export default Nopage;
