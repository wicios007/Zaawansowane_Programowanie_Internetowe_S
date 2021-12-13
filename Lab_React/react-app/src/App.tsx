import React from 'react';
import logo from './logo.svg';
import './App.css';
import Zad1  from './components/zad1/zad1';
import Zad2 from './components/zad2/zad2';
import Zad3 from './components/zad3/zad3';
import Zad4 from './components/zad4/zad4';
import Zad5 from './components/zad5/zad5';

function App() {
  return (
    <div className="App">
      <Zad1/>
      <hr></hr>
      <Zad2/>
      <hr></hr>
      <Zad3/>
      <hr></hr>
      <Zad4/>
      <hr></hr>
      <Zad5/>
    </div>
  );
}

export default App;
