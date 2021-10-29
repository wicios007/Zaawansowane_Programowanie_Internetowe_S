import { Autor } from "./autor";

class Blog 
{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    get nazwa (){
        return this._nazwa;
    }
    get Autor (){
        return this._autor;
    }

    constructor (nazwa:string, autor:Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    public dodajArtykul(artykul:Artykul): void
    {

    }

    // public pobierzTytulyArtykulow(): string[]
    // {
    //     return;
    // }

    public pobierzArtykul(tytul: string)
    {
        return tytul;
    }

}