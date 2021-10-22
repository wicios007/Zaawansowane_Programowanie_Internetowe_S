class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    get nazwa() :string{
        return this._nazwa;
    }
    get autor() :Autor{
        return this._autor;
    }
    constructor (nazwa:string, autor:Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }
    dodajArtykul(artykul:Artykul):void
    {
        this._artykuly.push(artykul);
    }
    pobierzTytulyArtykulow():string[]{
        var tytuly: string[] = []
        for(let i = 0; i < this._artykuly.length; i++) tytuly.push(this._artykuly[i].tytul);
        return tytuly;
    }
    pobierzArtykul(tytul:string):Artykul | undefined{
        return this._artykuly.find(artykul => artykul.tytul === tytul);
    }
}