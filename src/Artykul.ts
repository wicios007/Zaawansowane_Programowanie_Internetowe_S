class Artykul{
    private _id?:number;
    private _tytul:string;
    private _tresc?:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    constructor(tytul:string,tresc:string){
        this._tytul=tytul;
        this._tresc=tresc;
        let date=
        this._dataUtworzenia=new Date();
    }

    get tytul(){return this._tytul}
    set tytul(tyt:string){this._tytul=tyt}
    get tresc(){return this._tresc}
    set tresc(tre:string){this._tresc=tre}

    dodajKomentarz(komentarz:Komentarz):void{}
    pobierzKomentarze():Komentarz[]{return}
}