import { fromEvent, Observable, Subject, takeUntil, take, map, of, Subscription } from "rxjs";

export class Zad11 {
    buttonSubscription$: Subscription;
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="button-container">
                <button id="button1">Button 1</button>
                <button id="button2">Button 2</button>
                <button id="button3">Button 3</button>
             </div>
             <div class="input-container">
                <input type="text" id="input1">
                <input type="text" id="input2">
             </div>
             Click count: <p id="counter"></p>`

        const counterRef:HTMLElement = document.getElementById('counter');
        counterRef.innerHTML = '0';

        const button1:HTMLButtonElement = document.getElementById('button1') as HTMLButtonElement;
        const button2:HTMLButtonElement  = document.getElementById('button2') as HTMLButtonElement;
        const button3:HTMLButtonElement  = document.getElementById('button3') as HTMLButtonElement;

        const input1:HTMLInputElement  = document.getElementById('input1') as HTMLInputElement;
        const input2:HTMLInputElement  = document.getElementById('input2') as HTMLInputElement;
        input1.value = '0';
        input2.value = '0';


        fromEvent(button1, 'click').subscribe(() => {
            counterRef.innerHTML = (+counterRef.innerHTML+1).toString();
        })

        fromEvent(button2, 'click').pipe(take(2)).subscribe(() => {
            if (input1.value === counterRef.innerHTML) {
                input1.disabled = true;
            }
            input1.value = counterRef.innerHTML;
        });

        fromEvent(button3, 'click').pipe(take(2)).subscribe(() => {
            if (input2.value === counterRef.innerHTML) {
                input2.disabled = true;
            }
            input2.value = counterRef.innerHTML;
        })
    }
}