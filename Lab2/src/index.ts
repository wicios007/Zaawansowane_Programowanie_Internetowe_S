import { from } from "rxjs";
import { scan,map } from "rxjs/operators"


let numbers = [1,4,3,6,7,4]

//zad1
from(numbers)
    .pipe(scan((acc,curr) => acc+curr, 0))
    .subscribe(val => console.log(val))

let sumuj = (tablica:number[]) => tablica.reduce((acc, curr) => acc + curr, 0)
console.log(sumuj(numbers))

//zad2
from(numbers)
    .pipe(
        map(val => {if(val%2==0) return val;else return 0}),
        scan((acc,curr) => acc+curr, 0))
    .subscribe(val => console.log(val))


//zad3
from(numbers)
    .pipe(
        map(val => {if(val > 5) return val;else return 0}),
        scan((acc,curr) => acc+curr, 0))
    .subscribe(val => console.log(val))

//zad4
function wiekszaOd(val, val2){
    if(val > val2) return val;
    else return 0;
}

from(numbers)
    .pipe(
        map(val => wiekszaOd(val, 3)),
        scan((acc,curr) => acc+curr, 0))
    .subscribe(val => console.log(val))