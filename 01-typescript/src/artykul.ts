class Artykul {

    private _id: number;

    private _tytul: string;
    public get tytul(): string {
        return this._tytul;
    }
    public set tytul(v: string) {
        this._tytul = v;
    }


    private _tresc: string;
    public get tresc(): string {
        return this._tresc;
    }
    public set tresc(v: string) {
        this._tresc = v;
    }

    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    constructor(tytul: string, tresc?: string) {
        this._tytul! = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }

    dodajKomentarz(komentarz: Komentarz): void {
        this._komentarze.push(komentarz);
    }

    pobierzKomentarze(): Komentarz[] {
        var array: Komentarz[] = [];
        this._komentarze.forEach(element => {
            array.push(element);
        });
        return array;
    }

}