import { from, fromEvent, filter, interval, Observer, pipe, Subscription } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Zad13 {

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
        .pipe(filter(() => {
            var clean = () => {result.innerHTML = ""}
            if(input1.value.length < 5){
                clean()
                return false;
            }
            return true;
        }))
        .subscribe(function(){
            result.innerHTML = input1.value
        })

    }

}