import React from "react";
import Header from "../components/Header";
import CollapseItem from "../components/CollapseItem";
import Footer from '../components/footer';


const Propos = () => {
  return (
    <div>
      <Header />
      <main>
        <img src="imgpropo.png" alt="Banner" className="bannier" />
        <CollapseItem title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </CollapseItem>
        <CollapseItem title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </CollapseItem>
        <CollapseItem title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter pour toute question ou besoin spécifique.</p>
        </CollapseItem>
        <CollapseItem title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Nos logements respectent les normes de sécurité en vigueur pour vous assurer un séjour serein.</p>
        </CollapseItem>
      </main>
      <Footer/>
    </div>
    
  );
};

export default Propos;