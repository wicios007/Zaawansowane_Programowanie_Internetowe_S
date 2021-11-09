import {Observer } from "rxjs"
import { fromEvent } from "rxjs"
import { tap } from "rxjs/operators"


export class Subject implements Observer<Event>{
    private id_: string
    private counter: number = 1
    constructor(id: string){
        this.id_ = id
    }
    next(value: Event): void {
        document.querySelector(`#${this.id_}`).innerHTML = `${this.counter++}`

    }
    
    error(err: any): void {console.log(err)}
    complete(): void {}
    showMessage(message: string) {
        document.querySelector(`${this.id_}`).innerHTML = message
    }
    
}

function main(){
    var subject = new Subject("info1")
    let button = document.querySelector("button");

    fromEvent(button, "click").pipe(tap(x => console.log("Klik!"))).subscribe(subject)
}
main()