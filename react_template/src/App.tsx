import React from 'react';
import logo from './logo.svg';
import './App.css';

function changep() {
  this.name = "Ela";
  
}

function App() {
  return (
    <div className="App">
      <p>{this.name}</p>
      <button onClick={changep}>Kliknij</button>
    </div>
  );
}

export default App;
