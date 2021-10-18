class Autor 
{
    private _id:number;
    private _imie?:string;
    private _nazwisko?:string;
    private _email?:string;
    regexp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
    constructor(imie:string, nazwisko:string)
    {
        this._imie=imie;
        this._nazwisko=nazwisko;
    }

    get imie():string {return this._imie;}
    set imie(value:string) {this._imie=value;}

    get nazwisko():string {return this._nazwisko;}
    set nazwisko(value:string) {this._nazwisko=value;}

    get email():string {return this._email;}
    set email(value:string) {this._email=value;}
}