import {Komentarz} from "./Komentarz"

export class Artykul {
    private _id?: number
    private _tytul: string
    private _tresc: string
    private _dataUtworzenia: Date
    private _komentarze: Komentarz[]

    get tytul(): string {return this._tytul}
    set tytul(value: string) {this._tytul = value}

    get tresc(): string {return this._tresc}
    set tresc(value: string) {this._tresc = value}

    constructor(tytul: string, tresc: string){
        this._tytul!  = tytul
        this._tresc = tresc
        this._dataUtworzenia = new Date()
    }

    public dodajKomentarz(komentarz: Komentarz) : void {this._komentarze.push(komentarz)}
    public pobierzKomentarze() : Komentarz[]{
        var array: Komentarz[] = [];
        this._komentarze.forEach(kom => {array.push(kom)});
        return array
    }

}