import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"



function Error(){
    return(
        <>
        <Header />

            <div className="errorpage">
         
               <div className="numero-error">404</div>
               <div className="message-error">Oups! La page que vous demandez n'existe pas.</div>
               <Link to="/">Retourner sur la page d'accueil</Link>




            </div>


        <Footer />
        </>
        
    )
}


export default Error