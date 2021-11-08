import { fromEvent, Observable, Subject, takeUntil } from "rxjs";
export class Zad7 {
    counter: number;
    unsubscribe$: Subject<void> = new Subject();
    constructor() {
        this.counter = 0;
        const body = document.body;
        const counterRef:HTMLElement = document.getElementById('counter');
        const clikcBox = document.getElementsByClassName('click');
        
        fromEvent(clikcBox, 'click')
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(data => {
            counterRef.innerHTML =( ++this.counter).toString();
        });
    }


    

}