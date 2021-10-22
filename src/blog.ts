import { Autor } from "./autor";
import { Artykul } from "./artykul";

export class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    get nazwa():string{
        return this._nazwa;
    }
    set nazwa(val:string){
        this._nazwa=val;
    }
    get autor():Autor{
        return this._autor;
    }
    set autor(val:Autor){
        this._autor=val;
    }
    constructor(nazwa:string, autor:Autor){
        this._nazwa=nazwa;
        this._autor=autor;
    }
    dodajArtykul(artykul:Artykul):void{
        this._artykuly.push(artykul);
    }
    pobierzTytulyArtykulow():string[]{
        var tytuly:string[];
        this._artykuly.forEach(t=>tytuly.push(t.tytul))
        return tytuly;
    }

    pobierzArtykul(tytul:string):Artykul{
        return this._artykuly.find(artykul => artykul.tytul===tytul);
    }
}