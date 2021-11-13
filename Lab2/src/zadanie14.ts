import { fromEvent, Subscription, combineLatest} from "rxjs";
import { map, filter, tap} from "rxjs/operators"

 class Subject {

    private input: HTMLInputElement
    private input2: HTMLInputElement
    private paragraph: HTMLElement

    constructor() {
        this.input = document.querySelector("input")
        this.paragraph = document.querySelector("p")
        this.input2 = document.querySelector(`#input2`)
    }

    public init (){

       let source1 = fromEvent(this.input, "keyup")
       .pipe(
       map(x => { if(this.input.value.length>0) return this.input.value; else return this.paragraph.innerHTML = "" })
       ,filter(x => x.length > parseInt(this.input2.value) )
       )

       let source2 = fromEvent(this.input2, "keyup")
        .pipe(
        map(x => this.input2.value),
        map( x => parseInt(x))
        )

       let sub1 = source1.subscribe(mess => this.showMessage(mess))
       let sub2 = source2.subscribe(mess => console.log(mess))

            let subscribe3 = combineLatest(source1,source2).pipe(
            filter(([x,y]) => isNaN(y))
            ,tap(([x,y])=> console.log("wynik tapa input1:", x, "wynik tapa input2:", y))
            ,map(x => this.input.value )
            ,tap(x => console.log("wynik tapa2:", x))
        ).subscribe(mess => this.showMessage(mess))

        this.unsubscribe(sub1, sub2, subscribe3)
    }

    showMessage(val: any) :any {
        this.paragraph.innerHTML = val;

    }

    unsubscribe(sub :Subscription,sub2: Subscription,sub3: Subscription) : void {
        setTimeout(() => {
            sub.unsubscribe()
            sub2.unsubscribe()
            sub3.unsubscribe()
        }, 60000);
        
    }

 }
 function main() {
     var sub = new Subject()
     sub.init()
     //sub.unsubscribe()

 }
 main()