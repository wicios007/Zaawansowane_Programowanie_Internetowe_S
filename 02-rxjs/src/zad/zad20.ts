import { from, fromEvent, filter, interval, Observer, pipe, Subscription, combineLatest, catchError, retry, throwError } from "rxjs"
import { scan, map, take, tap, delay } from "rxjs/operators"

export class Zad20 {

    constructor() {
        var body = document.body;
        body.innerHTML = `<div id='box' style="width: 300px; height: 300px; border: 3px solid black">
            </div>
            <div>
                <p id="result">
            </div>`

        var box = document.getElementById('box')
        var result = document.getElementById('result')

        fromEvent(box, 'mousemove').pipe(delay(100))
        .subscribe((data : any) => {
            box.style.left = (data.x - data.target.clientWidth / 2) + 'px'
            box.style.top = (data.y - data.target.clientHeigth / 2) + 'px'
            result.innerHTML = `xpos: ${data.x} <br> ypos: ${data.y}`
        })
        

        
    }

}