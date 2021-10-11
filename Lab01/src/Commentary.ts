class Commentary {
    private _content: string;
    private _date: Date;
    private _replies: Commentary[];
    private _nick: string;

    constructor(content: string, nick: string) {
        this._content = content;
        this._nick = nick;
    }

    public get content(): string {
        return this._content;
    }
    public set content(v: string) {
        this._content = v;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(v: Date) {
        this._date = v;
    }
    public get nick(): string {
        return this._nick;
    }
    public set nick(v: string) {
        this._nick = v;
    }

    addReply(reply: Commentary): void {
        this._replies.push(reply);
    }
    getReplies(): Commentary[]{
        return this._replies;
    }
}
