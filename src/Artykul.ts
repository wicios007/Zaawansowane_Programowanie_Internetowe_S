class Artykul
{
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    get Tytul(): string 
    {
        return this._tytul;
    }

    set Tytul(value: string)
    {
        this._tytul = value;
    }

    get Tresc(): string
    {
         return this._tresc;
    }

    set Tresc(value: string) 
    {
        this._tresc = value;
    }

    constructor(tytul: string, tresc: string)
    {
        this._tytul = tytul;
        this._tresc = tresc;
    }

    dodajKomentarz(komentarz: Komentarz): void
    {
        
    }

    pobierzKomentarze(): Komentarz[]
    {
        
    }
}