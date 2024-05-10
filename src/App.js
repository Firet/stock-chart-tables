import React from 'react';
import  Chart   from './chart';
import FetchStockValues  from './fetch/fetchStockValues';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is app.js
        </p>
      </header>
      <FetchStockValues />
      <Chart />
    </div>
  );
}

export default App;
