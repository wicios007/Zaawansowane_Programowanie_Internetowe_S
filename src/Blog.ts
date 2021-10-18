class Blog
{
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    getNazwa(): string
    {
        return this._nazwa;
    }

    setNazwa(value: string)
    {
        this._nazwa = value;
    }

    getAutor(): Autor
    {
        return this._autor;
    }

    setAutor(value: Autor)
    {
        this._autor = value;
    }

    constructor(nazwa: string, autor: Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul: Artykul): void
    {
        
    }

    pobierzTytulyArtykulow(): string[]
    {
        
    }

    pobierzArtykul(tutul: string)
    {

    }
}