import {Artykul} from "./Artykul"
import {Autor} from "./Autor"
class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    constructor(nazwa: string, autor: Autor)
    {
        this._nazwa! = nazwa
        this._autor! = autor
    }
    get nazwa(): string{return this._nazwa}
    get autor(): Autor{return this._autor}

    public dodajArtykul(artykul: Artykul): void{ this._artykuly.push(artykul)}
    public pobierzTytulyArtykulow() : string[]{
        var array : string[] = []
        this._artykuly.forEach(artykul => array.push(artykul.tytul))
        return array
    }
    public pobierzArtykul(tytul: string) {
        var singleArticle : Artykul = new Artykul("Art_1", "This is example article")
        return singleArticle
    }

}