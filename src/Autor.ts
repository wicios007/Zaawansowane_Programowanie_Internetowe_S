class Autor{
private _id:number;
private _imie:string;
private _nazwisko:string;
private _email:string;

get imie():string{return this._imie;} 
get nazwisko():string{return this._nazwisko;}
get email():string{return this._email;}

constructor(imie:string,nazwisko:string){
    this._imie=imie;
    this._nazwisko=nazwisko;
}

private sprawdz(email:string) {
    const warun=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return warun.test(email);
    
}
}