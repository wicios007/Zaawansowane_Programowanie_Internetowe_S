class Blog 
{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[]

    get nazwa():string { return this._nazwa; }
    set nazwa(value:string):string { this._nazwa = value; }

    get autor():string { return this._autor; }
    set autor(value:string):string { this._autor = value; }

    constructor(nazwa:string, autor:Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul:Artykul)
}