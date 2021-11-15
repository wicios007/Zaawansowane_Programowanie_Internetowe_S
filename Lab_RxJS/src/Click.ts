import { from, fromEvent} from "rxjs"
import { take } from "rxjs/operators"

export class  Click
{
    private button: HTMLElement;
    private parg: HTMLElement;
    //private ticks: number;

    constructor(btn:string, parg:string)
    {
        this.button = <HTMLElement>document.getElementById(btn);
        this.parg = <HTMLElement>document.getElementById(parg);
        //Zad7 this.ticks = 0;
    }
    // Zad7
    // public start() {
    //     fromEvent(this.button, 'click')
    //         .subscribe(v => {
    //             this.ticks++;
    //             this.parg.innerHTML = this.ticks.toString();
    //         });
    // }

    //zad 8/9
    public start()
    {
        fromEvent(this.button, 'click').pipe(
            take(5),
        ) 
        .subscribe(v => {
            this.parg.innerHTML = (+this.parg.innerHTML + 1 ).toString()
        })
    }

}