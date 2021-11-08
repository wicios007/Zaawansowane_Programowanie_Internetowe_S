/***************************************************
 ZAD1
***************************************************/
let arrayOfNumber: number[] = [1,2,4,8] 
let suma = (numbers: number[]): number => numbers.reduce((sum: number, b: number) => sum += b, 0)
console.log(suma(arrayOfNumber)) //15

/***************************************************
 ZAD2
***************************************************/
let filtrParzyste = (numbers: number[]): number[] => numbers.filter(num => num%2 == 0)
console.log(suma(filtrParzyste(arrayOfNumber))) //14

/***************************************************
 ZAD3
***************************************************/
let filtrWiekszeOd = (numbers: number[], x: number): number[] => numbers.filter(num => num > x)
console.log(suma(filtrWiekszeOd(arrayOfNumber,2))) //12

/***************************************************
 ZAD4??
***************************************************/
/*
function filtrJedenParameter(parametr: number): number[] => number[] {               
    return (numbers:number[]):number[] => {         
        return filtrWiekszeOd(parametr, numbers)  
    }
}
*/

//let wiekszaOd = filtrJedenParameter(2)
//console.log(suma(wiekszaOd(2))) //12

/*
function filtrJedenParameter(comparator: number):   //funkcja jeden parametr wejsciowy
    (numbers:number[]) => number[] {                //ktory zwraca funkcje ktora zwraca tablice liczb
    return (numbers:number[]):number[] => {         //deklaracja funkcji wewnetrznej
        return filtrWiekszeOd(comparator, numbers)  //cialo funkcji wewnetrznej
    }
}

let wiekszeOd = filtrJedenParameter(5)
//wiekszeOd =  (comparator:number, numbers:number[]): number[] => numbers.filter(n => n > 5)
console.log(suma(filtrParzyste(wiekszeOd(array))))
*/

/***************************************************
 ZAD5
***************************************************/
/*
function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1) => (a2:T2) => fn(a1,a2)
}

let funkcjaJedenParametrCurry = curry2(filtrWiekszeOd)
let filtrJedenParametrCurry = funkcjaJedenParametrCurry(5)
console.log(suma(filtrParzyste(filtrJedenParametrCurry(array))))
*/

/***************************************************
 ZAD6
***************************************************/
let arrayOfString: string[] = ['Ala', '2', 'Ma', '3', 'Kota', '7'] 
let filtrLiczba = (arrayOfString: string[]) => arrayOfString.filter(n => +n).map(Number)

console.log(filtrLiczba(arrayOfString))
console.log(suma(filtrLiczba(arrayOfString)))//12

/***************************************************
 ZAD 7 info na str 10 w pdf
***************************************************/
//Przyklad tap
import {interval, tap, map} from "rxjs"

class App{
    private div: HTMLElement;
    
    constructor(divId: string) {
        this.div = <HTMLElement>document.querySelector('#$divId');
    }
    
    public show(text: string) {
        this.div.innerHTML = text;
    }

    public start() {
        interval(100)
        .pipe(map(_ => [
                            Math.floor(Math.random() * 6 + 1),
                            Math.floor(Math.random() * 6 + 1)
                        ]),
            )
    }
}
let app = new App("buttom1", "message")
app.start();


/*********************************************************************************************
 * Notatiren
*********************************************************************************************/
/*
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

/*
// //zad4
// function wiekszaOd(val, val2){
//     if(val > val2) return val;
//     else return 0;
// }

// from(numbers)
//     .pipe(
//         map(val => wiekszaOd(val, 3)),
//         scan((acc,curr) => acc+curr, 0))
//     .subscribe(val => console.log(val));


//zad10
class App{
    private turnon: HTMLElement;
    private turnoff: HTMLElement;
    private button: HTMLElement;
    private paragraph: HTMLElement;

    private subscription: Subscription;

    constructor(turnonId:string, turnoffId: string, buttonId:string, paragraphId: string){
        this.turnon = document.querySelector(`#${turnonId}`);
        this.turnoff = document.querySelector(`#${turnoffId}`);
        this.button = document.querySelector(`#${buttonId}`);
        this.paragraph = document.querySelector(`#${paragraphId}`)
        this.init();
    }
    
    public init(){
        fromEvent(this.turnon, "click").subscribe(() => this.turnOnButton());
        fromEvent(this.turnoff, "click").subscribe(() => this.turnOffButton());
    }

    turnOffButton(){
        console.log("turnoff")
        if(this.subscription){
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }

    turnOnButton(){
        console.log("turnon")
        if(!this.subscription){
            this.subscription = fromEvent(this.button, "click").pipe(
                scan((acc, val) => acc + 1, 0),
                take(5),
                map(val => val.toString()),
            )
            .subscribe((message: string) => this.paragraph.innerHTML = message);
        }
    }

}

const app = new App("button1", "button2", "button3", "info1");
*/