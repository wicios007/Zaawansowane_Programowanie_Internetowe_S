class Autor {
  private _id: number;
  private _imie: string;
  private _nazwisko: string;
  private _email: string;

  constructor(id: number, imie: string, nazwisko: string, email: string) {
    this._id = id;
    this._imie = imie;
    this._nazwisko = nazwisko;
    this._email = email;
  }

  getEmail(): string {
    return this._email;
  }
  seEmail(value: string) {
    this._email = value;
  }


}