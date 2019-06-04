import './App.css';

import React from 'react';

import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';


const App = () => {
  return (
    <div id="app">
      <div className="content">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
