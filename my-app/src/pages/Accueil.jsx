import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import Cardlist from '../components/Cardlist';
import Footer from '../components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cardlist/>
      <Footer/>
    </div>
    
  );
};

export default App;