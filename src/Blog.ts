import {Autor} from './Autor'
import {Artykul} from './Artykul'

class Blog {
  private _id: number;
  private _nazwa: string;
  private _autor: Autor;
  private _artykuly: Artykul[];


  getNazwa(): string {
    return this._nazwa;
  }

  setNazwa(value: string) {
    this._nazwa = value;
  }

  getAutor(): Autor {
    return this._autor
  }

  setAutor(value: Autor) {
    this._autor = value;
  }

  constructor(nazwa: string, autor: Autor){
    if(!nazwa){
      throw new Error("Nazwa nie moze być pusta.");
    }
    this._nazwa = nazwa;
    this._autor = autor;
  }

  dodajArtykul(artykul: Artykul): void {
    this._artykuly.push(artykul);
  }

  pobierzTytulyArtykulow(): string[] {
    return this._artykuly.map(artykul => artykul.getTytul());
  }

  pobierzArtykul(tytul: string) {
    return this._artykuly.find(artykul => artykul.getTytul() === tytul);
  }

}