export class zad4{
  private wartoscInputa: HTMLInputElement
  private licznik: number = 0;
  

  constructor() {
       
      this.wartoscInputa = document.createElement("input"); 
      this.wartoscInputa.value = this.licznik.toString()
      var odjemowaniePrzycisk = document.createElement('button');  
      odjemowaniePrzycisk.innerText = "-";
      odjemowaniePrzycisk.onclick = this.odejmowanie;
      var dodawaniePrzycisk = document.createElement('button'); 
      dodawaniePrzycisk.innerText = "+";
      dodawaniePrzycisk.onclick = this.dodawanie;
      document.body.append(odjemowaniePrzycisk);  
      document.body.appendChild(this.wartoscInputa);
      document.body.append(dodawaniePrzycisk); 
  }

   _aktualizujWartoscInput
  (newValue:string) {
      this.wartoscInputa.value = newValue
  }

  dodawanie = () => {
      this.licznik++;
      this._aktualizujWartoscInput(this.licznik.toString())
  }

  odejmowanie = () => {  
      this.licznik--;
      this._aktualizujWartoscInput(this.licznik.toString())
  }
}