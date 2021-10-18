import { Komentarz } from './Komentarz'

export class Artykul
{
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];
    
    get Tytul()
    {
        return this._tytul;
    }
    set Tytul(tytul:string)
    {
        this._tytul = tytul;
    }

    get Tresc()
    {
        return this._tresc;
    }
    set Tresc(tresc:string)
    {
        this._tresc = tresc;
    }

    constructor(tytul: string, tresc: string)
    {
        if(!tytul)
            throw new Error("Tytuł nie może być pusty");
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }

    dodajKomentarz(komentarz: Komentarz): void
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