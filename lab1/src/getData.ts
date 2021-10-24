import {Autor} from "./Autor"
import {Strategy} from "./strategy"

export class HtmlTableData implements Strategy {
    getAutorData(table: HTMLElement): Autor[] {
        const authors: Autor[] = [];
        if (table) {
            const data: any[] = table.innerText.split('\n');
            data.forEach(x => {
                const author = x.split('\t');
                authors.push(new Autor(author[0], author[1]))
            })
        }
        return authors;
    }
}
export class HtmlListData implements Strategy {
    getAutorData(list: HTMLUListElement): Autor[] {
        const autors: Autor[] = [];
        if (list) {
            const listofAutors: any[] = [...list.children as HTMLCollection]
            listofAutors.forEach(x => {
                const autor = x.innerHTML.split(' ');
                if(autor.length === 2) {
                    autors.push(new Autor(autor[0], autor[1]))
                }
            })
        }
        return autors;
    }

}

export class DataFetcherJson implements Strategy{ 
    getAutorData(file: string):Promise<Autor[]> | Promise<any> {
     return fetch(file)
     .then(res => res.json())
 }
 }