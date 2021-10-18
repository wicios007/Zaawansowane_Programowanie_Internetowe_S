"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Komentarz = void 0;
class Komentarz {
    constructor(tresc, nick) {
        this._tresc = tresc;
        this._nick = nick;
    }
    get tresc() { return this._tresc; }
    set tresc(value) { this._tresc = value; }
    get data() { return this._data; }
    set data(value) { this._data; }
    get nick() { return this._nick; }
    set nick(value) { this._nick = value; }
}
exports.Komentarz = Komentarz;
