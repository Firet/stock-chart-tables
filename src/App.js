import React from 'react';
import  Chart   from './chart';
import FetchStockValues  from './fetch/fetchStockValues';
import './App.css';

function App() {
  return (
    <div className="App">
      <FetchStockValues />
      <div className="chart-container">
        <Chart />
      </div>
    </div>
  );
}

export default App;
