import Komentarz from './Komentarz';
class Artykul extends Komentarz{
  private _idArtykulu: number;
  private _tytul: string;
  private _tresc: string;
  private _dataUtworzenia: Date = new Date();
  private _komentarze: Komentarz[];

  public get tytul(): string {
    return this._tytul;
  }
  public set tytul(tytul: string) {
    this._tytul = tytul;
  }

  public get tresc(): string {
    return this._tresc;
  }
  public set tresc(tresc: string) {
    this._tresc = tresc;
  }

  public constructor(tytul: string, tresc: string,nick:string) {
    super(tresc,nick)
    this._tytul=tytul;
    this._tresc=tresc;
  }
  public dodajKomentarz(komentarz: Komentarz): void {}
  public pobierzKomentarze(): Komentarz[] {
    return []
  }
}

export default Artykul;