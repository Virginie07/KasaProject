import React from "react";
import FullStar from "../img/fullStar.png";
import EmptyStar from "../img/emptyStar.png";

const Stars = (props) => {
  const tabNote = [1, 2, 3, 4, 5];
  return (
    <div>
      {tabNote.map((note) => ((props.rating) >= note ? <img src={FullStar} key={note} alt="Etoile pleine" /> : <img src={EmptyStar} key={note} alt="Etoile vide" />))}
    </div>
  );
};

export default Stars;
