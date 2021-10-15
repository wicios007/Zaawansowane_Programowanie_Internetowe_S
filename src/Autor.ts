class Autor {
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;
  
    public get imie(): string {
      return this._imie;
    }
    public set imie(imie: string) {
      this._imie = imie;
    }
  
    public get nazwisko(): string {
      return this._nazwisko;
    }
    public set nazwisko(nazwisko: string) {
      this._nazwisko = nazwisko;
    }
  
    public get email(): string {
      return this._email;
    }
    public set email(email: string) {
      this._email = email;
    }
  
    public constructor(imie: string, nazwisko: string) {
        this._imie=imie;
        this._nazwisko=nazwisko;
    }
  }
  
  export default Autor;