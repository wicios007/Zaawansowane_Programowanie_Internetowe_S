import { Author } from "./Author"
class Blog {
    private _id: number;
    private _name: string;
    private _author: Author;
    private _articles: Article[];

    constructor(name:string, author: Author) {
        // this._id = ??
        this._name = name;
        this._author = author;
    }

    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    public get author() : Author {
        return this._author;
    }
    public set author(v : Author) {
        this._author = v;
    }

    addArticle(article:Article):void{
        this._articles.push(article)
    }

    getArticlesTitles(): string[]{
            let titles: string[] = [];
            this._articles.forEach(article => {
                titles.push(article.title)
            });
            return titles;
    }
    getArticle(title: string){
        return this._articles[title];
    }
}