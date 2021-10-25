class Article {
    private _id: number;
    private _title: string;
    private _content?: string;
    private _dateCreated: Date;
    private _comments: Commentary[];

    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
    }

    public get content(): string {
        return this._content || "";
    }
    public set content(v: string) {
        this._content = v;
    }

    constructor(title: string, content: string) {
        // this._id = ??
        this._title = title || "";
        this._content = content;
        this._dateCreated = new Date();
        
    }

    addComment(comment: Commentary): void{
        this._comments.push(comment);
    }
    getComments(): Commentary[] {
        return this._comments;
    }
    
}
