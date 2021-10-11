class Blog{
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];
    
    

    constructor(nazwa: string, autor: Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }
    
    get nazwa():string{return this._nazwa;}
    get autor():Autor{return this._autor;}




}
