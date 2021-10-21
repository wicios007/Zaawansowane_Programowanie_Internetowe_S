import {Autor} from './Autor';
import { IAutor } from './IAutor';

export class ImportDataJSON {
  private _autorzy: Autor[];

  constructor(url:string) {
    this.json(url);
  }
  json(url:string) {
    console.log(url);
    return fetch(url)
    .then(response => response.json())
    .then(data=>data.map(d=><IAutor>d))
    .then(Autor => Autor.forEach(p => {
      console.log(p._imie,p._nazwisko);
    }));
  }
}

