class Artykul
{
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    getTytul(): string 
    {
        return this._tytul;
    }

    setTytul(value: string)
    {
        this._tytul = value;
    }

    getTresc(): string
    {
         return this._tresc;
    }

    setTresc(value: string) 
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