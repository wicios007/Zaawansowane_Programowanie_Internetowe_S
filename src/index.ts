<<<<<<< HEAD
function zad1(){
    const array = [1,2,3,4,2,1,2,3];
    return array.reduce((acc, val) => {
        acc += val;
        return acc;
    })
}

function zad2(){
    const array = [1,2,3,4,2,1,2,3];
    return array.reduce((acc, val, index) => {
        if (index === 1 && acc%2 !== 0) {
            acc = 0;
        }
        acc += val%2 === 0 ? val : 0;
        return acc;
    })
}

function zad3(number: number){
    const array = [1,2,3,4,2,1,2,3];
    return array.reduce((acc, val, index) => {
        if (index === 1 && acc <= number) {
            acc = 0;
        }
        acc += val > number ? val : 0;
        return acc;
    })
}

function zad4(number: number){
    const array = [1,2,3,4,2,1,2,3];

    const wiekszaOd = (number: number, value: number) => {
        return number < value;
    }

    const filter = array.filter(x => wiekszaOd(number, x)).reduce((acc, val) => {
        acc += val;
        return acc;
    })
    
    return filter;
}

function zad5curring<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3){
    return (a1: T1) => (a2: T2) => fn(a1,a2);
}

function getValueIfGreaterThan(val: number, greaterVale: number): number {
    return val > greaterVale ? val : 0;
}

function zad5() {
    const array = [1,2,3,4,2,1,2,3,10];
    let sum = 0;

    array.forEach(x => sum += zad5curring(getValueIfGreaterThan)(x)(3));
    return sum;
}


function zad6() {
    const getNumber = (str: string) =>  +str || 0;

    const tab = ["21", "151", "31", "te", "Kuba"];
    let sum = 0;
    tab.forEach(x => sum += getNumber(x));
    return sum;
}


function main() {
    console.log('--zad1--', zad1());
    console.log('--zad2--', zad2());
    console.log('--zad3--', zad3(3));
    console.log('--zad4--', zad4(3));
    console.log('--zad5--', zad5());
    console.log('--zad6--', zad6());

    const array = [1,2,3,4,2,1,2,3];
}


main();
=======
import { Zad5_6_7 } from './zad5_6_7';
import DataFetcher, { HTMLListData, HtmlTableData, JSONData } from './data-fetcher';
import { Zad8 } from './zad8';

function main() {
    // const zad4 = new Zad4();
    // const zad5_6_7 = new Zad5_6_7();
    const zad8 = new Zad8();
}


main();
>>>>>>> 2f09791e04b700d5f6bb0d67ff87d751e64e986e
