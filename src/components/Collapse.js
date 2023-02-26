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
          className={`${
            count
              ? "collapse__headbarre--chevronDown collapse__headbarre--chevron"
              : "collapse__headbarre--chevronUp collapse__headbarre--chevron"
          }`}
        />
      </div>

      <div
        className={`${count ? "collapse__descHide" : "collapse__descVisible"}`}
      >
        <div className="collapse__descVisible--para">{props.description}</div>
      </div>
    </div>
  );
};

export default Collapse;
