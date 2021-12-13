import { Observer } from "rxjs"
import { map } from "rxjs";
export class ClickObserver implements Observer<Event>{

    private id: string;
    private number: number;

    constructor(id: string) {
        this.id = id;
    }

    next(value: Event): void{
        let text: HTMLParagraphElement = document.querySelector(this.id);
        this.number = parseInt(text.innerHTML)
        this.number++
        text.innerText = this.number.toString();
    }
    error(error: any): void{
        console.log(`error: ${error}`);
    }
    complete(): void{
        console.log('Done');
    }
}