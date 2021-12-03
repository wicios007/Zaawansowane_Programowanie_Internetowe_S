import { from, fromEvent, filter, interval, Observer, pipe, Subscription, combineLatest, catchError, retry, throwError } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Zad18 {

    constructor() {
        var body = document.body;
        body.innerHTML = `<div>
                <label for="input1">a</label>
                <input type="text" name="input1" id="input1">
                <br>
                <label for="input2">b</label>
                <input type="text" name="input2" id="input2">
            </div
            <div>
                <p id="result">
            </div>`

        var input1 = document.getElementById('input1') as HTMLInputElement
        var input2 = document.getElementById('input2') as HTMLInputElement
        var result = document.getElementById('result')
        
        var a = fromEvent(input1, 'keyup')
        var b = fromEvent(input2, 'keyup')

        combineLatest(a,b)
        .pipe(
            map((data : any) => [data[0].target.value, data[1].target.value]), 
            filter(data => {
                result.innerHTML = ''
                return !data.some(x => !x.length)
            }),
            filter(x => {
                if(+x[0] && +x[1]){
                    return true;
                }else{
                    result.innerHTML = ''
                    throw Error("Error!")
                }
            }), catchError((err, data) => {result.innerHTML = err.message; return data})
        ).subscribe((data) => {
            result.innerHTML = (+data[0] * +data[1]).toString()
        }, error => {
            result.innerHTML = error.message
        })
    }

}