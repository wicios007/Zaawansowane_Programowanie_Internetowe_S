"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Artykul_1 = require("./Artykul");
class Blog {
    constructor(nazwa, autor) {
        this._nazwa = nazwa;
        this._autor = autor;
    }
    get nazwa() { return this._nazwa; }
    get autor() { return this._autor; }
    dodajArtykul(artykul) { this._artykuly.push(artykul); }
    pobierzTytulyArtykulow() {
        var array = [];
        this._artykuly.forEach(artykul => array.push(artykul.tytul));
        return array;
    }
    pobierzArtykul(tytul) {
        var singleArticle = new Artykul_1.Artykul("Art_1", "This is example article");
        return singleArticle;
    }
}
