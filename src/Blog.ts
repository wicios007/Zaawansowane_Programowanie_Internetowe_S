import {Artykuł} from "./Artykuł"

class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    public constructor(nazwa: string, autor: Autor){
        this._nazwa = nazwa
        this._autor = autor
    }


}