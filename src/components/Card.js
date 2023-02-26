import React from "react";
import "../styles/Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="carditem">
      <NavLink to={"/Fiches/" + props.id} className="carditem__lienNav">
        <img
          src={props.imgLoc}
          className="carditem__lienNav--pic"
          alt="Photo"
        />
        <p className="carditem__lienNav--titre">{props.titleLoc}</p>
        <div className="carditem__lienNav--over"></div>
      </NavLink>
    </div>
  );
};

export default Card;
