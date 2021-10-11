class Autor
{
    private id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;
    
    set Imie(imie:string)
    {
        this._imie = imie;
    }

    get Imie()
    {
        return this._imie;
    }

    set Nazwisko(nazwisko:string)
    {
        this._nazwisko = nazwisko;
    }

    get Nazwisko()
    {
        return this._nazwisko;
    }

    set Email(email:string)
    {
        this._email = email
    }

    get Email()
    {
        return this._email;
    }
}