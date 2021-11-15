import { Zad7 } from "./tasks/zad7";
import { Zad8 } from "./tasks/zad8";
import { Zad9 } from "./tasks/zad9";
import { Zad10 } from "./tasks/zad10";
import { Zad11 } from "./tasks/zad11";
import { Zad12 } from "./tasks/zad12";
import { Zad13 } from "./tasks/zad13";
import { Zad14 } from "./tasks/zad14";
import { Zad15 } from "./tasks/zad15";
import { Zad16 } from "./tasks/zad16";
import { Zad17 } from "./tasks/zad17";
import { Zad18 } from "./tasks/zad18";
import { Zad19 } from "./tasks/zad19";
import { Zad20 } from "./tasks/zad20";
import { Zad21 } from "./tasks/zad21";


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
    // console.log('--zad1--', zad1());
    // console.log('--zad2--', zad2());
    // console.log('--zad3--', zad3(3));
    // console.log('--zad4--', zad4(3));
    // console.log('--zad5--', zad5());
    // console.log('--zad6--', zad6());
    // const array = [1,2,3,4,2,1,2,3];



    // RxJs
    // const zad7 = new Zad7();
    // const zad8 = new Zad8();
    // const zad9 = new Zad9();
    // const zad10 = new Zad10();
    // const zad11 = new Zad11();
    // const zad12 = new Zad12();
    // const zad13 = new Zad13();
    // const zad14 = new Zad14();
    // const zad15 = new Zad15();
    // const zad16 = new Zad16();
    // const zad17 = new Zad17();
    // const zad18 = new Zad18();
    // const zad19 = new Zad19();
    // const zad20 = new Zad20();
    const zad21 = new Zad21();
}

main();

