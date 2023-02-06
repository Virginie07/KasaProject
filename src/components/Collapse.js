import React from "react";
import "../styles/Collapse.css";
import Chevron from "../img/chevron.png";
import { useState } from "react";

const Collapse = (props) => {
  const [count, setCount] = useState(true);

  return (
    <div className="collapse">

      <div className="collapse__headbarre">
        <h1 className="collapse__headbarre--title">{props.title}</h1>

        <img
          src={Chevron}
          alt="chevron"
          onClick={() => setCount((previousState) => !previousState)}
          className={`${count ? "collapse__headbarre--chevron" : "collapse__headbarre--chevronUp"}`}
        />
      </div>

      <div className={`${count ? "collapse__descHide" : "collapse__descVisible"}`}>
        <p>{props.description}</p>
      </div>
      
    </div>
  );
};

export default Collapse;

// function handleClick(e) {
//   // e.preventDefault();
//   // console.log("Le lien a été cliqué.");

//   // nouvelle variable d'etat

// }

// {
//   /* <button className="bouton" onClick={handleClick}>Clique</button> */
// }

// var nbClick = 0;
// console.log('this vaut:', this);

// nbClick = nbClick + 1;
// console.log(nbClick);

// var myModulo = nbClick % 2;
// if (myModulo == 0) {
//   console.log('affichage');
//   espaceDesc.style.display = "block";
// }

// if (myModulo != 0) {
//   espaceDesc.style.display = "none";
// }

// {
//   /* {count ? <p>Yoann</p>:<p>Virginie</p>} */
// }
