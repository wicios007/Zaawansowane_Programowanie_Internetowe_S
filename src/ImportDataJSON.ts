import {Autor} from './Autor';
import { IAutor } from './IAutor';

type Select = HTMLSelectElement | null;
type Table = HTMLTableRowElement | null;
type List = HTMLDataListElement | null;

export class ImportDataJSON {
  private _autorzy: Autor[];

  constructor(url:string, viewOption:string,tableList:string, listNum:string, listDots:string) {
    const selectElement: Select = document.getElementById(viewOption) as HTMLSelectElement;
    const tableListElement: Table = document.getElementById(tableList) as HTMLTableRowElement;
    const listNumElement: List = document.getElementById(listNum) as HTMLDataListElement;
    const listDotsElement: List = document.getElementById(listDots) as HTMLDataListElement;

    selectElement?.addEventListener('change',()=>{
      this.json(url, selectElement, tableListElement, listNumElement, listDotsElement);
    });
    
  }
  json(url:string, selectElement:Select, tableListElement:Table, listNumElement:List, listDotsElement:List) {
    console.log(url);
    return fetch(url)
    .then(response => response.json())
    .then(data=>data.map(d=><IAutor>d))
    .then(Autor => Autor.forEach(p => {
      if(selectElement.value == "tableList"){
        tableListElement.innerHTML += `<tr><td>${p._imie}</td><td>${p._nazwisko}</td></tr>`;
      } else if(selectElement.value == "listNum") {
        listNumElement.innerHTML += `<li>${p._imie} ${p._nazwisko}</li>`;
      } else if(selectElement.value == "listDots") {
        listDotsElement.innerHTML += `<li>${p._imie} ${p._nazwisko}</li>`;
      }
      
    }));
  }
}

