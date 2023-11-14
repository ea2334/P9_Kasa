import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Logements(){
    return (

        <>
        
        <Header />

         <div className="img-logements"></div>

         <div className="content-logements">
              <h2 className="title-logements">Titre</h2>

           <div className="content-log-deux">  
                 <div className="location-logements">Paris</div>
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