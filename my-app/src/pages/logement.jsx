import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';


const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    console.log("ID from URL:", id);  // Log the ID to check if it's correct
    const foundLogement = data.find((item) => item.id === id);
    console.log("Found Logement:", foundLogement);  // Log the found logement data
    setLogement(foundLogement);
  }, [id]);

  if (!logement) return <div>Chargement...</div>;

  return (
    <div className="logement-container">
      <header className="logement-header">
        {/* Ajoutez votre composant Header ici */}
      </header>
      <div className="carousel">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${logement.title} - ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <div className="logement-details">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="description">{logement.description}</div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
        <div className="equipments">
          {logement.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logement;
