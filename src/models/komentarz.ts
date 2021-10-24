export class Comment {
    private _content: string;
    private _date: Date;
    private _replies: Comment[];
    private _nick: string;

    get Content(): string {
        return this._content;
    }

    set Content(value: string) {
        this._content = value;
    }

    get Date(): Date {
        return this._date;
    }

    set Date(value: Date) {
        this._date = value;
    }

    get Nick(): string {
        return this._nick;
    }

    set Nick(value: string) {
        this._nick = value;
    }

    constructor(content: string, nick: string) {
        this._content = content;
        this._nick = nick;
    }

    addReply(reply: Comment): void {
        this._replies.push(reply);
    }

    getReplies(): Comment[] {
        return this._replies;
    }
}