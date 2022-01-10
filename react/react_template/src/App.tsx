import React, { useContext } from 'react';
import './App.css';
import { First } from './components/First';
import { Zad2 } from './components/Zad2';
import { Zad3 } from './components/Zad3';
import { Zad4 } from './components/Zad4';
import { Zad9_combined } from './components/Zad9_combined'
import { Zad11_combined } from './components/Zad11_combined'
import { Zad12_combined } from './components/Zad12_combined'
import { Zad16 } from './components/Zad16'
import { Zad17 } from './components/Zad17'
import { Zad18 } from './components/Zad18'
import { Api1 } from './components/Api1'

function App() {
  return (
    <div className="App">
      <First/>
      <Zad2/>
      <Zad3/>
      <Zad4/>
      <Zad9_combined/>
      <Zad11_combined/>
      <Zad12_combined/>
      <Zad16/>
      <Zad17/>
      <Zad18/>
      <Api1/>
    </div>
  );
}
export default App;
