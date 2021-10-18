class Autor
{
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    getImie(): string
    {
        return this._imie;
    }

    setImie(value: string)
    {
        this._imie = value;
    }

    getNazwisko(): string
    {
        return this._nazwisko;
    }

    setNazwisko(value: string)
    {
        this._nazwisko = value;
    }

    getEmail(): string
    {
        return this._email;
    }

    setEmail(value: string)
    {
        this._email = value;
    }

    constructor(imie: string, nazwisko: string)
    {
        this._imie = imie;
        this._nazwisko = nazwisko;
    }
}