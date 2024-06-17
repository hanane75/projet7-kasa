import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/propos";
import Acceuil from "./pages/acceuil";
import FichLogement from "./pages/logement";
import NoPage from "./pages/page-erreur";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Acceuil />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
    
  );
};

export default App;