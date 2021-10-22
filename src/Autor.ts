class Autor{
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    get imie() :string{
        return this._imie;
    }
    get nazwisko() :string{
        return this._nazwisko;
    }
    get email() :string{
        return this._email;
    }
    constructor(imie:string, nazwisko:string, email:string) {
        this._imie = imie;
        this._nazwisko = nazwisko;
        if(this.regexpEmail(this._email)) this._email = email;
        else throw("Niepoprawny e-mail");
    }
    public regexpEmail(value:string): boolean {
        var valid:boolean;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        valid = regexp.test(value);
        return valid;
    }
}