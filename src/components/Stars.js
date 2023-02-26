import React from "react";
import "../styles/Star.css";
import FullStar from "../img/fullStar.png";
import EmptyStar from "../img/emptyStar.png";

const Stars = (props) => {
  const tabNote = [1, 2, 3, 4, 5];
  return (
    <div className="star">
      {tabNote.map((note) =>
        props.rating >= note ? (
          <img
            className="star__pic"
            src={FullStar}
            key={note}
            alt="Etoile pleine"
          />
        ) : (
          <img
            className="star__pic"
            src={EmptyStar}
            key={note}
            alt="Etoile vide"
          />
        )
      )}
    </div>
  );
};

export default Stars;