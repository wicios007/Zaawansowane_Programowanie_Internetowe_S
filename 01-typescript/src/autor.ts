type Email = string;

class Autor{

    private _id : number;
    private _imie : string;
    private _nazwisko : string;
    private _email : string;


    constructor(imie : string, nazwisko : string){
        this._imie = imie;
        this._nazwisko = nazwisko;
        
    }
}