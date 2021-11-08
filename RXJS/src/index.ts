
import {from,filter,map} from 'rxjs'


let filtrWiekszeOd = (comparator:number, numbers:number[]): number[] => numbers.filter(n => n > comparator)
function filtrJedenParameter(comparator: number):   
    (numbers:number[]) => number[] {                
    return (numbers:number[]):number[] => {         
        return filtrWiekszeOd(comparator, numbers)  
    }
}
let sumaLiczb = (numbers:number[]):number => numbers.reduce((sum: number, b: number) => sum += b, 0)

    let array:number[]=[3,4,5,6,7,8];
    let array2:number[]=[5,4,7,6,9,8];
    let suma=0;
    let suma2=0;
    let suma5=0;
    let suma6=0;
    console.log(`filtr wieksze od : ${filtrWiekszeOd(3,array2)}`);
    array.map(e=>{
        suma+=e;
        return suma;
    })

    array.map(e=>{
        if(e%2==0){
        suma5+=e;
        return suma5;
    }
    })
        console.log(`Sumpa pierwsz array.map() :${suma}`);
        console.log(`Suma5 pierwsz array.map() tylko parzyste :${suma5}`);

    from(array2)
        .pipe(
            filter(v=> v%2==0),
        )
        .subscribe(v=>(suma2+=v));
        
    console.log(`Suma 2 from(array): ${suma2}`);

    let suma4 =0;
    
from(array2)
    .pipe(
        filter(v=> v > 3),
    )
    .subscribe(v=>(suma4+=v));
    
console.log(`Suma 4 from(array) Wieksze od danej liczby(3): ${suma4}`);


function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1) => (a2:T2) => fn(a1,a2)
}

let funkcjaJedenParametrCurry = curry2(filtrWiekszeOd)
let filtrJedenParametrCurry = funkcjaJedenParametrCurry(3)
console.log(`funkcja curry2: ${sumaLiczb(filtrJedenParametrCurry(array2))}`)

let wiekszeOd=filtrJedenParameter(3);

console.log(`Funkcja jeden parametr: ${sumaLiczb(wiekszeOd(array2))}`)

