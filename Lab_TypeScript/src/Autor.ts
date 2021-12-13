export class Autor
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

    private isEmailValid(email) {
        const emailRegexp = new RegExp(
          /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
        )
        return emailRegexp.test(email)
      }

    constructor(imie:string, nazwisko:string, email:string)
    {
        if(!this.isEmailValid(email))
            throw new Error("Email nie jest poprawny!")
        this._imie = imie;
        this._nazwisko = nazwisko;
        this._email = email;

    }
}