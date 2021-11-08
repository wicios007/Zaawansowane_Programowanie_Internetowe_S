import { fromEvent, Observer } from "rxjs";

/*
class ClickObserver implements Observer<Event>{
    private id: string;
    private count: number;

    constructor(id: string){
        this.id = id;
        this.count = 0;
    }

    next(value: Event): void{
        parseInt(document.querySelector('#${this.id}').innerHTML) + 1;
    }

    error(error: any): void{
        console.log('error: ${error}');
    }

    complete(): void{
        console.log('Done');
    }
}


let button = document.querySelector('.countButton');
let text = document.querySelector('.counter');
var clicks$ = Rx.Observable.fromEvent(button,'click');
*/

let button: HTMLButtonElement = document.querySelector("#countButton")

fromEvent(button, "click").subscribe( c => {
    let text: HTMLParagraphElement = document.querySelector('#counter')
    text.innerText = (parseInt(text.innerHTML) + 1).toString()
})

