import { fromEvent, Subscription} from "rxjs";
import { map, filter, tap} from "rxjs/operators"

 class Subject {

    private input: HTMLInputElement
    private paragraph: HTMLElement
    subscription: Subscription

    constructor() {
        this.input = document.querySelector("input")
        this.paragraph = document.querySelector("p")
    }

    public init (){

        this.subscription = fromEvent(this.input, "keyup")
        .pipe(
        map(x => { if(this.input.value.length>0) return this.input.value; else return this.paragraph.innerHTML = ""})
        ,filter(x => x.length>5 )
        )
        .subscribe(mess => this.paragraph.innerHTML = mess)
    }

    unsubscribe() : void {
        setTimeout(() => {
            this.subscription.unsubscribe()
        }, 15000);
        
    }

 }
 function main() {
     var sub = new Subject()
     sub.init()
     sub.unsubscribe()

 }
 main()