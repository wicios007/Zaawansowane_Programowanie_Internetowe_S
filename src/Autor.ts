 class Autor {
  private _id: number;
  private _imie: string;
  private _nazwisko: string;
  private _email: string;

  get imie() 
  {
      return this._imie;
  }

  get nazwisko() 
  {
      return this._nazwisko;
  }

  get email() 
  {
      return this._email;
  }

  set imie(imie: string) 
  {
      this._imie = imie;
  }

  set nazwisko(nazwisko: string) 
  {
      this._nazwisko = nazwisko;
  }

  set email(email: string) 
  {
      if (this.checkEmail(email))
          this._email = email;
      else
          throw new Error("Invalid email");
  }

  constructor(imie: string, nazwisko: string, email: string) 
  {
      this._imie = imie;
      this._nazwisko = nazwisko;
  }

  public checkEmail(value: string): boolean 
  {
      var checkbool :boolean;
      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      
      checkbool = regexp.test(value);

      console.log(checkbool);
      return checkbool
  }

}