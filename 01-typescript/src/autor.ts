

export class Autor{

    private _id : number;
    //private _imie : string;
    // private _nazwisko : string;
    // private _email : string;

    
    private _imie : string;
    public get imie() : string {
        return this._imie;
    }
    public set imie(v : string) {
        this._imie = v;
    }
    
    private _nazwisko : string;
    public get nazwisko() : string {
        return this._nazwisko;
    }
    public set nazwisko(v : string) {
        this._nazwisko = v;
    }
    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    


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