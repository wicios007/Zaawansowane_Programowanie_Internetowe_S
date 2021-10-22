class Autor{
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    get Imie(): string{
        return this._imie;
    }

    set Imie(value:string){
        this._imie = value;
    }

    get Nazwisko(): string{
        return this._nazwisko;
    }

    set Nazwisko(value:string){
        this._nazwisko = value;
    }

    get Email(): string{
        return this._email;
    }

    set Email(value:string){
        this._email = value;
    }

    constructor(imie:string, nazwisko:string){
        this._imie = imie;
        this._nazwisko = nazwisko;
    }

}
