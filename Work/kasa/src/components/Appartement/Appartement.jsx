import { Link } from "react-router-dom";

function Appartement() {

    return (
      <Link to="/Logements">
        <div className="card">
           <div className="title">Titre de la location </div>
        </div>
      </Link>
    )
  }
  
  export default Appartement