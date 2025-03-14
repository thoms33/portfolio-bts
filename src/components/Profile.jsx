import { useEffect } from "react";
import "../styles/Profile.css";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0); // Force l'affichage en haut au chargement de la page
  }, []);

  return (
    <div className="profile-container">
      <h1>Mon Profil - Tableau de Synthèse</h1>

      <div className="pdf-container">
        <iframe 
          src="/tableau_synthese.pdf" 
          width="100%" 
          height="600px"
          title="Tableau de Synthèse - E4"
        ></iframe>
      </div>

      <div className="explanations">
        <h2>🔎 Explication des cases vertes</h2>

        <div className="explanation-card">
          <h3>📌 Réalisations en milieu professionnel - Première année</h3>
          <p>
            Durant la première année de mon alternance chez <strong>Optim.aize</strong>, j’ai eu l’opportunité 
            de mettre en pratique plusieurs compétences essentielles :
          </p>
          <ul>
            <li>
              ✅ <strong>Répondre aux incidents et aux demandes d’assistance :</strong> J’ai participé activement à la 
              <strong> collecte, au suivi et à l’orientation des demandes</strong>, notamment en analysant et traitant 
              les bugs des applications utilisées par l’entreprise.
            </li>
            <li>
              ✅ <strong>Travailler en mode projet :</strong> J’ai été impliqué dans l’<strong>analyse des objectifs et 
              la planification des activités</strong> au sein des projets de développement d’un SaaS.
            </li>
            <li>
              ✅ <strong>Organiser son développement professionnel :</strong> J’ai renforcé mes compétences en 
              mettant en place un <strong>environnement d’apprentissage personnel</strong> et en réalisant 
              une veille technologique sur les frameworks modernes.
            </li>
          </ul>
        </div>

        <div className="explanation-card">
          <h3>📌 Réalisations en milieu professionnel - Seconde année</h3>
          <p>
            Lors de ma seconde année, mes responsabilités ont évolué, me permettant d’acquérir plus 
            d’autonomie et d’expertise sur des missions complexes :
          </p>
          <ul>
            <li>
              ✅ <strong>Développer la présence en ligne de l’organisation :</strong> J’ai été chargé d’<strong>optimiser le 
              référencement et la visibilité des services en ligne</strong> d’Optim.aize, en cherchant les meilleurs moyens de mettre en production le SaaS et en améliorant l’UX.
            </li>
            <li>
              ✅ <strong>Travailler en mode projet :</strong> J’ai participé activement à la <strong>planification 
              et au suivi des indicateurs de performance</strong> du projet SaaS.
            </li>
            <li>
              ✅ <strong>Mettre à disposition des utilisateurs un service informatique :</strong> J’ai réalisé des 
              <strong> tests d’intégration et d’acceptation</strong> avant le déploiement d’une nouvelle fonctionnalité 
              majeure sur l’application web de l’entreprise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
