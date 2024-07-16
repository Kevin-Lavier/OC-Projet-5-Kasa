import "./Footer.scss";
import logo from "../../assets/logo_kasa_white.svg";

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="logo Kasa white" />
    <p>&copy; 2024 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
