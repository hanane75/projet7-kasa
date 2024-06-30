import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ id, title, image }) => {
  return (
    <NavLink to={`/logement/${id}`} className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title-overlay">
        <h3 className="card-title">{title}</h3>
      </div>
    </NavLink>
  );
};

export default Card;

