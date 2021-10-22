class Komentarz
{
    private _tresc:string
    private _data:Date
    private _odpowiedzi: Komentarz[]
    private _nick:string
    get tresc():string {return this._tresc;}
    set tresc(value:string) { this._tresc=value;}
    get data():Date {return this._data;}
    set data(value:Date) { this._data=value;}
    get nick():string {return this._nick;}
    set nick(value:string) {this._nick=value}

    constructor(tresc:string,nick:string)
    {
        this.tresc=tresc;
        this.nick=nick;
    }

    dodajOdpowiedz(odpowiedz:Komentarz)
    {
        return this._odpowiedzi.push(odpowiedz);
    }
    function pobierzOdpowiedzi():Komentarz[]
    {

    }
}