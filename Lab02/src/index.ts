import { fromEvent, scan, shareReplay, Subscription } from "rxjs";
import { ClickObserver } from "./ClickObserver";
import { map, tap, take } from "rxjs";

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sums = (numbers: number[]): number =>
    numbers.reduce((sum: number, b: number) => (sum += b), 0);
let oddNumbers = (numbers: number[]): number[] =>
    numbers.filter((n) => n % 2 == 0);
let greaterThan = (comparator: number, numbers: number[]): number[] =>
    numbers.filter((n) => n > comparator);

function filterOneParam(
    comparator: number
): (numbers: number[]) => number[] {
    return (numbers: number[]): number[] => {
        return greaterThan(comparator, numbers);
    };
}

//zad01
console.log(sums(array));
//zad02
console.log(oddNumbers(array));
//zad03
console.log(sums(oddNumbers(greaterThan(3, array))));
//zad04
let greaterThanZ04 = filterOneParam(5);
//wiekszeOd =  (comparator:number, numbers:number[]): number[] => numbers.filter(n => n > 5)
console.log(sums(oddNumbers(greaterThanZ04(array))));
//zad05
function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
    return (a1: T1) => (a2: T2) => fn(a1, a2);
}

let curryOneParam = curry2(greaterThan);
let filterCurryOneParam = curryOneParam(5);
console.log(sums(oddNumbers(filterCurryOneParam(array))));

//zad06

let stringArray: string[] = ["lorem ipsum", "1", "2", "lorem", "5", "7", "ipsum",];
let filterNumbersFromString = (stringArray: string[]) =>
    stringArray.filter((n) => +n).map(Number);
console.log(sums(filterNumbersFromString(stringArray)));

//Zad07

let button: HTMLButtonElement = document.querySelector("#btn1");
let paragraph: HTMLParagraphElement = document.querySelector(`#p1`)
// let observer = new ClickObserver("#p1")

// fromEvent(button, "click").subscribe(observer)
// fromEvent(button, "click").subscribe((v) => {
//     // let text: HTMLParagraphElement = document.querySelector(`#p1`);
//     // text.innerText = (parseInt(text.innerHTML) + 1).toString();
// });


//Zad08 09
let clicks = fromEvent(button, "click");
let numberOfClicks = clicks.pipe(map(x => 1), scan((clicked, counterClicked) => clicked + counterClicked), take(5))
numberOfClicks.subscribe(msg => paragraph.innerText = msg.toString())


//Zad10

let button2: HTMLButtonElement = document.querySelector("#btn2")
let button3: HTMLButtonElement = document.querySelector("#btn3")
let button4: HTMLButtonElement = document.querySelector("#btn4")
let paragraph2: HTMLParagraphElement = document.querySelector("#p2")

let subscription: Subscription

fromEvent(button2, "click")
    .pipe(tap(x => console.log("Aktywuje przycisk 3")))
    .subscribe(x =>
    (subscription = fromEvent(button3, "click")
        .pipe(map(x => 1),
            scan((clicked, counterClicked) => clicked + counterClicked))
        .subscribe(msg => paragraph2.innerText = msg.toString())))

fromEvent(button4, "click")
    .pipe(tap(x => console.log("Deaktywuje przycisk 3")))
    .subscribe(x => {
        if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
        }
    })

//Zad11

let button5: HTMLButtonElement = document.querySelector("#btn5")
let button6: HTMLButtonElement = document.querySelector("#btn6")
let button7: HTMLButtonElement = document.querySelector("#btn7")

let input1: HTMLInputElement = document.querySelector("#input1")
let input2: HTMLInputElement = document.querySelector("#input2")

fromEvent(button5, "click")
    .pipe(tap(x => console.log("Counting clicks"))
        , map(x => 1)
        , scan((clicked, counterClicked) => clicked + counterClicked))
    .subscribe(msg => input1.value = msg.toString());

let src = fromEvent(button6, "click")
    .pipe(tap(x => console.log("Button6 has been pressed"))
        , map(x => input1.value)
        , shareReplay());

let subscription2: Subscription
let subscription3: Subscription
subscription2 = src.subscribe(x => {input2.value = input1.value; subscription2.unsubscribe()})
subscription3 = src.subscribe(x => {input2.value = input2.value; subscription3.unsubscribe()})