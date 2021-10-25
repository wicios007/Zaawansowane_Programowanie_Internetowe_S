export class Comment{
    private _content : string;
    private _date : Date;
    private _answers : Comment[];
    private _nick: string;

    public content : string;
    public date : Date;
    public nick : string;

    constructor(content : string, nick : string){
        this._content = content;
        this._nick = nick;
    }

    addAnswer(answer : Comment) : void{
    }
    getAnswer() : Comment[]{
        return;
    }
}