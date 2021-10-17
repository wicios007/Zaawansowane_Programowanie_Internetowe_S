export class Artykul {
  private _id: number;
  private _tytul: string;
  private _tresc: string;
  private _dataUtworzenia: Date;
  private _komentarze: Komentarz[]

  constructor(tytul: string, tresc: string) {
    if(!tytul){
      throw new Error("Tytul nie moze byc pusty.");
    }
    this._tytul = tytul;
    this._tresc = tresc;
    this._dataUtworzenia = new Date();
  }

  getTytul(): string {
    return this._tytul;
  }

  setTytul(value: string) {
    this._tytul = value;
  }

  setTresc(): string {
    return this._tresc;
  }

  getTresc(value: string) {
    this._tresc = value;
  }

  dodajKomentarz(komentarz: Komentarz): void {
    this._komentarze.push(komentarz);
  }

  pobierzKomentarz(): Komentarz[] {
    return this._komentarze;
  }
}