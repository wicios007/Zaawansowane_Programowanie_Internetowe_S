class Artykul {
    private id: number;
    private tytul: string;
    private tresc: string;
    private dataUtworzenia: Date;
    private komentarze: Komentarz[]
   
    constructor(tytul: string, tresc: string) {
      this.tytul = tytul;
      this.tresc = tresc;
    }

    get Id() {
        return this.id;
    }

    set Id(val) {
        this.id = val;
    }


    get Tytul() {
        return this.tytul;
    }

    set Tytul(val) {
        this.tytul = val;
    }
    
    get Tresc() {
        return this.tresc;
    }

    set Tresc(val) {
        this.tresc = val;
    }

    get DataUtworzenia() {
        return this.dataUtworzenia;
    }

    set DataUtworzenia(val) {
        this.dataUtworzenia = val;
    }

    dodajKomentarz(komentarz: Komentarz) {
       this.komentarze.push(komentarz);
    }

    pobierzKomentarzez(): Komentarz[] {
        return this.komentarze;
    }
 
  }