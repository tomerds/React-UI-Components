import './App.css';

import React from 'react';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <div className="display">
        <CalculatorDisplay total="0" />
      </div>
      <div className="buttons">
        <div className="button-tiles">
          <ActionButton buttonStyle="clear" text="clear" />
          <div className="button-numbers">
            <NumberButton buttonStyle="nine number" text="9" />
            <NumberButton buttonStyle="eight number" text="8" />
            <NumberButton buttonStyle="seven number" text="7" />
            <NumberButton buttonStyle="six number" text="6" />
            <NumberButton buttonStyle="five number" text="5" />
            <NumberButton buttonStyle="four number" text="4" />
            <NumberButton buttonStyle="three number" text="3" />
            <NumberButton buttonStyle="two number" text="2" />
            <NumberButton buttonStyle="one number" text="1" />
          </div>
          <ActionButton buttonStyle="zero" text="0" />
        </div>
        <div className="button-actions">
          <ActionButton buttonStyle="% action" text="&divide;" />
          <ActionButton buttonStyle="x action" text="x" />
          <ActionButton buttonStyle="- action" text="-" />
          <ActionButton buttonStyle="+ action" text="+" />
          <ActionButton buttonStyle="= action" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
