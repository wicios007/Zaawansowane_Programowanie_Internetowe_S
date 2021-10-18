

export class Autor{

    private _id : number;
    private _imie : string;
    private _nazwisko : string;
    private _email : string;


    constructor(imie : string, nazwisko : string, email : string){
        this._imie! = imie;
        this._nazwisko! = nazwisko;
        if(this.emailChecker(email))
            this._email! = email;
    }


    private emailChecker(email : string) : boolean{
        var regexp = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
        if(regexp.match(email))
            return true;
        else
            return false;
    }
}