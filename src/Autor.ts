type emailValidator = `${string}@${string}.${string}`;

export default class Autor {
  private _id: number;
  private _imie: string;
  private _nazwisko: string;
  private _email: emailValidator;

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

  public get email(): emailValidator {
    return this._email;
  }
  public set email(email: emailValidator) {
    // function validateEmail(email) {
    //   const re =
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }

    // if (validateEmail(email))
    this._email = email;
  }

  public constructor(imie: string, nazwisko: string, email: emailValidator) {
    this._imie = imie;
    this._nazwisko = nazwisko;

    // function validateEmail(email) {
    //   const re =
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }

    // if (validateEmail(email))
    this._email = email;
  }
}
