enum OPERACJE
{
    '+' = 1,
    '-' = -1
}

class Przycisk
{
    readonly _znak: string;
    private _target: HTMLInputElement;
    element: HTMLElement;

    poleInput()
    {
        this._target.value = +this._target.value + OPERACJE[this._znak];
    }

    constructor(znak: string, target: HTMLInputElement)
    {
        if(OPERACJE[znak] && target)
        {
            this._znak = znak;
            this._target = target;
            this.element = document.createElement('przycisk');
            this.element.innerText = this._znak;
            this.element.style.marginLeft = "5px";

            this.element.addEventListener('click', () =>
            {
                this.poleInput();
            })
        }
    }
}

export class Zad4
{
    constructor()
    {
        const body = document.body;
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0';
        body.append(input);

        const dodajPrzycisk = new Przycisk('+', input);
        const usunPrzycisk = new Przycisk("-", input);

        body.append(dodajPrzycisk.element);
        body.append(usunPrzycisk.element);
    }
}

