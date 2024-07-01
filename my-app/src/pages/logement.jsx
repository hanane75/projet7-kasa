import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Header from '../components/Header';
import Carousel from '../components/Carousel'; 
import CollapseItem from "../components/CollapseItem";
import Footer from '../components/footer';
const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = data.find((item) => item.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) return <div>Chargement...</div>;

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
            <p>{logement.host.name}</p>
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
        <div>
          <CollapseItem  title="Description">
            {logement.description}
          </CollapseItem>
        </div>
        <div>
          <CollapseItem    title="Équipements">
            {logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </CollapseItem>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Logement;
