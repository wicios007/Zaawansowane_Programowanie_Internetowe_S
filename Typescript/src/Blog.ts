class Blog{
    private _id?:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly?:Artykul[]


    constructor(nazwa:string,autor:Autor){
        this._nazwa=nazwa;
        this._autor=autor;
    }

    get nazwa(){return this._nazwa};
    set nazwa(n:string){this._nazwa=n};
    get autor(){return this._autor};
    set autor(au:Autor){
        this._autor=au;
    }

    dodajArtykol(artykul:Artykul):void{}
    pobierzTytulyArtykulow():string[]{return []}
    pobierzArtykul(tytul:string){}
}