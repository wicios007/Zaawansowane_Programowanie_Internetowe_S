import { from, fromEvent, filter, interval, Observer, pipe, Subscription } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Zad14 {

    constructor() {
        var body = document.body;
        body.innerHTML = `<div>
                <input type="text" id="input1">
                <input type="text" id="input2">
            </div
            <div>
                <p id="result">
            </div>`

        var input1 = document.getElementById('input1') as HTMLInputElement
        var input2 = document.getElementById('input2') as HTMLInputElement
        var result = document.getElementById('result')
        
        fromEvent(input1, 'keyup')
        .pipe(filter(() => {
            var clean = () => {result.innerHTML = ""}
            if(input1.value.length < +input2.value){
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