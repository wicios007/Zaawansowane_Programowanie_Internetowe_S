class Autor{
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    constructor(imie: string, nazwisko: string){
        this._imie = imie;
        this._nazwisko = nazwisko;
    }

    public get imie(): string {return this._imie; }
    public set imie(value: string) {this._imie = value; } 

    public get nazwisko(): string {return this._nazwisko; }
    public set nazwisko(value: string) {this._nazwisko = value; }

    public get email(): string {return this._email; }
    public set email(value: string) {this._imie = value; }
}