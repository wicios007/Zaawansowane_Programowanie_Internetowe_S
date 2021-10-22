class Blog{
    private _id : number;
    private _nazwa : string;
    private _autor : Autor;
    private _artykuly : Artykul[];

    
    get nazwa(): string
    {
        return this._nazwa;
    }

    set nazwa(value : string)
    {
        this._nazwa = value; 
    }
    get autor(): Autor
    {
        return this._autor;
    }

    set autor(value : Autor)
    {
        this._autor = value; 
    }
    
    

    
    
    public constructor(nazwa : string, autor : Autor){
        this._nazwa = nazwa;
        this._autor = autor;

    }

    public dodajArtukul(artykul : Artykul) : void{
        this._artykuly.push(artykul);

    }

    public pobierzTytulyArtykulow() : string[]{
        let tytuly:string[]=this._artykuly.map(art=>art.tytul);
        return tytuly;

    }

    public pobierzArtykul(tytul : string){
        return this._artykuly;

    }

}