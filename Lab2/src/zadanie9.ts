import { fromEvent, observable} from "rxjs";
import {filter, scan, map, take} from "rxjs/operators"

class Subject {
    button: HTMLButtonElement
    paragraph: HTMLElement
    message: string

    constructor(){
        this.button = document.querySelector("button")
        this.paragraph = document.getElementById("info1")
        
        var obs = fromEvent(this.button, "click")
        .pipe(map(x => 1)
        ,scan((clicked, counterClicked) => clicked + counterClicked)
        ,take(5)
        ).subscribe(message => this.showMessage(message))

        setTimeout(() => {
            obs.unsubscribe()
        }, 10000);
    }
    showMessage(message: any) : void {
        this.paragraph.innerHTML = message
    }
    
}

function main(){
    var sub = new Subject() 
}

main()