
import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Acceuil from "./pages/Accueil";
import Propos from "./pages/propos";
import Logement from "./pages/logement";
import Erreur from "./pages/page-erreur";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Acceuil />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

