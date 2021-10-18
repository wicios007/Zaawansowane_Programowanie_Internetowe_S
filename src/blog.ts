class Blog {
    private _id : number;
    private _name : string;
    private _author : Author;
    private _articles : Article[];

    public name : string;
    public author : Author;

    constructor(name : string, author : Author){
        this._name = name;
        this._author = author;
    }
    
    addArticle(article: Article) : void {
    }
    getTitlesOfArticles() : string[] {
        return;
    }
    getArticle(title : string){
    }
}