import Autor from './Autor';
import Artykul from './Artykul';

class Blog {
  private _id: number;
  private _nazwa: string;
  private _autor: Autor;
  private _artykuly: Artykul[];

  public get nazwa(): string {
    return this._nazwa;
  }
  public set nazwa(nazwa: string) {
    this._nazwa = nazwa;
  }

  public get autor(): Autor {
    return this._autor;
  }
  public set autor(autor: Autor) {
    this._autor = autor;
  }

  public constructor(nazwa: string, autor: Autor) {
    // super();
  }

  public dodajArtykul(artykul: Artykul): void {}
  public pobierzTytulyArtykulow(): string[] {
    return [];
  }
  public pobierzArtykul(tytul: string) {}
}

export default Blog;