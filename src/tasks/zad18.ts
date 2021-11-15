import { fromEvent, Observable, Subject, takeUntil, catchError, throwError, take, retry, map, filter, Subscription, combineLatest } from "rxjs";

export class Zad18 {
    constructor() {
        const body = document.body;
        body.innerHTML =
            `<div class="input-container">
                <input type="text" id="input1">
                <input type="text" id="input2">
             </div>
             Square: <p id="paragraph"></p>`

        const paragraphRef:HTMLElement = document.getElementById('paragraph');
        const input1:HTMLInputElement  = document.getElementById('input1') as HTMLInputElement;
        const input2:HTMLInputElement  = document.getElementById('input2') as HTMLInputElement;

        const input1$ = fromEvent(input1, 'keyup');
        const input2$ = fromEvent(input2, 'keyup');

        combineLatest(input1$, input2$)
            .pipe(
                map((x:any) => [x[0].target.value, x[1].target.value]),
                filter(data => {
                    paragraphRef.innerHTML = '';
                    return !data.some(x => !x.length);
                }),
                filter(data => {
                    const clear = () => { throw new Error('Provide a valid number'); }
                    return +data[0] && +data[1] ? true : clear();
                }),
                catchError((err, data) => { paragraphRef.innerHTML = err.message; return data}),
            )
            .subscribe((data) => {
                paragraphRef.innerHTML = (data[0] * data[1]).toString();
            }, error => {
                console.log('dasd');
                paragraphRef.innerHTML = error.message;
            });
    }
}