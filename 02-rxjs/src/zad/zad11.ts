import { from, fromEvent, interval, Observer, pipe, Subscription } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Zad11 {

    constructor() {
        var body = document.body;
        body.innerHTML = `<div>
            <input type="text" id="input1">
            <input type="text" id="input2">
        </div
        <div>
            <button id="btn1">1</button>
            <button id="btn2">2</button>
            <button id="btn3">3</button>
        </div>
        <div>
            <span>counter: <p id="counter"></span>
        </div>`

        var counter = document.getElementById('counter')
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')
        var btn3 = document.getElementById('btn3')

        var input1 = document.getElementById('input1') as HTMLInputElement
        var input2 = document.getElementById('input2') as HTMLInputElement
     
        fromEvent(btn1, 'click').subscribe(function(){
            counter.innerHTML = (+counter.innerHTML+1).toString()
        })
        fromEvent(btn2, 'click').subscribe(function(){
            if(input1.value != counter.innerHTML){
                console.log("aaa")
                input1.value = counter.innerHTML
                input2.value = ""
            }
        })
        fromEvent(btn3, 'click').subscribe(function(){
            if(input2.value != counter.innerHTML){
                console.log("bbb")
                input2.value = counter.innerHTML
                input1.value = ""
            }
        })

    }

   
}