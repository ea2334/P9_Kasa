import { Link } from "react-router-dom";
import React from "react";

function Appartement(props) {

console.log("", props);

    return (
        <div className="card">
           <img src={props.image} alt="Image de l'appartement" />
           <div className="title_apart">{props.title}</div>
        </div>
    )
  }
  
  export default Appartement