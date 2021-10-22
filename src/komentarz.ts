class Komentarz{
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get tresc(): string
    {
        return this._tresc;
    }

    set tresc(value: string)
    {
        this._tresc = value;
    }

    get data(): Date
    {
        return this._data;
    }

    set data(value: Date)
    {
        this._data = value;
    }

    get nick(): string
    {
        return this._nick;
    }

    set tytul(value: string)
    {
        this._nick = value;
    }

    constructor(tresc: string, nick: string){
        this._tresc=tresc;
        this._nick=nick;
    }

    public dodajOdpowiedz(odpowiedz: Komentarz) : void{
        this._odpowiedzi.push(odpowiedz);
    }

    public pobierzOdpowiedzi() : Komentarz[]{
        return this._odpowiedzi;
    }
}