import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Effet de flou/fondu */}

      <div className="content">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Découvrez mon parcours en BTS SIO et mes réalisations.</p>
      </div>

      <div className="info-section">
        <div className="info-card">
          <FontAwesomeIcon icon={faGraduationCap} className="info-icon" />
          <h2>Qu'est-ce que le BTS SIO ?</h2>
          <p>
            Le <strong>BTS Services Informatiques aux Organisations (SIO)</strong> est une formation en informatique 
            qui prépare aux métiers du numérique. Il se divise en deux options :
          </p>
          <ul>
            <li><strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) - Développement d'applications.</li>
            <li><strong>SISR</strong> (Solutions d’Infrastructure, Systèmes et Réseaux) - Gestion des infrastructures réseau.</li>
          </ul>
        </div>

        <div className="info-card">
          <FontAwesomeIcon icon={faFileAlt} className="info-icon" />
          <h2>Pourquoi ce portfolio ?</h2>
          <p>
            Ce portfolio a été réalisé dans le cadre de mon <strong>BTS SIO</strong> afin de 
            présenter mes compétences, mes projets et ma veille technologique. Il me permet 
            de mettre en avant mon savoir-faire en développement et en gestion de projet.
          </p>
        </div>

        <div className="info-card">
          <FontAwesomeIcon icon={faCode} className="info-icon" />
          <h2>Mon parcours</h2>
          <p>
            Passionné par le développement, j’ai acquis des compétences en <strong>JavaScript, PHP, Java </strong> 
            ainsi qu’en gestion des bases de données. Mon alternance m’a permis de travailler sur des 
            projets concrets et de développer des applications web performantes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
