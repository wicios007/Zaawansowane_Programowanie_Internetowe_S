class Autor {
    _id:number;
    _imie:string;
    _nazwisko:string;
    _email:string;

    constructor(_imie:string, _nazwisko:string){
        this._imie = imie;
        this._nazwisko = nazwisko;     
    }

    get imie():string {return this._imie;}
    set imie(value:string) {this._imie = imie;}

    get nazwisko():string {return this._nazwisko;}
    set nazwisko(value:string) {this._nazwisko = nazwisko;}

    get imie():string {return this._imie;}
    set imie(value:string) {this._imie = imie;}

}