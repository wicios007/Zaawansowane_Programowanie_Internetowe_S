//zad1

let tablica: number[] = [1,2,3,4,5,6,7,8,9];
console.log(tablica)

function suma(arr: number[]){
 return arr.reduce((a, b) => a + b);

}

console.log("Zadanie 1 = "+suma(tablica))



//zad2
let parzyste = (cyfry : number[]) : number => cyfry.filter(l => l % 2 == 0).reduce((suma : number, l : number) => suma += l, 0)
console.log("Zadanie 2 = " + parzyste(tablica));

//zad3

let zadane = (cyfry : number[], b : number) : number => cyfry.filter(l => b > l).reduce((suma : number, l : number) => suma += l, 0)
console.log("Zadanie 3 = "+ zadane(tablica, 4));

//zad4
function greaterThen(cyfry : number[],b : number)
{
    number => cyfry.filter(l => b > 1)
    console.log("ta")
    
}

//let zadanie4 = (cyfry : number[], b : number) : number => cyfry.reduce(greaterThen(tablica,6) => suma += l, 0)

//zad5
function curryy2<T1, T2, T3>(fn:(arg1:T1,arg2:T2)=>T3){
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

//zad6
let tablica1: string[] = ["Ala", "1", "Ewa", "12.4"];
console.log(tablica1) 
let liczbyzstringow = (tab: String[]) => tab.filter(t => +t).map(Number).reduce((suma : number, l : number) => suma += l, 0)
console.log("Zadanie 6 = "+ liczbyzstringow(tablica1)) 
