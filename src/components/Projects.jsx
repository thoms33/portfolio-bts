import { useState, useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0); // S'assure que la page s'affiche depuis le haut
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { 
      name: "M2L", 
      description: "Développement de la partie Responsable de Formation.", 
      image: "/m2l_placeholder.jpg"
    },
    { 
      name: "BioRelais", 
      description: "Développement de la partie Client.", 
      image: "/biorelais_placeholder.jpg"
    },
    { 
      name: "Application Android Studio", 
      description: "Développement d’une application mobile.", 
      image: "/android_placeholder.jpg"
    }
  ];

  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>
      <p>Voici les différents projets que j'ai réalisés durant ma formation.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div 
              className="project-image-container"
              onMouseEnter={() => setSelectedImage(project.image)}
              onMouseLeave={() => setSelectedImage(null)}
            >
              <img src={project.image} alt={project.name} className="project-image"/>
            </div>
          </div>
        ))}
      </div>

      {/* Affichage de l'image en grand si sélectionnée */}
      {selectedImage && (
        <div className="fullscreen-image-container" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Projet en grand" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}

export default Projects;
