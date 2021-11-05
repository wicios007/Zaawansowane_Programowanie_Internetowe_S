import { Komentarz } from "./komentarz";

export class Artykul{
    private _id:number ;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    get tytul():string{
        return this._tytul;
    }
    set tytul(val:string){
        this._tytul=val;
    }
    get tresc():string{
        return this._tresc;
    }
    set tresc(val:string){
        this._tresc=val;
    }
    constructor(tytul:string,tresc:string){
        this._tytul=tytul;
        this._tresc=tresc;
        this._dataUtworzenia=new Date();
    }

    public dodajKomentarz(komentarz : Komentarz):void{
        this._komentarze.push(komentarz);
    }
    public pobierzKomentarze():Komentarz[]{
        return this._komentarze;
    }
}