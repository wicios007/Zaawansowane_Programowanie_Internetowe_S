class Komentarz{
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[]
    private _nick:string;

    constructor(tresc:string,nick:string){
        this._tresc=tresc;
        this._nick=nick;
    }

    get tresc():string{return this._tresc;}
    set tresc(tre:string){this._tresc=tre}
    get data():Date{return this._data}
    set data(dat:Date){this._data=dat}
    get nick():string{return this._nick}
    set nick(n:string){this._nick=n}

    dodajOdpowiedz(odpowiedz:Komentarz):void{}
    pobierzOdpowiedzi():Komentarz[]{return}
}