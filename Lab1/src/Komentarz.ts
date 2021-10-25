class Komentarz{
    private _tresc:string;
    private _data:Date;
    private _odpowiedz: Komentarz[]
    private _nick: string


    get tresc(): string
    {
        return this._tresc
    }

    get date(): Date
    {
        return this._data
    }

    get nick(): string
    {
        return this._nick
    }

    constructor(tresc: string, nick: string)
    {
        this._tresc=tresc
        this._nick=nick
    }

    public dodajOdpowiedz(odpowiedz: Komentarz):void
    {
        this._odpowiedz.push(odpowiedz)
    }

    public pobierzOdpowiedzi(): Komentarz[]
    {
        return this._odpowiedz
    }

}