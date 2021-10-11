class Artykul{

    private _id : number;
    private _tytul : string;
    private _tresc : string;
    private _dataUtworzenia : Date;
    private _komentarze : Komentarz[];
    
    constructor(tytul : string, tresc : string){
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }

    dodajKomentarz(komentarz : Komentarz) : void{

    }

    pobierzKomentarze() : Komentarz[]{
        var array : Komentarz[] = [];
        return array;
    }

}