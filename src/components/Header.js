import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo_kasa_black.svg";

const Header = () => (
  <header className="header">
    <img src={logo} alt="logo Kasa black" />
    <nav>
      <ul className="header-nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
