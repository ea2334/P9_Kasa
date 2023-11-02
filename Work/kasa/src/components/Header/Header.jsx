import { Link } from "react-router-dom"
import Logo from "../../assets/images/LOGO.png"
import Banner from "../../components/Banner/Banner"


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

  </header>
    )
}

export default Header 



