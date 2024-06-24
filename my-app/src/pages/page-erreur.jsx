import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";


const Erreur = () => {
  return (
    <div>
      <Header />
      <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/Accueil"className="link">Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer></Footer>
      </div>
      );
      };
      export default Erreur;