import { Comment } from './komentarz';


export class Article {
    private _id: number;
    private _title: string;
    private _content: string;
    private _createDate: Date;
    private _comments: Comment[];

    get Title(): string {
        return this._title;
    }

    set Title(value: string) {
        this._title = value;
    }

    get Content(): string {
        return this._content;
    }

    set Content(value: string) {
        this._content = value;
    }

    constructor(title: string, content: string) {
        this._title = title;
        this._content = content;
    }

    addComment(comment: Comment): void{
        this._comments.push(comment);
    }

    getComments(): Comment[]{
        return this._comments;
    }
}