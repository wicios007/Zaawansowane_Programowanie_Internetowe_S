class Blog {
    private id: number;
    private nazwa: string;
    private autor: Autor;
    private artykule: Artykul[];
   
    constructor(nazwa: string, autor: Autor) {
      this.nazwa = nazwa;
      this.autor = autor;
    }

    get Id() {
        return this.id;
    }

    set Id(val) {
        this.id = val;
    }


    get Nazwa() {
        return this.nazwa;
    }

    set Nazwa(val) {
        this.nazwa = val;
    }
    
    get Autor() {
        return this.autor;
    }

    set Autor(val) {
        this.autor = val;
    }

 
    dodajArtykul(artykul: Artykul){
        this.artykule.push(artykul);
    }

    pobierzTytulyArtykulow(): string[] {
        return this.artykule.map(art => art.Tytul);
    }

    pobierzArtykul(tytul: string): Artykul {
        return this.artykule.find(art => art.Tytul == tytul);
    }
 
  }