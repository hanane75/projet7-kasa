import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../data/data.json';
import '../style/acceuil.css';

const CardList = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    // Charger les données JSON
    setCardsData(data);
  }, []);

  return ( 
    <div className="card-list">
      {cardsData.map((card) => (
       <Card 
       key={card.id}
       id={card.id} 
       title={card.title}
       image={card.cover} />
      ))}
    </div>
   
  );
};
export default CardList;
