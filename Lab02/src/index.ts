let array: number[] = [1,2,3,4,5,6,7,8,9]

let suma = (numbers:number[]):number => numbers.reduce((sum: number, b: number) => sum += b, 0)
let filtrParzyste = (numbers:number[]):number[] => numbers.filter(n => n%2 == 0) 
let filtrWiekszeOd = (comparator:number, numbers:number[]): number[] => numbers.filter(n => n > comparator)

function filtrJedenParameter(comparator: number):   //funkcja jeden parametr wejsciowy
    (numbers:number[]) => number[] {                //ktory zwraca funkcje ktora zwraca tablice liczb
    return (numbers:number[]):number[] => {         //deklaracja funkcji wewnetrznej
        return filtrWiekszeOd(comparator, numbers)  //cialo funkcji wewnetrznej
    }
}


//zad01
console.log(suma(array))
//zad02
console.log(filtrParzyste(array))
//zad03
console.log(suma(filtrParzyste(filtrWiekszeOd(3,array))))
//zad04
let wiekszeOd = filtrJedenParameter(5)
//wiekszeOd =  (comparator:number, numbers:number[]): number[] => numbers.filter(n => n > 5)
console.log(suma(filtrParzyste(wiekszeOd(array))))
//zad05
function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1) => (a2:T2) => fn(a1,a2)
}

let funkcjaJedenParametrCurry = curry2(filtrWiekszeOd)
let filtrJedenParametrCurry = funkcjaJedenParametrCurry(5)
console.log(suma(filtrParzyste(filtrJedenParametrCurry(array))))

//zad06

let stringArray: string[] = ["lorem ipsum", "1", "2", "lorem", "5", "7", "ipsum"]
let filterNumbersFromString = (stringArray: string[]) => stringArray.filter(n => +n).map(Number)
console.log(suma(filterNumbersFromString(stringArray)))
