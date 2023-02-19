import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/index.css";
import "../styles/Fiches.css";
import data from "../data/annonces.json";
import Collapse from "../components/Collapse.js";
import Stars from "../components/Stars.js";
import Nopages from "./Nopage";
import arrowBack from "../img/arrow_back.png";
import arrowForward from "../img/arrow_forward.png";

const Fiches = () => {
  const allParam = useParams();
  const paramId = allParam.id;
  const itemData = data.find((element) => element.id === paramId);
  const [position, setPosition] = useState(0);

  if (itemData) {
    return (
      <div className="fiche">
        {/* fleche forward = setPosition vaut position +1 SI c'est inferieur a la taille du tableau sinon revient a 0*/}

        {/* au click ajoute 1 a position via setPosition 
        onClick={() => ${position == pictures.length ? setCount((position) => 0) : setPosition((position) => position+1)}} */}

        {/* condition si position == pictures.length */}
        {/* ${position == pictures.length ? setPosition((position) => 0) : setCount((position) => position+1)} */}

        {/* au click enleve 1 a position via setPosition SI c'est position est different de 0
        onClick={() => position == 0 ? setCount((position) => itemData.pictures.length -1) : setPosition((position) => position -1)} */}

        <div className="fiche__galerie">
          <img
            src={arrowBack}
            className={`${
              itemData.pictures.length != 1
                ? "fiche__galerie--arrowBack fiche__galerie--arrow"
                : "fiche__galerie--arrowHide"
            }`}
            alt="arrow back"
            onClick={() =>
              position == 0
                ? setPosition((position) => itemData.pictures.length - 1)
                : setPosition((position) => position - 1)
            }
          />

          <img
            src={itemData.pictures[position]}
            className="fiche__galerie--picture"
            alt="banner"
          />

          <div className="fiche__galerie--compteur">
            <p className="fiche__galerie--paraCompteur">
              {position + 1}/{itemData.pictures.length}
            </p>
          </div>

          <img
            src={arrowForward}
            className={`${
              itemData.pictures.length != 1
                ? "fiche__galerie--arrowForward fiche__galerie--arrow"
                : "fiche__galerie--arrowHide"
            }`}
            alt="arrow forward"
            onClick={() =>
              position == itemData.pictures.length - 1
                ? setPosition((position) => 0)
                : setPosition((position) => position + 1)
            }
          />
        </div>

        <div className="fiche__info">
          <div className="fiche__infoDetail">
            <p className="fiche__infoDetail--title">{itemData.title}</p>
            <p className="fiche__infoDetail--lieu">{itemData.location}</p>
          </div>

          <div className="fiche__infoHost">
            <p className="fiche__infoHost--name">{itemData.host.name}</p>
            <img
              src={itemData.host.picture}
              className="fiche__infoHost--pic"
              alt="Host picture"
            />

            {/* pour la galerie, mettre 2 chevrons. A l'evenement au clic on parcours le tab pictures */}
          </div>
        </div>

        <div className="fiche__notes">
          <ul className="fiche__notes--tagList">
            {itemData.tags.map((tag) => (
              <li key={tag} className="fiche__notes--tagListItem">
                {tag}
              </li>
            ))}
          </ul>

          <Stars rating={itemData.rating} />
        </div>

        <div className="fiche__collapses">
          <Collapse title={"Description"} description={itemData.description} />

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

// axios
//   .get("/annonces.json")
//   .then((res) => {
//     setkasaAnnonces(res.data)
//     // const itemData = kasaAnnonces.find(element => element.id === 'c67ab8a7')
//     // setItemData(res.data)
//     // console.log('Hello');
//     // console.log(itemData);
//     console.log(kasaAnnonces);
//     console.log('Goodbye');

//   })
//   .catch((err) => console.log(err));

// {
//   /* {itemData.map((iItemData, i) => (
//           <p key = {i}>{iItemData.title}</p>
//         ))} */
// }

// const [itemData, setItemData] = useState([]);
// console.log("mes annonces", data);
// console.log(data);
// const item = data.find((element) => element.id === "c67ab8a7");

// setItemData(item);
// console.log(item);

// useEffect(() => {
//   const item = data.find((element) => element.id === "c67ab8a7");
//   setItemData(item);
// }, []);
