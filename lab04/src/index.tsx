import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Zad01 } from './Zad01/Zad01';
import { Zad02 } from './Zad02/Zad02';
import { Zad04 } from './Zad04/Zad04';
import reportWebVitals from './reportWebVitals';
import { Zad06 } from './Zad06/Zad06';
import { Zad09 } from './Zad09/Zad09';
import { Zad11 } from './Zad011/Zad11';
import { Zad14 } from './Zad14/Zad14';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Zad01 />
    <br></br>
    <Zad02 />
    <br></br>
    <Zad04 />
    <br></br>
    <Zad06 />
    <br/>
    <Zad09 />
    <br />
    <Zad11 />
    <br/>
    <Zad14></Zad14>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
