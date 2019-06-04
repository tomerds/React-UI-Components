import './Display.css';

import React from 'react';


const CalculatorDisplay = (props) => {
  return (
    <div className="display-number">{props.total}</div>
  );
};

export default CalculatorDisplay;