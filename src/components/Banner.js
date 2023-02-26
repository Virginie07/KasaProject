import React from "react";
import "../styles/Banner.css";
import "../styles/index.css";

const Banner = (props) => {
  return (
    <div className="bannerContain">
      <div className="bannerContain__view">
        <img
          src={props.imgpathDesktop}
          className="bannerContain__view--picture bannerContain__view--pictureDesktop"
          alt="banner"
        />

        <img
          src={props.imgpathMobile}
          className="bannerContain__view--picture bannerContain__view--pictureMobile"
          alt="banner"
        />

        <div className="bannerContain__view--cover"></div>
      </div>
      <h1 className="bannerContain__title">{props.texte}</h1>
    </div>
  );
};

export default Banner;
