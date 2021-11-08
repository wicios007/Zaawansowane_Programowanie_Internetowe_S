import { Author } from './models/autor';

export default interface DataFetcher {
    getAuthorData(item: HTMLElement | string): Author[] | Promise<Author[]> ;
}

export class HtmlTableData implements DataFetcher {
    getAuthorData(table: HTMLElement): Author[] {
        const authors: Author[] = [];
        if (table) {
            const data: any[] = table.innerText.split('\n');
            data.forEach(x => {
                const author = x.split('\t');
                authors.push(new Author(author[0], author[1]))
            })
        }
        return authors;
    }
}

export class HTMLListData implements DataFetcher {
    getAuthorData(list: HTMLUListElement): Author[] {
        const authors: Author[] = [];

        if (list) {
            const authorList = [...list.children as HTMLCollection];
            authorList.forEach(x => {
                const author = x.innerHTML.split(' ');
                if (author.length === 2) {
                    authors.push(new Author(author[0], author[1]))
                }
            })
        }
        return authors;
    }
}

interface author {
    first_name: string,
    last_name: string
}

export class JSONData implements DataFetcher {
    getAuthorData(file: string): Promise<Author[]> | Promise<any> {
        return fetch(file)
            .then(res => res.json())
            .then(res => {
                if (!res.ok){
                    throw new Error(res.statusText)
                }
                return res.json();
            }).catch(err => {
                console.log(err);
            });
    }
}

