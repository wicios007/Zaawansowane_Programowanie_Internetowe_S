import { validateEmail } from "./helpers/validateEmail";

export class Autor {
  private _id: number;
  private _imie: string;
  private _nazwisko: string;
  private _email: string;

  constructor(imie: string, nazwisko: string, email: string) {
    if (!validateEmail(email)){
      throw new Error("Invalid e-mail")
    }
    this._imie = imie;
    this._nazwisko = nazwisko;
    this._email = email;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

}