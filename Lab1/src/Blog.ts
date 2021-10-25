import { Artykul } from "./Artykul";
import { Autor } from "./Autor";
import { IExportDataJSON } from "./IExportDataJSON";

export class Blog implements IExportDataJSON{
    private static _count:number = 0;
    private _id:number;
    private _nazwa:string;
    private _artykuly:Artykul[];
    private _autor:Autor;

    constructor(nazwa:string, autor:Autor){
        this._id = Blog._count++;
        this._nazwa = nazwa;
        this._autor = autor;
        this._artykuly = [];
    }

    get nazwa():string {return this._nazwa}
    set nazwa(value:string) {this._nazwa = value}

    get autor():Autor {return this._autor}
    set autor(value:Autor) {this._autor = value}

    dodajArtykul(artukul:Artykul):void{
        this._artykuly.push(artukul);
    }

    pobierzTytulyArtykulow():string[]{
        const tytuly = [];
        this._artykuly.forEach(artykul => {
            tytuly.push(artykul.tytul);
        })

        return tytuly;
    }

    pobierzArtykul(tytul:string){
        let artykul = null;

        this._artykuly.forEach(artykul => {
            if(artykul.tytul === tytul){
                artykul = artykul;
            }
        })

        return artykul;
    }

    exportData():void{
        const json = JSON.stringify(this._autor);
        console.log(json);
    }
}