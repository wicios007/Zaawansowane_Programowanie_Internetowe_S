class Artykuł {
    _id:number;
    _tytul:string;
    _tresc:string;
    _dataUtworzenia: Date;
    _komentarze: Komentarz[];

    constructor(tytul:string,  tresc:string) {
        this._tytul = tytul;
        this._tresc = tresc;
    }

    get tytul():string {
        return this._tytul;
    }

    set tytul(tytul:string) 
    {
        this._tytul = tytul;
    }

    get tresc():string 
    {
        return this._tresc;
    }
    set tresc(tresc:string) 
    {
        this._tresc = tresc;
    }

    dodajKomentarz(komentarz:Komentarz): void {
        
    }

    pobierzKomentarze() :Komentarz[] {

    }
}