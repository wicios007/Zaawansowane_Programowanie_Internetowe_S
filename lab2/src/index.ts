// ZAD 1

let tab: number[] = [2,3,4,8,9,16,27,32];
console.log(tab)

function suma(arr: number[])
{
    return arr.reduce((a, b) => a + b);
}

console.log("Zad 1:");
console.log("Suma: "+suma(tab));

// ZAD 2

let parzyste = (cyfry : number[]) : number => cyfry.filter(n => n % 2 == 0).reduce((suma : number, n : number) => suma += n, 0)

console.log("Zad 2:");
console.log("Suma parzystych: " + parzyste(tab));

// ZAD 3

let zadanaLiczba = (cyfry : number[], a : number) : number => cyfry.filter(n => a < n).reduce((suma : number, n : number) => suma += n, 0)

console.log("Zad 3:");
console.log("Suma liczb większych od 20: "+zadanaLiczba(tab,20));

// ZAD 4

// ZAD 5

function curry2<T1, T2, T3>(fn:(arg1:T1,arg2:T2)=>T3)
{
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

// ZAD 6

let tab1: string[] = ["Ala", "2.6", "Ewa", "25.4"];
let liczbyString = (tab: String[]) => tab.filter(t => +t).map(Number).reduce((suma : number, n : number) => suma += n, 0)

console.log("Zad 6:")
console.log(tab1);
console.log(liczbyString(tab1))