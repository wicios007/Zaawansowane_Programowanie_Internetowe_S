
import { Autor } from './Autor';

export class AutorTable {
  private _autorzy : Autor[];

  constructor(id:string) {
    this._autorzy = [];
    const table: HTMLTableElement | null = document.getElementById(id) as HTMLTableElement;

    if(table) {
      const data: any[] = table.innerText.split('\n');
      data.forEach(x => {
          const autor = x.split('\t')
          console.log(autor);

          this._autorzy.push(new Autor(autor[0], autor[1]))
      })
  }
  }

}