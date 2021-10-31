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



