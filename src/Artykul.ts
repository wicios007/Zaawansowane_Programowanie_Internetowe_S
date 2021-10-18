class Artykul
{
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    constructor(tytul:string, tresc:string){
        this._tytul = tytul;
        this._tresc = tresc;
    }

    //properties
    get tytul():string {return this._tytul;}
    set tytul(value:string) {this._tytul=value;}

    get tresc():string {return this._tresc;}
    set tresc(value:string) {this._tresc=value;}

    dodajKomentarz(komentarz:Komentarz) {
        
    }
    pobierzKomentarze(): Komentarz[]{
        return;
    } 

}