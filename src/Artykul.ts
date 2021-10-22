class Artykul 
{
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[]

    get tytul ()
    {
        return this._tytul
    }

    get tresc()
    {
        return this._tresc;
    }
    

    constructor(tytul:string, tresc:string)
    {
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }

    public dodajKomentarz (komentarz: Komentarz) : void
    {
        this._komentarze.push(komentarz);
    }

    pobierzKomentarze(): Komentarz[]
    {
        var komentarze: Komentarz[] = [];
        for(let i = 0; i < this._komentarze.length; i++)
        {
            komentarze.push(this._komentarze[i])
        }
        return komentarze;
    }

}