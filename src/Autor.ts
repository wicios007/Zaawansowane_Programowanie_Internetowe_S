class Autor {
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    constructor(imie:string, nazwisko:string){
        this._imie = imie;
        this._nazwisko = nazwisko;     
    }

    get imie():string {
        return this._imie;
    }

    set imie(value:string) 
    {
        this._imie = imie;
    }

    get nazwisko():string 
    {
        return this._nazwisko;
    }
    set nazwisko(value:string) 
    {
        this._nazwisko = nazwisko;
    }
}