import {Autor} from './Autor';
import { IAutor } from './IAutor';

type Table = HTMLTableRowElement | null;

export class ImportDataJSON {
  private _autorzy: Autor[];

  constructor(url:string, tableId:string) {
    const table: HTMLTableRowElement | null = document.getElementById(tableId) as HTMLTableRowElement;
    this.json(url, table);
  }
  json(url:string, table:Table) {
    console.log(url);
    return fetch(url)
    .then(response => response.json())
    .then(data=>data.map(d=><IAutor>d))
    .then(Autor => Autor.forEach(p => {
      table.innerHTML += `<tr><td>${p._imie}</td><td>${p._nazwisko}</td></tr>`;
    }));
  }
}

