import { from, fromEvent, interval, Observer, pipe, Subscription } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Zad12 {

    constructor() {
        var body = document.body;
        body.innerHTML = `<div>
                <input type="text" id="input1">
            </div
            <div>
                <p id="result">
            </div>`

        var input1 = document.getElementById('input1') as HTMLInputElement
        var result = document.getElementById('result')
        
        fromEvent(input1, 'keyup')
        .subscribe(function(){
            result.innerHTML = input1.value
        })

    }

}