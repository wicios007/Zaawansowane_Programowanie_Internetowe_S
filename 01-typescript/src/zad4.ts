export class Zad4 {
    private _field: number;
    private _input: HTMLInputElement;
    private _buttonUP: HTMLButtonElement;
    private _buttonDOWN: HTMLButtonElement;

    constructor() {
        this._field = 0;
        this._input = <HTMLInputElement>document.getElementById("input");
        this._buttonUP = <HTMLButtonElement>document.getElementById("add");
        this._buttonDOWN = <HTMLButtonElement>document.getElementById("substract");
        this._buttonUP.onclick = this.plus;
        this._buttonDOWN.onclick = this.minus;
    }



    plus = (): void => {
        this._field++;
        this._input.value = this._field.toString();
    }

    minus = (): void => {
        this._field--;
        this._input.value = this._field.toString();
    }

}
