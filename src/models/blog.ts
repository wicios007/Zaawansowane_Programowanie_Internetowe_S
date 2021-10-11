import { Artykul } from "./artykul";
import { Autor } from "./autor";

export class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    get Nazwa(): string {
        return this._nazwa;
    }

    set Nazwa(value: string) {
        this._nazwa = value;
    }

    get Autor(): Autor {
        return this._autor;
    }

    set Autor(value: Autor) {
        this._autor = value;
    }

    constructor(nazwa: string, autor: Autor) {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    function dodajArtykul(artykul: Artykul): void {
            
        
    }
}