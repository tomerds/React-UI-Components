import './Card.css';

import React from 'react';

import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
  return (
    <div className="card-container" href="https://www.reactjs.org">
      <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;