import { from, fromEvent, Observer, Subscription } from "rxjs";
import { scan,map, take, tap } from "rxjs/operators"


// let numbers = [1,4,3,6,7,4]

// //zad1
// from(numbers)
//     .pipe(scan((acc,curr) => acc+curr, 0))
//     .subscribe(val => console.log(val))

// let sumuj = (tablica:number[]) => tablica.reduce((acc, curr) => acc + curr, 0)
// console.log(sumuj(numbers))

// //zad2
// from(numbers)
//     .pipe(
//         map(val => {if(val%2==0) return val;else return 0}),
//         scan((acc,curr) => acc+curr, 0))
//     .subscribe(val => console.log(val))


// //zad3
// from(numbers)
//     .pipe(
//         map(val => {if(val > 5) return val;else return 0}),
//         scan((acc,curr) => acc+curr, 0))
//     .subscribe(val => console.log(val))

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