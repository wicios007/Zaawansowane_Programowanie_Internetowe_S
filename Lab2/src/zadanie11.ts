import { fromEvent, Subscription, shareReplay} from "rxjs";
import { scan, map, tap} from "rxjs/operators"

class Subject {
    button: HTMLButtonElement
    button2: HTMLElement
    button3: HTMLElement
    paragraph: HTMLElement
    input: HTMLInputElement
    input1: HTMLInputElement
    subscription: Subscription
    subscription2: Subscription

    constructor(){

        this.button = document.querySelector("button")
        this.button2 = document.getElementById("button2")
        this.button3 = document.getElementById("button3")
        this.paragraph = document.getElementById("info1")
        this.input = (<HTMLInputElement>document.getElementById("input"))
        this.input1 = (<HTMLInputElement>document.getElementById("input2"))

    }
    public init() {
        fromEvent(this.button, "click")        
        .pipe(tap(x => console.log("Zliczam kliknięcia"))
        ,map(x => 1)
        ,scan((acc, val) => acc + val))
        .subscribe(mess => this.showMessage(mess));

        let src = fromEvent(this.button2, "click")
        .pipe(tap(x => console.log("Button 2 kliknięto"))
        ,map(x => this.paragraph.innerHTML)
        ,shareReplay());

        this.subscription = src.subscribe(x => this.typeInput1(x))
        this.subscription2 = src.subscribe(x => this.typeInput2(x))
    }

    showMessage(message: any) : void {
        this.paragraph.innerHTML = message
    }

    typeInput1(x : any): void{
        this.input.value = x
        this.unsubscribe(this.subscription)
    }

    typeInput2(x: any): void {
        this.input1.value = x
        this.unsubscribe(this.subscription2)

    }

    unsubscribe(sub : Subscription) : void {
        sub.unsubscribe()
        //sub = undefined
    }
    
}

function main(){
    var sub = new Subject()
    sub.init()
}

main()