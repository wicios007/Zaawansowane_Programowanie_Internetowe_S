class Komentarz {
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;
  
    public get tresc(): string {
      return this._tresc;
    }
    public set tresc(tresc: string) {
      this._tresc = tresc;
    }
  
    public get data(): Date {
      return this._data;
    }
    public set data(data: Date) {
      this._data = data;
    }
  
    public get nick(): string {
      return this._nick;
    }
    public set nick(nick: string) {
      this._nick = nick;
    }
  
    public constructor(tresc: string, nick: string) {}
    public dodajOdpowiedz(odpowiedz: Komentarz): void {}
    public pobierzOdpowiedzi(): Komentarz[] {
      return []
    }
  }
  
  export default Komentarz;