"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artykul = void 0;
class Artykul {
    constructor(tytul, tresc) {
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }
    get tytul() { return this._tytul; }
    set tytul(value) { this._tytul = value; }
    get tresc() { return this._tresc; }
    set tresc(value) { this._tresc = value; }
    dodajKomentarz(komentarz) { this._komentarze.push(komentarz); }
    pobierzKomentarze() {
        var array = [];
        this._komentarze.forEach(kom => { array.push(kom); });
        return array;
    }
}
exports.Artykul = Artykul;
