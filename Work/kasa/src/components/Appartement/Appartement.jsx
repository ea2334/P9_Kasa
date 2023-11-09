import { Link } from "react-router-dom";
import React from "react";
import Logements from "../../pages/Logements/Logements";

function Appartement(props) {

console.log("", props);

    return (
        <div className="card">
           <img src={props.image} alt="Image de l'appartement" />
           <Link to={`/logement/${props.id}`}>
           <h3 className="title_apart">{props.title}</h3>
           </Link>
        </div>
        
    )
  }
  
  export default Appartement