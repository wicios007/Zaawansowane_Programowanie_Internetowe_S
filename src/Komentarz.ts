class Komentarz {
  private _tresc:string;
  private _data:Date;
  private _odpowiedzi: Komentarz[];
  private _nick: string;

  constructor(tresc:string, nick:string)
  {
      this._tresc=tresc;
      this._nick=nick;
  }

      getTresc(): string {
      return this._tresc;
    }
  

    setTresc(value: string) {
      this._tresc = value;
    }

  
    getData(): Date {
      return this._data;
    }
  


    setData(value: Date) {
      return this._data = value;
    }
  


    getNick(): string {
      return this._nick;
    }
  

    setNick(value: string) {
      this._nick = value;
    }
  

    dodajOdpowiedz(odpowiedz: Komentarz): void {
      
    }
  

    pobierzOdpowiedzi(): Komentarz[] {
      return this._odpowiedzi;
    }
  
}