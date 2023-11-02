import Logofooter from "../../assets/images/logofooter.png"


function Footer() {
    return (
      <footer className="footer">

         <div className="footer-content">
             <img src={Logofooter} alt="Logo Kasa" />
             <div className="textfooter">© 2020 Kasa. All rights reserved</div>
         </div>

      </footer>
    );
  }
  
  export default Footer;  