var table : number[] = [1,2,3,4,5,6,7,8,9]

//zad1
let suma = (liczby : number[]) : number => liczby.reduce((suma : number, a : number) => suma += a, 0)
console.log("zad1 = " + suma(table));

//zad2
let parzyste = (liczby : number[]) : number => liczby.filter(n => n%2 == 0).reduce((suma : number, a : number) => suma += a, 0)
console.log("zad2 = " + parzyste(table));

//zad3
let wieksze = (liczby : number[], b : number) : number => liczby.filter(n => n > b).reduce((suma : number, a : number) => suma += a, 0)
console.log("zad3 = " + wieksze(table, 5))

//zad4
let filtrWiekszaOd = (comp : number, numbers : number[]) : number[] => numbers.filter(n => n > comp)

let filtrParzyste = (numbers : number[]) : number[] => numbers.filter(n => n%2 == 0)

function filtrJedenParam(comp : number) : (numbers : number[]) => number[]{
    return (numbers : number[]) : number[] => {
        return filtrWiekszaOd(comp, numbers)
    }
}
let wiekszeOd = filtrJedenParam(3)

console.log("zad4 = " + suma(filtrParzyste(wiekszeOd(table))))


//zad5

function curry2<T1,T2,T3>(fn:(arg1:T1, arg2:T2) => T3){
    return (a1:T1) => (a2:T2) => fn(a1,a2)
}

let funJedenParamCurry = curry2(filtrWiekszaOd)
let filtrJedenParamCurry = funJedenParamCurry(3)
console.log("zad5 = " +suma(filtrParzyste(filtrJedenParamCurry(table))))


//zad6

let stringArray : String[] = ["asdaf", "qwerty", "1", "zxcvb", "2", "7", "hoho", "2fdsa"]

let filtrLiczbZTablicy = (array : String[]) => array.filter(n => +n).map(Number)

console.log("zad6 = " + suma(filtrLiczbZTablicy(stringArray)))









