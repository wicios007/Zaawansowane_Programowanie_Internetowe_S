import {base1} from './zad1'
import {base2} from './zad2'
import {base3} from './zad3'
import {base4} from './zad4'

function main(){
    let tablica_liczb: number[] = [1,2,3,4,5,6,7,8,9];
    const suma = base1();
    const suma_parz = base2();
    const sum_upper = base3(tablica_liczb, 4);
    const greaterThen = base4(tablica_liczb, 5)
}

main()