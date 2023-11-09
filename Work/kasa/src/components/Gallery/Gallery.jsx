import { useEffect, useState } from "react";
import Appartement from "../Appartement/Appartement";



function Gallery() {

const {apartments, setApartment} = useState({});

useEffect(fetchApartment, {});

function fetchApartment(){
fetch("./data.json")
.then((res) => res.json())
.then((res) => setApartment(res))
.catch(console.error);
}

    return (
      
      <div className="gallery">
        {apartments.map((apartment) => (
          <Appartement title={apartment.title} image={apartment.cover} />
        ))}

      </div>

    );
  }
  
  export default Gallery;