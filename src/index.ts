import { interval } from "rxjs";
import { filter, map, tap, switchMap } from "rxjs/operators";
import { fromEvent, merge } from "rxjs";

//zad1

let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumAll = arr => arr.reduce((a, b) => a+b);

console.log(sumAll(sum));

//zad 2

const sumParzyste = arr => arr.filter(e =>!(e%2)).reduce((a, b) => a+b);

console.log(sumParzyste(sum));

//zad 3

const sumWieksze = (arr, x) => arr.filter(e =>(e>x)).reduce((a, b) => a+b);

console.log(sumWieksze(sum, 3));

//zad 4
const greaterThan = x => e =>(e>x)

const sumWieksze2 = (arr, x) => arr.filter(greaterThan(x)).reduce((a,b)=> a+b)

console.log(sumWieksze2(sum, 7));

//zad 5

//zad 6

let string = ["Ala", "1", "Ewa", "12.4"];
const sumString = arr => arr.filter(e => !(isNaN(e))).map(i=>Number(i)).reduce((a, b) => a+b);
console.log(sumString(string));


//zad 7

let button = document.querySelector('.button-increase');
let text = document.querySelector('.paragraph');
var clicks$ = Rx.Observable
  .fromEvent(button, 'click');

clicks$.subscribe(e => {
  console.log('increase count');
  text.innerText = parseInt(text.innerHTML)+1;
});