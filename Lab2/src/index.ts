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
let filter2 = (numbers: number[]):number[] => numbers.filter(n => n > 5);
console.log(sum(filter(filter2(Tablica))));

// Zadanie 4
let wiekszyOd = function (digit: number): (numbers:number[]) => number[] {
    return (numbers: number[]){
        (numbers, digit): number[] => numbers.filter(n => n > digit);
}

console.log(sum(filter(wiekszyOd(Tablica,7))));