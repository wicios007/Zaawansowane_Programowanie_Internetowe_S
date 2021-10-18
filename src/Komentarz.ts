class Komentarz {
    _tresc:string;
    _data:Date;
    _odpowiedzi:Komentarz[];
    _nick:string;

    constructor(tresc:string, nick:string){
        this._tresc = tresc;
        this._nick = nick;
    }

    get tresc():string {
        return this._tresc;
    }

    set tresc(tresc:string) 
    {
        this._tresc = tresc;
    }

    get data():Date {
        return this._data;
    }

    set data(data:Date) 
    {
        this._data = data;
    }

    get nick():string {
        return this._nick;
    }

    set nick(nick:string) 
    {
        this._nick = nick;
    }

    dodajOdpowiedz(odpowiedz:Komentarz):void {

    }

    pobierzOdpowiedzi():Komentarz[] {

    }
}

