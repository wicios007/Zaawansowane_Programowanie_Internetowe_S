import { Autor } from './Autor'
import { Artykul } from './Artykul'

class Blog
{
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    set Nazwa(nazwa:string)
    {
        this._nazwa = nazwa;
    }
    get Nazwa()
    {
        return this._nazwa;
    }

    set Autor(autor:Autor)
    {
        this._autor = autor;
    }

    constructor(nazwa:string, autor:Autor)
    {
        if(!nazwa)
            throw new Error ("Nazwa nie może być pusta!");
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul:Artykul):void
    {
        this._artykuly.push(artykul);
    }

    pobierzTytulyArtykulow():string[]
    {
        var tytuly: string[] = []
        for(let i = 0; i < this._artykuly.length; i++)
        {
            tytuly.push(this._artykuly[i].Tytul);
        }
        return tytuly;
    }

    pobierzArtykul(tytul:string):Artykul | undefined
    {
        return this._artykuly.find(a => a.Tytul === tytul)
    }
}