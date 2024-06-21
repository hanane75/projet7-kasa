// src/components/CardList/CardList.jsx
import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../data/data.json';
import { NavLink } from 'react-router-dom';
import '../style/acceuil.css';

const CardList = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Charger les données JSON
    setCardsData(data);
  }, []);

  return (
    <NavLink to="/propos">
    <div className="card-list">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.cover}
        />
      ))}
    </div>
    </NavLink>
  );
};

export default CardList;
