

class Blog {
    private _id : number;
    private _nazwa : string;
    private _autor: Autor ;
    private _artykuly : Artykul[];


    constructor(nazwa: string, autor: Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }
    dodajArtykul(artykul: Artykul)
    {
        this._artykuly.push(artykul);
    }
    poberzTytulyArtykulow():string[]{
        var tytuly:string[];
        this._artykuly.forEach(o => tytuly.push(o.tytul) )
        return tytuly;
    }
    pobierzArtykul(tytul:string):Artykul
    {
        return this._artykuly.find(o => o.tytul == tytul);
    }
}