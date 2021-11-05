import { filter, map, single } from "rxjs";

function hello() {
  console.log("Witaj w swiecie Typescript.");
}

hello();

let array : number[] = [1, 2, 3, 4, 5];

let mojaLiczba : number = 3;

let stringArray : string[] = ["Ala","1","Ewa","12.4"];

let Zadanie1: (array: number[]) => number;

Zadanie1 = function (array): number {
  let suma = 0;
  array.forEach((element) => {
    suma = suma + element;
  });
  return suma;
};

console.log("Wynik działania zadania 1 :" + Zadanie1(array));

let Zadanie2: (array: number[]) => number;

Zadanie2 = function (array): number {
  let suma = 0;
  array.map((i) => {
    if (i % 2 == 0) suma = suma + i;
  });
  return suma;
};

console.log("Wynik działania zadania 2 :" + Zadanie2(array));

let Zadanie3: (array: number[]) => number;

Zadanie3 = function (array): number {
  let suma = 0;
  array.map((i) => {
    if (i > mojaLiczba) suma = suma + i;
  });
  return suma;
};

console.log("Wynik działania zadania 3:" + Zadanie3(array));

let Zadanie4: (array: number[]) => number;
let greatherThan: (i: number) => Boolean;

greatherThan = function (i): Boolean {
  if (i > mojaLiczba) {
    return true;
  } else return false;
};

Zadanie4 = function (array): number {
  let suma = 0;
  array.map((i) => {
    if (greatherThan(i)) suma = suma + i;
  });
  return suma;
};

console.log("Wynik działania zadania 4:" + Zadanie4(array));

let Zadanie5: (array: number[]) => number;

function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
  return (a1: T1) => (a2: T2) => fn(a1, a2);
}

function greatherThan_(x, y) {
  return x < y;
}

Zadanie5 = function (array): number {
  let suma = 0;
  array.map((i) => {
    if (curry2(greatherThan_)(mojaLiczba)(i)) suma = suma + i;
  });
  return suma;
};

console.log("Wynik działania zadania 5:" + Zadanie5(array));

let Zadanie6: (array:string[]) => number;

// Zadanie6 = function (array):number{
//     let suma=0;
//     array.filter(i=>if{i instanceof number})
// }