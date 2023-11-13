import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Bannerabout from "../../components/Banner/Bannerabout"
import Fiabilite from "../../components/AboutBarre/Fiabilite"
import Respect from "../../components/AboutBarre/Respect"
import Service from "../../components/AboutBarre/Service"
import Security from "../../components/AboutBarre/Security"


function About(){
    return(
        <>
        <Header />
        <Bannerabout />
        
        <Fiabilite />
        <Respect />
        <Service />
        <Security />
       

        <Footer />
        </>
        
    )
}


export default About