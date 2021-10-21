export class GetValueZad4 {
  private _count:number;
  
  constructor(idInput:string, idButtonAdd:string, idButtonSub:string) {
    this._count = 0;
    const input: HTMLInputElement | null = document.getElementById(idInput) as HTMLInputElement; //Tylko HTMLInputElement umożliwia wyciągnięcie value
    const buttonAdd: HTMLButtonElement | null = document.getElementById(idButtonAdd) as HTMLButtonElement;
    const buttonSub: HTMLButtonElement | null = document.getElementById(idButtonSub) as HTMLButtonElement;
    
    if(input && buttonAdd && buttonSub) {
      this._count = parseInt(input.value); 
      console.log(this._count)
      buttonAdd?.addEventListener("click", () => {
        this._count++;
        console.log(this._count)
        input.value = String(this._count);
      });
      buttonSub?.addEventListener("click", () => {
        this._count--;
        console.log(this._count)
        input.value = String(this._count);
      });
    }
  }


}

