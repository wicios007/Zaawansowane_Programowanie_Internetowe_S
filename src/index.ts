import{ Application } from "./application";
var table : number[] = [1,2,3,4,5,6,7,8,9]

let suma = (liczby : number[]) : number => liczby.reduce((suma : number, a : number) => suma += a, 0)
console.log("zad1 = " + suma(table));

let sumapar = (liczby: number[]) : number => liczby.filter(n => n%2 == 0).reduce((suma : number, a : number) => suma += a, 0) 
console.log("zad2 = " + sumapar(table));

let sumamax = (liczby: number[],b: number) : number => liczby.filter(n => n > b).reduce((suma: number, a : number) => suma +=a, 0) 
console.log("zad3 = " + sumamax(table,3))

let filtrGreaterThen = (comp: number, numbers:number[]) : number[] => numbers.filter(n => n > comp)

let filtrEven = (numbers:number[]) : number[] => numbers.filter(n => n%2 == 0)

function filtrJedenParam(comp : number) : (numbers : number[]) => number[]{
    return (numbers : number[]) : number[] => {
        return filtrGreaterThen(comp, numbers)
    }
}
let GreaterThen = filtrJedenParam(3)

console.log("zad4 = " + suma(filtrEven(GreaterThen(table))))

function  curry2<T1,T2,T3>(fn:(arg1:T1, arg2:T2)=>T3){
    return(a1:T1)=>(a2:T2)=>fn(a1,a2);
}
let funJedenParamCurry = curry2(filtrGreaterThen)
let filtrJedenParamCurry = funJedenParamCurry(3)
console.log("zad5 = " +suma(filtrEven(filtrJedenParamCurry(table))))

var strtable : string[] = ["Ala", "1", "Ewa", "12.4"]

