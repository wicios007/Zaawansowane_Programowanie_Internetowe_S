import { fromEvent, Observable, Subject, takeUntil, catchError, throwError, take, retry, map, filter, Subscription, combineLatest } from "rxjs";

export class Zad19 {
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="mouse-container" id="box">
                TRACK MOUSE BOX
             </div>
             Mouse Position: <p id="paragraph"></p>`

        const paragraphRef:HTMLElement = document.getElementById('paragraph');
        const boxRef = document.getElementById('box');

        fromEvent(boxRef, 'mousemove').subscribe((data:any) => {
            boxRef.style.left = (data.x - data.target.clientWidth / 2) + 'px';
            boxRef.style.top = (data.y - data.target.clientHeight / 2) + 'px';
            paragraphRef.innerHTML = `x: ${data.x}; y: ${data.y}`
        })
    }
}