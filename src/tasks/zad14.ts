import { fromEvent, Observable, Subject, takeUntil, take, map, filter, Subscription, combineLatest } from "rxjs";

export class Zad14 {
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="input-container">
                <input type="text" id="input1">
                <input type="number" id="input2">
             </div>
             Input text: <p id="paragraph"></p>`

        const paragraphRef:HTMLElement = document.getElementById('paragraph');
        const input1:HTMLInputElement  = document.getElementById('input1') as HTMLInputElement;
        const input2:HTMLInputElement  = document.getElementById('input2') as HTMLInputElement;

        const input1$ = fromEvent(input1, 'keyup');
        const input2$ = fromEvent(input2, 'keyup');

        combineLatest(input1$, input2$)
            .pipe(
                map((x:any) => [x[0].target.value, x[1].target.value]),
                filter(data => {
                    const clear = () => {paragraphRef.innerHTML = ''; return false}
                    return (data[0].length > +data[1]) || !+data[1] ? true : clear();
                }))
            .subscribe((data) => {
                paragraphRef.innerHTML = data[0];
            });
    }
}