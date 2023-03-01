import React from "react";
import "../styles/Footer.scss";
import LogoFooter from "../img/logo_footer.png";

const Footer = () => {
  return (
    <div className="kasafooter">
      <img src={LogoFooter} className="kasafooter__logo" alt="logo" />
      <p className="kasafooter__txt">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
