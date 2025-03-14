import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/profile">Mon Profil</Link></li>
        <li><Link to="/veille">Veille Technologique</Link></li>
        <li><Link to="/projects">Projets</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
