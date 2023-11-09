import { useState } from "react";
import Appartement from "../Appartement/Appartement";

fetch("./data/data.json")
.then((res) => res.json())
.then(console.log)
.catch(console.error);

function Gallery() {

fetch("./data/data.json")
.then((res) => res.json())
.then((res) => console.log)
.catch(console.error);

useState(0);

    return (
      <>
      <div className="gallery">

         <Appartement />
         <Appartement />
         <Appartement />
         <Appartement />
         <Appartement />
         <Appartement />

      </div>
      </>
    );
  }
  
  export default Gallery;