enum OPERATIONS {
    '+'= 1,
    '-' = -1
}

class Button {
    readonly _sign: string;
    private _target: HTMLInputElement;

    elementRef: HTMLElement;
    constructor(sign: string, target: HTMLInputElement) {
        if (OPERATIONS[sign] && target) {
            this._sign = sign;
            this._target = target;
            this.elementRef = document.createElement('button');
            this.elementRef.innerText = this._sign;
            this.elementRef.style.marginLeft = '5px';

            this.elementRef.addEventListener('click', () => {
                this.modifyInputValue();
            })
        }
    }

    modifyInputValue() {
        this._target.value = +this._target.value + OPERATIONS[this._sign];
    }
}


export class Zad4 {
    constructor() {
        const body = document.body;
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0';
        body.append(input);

        const addButton = new Button('+', input);
        const subtractButton = new Button('-', input);

        body.append(addButton.elementRef);
        body.append(subtractButton.elementRef);
    }
}