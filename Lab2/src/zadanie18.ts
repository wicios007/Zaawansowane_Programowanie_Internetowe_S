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

        let source1 = fromEvent(this.input, "keyup");
        let source2 = fromEvent(this.input2, "keyup");
   
        combineLatest(source1, source2).pipe(
            map((x:any) => [x[0].target.value, x[1].target.value]),
            filter(data => {
                const clear = () => {
                if(data[0] == "" || data[1] == "" || data[0] &&  data[1] == ""){
                    this.paragraph.innerHTML = ""
                return data[1] && data[2];
                    }
                    else throw Error('Error, value is NaN');
                }
            return +data[0] && +data[1] ? true : clear();
            })
            ,catchError(e => {
                console.warn("Value should be a number type ");
                return throwError(e)
            }),
            retry()
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