class Komentarz
{
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    constructor(tresc: string, nick: string)
    {
        this._tresc = tresc;
        this._nick = nick;
    }
}