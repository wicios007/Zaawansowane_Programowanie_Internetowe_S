class Blog{
    private _id : number;
    private _nazwa : string;
    private _autor : Autor;
    private _artykuly : Artykul[];

    constructor(nazwa : string, autor : Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }
    
    dodajArtykul(artykul : Artykul) : void{

    }
    pobierzTytulyArtykulow() : string[]{
        var array : string[] = [];
        return array;

    }
    pobierzArtykul(tytul : string) : Artykul{
        var article : Artykul = new Artykul("Proszek do prania", "vanish");
        return article;
    }

}