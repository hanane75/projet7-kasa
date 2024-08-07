import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data/data.json';
import Header from '../components/Header';
import Carousel from '../components/Carousel'; 
import CollapseItem from "../components/CollapseItem";
import Footer from '../components/footer';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundLogement = data.find((item) => item.id === id);
    setLogement(foundLogement);
    setLoading(false); // Mettre à jour l'état de chargement après la recherche
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Afficher un message de chargement pendant la recherche
  }

  if (!logement) {
    return <Navigate to="/page-erreur" replace />;
  }
  const hostNameParts = logement.host.name.split(' ');
  return (
    <div>
      <Header />
      <div className="logement-container">
        <div className="carousel-container">
          <Carousel pictures={logement.pictures} />
        </div>
        <div className="logement-details">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="logement-info">
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className='hostdettail'>
              <div className="host">
              <p className="host-name">
                  {hostNameParts.map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                </p>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              </div>
              <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </div>
          </div>
          <div className='description'>
            <CollapseItem title="Description">
              {logement.description}
            </CollapseItem>
            <CollapseItem title="Équipements">
              {logement.equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            </CollapseItem>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
