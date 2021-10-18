export class Autor{
  private static _count:number = 0;
  private _id:number;
  private _imie:string;
  private _nazwisko:string;
  private _email:string;

  constructor(imie:string, nazwisko:string){
      this._id = Autor._count++;
      this._imie = imie;
      this._nazwisko = nazwisko;
      this._email = `${imie}.${nazwisko}@gmail.com`;
  }

  get imie():string {return this._imie}
  set imie(value:string) {this._imie = value}

  get nazwisko():string {return this._nazwisko}
  set nazwisko(value:string) {this._nazwisko = value}

  get email():string {return this._email}
  set email(value:string) {this._email = value}


}