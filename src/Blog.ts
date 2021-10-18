class Blog{

    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];


    constructor(autor:Autor,nazwa:string){
        this._autor = autor;
        this._nazwa = nazwa;
        this._artykuly = [];
    }

    get nazwa():string { return this._nazwa;}
    set nazwa(value:string) {this._nazwa = value}

    get autor():Autor { return this._autor;}
    set autor(value:Autor) {this._autor = value}

    

    dodajArtykul(artykul:Artykul):void{
        this._artykuly.push(artykul);
    }

   
    pobierzTytulyArtykulow():string[]{
        const tytuly = [];
        this._artykuly.forEach(artykul => {
            tytuly.push(artykul.tytul);
        })
        return tytuly;
    }

    pobierzArtykul(tytul:string) {
        let artykul = null;
        this._artykuly.forEach(artykul => {
            if(artykul.tytul === tytul){
                artykul  = artykul;
            }
            return artykul;
        })
    }
}