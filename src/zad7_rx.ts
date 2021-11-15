import { Observer } from "rxjs"


export class Subject implements Observer<Event>{
    private id_: string
    private counter: number = 1
    constructor(id: string){
        this.id_ = id
    }
    next(value: Event): void {
        document.querySelector(`#${this.id_}`).innerHTML = `${this.counter++}`  
    }
    
    error(err: any): void {console.log(err)}
    complete(): void {}
    showMessage(message: string) {
        document.querySelector(`${this.id_}`).innerHTML = message
    }
    
}