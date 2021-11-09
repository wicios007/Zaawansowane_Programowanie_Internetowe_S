export interface IObserver{
    notify(data: any): void;
}

export class Subject{
    private observerCollection: IObserver[] = []

    constructor(id: string){
        document.querySelector(`#${id}`).addEventListener("click", e => this.notifyObservers(e))
    }

    registerObserver(observer: IObserver){
        this.observerCollection.push(observer);
    }

    unRegisterObserver(observer: IObserver){
        this.observerCollection = this.observerCollection.filter(obs => obs != observer)
    }
    private notifyObservers(clickEvent: Event){
        this.observerCollection.forEach(observer => {observer.notify(clickEvent)})
    }
}

class Observer implements IObserver {
    private id: string;

    constructor(id: string){ this.id = id}

    notify(data: any): void {document.querySelector(`#${this.id}`).innerHTML += "click<br />"}
}

let subject = new Subject("button")
let observer = new Observer("info1")
let observer2 = new Observer("info2")

subject.registerObserver(observer)
subject.registerObserver(observer2)