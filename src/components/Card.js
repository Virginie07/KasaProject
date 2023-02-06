import React from "react";
import "../styles/Card.css";
import { NavLink } from "react-router-dom";
// import axios from "axios";

const Card = (props) => {
  // console.log(props);
  return (
    <div className="carditem">
      
        <NavLink to={"/Fiches/"+ props.id} className="carditem__lienNav" >
          <img src={props.imgLoc} className="carditem__lienNav--pic" alt="Photo" />
          <p className="carditem__lienNav--titre">{props.titleLoc}</p>
        </NavLink>
      
    </div>
  );
};

export default Card;

// const Card = () => {

//   const [kasaAnnonces, setkasaAnnonces] = useState([]);
//   // useState renvoie une propriete + le setter qui va permettre de modifier la propriété
//   // en parametre de useState on a la valeur d'initialisation de la propriete

//   // Le useEffect se joue lorsque le composant est monté (appelé, mis en place)
//   // Les crochets [] s'appellent un call-back

//     useEffect(() => {
//       axios.get ('/annonces.json')
//       .then((res) => setkasaAnnonces(res.data))
//       .catch((err) => console.log(err));

//     }, [])

//     return (
//       <div className="carditem">

//         <div>{kasaAnnonces.map((iKasaAnnonces, index) => (

//           // <p key={index}>
//           //   {iKasaAnnonces.title} {iKasaAnnonces.rating}
//           // </p>

//           <NavLink to="/Fiches">
//           <li className="carditem__titre">{iKasaAnnonces.title}</li>
//           </NavLink>

//           ))}
//         </div>

//         {/* <NavLink to="/Fiches">
//           <li className="carditem__titre">Titre de la location</li>
//         </NavLink> */}
//       </div>
//     );
//   };
