class Komentarz {
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[];
    private _nick:string;


    constructor(tresc:string,nick:string){
        this._tresc = tresc;
        this._nick = nick;
    }

    get tresc():string { return this._tresc;}
    set tresc(value:string) {this._tresc = value}

    get nick():string { return this._nick;}
    set nick(value:string) {this._nick = value}

    get data():Date { return this._data;}
    set data(value:Date) {this._data = value}

    dodajOdpowiedz(odpowiedz:Komentarz):void{
        this._odpowiedzi.push(odpowiedz);
    }

    pobierzOdpowiedz():Komentarz[]{
        return this._odpowiedzi;
    }
}