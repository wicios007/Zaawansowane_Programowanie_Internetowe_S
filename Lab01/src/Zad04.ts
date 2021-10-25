export class Zad04{
    private _counter: number;
    private _input: HTMLInputElement;
    private _buttonAdd: HTMLButtonElement;
    private _buttonSub: HTMLButtonElement;

    constructor() {
        this._counter = 0;
        this._input = document.createElement("input");
        this._input.type = "text"
        this._input.value = this._counter.toString();

        this._buttonAdd = document.createElement("button");
        this._buttonAdd.innerText = "+";
        this._buttonAdd.onclick = this.add;
        
        this._buttonSub = document.createElement("button");
        this._buttonSub.innerText = "-";
        this._buttonSub.onclick = this.subtract;
        
        var container: Element = document.createElement("div");
        container.append(this._input);
        container.append(this._buttonAdd);
        container.append(this._buttonSub);

        document.body.append(container);
    }

    add = (): void => {
        this._counter++;
        this._input.value = this._counter.toString();
    }
    subtract = (): void => {
        this._counter--;
        this._input.value = this._counter.toString();
    }
}