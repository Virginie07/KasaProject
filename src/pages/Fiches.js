import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/index.css";
import "../styles/Fiches.css";
import Collapse from "../components/Collapse.js";
import Stars from "../components/Stars.js";
import Nopages from "./Nopage";
import arrowBack from "../img/arrow_back.png";
import arrowForward from "../img/arrow_forward.png";

const Fiches = () => {
  const [position, setPosition] = useState(0);
  const [dataAnnonce, setDataAnnonce] = useState([]);

  useEffect(() => {
    axios
      .get("/annonces.json")
      .then((res) => setDataAnnonce(res.data))
      .catch((err) => console.log(err));
  }, []);

  const allParam = useParams();
  const paramId = allParam.id;
  const itemData = dataAnnonce.find((element) => element.id === paramId);

  if (itemData) {
    return (
      <div className="fiche">
        <div className="fiche__galerie">
          <img
            src={arrowBack}
            className={`${
              itemData.pictures.length !== 1
                ? "fiche__galerie--arrowBack fiche__galerie--arrow"
                : "fiche__galerie--arrowHide"
            }`}
            alt="arrow back"
            onClick={() =>
              position === 0
                ? setPosition((position) => itemData.pictures.length - 1)
                : setPosition((position) => position - 1)
            }
          />

          <img
            src={itemData.pictures[position]}
            className="fiche__galerie--picture"
            alt="galerie"
          />

          <div
            className={`${
              itemData.pictures.length !== 1
                ? "fiche__galerie--compteur"
                : "fiche__galerie--compteurHide"
            }`}
          >
            <p className="fiche__galerie--paraCompteur">
              {position + 1}/{itemData.pictures.length}
            </p>
          </div>

          <img
            src={arrowForward}
            className={`${
              itemData.pictures.length !== 1
                ? "fiche__galerie--arrowForward fiche__galerie--arrow"
                : "fiche__galerie--arrowHide"
            }`}
            alt="arrow forward"
            onClick={() =>
              position === itemData.pictures.length - 1
                ? setPosition((position) => 0)
                : setPosition((position) => position + 1)
            }
          />
        </div>

        <div className="fiche__infoHostRate">
          <div className="fiche__info">
            <div className="fiche__infoDetail">
              <p className="fiche__infoDetail--title">{itemData.title}</p>
              <p className="fiche__infoDetail--lieu">{itemData.location}</p>
            </div>

            <ul className="fiche__infoTag">
              {itemData.tags.map((tag) => (
                <li key={tag} className="fiche__infoTag--listItem">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="fiche__hostRate">
            <div className="fiche__host">
              <p className="fiche__host--name">{itemData.host.name}</p>
              <img
                src={itemData.host.picture}
                className="fiche__host--pic"
                alt="Host"
              />
            </div>

            <div className="fiche__star">
              <Stars rating={itemData.rating} />
            </div>
          </div>
        </div>

        <div className="fiche__collapses">
          <Collapse
            title={"Description"}
            description={itemData.description}
            className="fiche__collapses--descriptionPara"
          />

          <Collapse
            title={"Équipements"}
            description={itemData.equipments.map((equipment) => (
              <ul key={equipment} className="fiche__collapses--equipmentList">
                <li className="fiche__collapses--equipmentListItem">
                  {equipment}
                </li>
              </ul>
            ))}
          />
        </div>
      </div>
    );
  } else {
    return <Nopages />;
  }
};

export default Fiches;
