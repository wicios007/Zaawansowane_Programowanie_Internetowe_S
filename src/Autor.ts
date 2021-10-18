class Autor {
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    constructor(imie:string, nazwisko:string){
        this._imie = imie;
        this._nazwisko = nazwisko;     
    }

    get imie():string {
        return this._imie;
    }

    set imie(imie:string) 
    {
        this._imie = imie;
    }

    get nazwisko():string 
    {
        return this._nazwisko;
    }
    set nazwisko(nazwisko:string) 
    {
        this._nazwisko = nazwisko;
    }

    get email():string 
    {
        return this._email;
    }
    set email(email:string) 
    {
        this._email = email;
    }
}