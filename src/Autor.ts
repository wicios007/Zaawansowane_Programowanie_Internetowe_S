class Autor{
    private _id?:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    constructor(imie:string,nazwisko:string){
        this._imie=imie;
        this._nazwisko=nazwisko;
    }

get imie():string{return this._imie;}
set imie(im:string){this._imie=im}
get nazwisko():string{return this._nazwisko;}
set nazwisko(nazw:string){this._nazwisko=nazw}
get email():string{return this.email;}
set email(mail:string){this._email=mail}


checker(mail:string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase())
}
}