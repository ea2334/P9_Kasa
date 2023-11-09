import { useEffect, useState } from "react";
import Appartement from "../Appartement/Appartement";
import Datas from "../../data/data.json";



function Gallery() {




    return (
      
      <div className="gallery">
        {Datas.map((apartment) => (
          <Appartement title={apartment.title} image={apartment.cover} key={apartment.id} />
        ))}

      </div>

    );
  }
  
  export default Gallery;