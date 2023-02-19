import React from "react";
import "../styles/Banner.css";
import "../styles/index.css";

const Banner = (props) => {
  return (
    <div className="bannerContain">
      <div className="bannerContain__view">
        <img src={props.imgpath} className="bannerContain__view--picture" alt="banner" />
        <div className="bannerContain__view--cover"></div>
      </div>     
      <h1 className="bannerContain__title">{props.texte}</h1>
      
    </div>
  );
};

export default Banner;





// function Welcome(props) {
//   //   return (
//   //     <h1>
//   //       Bonjour, {props.name} {props.lastname}
//   //     </h1>
//   //   );
//   // }
// {
//   /* <div>
//         <Welcome name="Sarah" lastname="Connor" />
//         <Welcome name="Edite" />
//       </div> */
// }





// function Getimage(props) {
//   return <img src={props.imgpath} className="imgBanner" alt="banner" />;
// }

// const Banner = () => {
//   return (
//     <div>
//       <Getimage imgpath={ImgBanner} />
//       <h1>Chez vous, partout et ailleurs</h1>

//       <Getimage imgpath={ImgAbout} />

//     </div>
//   );
// };






// function Banner(props) {
//   return (
//     <div>
//       <img src={props.imgpath} className="imgBanner" alt="banner" />
//       <h1>{props.texte}</h1>
//     </div>
//   );
// }