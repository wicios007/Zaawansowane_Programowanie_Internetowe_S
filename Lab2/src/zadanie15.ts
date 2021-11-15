import { combineLatest, from, fromEvent, catchError, throwError} from "rxjs"
import {map, retry, filter} from "rxjs/operators"

class Subject{

    input: HTMLInputElement
    input2: HTMLInputElement
    paragraph: HTMLElement

    constructor(){
        this.input = document.querySelector("input");
        this.input2 = document.querySelector(`#input2`);
        this.paragraph = document.querySelector("p");
    }
    
    public init(){

        let source1 = fromEvent(this.input, "input");
        let source2 = fromEvent(this.input2, "input");
   
        combineLatest(source1, source2).pipe(
            map((x:any) => [x[0].target.value, x[1].target.value]),
            filter(data => {
                const clear = () => {this.paragraph.innerHTML = "" ;
            throw Error('Error, value is NaN')}
            return data[0] && data[1] ? true : clear();
            }),

        ).subscribe((data) => {
           this.paragraph.innerHTML = (data[0] *data[1]).toString();
        }, error =>  this.paragraph.innerHTML = error.message)

    }
}

function main(){
    var sub = new Subject();
    sub.init()
}

main()