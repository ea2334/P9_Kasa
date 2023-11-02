import { Link } from "react-router-dom"
import Logo from "../../assets/images/LOGO.png"
import Banner from "../../assets/images/Banner.png"


function Header(){
    return(
  <header className="header">
    
        <div className="logo-menu">

            <img src={Logo} alt="Logo Kasa" />

            <nav className="menu">
              <Link to="/">Accueil</Link>
              <Link to="/a-propos">A Propos</Link>
            </nav>

        </div>

       <div className="banner-home">
            <img src={Banner} alt="Bannière" className="banner-image" />
       </div>

  </header>
    )
}

export default Header 



