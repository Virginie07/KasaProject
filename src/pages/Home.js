import React, { useEffect, useState } from "react";
import "../styles/Home.scss";
import Banner from "../components/Banner.js";
import Card from "../components/Card.js";
import ImgBanner from "../img/img_banner.png";



const Home = () => {
  const [kasaAnnonces, setkasaAnnonces] = useState([]);
  
  useEffect(() => {

    fetch("/annonces.json")
    .then((response) => {return response.json()})
    .then((data) => {setkasaAnnonces(data)})

  }, []);

  return (
    <div className="kasamain">
      <Banner
        imgpathDesktop={ImgBanner}
        imgpathMobile={ImgBanner}
        texte={"Chez vous, partout et ailleurs"}
      />

      <div className="contain">
        {kasaAnnonces.map((iKasaAnnonces, index) => (
          <Card
            key={index}
            id={iKasaAnnonces.id}
            imgLoc={iKasaAnnonces.cover}
            titleLoc={iKasaAnnonces.title}
          />
        ))}
      </div>
    </div>
  );

};

export default Home;


