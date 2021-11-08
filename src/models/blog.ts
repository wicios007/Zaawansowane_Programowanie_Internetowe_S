import { Author } from './autor';
import { Article } from './artykul';


export class Blog {
    private _id: number;
    private _name: string;
    private _author: Author;
    private _articles: Article[];

    get Name(): string {
        return this._name;
    }

    set Name(value: string) {
        this._name = value;
    }

    get Author(): Author {
        return this._author;
    }

    set Author(value: Author) {
        this._author = value;
    }

    constructor(name: string, author: Author) {
        this._name = name;
        this._author = author;
    }

    addArticle(article: Article): void {
        this._articles.push(article);
    }

    getArticleTitles(): string[] {
        return this._articles.map(x => x.Title);
    }

    getArticle(title: string): Article | undefined{
        return this._articles.find(x => x.Title === title);
    }
}