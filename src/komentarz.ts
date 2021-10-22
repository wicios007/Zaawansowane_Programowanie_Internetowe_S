class Komentarz
{
    private _tresc : string;
    private _data : Date;
    private _odpowiedzi : Komentarz[]
    private _nick : string;

    get tresc (){
        return this._tresc;
    }

    get data (){
        return this._data;
    }

    get nick (){
        return this._nick;
    }

    constructor(tresc:string, nick:string)
    {
        this._tresc = tresc;
        this._nick = nick;
    }

    public dodajOdpowiedz(odpowiedz : Komentarz) : void
    {

    }

    // public pobierzOdpowiedzi() : Komentarz[]
    // {
    //     return
    // }
}