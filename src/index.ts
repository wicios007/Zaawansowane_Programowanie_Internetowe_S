let tablica1 = [3,5,7,9,11,2];

let zadanie1: (tablica: number[]) => number;

zadanie1 = function(tablica: number[]): number
{
  let suma: number = 0;
  tablica.forEach(element => {
    suma += element;
  });
  return suma;
}

console.log("---------zad1-----------");
console.log(zadanie1(tablica1));


let zadanie2: (tablica: number[]) => number;

zadanie2 = function(tablica: number[]): number
{
  let suma: number = 0;
  
  tablica.forEach(element => {
    if (element % 2 == 0){
    suma += element;
    }
  });
  return suma
}

console.log("---------zad2-----------");
console.log(zadanie2(tablica1));


let zadanaLiczba = 8;
let zadanie3: (tablica: number[], zadanaLiczba: number) => number;

zadanie3 = function(tablica: number[], zadanaLiczba: number): number
{
  let suma: number = 0;
  
  tablica.forEach(element => {
    if (element > zadanaLiczba){
    suma += element;
    }
  });
  return suma
}

console.log("---------zad3-----------");
console.log(zadanie3(tablica1, zadanaLiczba));


let wiekszeOd:(zadanaLiczba: number, element: number) => boolean;

wiekszeOd = function(zadanaLiczba: number, element:number): boolean {
  let wynikSprawdzenia = false;
  if(element>zadanaLiczba){
    wynikSprawdzenia = true
  }
  return true;
}

let zadanie4:(tablica: number[], zadanaLiczba: number) => number;

zadanie4 = function(tablica: number[], zadanaLiczba: number): number
{
  let suma: number = 0;
  
  tablica.forEach(element => {
    if (wiekszeOd(zadanaLiczba, element) == true){
    suma += element;
    }
  });
  return suma
}

console.log("---------zad4-----------");
console.log(zadanie4(tablica1, zadanaLiczba));

function zadanie5curring<T1, T2, T3>(fn: (arg1:T1, arg2:T2) =>T3){
  return (a1:T1) => (a2:T2) => fn(a1,a2);
}

function getValueIfGreaterThan(val: number, greaterVale: number): number {
  return val > greaterVale ? val : 0;
}

function zadanie5() {
  const array = [1,2,3,4,2,1,2,3,10];
  let sum = 0;

  array.forEach(x => sum += zadanie5curring(getValueIfGreaterThan)(x)(3));
  return sum;
}

console.log("---------zad5-----------");
console.log(zadanie5());

let tablica2 = ["Ala", "1", "Ewa", "12.4"];


let zadanie6:(tablica: string[]) => number;

zadanie6 = function(tablica: string[]): number
{
  let suma: number = 0;
  tablica.forEach(element =>{
    suma += parseFloat(element) || 0;
  });
  return suma;
}

console.log("---------zad6-----------");
console.log(zadanie6(tablica2));


