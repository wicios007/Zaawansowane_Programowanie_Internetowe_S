class Blog {
    private _id : number;
    private _nazwa : string;
    private _autor : Autor;
    private _artykuly : Artykul[];

    constructor(nazwa : string, autor : Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    get nazwa() : string { return this._nazwa; }
    set nazwa(value:string) { this._nazwa = value; }

    get autor() : Autor { return this._autor; }
    set autor(value:Autor) { this._autor = value; }

    public dodajArtykul(artykul: Artykul) : void 
    {
        this._artykuly.push(artykul)
    }

    public pobierzTytulyArtykulow(): string[]
    {
        let tyt: string[] = [];

        this._artykuly.forEach(artykul => {
            tyt.push(artykul.tytul)
        });
        return tyt;
    }

    public pobierzArtykul(tytul: string)
    {
        return this._artykuly[tytul];
    }
}