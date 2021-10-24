import { Author } from './models/autor';
import DataFetcher, { JSONData } from './data-fetcher';

interface DisplayOption {
    id: number,
    name: string,
    tagName: string
}

export class Zad5_6_7 {
    private _authors: Author[];
    private bodyRef = document.body;
    private displayAuthorContainer: HTMLElement;

    displayList: DisplayOption[] = [
        {
            id: 0,
            name: 'ul',
            tagName: 'li'
        },
        {
            id: 1,
            name: 'ol',
            tagName: 'li'
        },
        {
            id: 2,
            name: 'table',
            tagName: 'tr'
        },
    ];

    constructor() {
        const dataFetcher: DataFetcher = new JSONData();

        (dataFetcher.getAuthorData('./dane.json') as Promise<any>)
            .then(data => {
                this._authors = data.map(x => new Author(x.first_name, x.last_name));
                this.createAppInstance();
            })
            .catch(err => {
                console.log(err);
            });
    }

    createAppInstance() {
        this.displayAuthorContainer = document.createElement('div');

        const selectList: HTMLSelectElement = document.createElement('select');
        this.displayList.forEach(opt => {
            const option: HTMLOptionElement = document.createElement('option');
            option.value =  String(opt.id);
            option.text =  String(opt.name);
            selectList.appendChild(option);
        });
        selectList.style.width = '100px';

        selectList.addEventListener('change', () => {this.displayAuthorsList(this.displayList.find(x => x.id === +selectList.value))});
        this.bodyRef.appendChild(selectList);
        this.bodyRef.appendChild(this.displayAuthorContainer);

        //Init first call with default value
        this.displayAuthorsList();
    }

    displayAuthorsList(option: DisplayOption = this.displayList[0]) {
        if (this._authors?.length && option) {
            this.displayAuthorContainer.innerHTML = '';
            const el = document.createElement(option.name);
            this._authors.forEach(author => {
                const node = document.createElement(option.tagName);
                node.innerHTML = option.tagName === 'tr' ? `<td>${author.FirstName} ${author.LastName}</td>` : `${author.FirstName} ${author.LastName}`;
                el.append(node);
            })

            this.displayAuthorContainer.appendChild(el);
        }
    }
}