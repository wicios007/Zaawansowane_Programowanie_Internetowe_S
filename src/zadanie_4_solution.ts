export class ZadanieCzterySolution {
    private counter: number = 0;
    private inputValue: HTMLInputElement

    constructor() {
        var text = document.createElement("header"); 
        text.innerText = "Zadanie 4"
        document.body.append(text);  
        this.inputValue = document.createElement("input"); 
        this.inputValue.value = this.counter.toString()
        var addButton = document.createElement('button'); 

        addButton.innerText = "Increase (+)";
        addButton.onclick = this.callbackIncrease;
        var decreaseButton = document.createElement('button');  
        decreaseButton.innerText = "Decrease (-)";
        decreaseButton.onclick = this.callbackDecrease;
        document.body.append(addButton);  
        document.body.appendChild(this.inputValue);  
        document.body.append(decreaseButton);  
    }
  
     _updateInputValue
    (newValue:string) {
        this.inputValue.value = newValue
    }

    callbackIncrease = () => {
        this.counter++;
        this._updateInputValue(this.counter.toString())
    }

    callbackDecrease = () => {  
        this.counter--;
        this._updateInputValue(this.counter.toString())
    }

}