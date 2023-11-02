import { Link } from "react-router-dom"
import Logo from "../../assets/images/LOGO.png"

function Header(){
    return(
        <header className="header">
      <img src={Logo} alt="Logo Kasa" />
      <nav className="menu">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
    )
}

export default Header 



