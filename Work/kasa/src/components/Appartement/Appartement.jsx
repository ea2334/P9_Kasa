import { Link } from "react-router-dom";
import React from "react";
import Logements from "../../pages/Logements/Logements";

function Appartement(props) {

console.log("", props);

    return (
        <Link to={`/logement/${props.id}`}>
        <div className="card">
           <img src={props.image} alt="Image de l'appartement" />
           <h3 className="title_apart">{props.title}</h3>
        </div>
        </Link>
        
    )
  }
  
  export default Appartement