class Komentarz {
    _tresc:string;
    _date:Date;
    _odpowiedzi:Komentarz[];
    _nick:string;

    constructor(tresc:string, nick:string){
        this._tresc = tresc;
        this._nick = nick;
    }
}

