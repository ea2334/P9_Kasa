import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Datas from "../../data/data.json"
import { useParams } from 'react-router-dom';

function Logements(){

    const { id } = useParams(); // Utilisation de l'id en paramètre
    const logement = Datas.find(logement => logement.id === id);

    return (

        <>
        
        <Header />

         <div className="img-logements"></div>

         <div className="content-logements">
              <h2 className="title-logements">{logement.title}</h2>

           <div className="content-log-deux">  
                 <div className="location-logements">{logement.location}</div>
                 <div className="rating-logements">****</div>
           </div>


        <div className="description-logements">
           <div className="barre-logements">
               <h3 className="barre-title">Description</h3>

               <div className="barre-content">
           </div>
           </div>

           <div className="barre-logements">
               <h3 className="barre-title">Equipements</h3>

               <div className="barre-content">
                
            </div>
        </div>


        </div>


         </div>

        <Footer />

        </>
 )
}


export default Logements