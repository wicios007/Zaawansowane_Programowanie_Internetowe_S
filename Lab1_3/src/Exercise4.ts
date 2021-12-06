export class Exercise4{
    
    private _counter: number;
    private _input: HTMLInputElement;
    private _addButton: HTMLButtonElement;
    private _subButton: HTMLButtonElement;

    constructor(){
        this._counter = 0;
        this._input = document.createElement("input");
        this._input.type = "text";
        this._input.value = this._counter.toString();
        this._addButton = document.createElement("button");
        this._addButton.innerText = "+";
        this._addButton.onclick = this.up;

        this._subButton = document.createElement("button");
        this._subButton.innerText = "-";
        this._addButton.onclick = this.down;
        let container: Element = document.createElement("div");
        container.append(this._input);
        container.append(this._addButton);
        container.append(this._subButton);
        document.body.append(container);
    }

    up = (): void => {
        this._counter++;
        this._input.value = this._counter.toString();
    }
    
    down = (): void => {
        this._counter--;
        this._input.value = this._counter.toString();
    }
}