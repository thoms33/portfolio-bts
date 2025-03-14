import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Icône du menu burger (visible uniquement sur mobile) */}
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Liste des liens */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
        <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Mon Profil</Link></li>
        <li><Link to="/veille" onClick={() => setMenuOpen(false)}>Veille Technologique</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projets</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
