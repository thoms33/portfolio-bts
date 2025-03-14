import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faVuejs, faAngular } from "@fortawesome/free-brands-svg-icons";
import "../styles/TechWatch.css";

function TechWatch() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const rssFeeds = [
    "https://www.google.fr/alerts/feeds/14148790663251920250/9913688516571789245",
    "https://www.google.fr/alerts/feeds/14148790663251920250/10259833868496875822",
    "https://www.google.fr/alerts/feeds/14148790663251920250/8262204178463216883",
    "https://www.google.fr/alerts/feeds/14148790663251920250/3224840810273665781",
    "https://www.google.fr/alerts/feeds/14148790663251920250/9493602093939436005"
  ];

  useEffect(() => {
    async function fetchAllFeeds() {
      let allArticles = [];
      setLoading(true);

      for (const feedUrl of rssFeeds) {
        try {
          const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`);
          const data = await response.json();

          const parser = new DOMParser();
          const xml = parser.parseFromString(data.contents, "text/xml");

          const items = xml.querySelectorAll("item");
          items.forEach((item) => {
            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;
            const pubDate = item.querySelector("pubDate")?.textContent;

            if (title && link) {
              allArticles.push({
                title,
                link,
                pubDate: pubDate ? new Date(pubDate).toLocaleDateString() : "Date inconnue",
              });
            }
          });
        } catch (error) {
          console.error("Erreur lors de la récupération du flux RSS", error);
        }
      }

      allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      setArticles(allArticles);
      setLoading(false);
    }

    fetchAllFeeds();
  }, []);

  const frameworks = [
    {
      name: "React.js",
      description: "React est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur dynamiques et performantes.",
      image: "src/assets/react.svg",
    },
    {
      name: "Vue.js",
      description: "Vue.js est un framework progressif permettant de créer des applications web interactives et légères.",
      image: "src/assets/Vue.js.svg",
    },
    {
      name: "Angular",
      description: "Angular est un framework complet développé par Google pour la création d’applications web robustes et évolutives.",
      image: "src/assets/Angular.svg",
    },
    {
      name: "Svelte",
      description: "Svelte est un framework moderne permettant de compiler le code en JavaScript optimisé pour un rendu ultra rapide.",
      image: "/src/assets/Svelte.svg", 
    },
  ];

  return (
    <div className="techwatch-container">
      <h1>Veille Technologique</h1>
      <p>Les dernières actualités sur les frameworks.</p>

      {loading ? (
        <p className="loading">Chargement des articles...</p>
      ) : articles.length === 0 ? (
        <p className="no-articles">Aucune nouvelle alerte pour le moment.</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.pubDate}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Les Principaux Frameworks Front-End</h2>
      <p>Découvrez les frameworks les plus populaires utilisés par les développeurs web.</p>

      <div className="frameworks-grid">
        {frameworks.map((fw, index) => (
          <div key={index} className="framework-card">
            <FontAwesomeIcon icon={fw.icon} className="framework-icon" />
            <img src={fw.image} alt={fw.name} className="framework-image" />
            <h3>{fw.name}</h3>
            <p>{fw.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechWatch;
