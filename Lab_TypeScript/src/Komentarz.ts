export class Komentarz
{
    _tresc: string;
    _data: Date;
    _odpowiedzi: Komentarz[];
    _nick: string;

    get Tresc()
    {
        return this._tresc;
    }
    set Tresc(tresc: string)
    {
        this._tresc = tresc;
    }

    get Data()
    {
        return this._data;
    }
    set Data(data:Date)
    {
        this._data = data
    }

    get Nick()
    {
        return this._nick;
    }
    set Nick(nick: string)
    {
        this._nick = nick;
    }

    constructor(tresc: string, nick: string)
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