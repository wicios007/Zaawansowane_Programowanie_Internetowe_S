
class Artykul{
    private _id : number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    constructor(tytul: string, tresc: string)
    {
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }
    get tytul():string{return this._tytul}
    set tresc(value:string) {this._tresc = value;}

    dodajKomentarz(komentarz: Komentarz)
    {
        this._komentarze.push(komentarz);
    }
    pobierzKomentarze():Komentarz[]{
        return this._komentarze;
    }
}
