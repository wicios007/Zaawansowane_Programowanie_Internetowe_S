class Artykul {
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    
    constructor(tresc:string,tytul:string){
        this._tresc = tresc;
        this._tytul = tytul;
        this._dataUtworzenia = new Date();
        this._komentarze = [];  
    }

    get tresc():string { return this._tresc;}
    set tresc(value:string) {this._tresc = value}

    get tytul():string { return this._tytul;}
    set tytul(value:string) {this._tytul = value}

    

    dodajKomentarz(komentarz:Komentarz):void{
        this._komentarze.push(komentarz);
    }

    pobierzOdpowiedze():Komentarz[]{
        return this._komentarze;
    }
}