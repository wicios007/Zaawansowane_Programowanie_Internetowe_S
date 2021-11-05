import { OperationCanceledException } from "typescript";

export class Autor {
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    get imie():string{
        return this._imie;
    }
    set imie(val:string){
        this._imie=val;
    }
    get nazwisko():string{
        return this._nazwisko;
    }
    set nazwisko(val:string){
        this._nazwisko=val;
    }
    get email():string{
        return this.email;
    }
    set email(val:string){
        this._email=val;
    }
    constructor(imie:string, nazwisko:string, email:string){
        this._imie=imie;
        this._nazwisko=nazwisko;
        this._email=email;
        // if(email===null)
            // throw new Error("email jest wymagany")
    }
}