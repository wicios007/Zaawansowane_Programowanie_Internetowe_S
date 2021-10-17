class Blog{
    private _id : number;
    private _nazwa : string;
    public get nazwa() : string {
        return this._nazwa;
    }
    public set nazwa(v : string) {
        this._nazwa = v;
    }
    
    private _autor : Autor;
    public get autor() : Autor {
        return this._autor;
    }
    public set autor(v : Autor) {
        this._autor = v;
    }
    
    private _artykuly : Artykul[];


    

    constructor(nazwa : string, autor : Autor){
        this._nazwa! = nazwa;
        this._autor! = autor;
    }
    
    dodajArtykul(artykul : Artykul) : void{
        this._artykuly.push(artykul);
    }
    pobierzTytulyArtykulow() : string[]{
        var array : string[] = [];
        this._artykuly.forEach(artykul => array.push(artykul.tytul));
        return array;

    }
    pobierzArtykul(tytul : string) : Artykul{
        var article : Artykul = new Artykul("Proszek do prania", "vanish");
        return article;
    }

}