import { fromEvent, Observable, Subject, takeUntil, map, of } from "rxjs";

export class Zad8 {
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        const body = document.body;
        body.innerHTML = `<div class="click"></div>
                          <p id="counter"></p>`

        const counterRef:HTMLElement = document.getElementById('counter');
        counterRef.innerHTML = '0';
        const clikcBox = document.getElementsByClassName('click');

        fromEvent(clikcBox, 'click')
            .pipe(map(x => {
                counterRef.innerHTML = (+counterRef.innerHTML+1).toString();
            }))
            .subscribe(x => {
            });
    }
}