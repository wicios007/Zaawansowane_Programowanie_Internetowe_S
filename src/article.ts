class Article {
    private _id : number;
    private _title : string;
    private _content : string;
    private _dateOfCreation: Date;
    private _comments : Comment[];

    public title : string;
    public content : string;

    constructor(title : string, content : string){
        this._title = title;
        this._content = content;
    }

    addComment(comment : Comment) : void{
    }
    getComments() : Comment[]{
        return;
    }

    private get dateOfCreation(){
        return this._dateOfCreation;
    }
    private set dateOfCreation(date : Date){
        date = new Date();
        this._dateOfCreation = date;
    }
    
}