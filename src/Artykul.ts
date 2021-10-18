class Artykul {
  private _tytul: string;
  private _tresc: string;
  private _dataUtworzenia: Date;
  private _komentarze: Komentarz[];

  constructor(tytul: string, tresc: string)
  {
  
      this._tytul=tytul;
      this._tresc=tresc;

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
  
    }

  
    pobierzKomentarz(): Komentarz[] {
      return 
    }
}