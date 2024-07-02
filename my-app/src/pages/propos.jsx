import React from "react";
import Header from "../components/Header";
import CollapseItem from "../components/CollapseItem";
import Footer from '../components/footer';


const Propos = () => {
  return (
    <div>
      <Header />
      <main >
        <img src="imgpropo.png" alt="Banner" className="bannier" />
        <div className="valeurs">
        <CollapseItem title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </CollapseItem>
        <CollapseItem title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </CollapseItem>
        <CollapseItem title="Service">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </CollapseItem>
        <CollapseItem title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </CollapseItem>
        </div>
      </main>
      <Footer/>
    </div>
    
  );
};




export default Propos;