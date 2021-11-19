import { fromEvent, Observable, Subject, takeUntil, take, map, of, Subscription } from "rxjs";

export class Zad10 {
    buttonSubscription$: Subscription;
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="button-container">
                <button id="button1">Button 1</button>
                <button id="button2">Button 2</button>
                <button id="button3"d isabled>Button 3</button>
             </div>
             <p id="counter"></p>`

        const counterRef:HTMLElement = document.getElementById('counter');
        counterRef.innerHTML = '0';

        const button1:HTMLButtonElement = document.getElementById('button1') as HTMLButtonElement;
        const button2:HTMLButtonElement  = document.getElementById('button2') as HTMLButtonElement;
        const button3:HTMLButtonElement  = document.getElementById('button3') as HTMLButtonElement;


        fromEvent(button1, 'click').subscribe(() => {
            button3.disabled = false;
            this.buttonSubscription$ = fromEvent(button3, 'click')
                .pipe(
                    take(5),
                    map(x => {
                        counterRef.innerHTML = (+counterRef.innerHTML+1).toString();
                    })).subscribe();
        })

        fromEvent(button2, 'click').subscribe(() => {
            button3.disabled = true;
            this.buttonSubscription$ && this.buttonSubscription$.unsubscribe();
        })
    }
}