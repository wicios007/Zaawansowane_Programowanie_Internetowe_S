class Komentarz
{
    private _tresc : string;
    private _data : Date;
    private _odpowiedzi : Komentarz[]
    private _nick : string;

    get tresc ()
    {
        return this._tresc;
    }

    get data ()
    {
        return this._data;
    }

    get nick ()
    {
        return this._nick;
    }

    constructor(tresc:string, nick:string)
    {
        this._tresc = tresc;
        this._nick = nick;
    }

    dodajOdpowiedz(komentarz: Komentarz): void
    {
        this._odpowiedzi.push(komentarz);
    }

    pobierzOdpowiedzi(): Komentarz[]
    {
        var odpowiedzi : Komentarz[] = [];
        for(let i = 0; i < odpowiedzi.length; i++)
        {
            odpowiedzi.push(odpowiedzi[i]);
        } 
        return odpowiedzi;
    }
}
