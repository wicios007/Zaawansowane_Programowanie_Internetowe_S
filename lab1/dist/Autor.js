"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(imie, nazwisko) {
        this._imie = imie;
        this._nazwisko = nazwisko;
        this._email = `${imie}.${nazwisko}@gmail.com`;
    }
    get imie() { return this._imie; }
    set imie(value) { this._imie = value; }
    get nazwisko() { return this._nazwisko; }
    set nazwisko(value) { this._nazwisko = value; }
    get email() { return this._email; }
    set email(value) { this._email = value; }
}
exports.Autor = Autor;
