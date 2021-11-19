import { fromEvent, Observable, Subject, takeUntil, take, map, filter, Subscription } from "rxjs";

export class Zad13 {
    buttonSubscription$: Subscription;
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="input-container">
                <input type="text" id="input1">
                <input type="text" id="input1">
             </div>
             Input text: <p id="paragraph"></p>`

        const paragraphRef:HTMLElement = document.getElementById('paragraph');
        const input1:HTMLInputElement  = document.getElementById('input1') as HTMLInputElement;

        fromEvent(input1, 'keyup')
            .pipe(filter(() => {
                const clear = () => {paragraphRef.innerHTML = ''; return false}
                return input1.value.length > 5 ? true : clear();
            }))
            .subscribe(() => {
                paragraphRef.innerHTML = input1.value;
            })
    }
}