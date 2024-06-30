import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Header from '../components/Header';
import Carousel from '../components/Carousel'; 
import CollapseItem from "../components/CollapseItem";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    console.log("ID from URL:", id);  
    const foundLogement = data.find((item) => item.id === id);
    console.log("Found Logement:", foundLogement); 
    setLogement(foundLogement);
  }, [id]);

  if (!logement) return <div>Chargement...</div>;

  return (
    <div className="logement-container">
      <header className="logement-header">
        <Header />
      </header>
      <div className="carousel-container">
        <Carousel pictures={logement.pictures} />
      </div>
      <div className="logement-details">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
           <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
        </div>
        
       
        
        <div className="description">
        <CollapseItem title="description">
        {logement.description}
          </CollapseItem>
        </div>
        <div className="equipments">
        <CollapseItem title="equipments">
        {logement.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
          </CollapseItem>
         
        </div>
      </div>
    </div>
  );
};

export default Logement;
