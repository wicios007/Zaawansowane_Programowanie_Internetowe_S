class Artykul{
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    constructor(tytul: string, tresc: string){
        this._tytul = tytul;
        this._tresc = tresc;
    }

   /* public get tytul(): string {return this._tytul; }
    public set tresc(value: string) {this._tresc = value; } */

    public dodajKomentarz(komentarz: Komentarz): void{
        this._komentarze.push(komentarz);
    }

    public pobierzKomentarze(): Komentarz[]{
        return this._komentarze;
    }
}