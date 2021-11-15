import { from, fromEvent, interval, Observer, pipe, Subscription } from "rxjs"
import { scan, map, take, tap } from "rxjs/operators"

export class Application{

    private button:     HTMLElement
    private paragraph:  HTMLElement
    private sub: Subscription    
    private turnOn:     HTMLElement
    private turnOff:    HTMLElement

    constructor(_button: string, _paragraph: string, on: string, off: string) {
        this.button = document.querySelector(`#${_button}`)  as HTMLButtonElement
        this.paragraph = document.querySelector(`#${_paragraph}`) as HTMLParagraphElement
        this.turnOn = document.querySelector(`#${on}`) as HTMLButtonElement
        this.turnOff = document.querySelector(`#${off}`) as HTMLButtonElement
    }
    public start() {
        fromEvent(this.turnOn, "click").subscribe(() => this.turnOnButton())
        fromEvent(this.turnOff, "click").subscribe(() => this.turnOffButton())
    }

    private show(value: number) {
        this.paragraph.innerHTML = value.toString()
    }

    private turnOffButton() {
        if (this.sub) {
            this.sub.unsubscribe()
            
        }
    }

    private turnOnButton() {
        if (!this.sub) {
            this.sub = fromEvent(this.button, "click").pipe(
                scan((acc) => acc + 1, 0),
                take(5),
                map(val => val)
            )
            .subscribe((msg: number) => {
                this.show(msg)
                console.log(msg)
            })
        }
    }
}