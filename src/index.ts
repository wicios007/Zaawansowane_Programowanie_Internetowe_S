function hello() {
    console.log("Witaj w swiecie Typescript");
}

hello();

let tab: number[] = [3,5,7,9,11,2] 
console.log("Tablica")
console.log(tab)

console.log("==== Programowanie funkcyjne ====")

let suma = (numbers: number[]): number => numbers.reduce((sum: number, b: number) => sum += b, 0)
console.log("ZAD1. \nSuma")
console.log(suma(tab))

let filtrParzyste = (numbers: number[]): number[] => numbers.filter(num => num%2 == 0)
console.log("ZAD2. \nSuma parzystych")
console.log(suma(filtrParzyste(tab)))

console.log("ZAD3.")
let wiekszeOd = (numbers: number[], x: number): number[] => numbers.filter(num => num > x)
console.log(suma(wiekszeOd(tab,2)))

console.log("ZAD6.")

let tab6: string[] = ['Ala', '2', 'Ma', '3', '0.6', '7.97'] 
let filtrLiczba = (tab: string[]) => tab.filter(n => +n).map(Number)

console.log(filtrLiczba(tab6))
console.log(suma(filtrLiczba(tab6)))

console.log("==== RxJS ====")
