class Autor
{
    private _id:number
    private _imie:string
    private _nazwisko:string
    private _email:string
    get imie():string {return this._imie;}
    set imie(value:string) {this._imie=value;}
    get nazwisko():string {return this._nazwisko;}
    set nazwisko(value:string) {this._nazwisko=value;}
    get email():string {return this._email;}
    set email(value:string) {this._email=value;}

    constructor(imie:string,nazwisko:string)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
    }
}