class Komentarz{
    
    private _tresc : string;
    public get tresc() : string {
        return this._tresc;
    }
    public set tresc(v : string) {
        this._tresc = v;
    }
    
    private _data : Date;
    public get data() : Date {
        return this._data;
    }
    public set data(v : Date) {
        this._data = v;
    }
    
    private _odpowiedzi : Komentarz[];
    
    private _nick : string;
    public get nick() : string {
        return this._nick;
    }
    public set nick(v : string) {
        this._nick = v;
    }
    

    constructor(tresc : string, nick : string){
        this._tresc = tresc;
        this._nick = nick;
    }

    dodajOdpowiedzi(odpowiedz : Komentarz) : void{
 
    }

    pobierzOdpowiedzi() : Komentarz[] {
        var array : Komentarz[] = [];
        return array;
        
    } 
    
    
}