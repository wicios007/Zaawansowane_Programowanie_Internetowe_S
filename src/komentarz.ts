export class Komentarz{
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[];
    private _nick:string;

    get tresc():string { 
        return this._tresc }

    set tresc(val:string) { 
        this._tresc=val }

    get data():Date{
        return this._data;
    }
    set data(val:Date){
        this._data=val;
    }
    get nick():string{
        return this._nick;
    }
    set nick(val:string){
        this._nick=val;
    }

    constructor(tresc:string, nick:string){
        this._tresc=tresc;
        this._nick=nick;
    }

    public dodajOdpowiedz(odpowiedz: Komentarz):void{
        this._odpowiedzi.push(odpowiedz);
    }

}