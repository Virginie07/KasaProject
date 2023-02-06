import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Fiches.css";
import data from "../data/annonces.json";
import Collapse from "../components/Collapse.js";
import "../styles/index.css";

const Fiches = () => {
  const allParam = useParams();
  const paramId = allParam.id;

  console.log(allParam.id);
  const itemData = data.find((element) => element.id === paramId);
  console.log(itemData);

  return (
    <div className="fiche">
      <img src={itemData.cover} className="fiche__picture" alt="banner" />

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
        </div>
      </div>

      <div className="fiche__notes">
        <ul className="fiche__notes--tagList">
          {itemData.tags.map((tag) => (
            <li key={tag} className="fiche__notes--tagListItem">{tag}</li>
          ))}
        </ul>

        <p>Etoiles notation</p>
      </div>

      <div className="fiche__collapses">
        <Collapse title={"Description"} description={itemData.description} />

        <Collapse
          title={"Équipements"}
          description={itemData.equipments.map((equipment) => (
            <ul className="fiche__collapses--equipmentList">
              <li key={equipment} className="fiche__collapses--equipmentListItem">{equipment}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  );
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
