import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.css";
import ImgBanner from "../img/img_banner.png";
import axios from "axios";

const Home = () => {
  const [kasaAnnonces, setkasaAnnonces] = useState([]);
  // useState renvoie une propriete + le setter qui va permettre de modifier la propriété
  // en parametre de useState on a la valeur d'initialisation de la propriete

  // Le useEffect se joue lorsque le composant est monté (appelé, mis en place)
  // Les crochets [] s'appellent un call-back

  useEffect(() => {
    axios
      .get("/annonces.json")
      .then((res) => setkasaAnnonces(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="kasamain">
      <Banner imgpathDesktop={ImgBanner} imgpathMobile={ImgBanner} texte={"Chez vous, partout et ailleurs"} />

      <div className="contain">
        {kasaAnnonces.map((iKasaAnnonces, index) => (
          <Card
            key={index}
            id = {iKasaAnnonces.id}
            imgLoc={iKasaAnnonces.cover}
            titleLoc={iKasaAnnonces.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
