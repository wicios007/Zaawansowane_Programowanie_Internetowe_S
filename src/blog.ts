class Blog{
    private _id?:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly?:Artykul[];

    constructor(nazwa:string, autor:Autor){
        this._nazwa=nazwa;
        this._autor = autor;
    }

    //properties
    get nazwa():string {return this._nazwa;}
    set nazwa(value:string) {this._nazwa=value;}

    get autor():Autor {return this._autor;}
    set autor(value:Autor) {this._autor=value;}


    dodajArtykul(artykul : Artykul)
    {   

    }
    pobierzTytulyArtykulow():string[]
    {
        return;
    }
    pobierzArtykul(tytul: string){
        
    }  

}