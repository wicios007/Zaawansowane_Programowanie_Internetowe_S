import { fromEvent, Subscription, shareReplay} from "rxjs";
import { scan, map, tap} from "rxjs/operators"

 class Subject {

    private input: HTMLInputElement
    private paragraph: HTMLElement
    subscription: Subscription

    constructor() {
        this.input = document.querySelector("input")
        this.paragraph = (<HTMLParagraphElement>document.querySelector("p"))
    }

    public init (){

        fromEvent(this.input, "keyup")
        .pipe(map(x => this.input.value))
        .subscribe(mess => this.showMessage(mess))
    }

    showMessage(x: any) : void {
        this.paragraph.innerHTML = x
    }

 }
 function main() {
     var sub = new Subject()
     sub.init()
 }
 main()