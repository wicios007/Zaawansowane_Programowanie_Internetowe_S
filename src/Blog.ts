class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly: Artykuł[]

    get nazwa(): string
    {
        return this._nazwa
    }
    
    get autor(): Autor
    {
        return this._autor
    }

    constructor(nazwa: string,autor: Autor)
    {
        this._nazwa=nazwa
        this._autor=autor
    }

    public dodajArtykul(artykul: Artykuł): void
    {
        this._artykuly.push(artykul)   
    }

    public pobierzTytulyArtykulow(): string[]
    {
        let Tytuly: string[] = []
        this._artykuly.forEach(artykul => {Tytuly.push(artykul.tytul)});
        return Tytuly
    }


}