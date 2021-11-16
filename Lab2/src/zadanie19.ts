import { combineLatest, fromEvent, interval} from "rxjs"
import {map, delay} from "rxjs/operators"

class Subject{

    div: HTMLDivElement

    constructor(){this.div = document.querySelector("div");}
    
    public init(){

       fromEvent(document, "mousemove").pipe(
            map((e: MouseEvent) => {
                return{
                    x: e.clientX,
                    y: e.clientY
                }
            }),
        )
        .subscribe(e => {
            this.div.style.left = e.x+"px";
            this.div.style.top = e.y+"px"; 
        })
        
}
}

function main(){
    var sub = new Subject();
    sub.init()
}

main()