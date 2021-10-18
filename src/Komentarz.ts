class Komentarz{
private _tresc:string;
private _data:Date;
private _odpowiedzi:string;
private _nick:string;

get tresc():string{return this._tresc;}
get data():Date{return this._data;}
get nick():string{return this._nick;}

constructor(tresc:string,nick:string){
    this._tresc=tresc;
    this._nick=nick;
}

dodajOdpowiedz(odpowiedz:Komentarz):void{

}

pobierzOdpowiedz():Komentarz[]{

}

//https://www.codegrepper.com/code-examples/javascript/typescript+check+email+format
//https://stackoverflow.com/questions/46370725/how-to-do-email-validation-using-regular-expression-in-typescript
//https://stackoverflow.com/questions/16648679/regexp-in-typescript/16648834

}