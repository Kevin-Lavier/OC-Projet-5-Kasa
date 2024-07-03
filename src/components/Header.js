import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
