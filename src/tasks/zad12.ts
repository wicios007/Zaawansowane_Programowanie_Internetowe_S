import { fromEvent, Observable, Subject, takeUntil, take, map, of, Subscription } from "rxjs";

export class Zad12 {
    buttonSubscription$: Subscription;
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="input-container">
                <input type="text" id="input1">
             </div>
             Input text: <p id="paragraph"></p>`

        const paragraphRef:HTMLElement = document.getElementById('paragraph');
        const input1:HTMLInputElement  = document.getElementById('input1') as HTMLInputElement;

        fromEvent(input1, 'keyup').subscribe(() => {
            paragraphRef.innerHTML = input1.value;
        })
    }
}