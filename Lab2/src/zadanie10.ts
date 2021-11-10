import { fromEvent, Subscription} from "rxjs";
import { scan, map, tap} from "rxjs/operators"

class Subject {
    button: HTMLButtonElement
    button2: HTMLElement
    button3: HTMLElement
    paragraph: HTMLElement
    subscription: Subscription

    constructor(){
        this.button = document.querySelector("button")
        this.button2 = document.getElementById("button2")
        this.button3 = document.getElementById("button3")
        this.paragraph = document.getElementById("info1")

    }
    public init() {
        fromEvent(this.button, "click")        
        .pipe(tap(x => console.log("Aktywuje przycisk 3")))
        .subscribe(x => this.startButton3())

        fromEvent(this.button2, "click")
        .pipe(tap(x => console.log("Deaktywuje przycisk 3")))
        .subscribe(x => this.stopButton3(this.subscription))
    }
    showMessage(message: any) : void {
        this.paragraph.innerHTML = message
    }

    startButton3() {
        this.subscription = fromEvent(this.button3, "click")
        .pipe(map(x => 1),
        scan((sum, acum) => sum + acum))
        .subscribe(mess => this.showMessage(mess))
    }

    stopButton3(subscription: Subscription) {
        if(subscription){
        subscription.unsubscribe();
        subscription = undefined;
        }
    }
    
}

function main(){
    var sub = new Subject()
    sub.init()
}

main()