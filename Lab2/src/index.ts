// Zadanie 1
let Tablica: number[] = [2,3,6,7,12,54,2,1,2,1,9];

function suma(Tab: number[]) {
    return Tab.reduce((a, b) => a + b, 0);
}

console.log(suma(Tablica));

// Zadanie 1 inne
let sum = (numbers: number[]):number => numbers.reduce((sum: number, b: number) => sum+=b)
console.log(sum(Tablica));


// Zadanie 2
let filter = (numbers: number[]):number[] => numbers.filter(n => n%2 == 0);
console.log(sum(filter(Tablica)));

// Zadanie 3
let filter2 = (comparator: number, numbers: number[]):number[] => numbers.filter(n => n > comparator);
console.log(sum(filter(filter2(5,Tablica))));

// Zadanie 4
function oneParameter(comparator: number):
    (numbers: number[]) => number[]{
        return (numbers: number[]):number[] => {
            return filter2(comparator,numbers)
        }
    }

let wiekszyOd = oneParameter(4)

console.log(sum(filter(wiekszyOd(Tablica))));

// Zadanie 5
function curry2<T1, T2, T3>(fun: (arg1: T1, arg2: T2) => T3){
    return (a1:T1) => (a2:T2) => fun(a1,a2)
}

// Zadanie 6
let tab: string[] = ["Ala", "1","Ewa","12.4"]
let calculate = (stringTab: string[]) => stringTab.filter(n => +n).map(Number)
console.log(sum(calculate(tab)))