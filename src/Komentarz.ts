class Komentarz
{
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[]
    private _nick: string;

    getTresc(): string
    {
        return this._tresc;
    }

    setTresc(value: string)
    {
        this._tresc = value;
    }

    getData(): Date
    {
        return this._data;
    }

    setData(value: Date)
    {
        this._data = value;
    }

    getNick(): string
    {
        return this._nick;
    }

    setNick(value: string)
    {
        this._nick = value;
    }
}