class Komentarz {
    tresc: string;
    data: Date;
    nick: string;
    private odpowiedzi: Komentarz[]
   
    constructor(tresc: string, nick:string) {
      this.tresc = tresc;
      this.nick = nick;
    }

    get Tresc() {
        return this.tresc;
    }

    set Tresc(val) {
        this.tresc = val;
    }

    get Nick() {
        return this.nick;
    }

    set Nick(val) {
        this.nick = val;
    }

    get Data() {
        return this.data;
    }

    set Data(val) {
        this.data = val;
    }
    

    dodajKomentarz(komentarz:Komentarz) {
        this.odpowiedzi.push(komentarz)
    }

    pobierzOdpowiedzi(): Komentarz[] {
        return this.odpowiedzi;
    }
 
  }