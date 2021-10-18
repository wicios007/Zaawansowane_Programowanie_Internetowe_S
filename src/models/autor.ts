class Autor {
    private id: number;
    private imie: string;
    private nazwisko: string;
    private email: string;
   

    get Id() {
        return this.id;
    }

    set Id(val) {
        this.id = val;
    }


    get Imie() {
        return this.imie;
    }

    set Imie(val) {
        this.imie = val;
    }
    
    get Nazwisko() {
        return this.nazwisko;
    }

    set Nazwisko(val) {
        this.nazwisko = val;
    }

    get Email() {
        return this.email;
    }

    set Email(val) {
        this.email = val;
    }

    constructor(imie: string, nazwisko: string, id: number) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.id = id;
    }

  }