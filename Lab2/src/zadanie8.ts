import { fromEvent} from "rxjs";
import {filter, scan, map} from "rxjs/operators"

class Subject {
    button: HTMLButtonElement
    paragraph: HTMLElement
    message: string

    constructor(){
        this.button = document.querySelector("button")
        this.paragraph = document.getElementById("info1")
        
        fromEvent(this.button, "click")
        .pipe(map(x => 1)
        ,scan((clicked, counterClicked) => clicked + counterClicked)
        ).subscribe(message => this.showMessage(message))
    }
    showMessage(message: any) : void {
        this.paragraph.innerHTML = message
    }
    
}

function main(){
    var sub = new Subject()
    
}

main()