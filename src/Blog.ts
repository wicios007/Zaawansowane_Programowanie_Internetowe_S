class Blog
{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artugly: Artykul[];
    get nazwa():string {return this._nazwa;}
    set nazwa(value:string){this._nazwa=value;}
    get autor():Autor {return this._autor;}
    set autor(value:Autor) {this._autor=value;} 

    constructor(nazwa:string,autor:Autor)
    {
        this.nazwa=nazwa;
        this.autor=autor;
    }
}