import { fromEvent } from "rxjs"
import { tap } from "rxjs/operators"

import {base1} from './zad1'
import {base2} from './zad2'
import {base3} from './zad3'
import {base4} from './zad4'
import {base5} from './zad5'
import {base6} from './zad6'
import {Subject} from './zad7_rx'

function main(){
    let tablica_liczb: number[] = [1,2,3,4,5,6,7,8,9];
    let tablica_string: string[] = ["Ala", "1", "Ewa", "12.4"];
    const suma = base1();
    const suma_parz = base2();
    const sum_upper = base3(tablica_liczb, 4);
    const greaterThen = base4(tablica_liczb, 5);
    const curry2 = base5(tablica_liczb, 5);
    const reduceString = base6(tablica_string);

    var subject = new Subject("info1")
    let button = document.querySelector("button");

    fromEvent(button, "click").pipe(tap(x => console.log("Klik!"))).subscribe(subject)
}

main()