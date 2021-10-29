class Artykul 
{
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[]

    get tytul (){
        return this._tytul
    }

    get tresc(){
        return this._tresc;
    }
    

    constructor(tytul:string, tresc:string)
    {
        this._tytul = tytul;
        this._tresc = tresc;
    }

    public dodajKomentarz (komentarz: Komentarz) : void
    {

    }

    // public pobierzKomentarze () : Komentarz[]
    // {

    // }

}