import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ImgBanner from "../img/img_banner.png";

const Home = () => {
  const [kasaAnnonces, setkasaAnnonces] = useState([]);

  useEffect(() => {
    axios
      .get("/annonces.json")
      .then((res) => setkasaAnnonces(res.data))
      .catch((err) => console.log(err));
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
